import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
 
export default class Main extends Component {
    constructor(props) {
        super(props);
 
        this.state = {
            pedido: [],
            erro: null
        };
    }
 
    componentDidMount() {
        fetch(`http://localhost:3003/sistema/pedidos`)
            .then(pedido =>
                pedido.json().then(pedido => this.setState({ pedido }))
            )
            .catch(erro => this.setState({ erro }));
    }
 
    render() {
        const { pedido } = this.state;
 
        return (
            <div className="tabela-produtos">
            <h1 id="title">Tabela de Produtos</h1>
            <br></br>
                    {pedido.map((pedido, index) => (
                        <div id="produtos">
                            <div>
                            <h5 id="produto">{pedido.nomePedido}</h5>
                            <h5 id="produto">{pedido.venda.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</h5>
                            <Link to={`/pedidos/${pedido.id}`}> <button type="button" id="produto-detalhe">Detalhes</button></Link>
                            </div>
                        </div>
                    ))}
            </div>
        )
    }
}
