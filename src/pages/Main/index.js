/* eslint-disable react/state-in-constructor */
// MAIN é um COMPONENTE FUNCIONAL, vamos transforma-lo em um COMPONENTE DE CLASSE

import React, { Component } from 'react';
// Precisaremos de umas IMAGENS PERSONALIZADAS então iremos importar
// dentro de "fa" terá todos os ICONES do font alson
import { FaGithubAlt, FaPlus, FaSpinner } from 'react-icons/fa'; // Nome do PACOTE que agente quer UTILIZAR
// Vamos IMPORTAR A API
import { Link } from 'react-router-dom';
import api from '../../services/api';

import Container from '../../components/Container';

// Vamos importar o "Title" de dentro dos nossos ESTILOS
import { /* Container, */ Form, SubmitButton, List } from './styles'; // Nos IMPORTADOS estão o Container e Form
// Iremos ESTILIZALOS DEPOIS

export default class Main extends Component {
  // o Erro é que eu tava colocando Component(), tem que ser sem os PARÊNTESES
  // Todo o RETURN iremos jogar dentro de um RENDER()
  // Agora sim podemos ter STATE

  state = {
    // Vamos armazenar aki dentro do STATE, é os dados do INPUT DO USUÁRIO conforme ele for PREENCHENDO
    newRepo: '', // Aki dentro o usuário irá guardar as informações digitadas no INPUT
    repositories: [],
    loading: false,
  };

  // Carregar os dados do localStorage (Manter os REPOSITÓRIOS mesmo dando REFRESH na página)
  componentDidMount() {
    const repositories = localStorage.getItem('repositories');

    // Se eu tiver algum repositório no localStorage ...
    if (repositories) {
      this.setState({ repositories: JSON.parse(repositories) });
    }
  }

  // Salvar os dados do localStorage
  // "prevState" = STATE anterior antes de ele ser ATUALIZADO
  // Fazendo uma COMPARAÇÃO pra ver se o STATE de REPOSITÓRIOS MUDOU DO MEU STATE ATUAL DE REPOSITÓRIOS
  componentDidUpdate(_, prevState) {
    const { repositories } = this.state;

    if (prevState.repositories != repositories) {
      localStorage.setItem('repositories', JSON.stringify(repositories));
    }
  }

  // Fora dos RENDER colocamos nossos MÉTODOS
  // handleInputChange recebe nosso e (evento)
  handleInputChange = (e) => {
    this.setState({ newRepo: e.target.value }); // Aki estou dizendo que o VALOR DO INPUT irá ser mandado para o "newRepo"
    // Significa de "target" = ALVO
  };

  // Vamos lá fazer o MÉTODO = handleSubmit
  handleSubmit = async (e) => {
    e.preventDefault(); // Para evitar que o FORMULÁRIO FAÇA O REFRESH NA PÁGINA
    // console.log(this.state.newRepo); // Dará para ver os dados digitados no FORMULÁRIO dentro do console.log
    // Vamos CONSUMIR UMA API
    // Com essa API aki dentro já consigo fazer minha CHAMADA
    // Esse /repos/rocketseat/unform Vai vir lá do STATE
    // Então vamos DESESTRUTURAR o "newRepo"
    this.setState({ loading: true });

    const { newRepo, repositories } = this.state;

    const response = await api.get(`/repos/${newRepo}`);

    // Vou guardar algumas INFORMAÇÔES dentro do meu STATE
    const data = {
      name: response.data.full_name,
    };

    this.setState({
      repositories: [...repositories, data], // Adicionando tudo que tem dentro do "repositories"
      // Toda vez que o usuário adicionar um NOVO REPOSITÓRIO, ele vai manter a LISTAGEM ATUAL ...repositories
      // "data" adicionando NOVA INFORMAÇÃO (NOVO REPOSITÓRIO), ou seja mantem os REPOSITORIOS e adiciona
      // o NOVO REPOSITORIO AINDA
      newRepo: '', // Quando o USUARIO ADICIONAR UM NOVO REPOSITÓRIO, e clicar em +, irá limpar o INPUT
      // E quando terminar de trazer o REPOSITÓRIO QUE O USUÁRIO SOLICITOU
      loading: false,
    });
  };

  render() {
    // Fazendo DESESTRUTURAÇÃO do "newRepo"
    // Iremos PERCORRER OS REPOSITÓRIOS Na tag "List"
    // INVEZ DE href="" colocamos "to"
    const { newRepo, repositories, loading } = this.state; // Pegando REPOSITORIES para PERCORRE-LO

    return (
      // <Container></Container> servirá para fazer uns ALINHAMENTOS
      // no lugar do <a></a> IREMOS USAR O <Link></Link>
      <Container>
        <h1>
          <FaGithubAlt />
          Repositórios
        </h1>

        <Form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="Adicionar repositório"
            value={newRepo}
            onChange={this.handleInputChange}
          />

          <SubmitButton loading={loading}>
            {loading ? (
              <FaSpinner color="#FFF" size={14} />
            ) : (
                <FaPlus color="#fff" size={14} />
              )}
          </SubmitButton>
        </Form>

        <List>
          {repositories.map((repository) => (
            <li key={repository.name}>
              <span>{repository.name}</span>
              <Link to={`/repository/${encodeURIComponent(repository.name)}`}>
                Detalhes
              </Link>
            </li>
          ))}
        </List>
      </Container>
    ); // E trocamos <h1></h1> por <Title></Title>
  }
}
