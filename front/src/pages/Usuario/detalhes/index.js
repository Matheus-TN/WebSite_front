import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './index.css';
 
export default class Usuario extends Component {
    state = {
        usuario: {},
    };
 
    componentDidMount() {
        const { id } = this.props.match.params;
 
        fetch(`http://localhost:3003/sistema/usuarios/${id}`)
            .then(usuario =>
                usuario.json().then(usuario => this.setState({ usuario }))
            )
            .catch(erro => this.setState({ erro }));
    }
 
    render() {
        const { usuario, index } = this.state;
 
        return (
            <div className="usuario-info">
                <h1>Nome: "{usuario.nomeCliente}"</h1>
                <h1>Endereço: {usuario.endereço} </h1>
                <h1>email: {usuario.email} </h1>
                <h1>telefone: {usuario.telefone} </h1>
                <br />
                <Link to={`/usuarios`}><button id="button">Voltar</button> </Link> 
            </div >
        );
    }
}
