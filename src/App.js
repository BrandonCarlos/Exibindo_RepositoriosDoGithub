// App.js é o COMPONENTE PADRÃO
// COMPONENTE RAIZ DA APLICAÇÃO

import React from 'react';
// Vamos IMPORTAR AS ROTAS
import Routes from './routes';
import GlobalStyle from './styles/global';
// Abaixo vou utilizar <> FRAGMENT
// Que serve apenas para ENCAPSULAR 2 OU MAIS ELEMENTOS
function App() {
  return (
    <>
      <Routes />,
      <GlobalStyle />,
    </>
  );
}

export default App;
