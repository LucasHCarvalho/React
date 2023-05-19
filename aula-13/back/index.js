const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://lucas:btJMF4bRMKjX0I5T@cluster0.fpjirw6.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

const db = client.db('Pizzaria');

async function insere1elemento(){
    const pizzas = db.collection("pizzas");
    const pizza = { nome: "4 Queijos", qtdPedacos : "8" };
    const result = await pizzas.insertOne(pizza);
    console.log(`A pizza inserida foi a: ${result.insertedId}`);
}

async function insereNelemento(){
    const pizzas = db.collection("pizzas");
    const documents = [
        { nome: "3 Queijos", qtdPedacos : "8" },
        { nome: "Baiana", qtdPedacos : "8" },
        { nome: "Frango Catupiri", qtdPedacos : "8" },
        { nome: "Calabresa", qtdPedacos : "8" },
        { nome: "Hawaiana", qtdPedacos : "8" },
        { nome: "Strognoff", qtdPedacos : "8" },
    ];
    const result = await pizzas.insertMany(documents);
    let ids = result.insertedIds;
    for(let id of Object.values(ids)){
        console.log(`A pizza inserida foi a: ${id}`);
    }
}

async function selecionarValores(){
    const pizzas = await db.collection('pizzas').find();
    for await (let pizza of pizzas){
        console.log(pizza);
    }
}

async function editarValor(){
    const pizzas = db.collection("pizzas");
    const filtro = { nome : "4 Queijos" };
    const update = { "$set": { qtdPedacos : 12 }};
    await pizzas.updateOne(filtro, update);
    selecionarValores();
}

async function deleteValor(){
    const pizzas = db.collection("pizzas");
    const pizza = await pizzas.findOne();
    pizzas.deleteOne(pizza);
    //pizzas.findOneAndDelete({ nome: "4 Queijos" })
    selecionarValores();
}

insere1elemento();