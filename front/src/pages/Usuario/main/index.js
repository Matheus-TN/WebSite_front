import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
 
export default class Main extends Component {
    constructor(props) {
        super(props);
 
        this.state = {
            usuario: [],
            erro: null
        };
    }
 
    componentDidMount() {
        fetch(`http://localhost:3003/sistema/usuarios`)
            .then(usuario =>
                usuario.json().then(usuario => this.setState({ usuario }))
            )
            .catch(erro => this.setState({ erro }));
    }
 
    render() {
        const { usuario } = this.state;
 
        return (
            <div className="container_usuario">
                <Link to={`/criarUsuario`}> <button type="button" id="cadastrar">Cadastrar</button> </Link>
                <h1 id="title">Tabela de Usuários</h1>
                <br></br>
                <table class="table table-hover">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Nome</th>
                            <th scope="col">Telefone</th>
                            <th scope="col">Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {usuario.map((usuario, index) => (
                            <tr>
                                <th scope="row">{usuario.id}</th>
                                <td>{usuario.nomeCliente}</td>
                                <td>{usuario.telefone}</td>
                                <td> <Link to={`/usuarios/${usuario.id}`}> <button type="button" class="blue">Detalhes</button> </Link> </td>
                                <td> <Link to={`/editarUsuario/${usuario.id}`}> <button type="button" class="yellow">Atualizar</button> </Link></td>
                                <td> <Link to={`/deletarUsuario/${usuario.id}`}> <button type="button" class="red">Excluir</button> </Link></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        )
    }
}
