import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
 
export default class Main extends Component {
    constructor(props) {
        super(props);
 
        this.state = {
            carrinho: [],
            erro: null
        };
    }
 
    componentDidMount() {
        fetch(`http://localhost:3003/sistema/carrinhos`)
            .then(carrinho =>
                carrinho.json().then(carrinho => this.setState({ carrinho }))
            )
            .catch(erro => this.setState({ erro }));
    }
 
    render() {
        const { carrinho } = this.state;
 
        return (
           <div className="container_usuario">
            <Link to={`/criarCarrinho`}> <button type="button" id="cadastrar">Novo Pedido</button> </Link>
            <h1 id="title">Tabela de Pedidos</h1>
            <br></br>
            <table class="table table-hover">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Produto</th>
                            <th scope="col">Quantidade</th>
                            <th scope="col">Cliente</th>
                        </tr>
                    </thead>
                    <tbody>
                        {carrinho.map((carrinho, index) => (
                            <tr>
                                <th scope="row">{carrinho.id}</th>
                                <td>{carrinho.nomePedido}</td>
                                <td>{carrinho.qtde}</td>
                                <td>{carrinho.nomeCliente}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        )
    }
}
