import Video from "./Video";
import Header from "./Header";
import Buscar from "./Buscar";
import { videos } from "./data/Videos";
import { VideoContext } from "./VideioContext";
import ListVideo from "./ListVideos";

function App() {
  const [login, setLogin] = React.useState();
  const [senha, setSenha] = React.useState();
  const [logar, setLogar] = React.useState();
  
  function Logar(){
    if(login == 'lucas' && senha == 'admin'){
      setLogar(true);
    }
    else{
      alert("Usuario Inválido");
    }
  }
  function Deslogar(){
    setLogar(false);
    setSenha();
  }

  return (
    !logar?
    <div className="d-flex justify-content-center align-items-center w-100 h-100" 
        style={{backgroundImage: "url(/images/montain.jpg)"}}>
      <div style={{width:"400px",
                  height:"600px"}}
                  className='d-flex justify-content-center align-items-center flex-column'>
        <p>Login</p>
        <div><input type="text" onChange={(e) => setLogin(e.target.value)}/></div>
        <p style={{marginTop: "20px"}}>Senha</p>
        <div ><input type="text" onChange={(e) => setSenha(e.target.value)}/></div>
        <button class="btn btn-secondary" style={{marginTop: "20px"}} onClick={Logar}>Logar</button>  
        <p>{logar}</p>
      </div>  
    </div>
    :
    <div className="container">
      <p>{login}</p>
      <VideoContext.Provider value={videos}>
        <Header></Header>
        <Buscar></Buscar>
        <ListVideo></ListVideo>
      </VideoContext.Provider>
      <button class="btn btn-secondary" onClick={Deslogar}>Deslogar</button>
    </div>
  );
}

export default App;
