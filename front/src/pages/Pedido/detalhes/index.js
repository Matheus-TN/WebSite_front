import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './index.css';
 
export default class Pedido extends Component {
    state = {
        pedido: {},
    };
 
    componentDidMount() {
        const { id } = this.props.match.params;
 
        fetch(`http://localhost:3003/sistema/pedidos/${id}`)
            .then(pedido =>
                pedido.json().then(pedido => this.setState({ pedido }))
            )
            .catch(erro => this.setState({ erro }));
    }
 
    render() {
        const { pedido, index } = this.state;
 
        return (
            <div className="usuario-info">
                <h1>Produto: "{pedido.nomePedido}" </h1>
                <h1>Custo: R$ {pedido.custo} </h1>
                <h1>Venda: R$ {pedido.venda} </h1>
                <h1>Ingredientes:</h1>
                <h4 id="ingredientes-color">{pedido.ingredientes}</h4>
                <h1>quantidade disponível: {pedido.estoque} </h1>
                <br />
                <Link to={`/pedidos`}><button id="button">Voltar</button> </Link> 
            </div >
        );
    }
}
