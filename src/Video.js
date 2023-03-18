import React from "react";

export default function Video({video}){
    return (
    <div className="row py-1">
        <div className="col-3">
            <img src={video.picture} className="rounded"/>
        </div>
        <div className="col-8">
            <div className="my-2">
                <h3>{video.nome}</h3>
                <span>{video.descricao}</span>
            </div>
            <div>
                <button className="btn btn-sm btn-outline-primary me-1">Editar ✏️</button>
                <button className="btn btn-sm btn-outline-secondary me-1">Estatisticas 📊</button>
                <button className="btn btn-sm btn-outline-success me-1">Comentarios 💬</button>
                <button className="btn btn-sm btn-outline-warning me-1">Link</button>
                <button className="btn btn-sm btn-outline-danger">🗑️</button>
            </div>
        </div>
        <div className="col-1 d-flex align-items-center">
            <button className="btn btn-lg">❤️</button>
        </div>
    </div>)
}