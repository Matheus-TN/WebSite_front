import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { Link } from "react-router-dom";
import './index.css';
 
class DeletarUsuario extends Component {
    constructor(props) {
        super(props);
 
        this.state = {
            usuario: {},
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
                <fieldset>
                <div id="deletar">    
                    <legend><h2>Deletar Usuário</h2></legend>
                    <div className="usuario-delete">
                        <label htmlFor="nome">{this.state.usuario.nome} </label>
                        <h6>Tem certeza que deseja deletar este registro?</h6>
                        <div id="deletar-buttons">
                        <button id="deletar-yes" onClick={this.handleClick}>Confirmar</button>
                        <Link to={`/usuarios`}><button id="deletar-voltar">Cancelar</button></Link>
                        </div>
                    </div>
                </div>
                </fieldset>
            );
        }
    }
 
    handleClick = event => {
        const { id } = this.props.match.params;
 
        fetch(`http://localhost:3003/sistema/usuarios/${id}`, {
            method: "delete"
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
 
export default DeletarUsuario;
