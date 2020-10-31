import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
 
import MainUsuario from './pages/Usuario/main';
import DetalhesUsuario from './pages/Usuario/detalhes';
import CriarUsuario from './pages/Usuario/criar';
import EditarUsuario from './pages/Usuario/editar';
import DeletarUsuario from './pages/Usuario/deletar';
import MainPedido from './pages/Pedido/main';
import DetalhesPedido from './pages/Pedido/detalhes';
import MainCarrinho from './pages/Carrinho/main';
import CriarCarrinho from './pages/Carrinho/criar';
 
const Routes = () => (
 
    <BrowserRouter>
        <Switch>
            <Route exact path="/usuarios" component={MainUsuario} />
            <Route path="/usuarios/:id" component={DetalhesUsuario} />
            <Route path="/criarUsuario" component={CriarUsuario} />
            <Route path="/editarUsuario/:id" component={EditarUsuario} />
            <Route path="/deletarUsuario/:id" component={DeletarUsuario} />
            <Route exact path="/pedidos" component={MainPedido} />
            <Route path="/pedidos/:id" component={DetalhesPedido} />
            <Route exact path="/carrinhos" component={MainCarrinho} />
            <Route path="/criarCarrinho" component={CriarCarrinho} />
        </Switch>
    </BrowserRouter>
)
            
export default Routes;
