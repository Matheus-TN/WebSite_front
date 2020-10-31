import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import './index.css';
 
class EditarUsuario extends Component {
    constructor(props) {
        super(props);
 
        this.state = {
            usuario: {
                nome: "",
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
 
    componentDidMount() {
        const { id } = this.props.match.params;
 
        fetch(`http://localhost:3003/sistema/usuarios/${id}`)
            .then(data => {
                data.json().then(data => {
                    if (data.error) {
                        this.setState({ erro: data.error });
                    } else {
                        this.setState({ usuario: data });
                    }
                });
            })
            .catch(erro => this.setState({ erro: erro }));
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
                        <legend id="title"><h1>Atualizar ficha de Usuário</h1></legend>
                        <div className="usuario-update-left">
                            <label htmlFor="nomeCliente">Nome </label>
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
                        
                        <div className="usuario-update-right">
                            <label htmlFor="email">email</label>
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
                        
                        <div className="usuario-update-left">
                            <label htmlFor="endereço">Endereço</label>
                            <br />
                            <input
                                type="text"
                                id="endereço"
                                name="endereço"
                                placeholder="EX: Rua Colômbia n°123"
                                min="1"
                                max="100"
                                required
                                value={this.state.usuario.endereço}
                                onChange={this.handleInputChange}
                            />
                        </div>
                    
                        <div className="usuario-update-right">
                            <label htmlFor="telefone">Telefone</label>
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
                        
                        <div id="cadastrar2"><button type="submit" id="cadastrar2-button">Atualizar</button></div>

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
    };
 
    handleSubmit = event => {
        const { id } = this.state.usuario;
 
        fetch(`http://localhost:3003/sistema/usuarios/${id}`, {
            method: "put",
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
 
export default EditarUsuario;
