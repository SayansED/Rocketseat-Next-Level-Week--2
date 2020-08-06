import React from 'react';
import ReactDOM from 'react-dom'; // arvore de elementos
import App from './App'; // importando app

// injeta um html "estrutura", dentro de um elemento especifico no html
ReactDOM.render(
  //usando app importado
  <React.StrictMode> 
    <App /> 
  </React.StrictMode>,
  document.getElementById('root') // procura no html um elemento com id root
);
