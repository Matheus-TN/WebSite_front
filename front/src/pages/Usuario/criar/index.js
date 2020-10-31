import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import './index.css';
 
class CriarUsuario extends Component {
    constructor(props) {
        super(props);
 
        this.state = {
            usuario: {
                nomeCliente: "",
                endereço: "",
                email: "",
                telefone: ""
            },
            erro: null,
            redirect: false
        };
    }
 
    exibeErro() {
        const { erro } = this.state;
 
        if (erro) {
            return (
                <div className="alert alert-danger" role="alert">
                    Erro de conexão com o servidor
                </div>
            );
        }
    }
 
    render() {
        const { redirect } = this.state;
        if (redirect) {
            return <Redirect to="/usuarios" />;
        } else {
            return (
            <div id="formulario">   
                <form onSubmit={this.handleSubmit}>
                    <fieldset>
                        <legend id="title"><h1>Ficha de cadastro</h1></legend>
                        <div className="usuario-insert-left">
                            <label htmlFor="nomeCliente"><h3>Nome</h3></label>
                            <br />
                            <input
                                type="text"
                                id="nomeCliente"
                                name="nomeCliente"
                                placeholder="Nome"
                                minLength="1"
                                maxLength="100"
                                required
                                value={this.state.usuario.nomeCliente}
                                onChange={this.handleInputChange}
                            />
                        </div>
                
                        <div className="usuario-insert-right">
                            <label htmlFor="email"><h3>email</h3></label>
                            <br />
                            <input
                                type="text"
                                id="email"
                                name="email"
                                placeholder="EX: matheus@gmai.com"
                                minLength="1"
                                maxLength="100"
                                required
                                value={this.state.usuario.email}
                                onChange={this.handleInputChange}
                            />
                        </div>
                        <div className="usuario-insert-left">
                            <label htmlFor="endereço"><h3>Endereço</h3></label>
                            <br />
                            <input
                                type="text"
                                id="endereço"
                                name="endereço"
                                placeholder="EX: Rua Colômbia n°123"
                                minLength="1"
                                maxLength="100"
                                required
                                value={this.state.usuario.endereço}
                                onChange={this.handleInputChange}
                            />
                        </div>
                        <div className="usuario-insert-right">
                            <label htmlFor="telefone"><h3>telefone</h3></label>
                            <br />
                            <input
                                type="text"
                                id="telefone"
                                name="telefone"
                                placeholder="(xx)9xxxxxxxxx"
                                required
                                value={this.state.usuario.telefone}
                                onChange={this.handleInputChange}
                            />
                        </div>
                        <div id="cadastrar2"><button type="submit" id="cadastrar2-button">Cadastrar</button></div> 
                    </fieldset>
                </form>
                 
            </div>
            
            );
        }
    }
 
    handleInputChange = event => {
        const target = event.target;
        const name = target.name;
        const value = target.value;
 
        this.setState(prevState => ({
            usuario: { ...prevState.usuario, [name]: value }
        }));
        console.log(value);
    };
 
    handleSubmit = event => {
        fetch("http://localhost:3003/sistema/usuarios", {
            method: "post",
            body: JSON.stringify(this.state.usuario),
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(data => {
                if (data.ok) {
                    this.setState({ redirect: true });
                } else {
                    data.json().then(data => {
                        if (data.error) {
                            this.setState({ erro: data.error });
                        }
                    });
                }
            })
            .catch(erro => this.setState({ erro: erro }));
 
        event.preventDefault();
    };
}
 
export default CriarUsuario;
