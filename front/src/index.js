import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
 
ReactDOM.render(
  <React.StrictMode>
    
    <div className="Container">
                <div id="header">
                  <h1>Seja Bem-Vindo ao Quebrada Burguers</h1>
                  <br></br>
                  <h2>para continuar</h2>
                  <h2>clique em um dos botões abaixo</h2>
                </div>
                <div id="select">
                  <a href="http://localhost:3000/pedidos"><button className="select_button">Produtos</button></a>
                  <a href="http://localhost:3000/carrinhos"><button className="select_button">Pedidos</button></a>
                  <a href="http://localhost:3000/usuarios"><button className="select_button">Clientes</button></a>
                </div>
    </div>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
 
serviceWorker.unregister();
