import React from 'react';
// 'react-router-dom importa varios tipos de ROTEADORES'
// 'BrowserRouter' é quem permite fazer a navegação de uma página a outra, rotas com /
import { BrowserRouter, Switch, Route } from 'react-router-dom';
// Vamos importar nossos COMPONENTES DE PÁGINAS que é a MAIN E A REPOSITORY
import Main from './pages/Main'; // Importando o COMPONENTE DE PÁGINA MAIN
import Repository from './pages/Repository'; // Importando o COMPONENTE DE PÁGINA REPOSITORY
// Agora vamos criar UMA ROTA para cada um desses DOIS COMPONENTES(Main, Repository)

export default function Routes() {
  return (
    // Vamos retornar as nossas ROTAS
    // Dentro do REACT tudo é COMPONENTE
    // Cada ROTA da nossa APLICAÇÃO vai ser um COMPONENTE

    // O BrowserRouter fica por volta de todos os outros COMPONENTES que agente vai utilizar as ROTAS
    // Switch garante que apenas UMA ROTA seja CHAMADA por MOMENTO
    // Cada "Route" representa UMA PÁGINA
    // Para usar essa SYNTAX DE JSX(HTML) precisamos IMPORTAR O REACT
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Main} />

        <Route path="/repository/:repository" component={Repository} />
      </Switch>
    </BrowserRouter>
    // O Browser escuta /teste <- EXEMPLO, é já procura o primeiro que tem BARRA /
    // Ou seja toda hora irá achar o link MAIN
    // Vamos por o COMPONENTE "axact" pra que quando for apenas / seja o MAIN
    // e se for /repository seja outro LINK
    // path="/repository/:repository"  <- AKI estou dizendo que vou receber um PARÂMETRO chamado "REPOSITORY"
  );
}
