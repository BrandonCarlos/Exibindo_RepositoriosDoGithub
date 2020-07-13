import styled, { keyframes, css } from 'styled-components';

// Toda nossa ESTILIZAÇÃO será no formato de JAVASCRIPT
// export const Title = styled.h1`
/*
font-size: 24px;
color: ${(props) =>
  props.error // Se a PROPRIEDADE FOR TRUE = RED, se fpr FALSE = roxo
    ? 'red'
    : '#7159c1'}; /*Verificando se deu ERRO ou não, se deu ERRO fica de uma cor
se NÂO DEU ERRO ficará de outra COR
{props} -> FUNÇÃO RECEBE TODAS AS PROPRIEDADES DO ELEMENTO
No caso estamos falando da PROPRIEDADE "ERROR" */
/* font-family: Arial, Helvetica, sans-serif;

small {
  font-size: 14px;
  color: #3333;
}
*/
// color: #fff;
// `;

export const Container = styled.div`
  max-width: 700px;
  background: #fff;
  border-radius: 4px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  padding: 30px;
  margin: 80px auto; /*Encima e em baixo 80px, e dos lados CENTRALIZADO */

  h1 {
    font-size: 20px;
    display: flex; /*Mudou que o texto ficou na mesma linha da imagem do Github */
    flex-direction: row;
    align-items: center; /*A imagem do Github desceu um pouco, e ficou ALINHADO com o TEXTO */

    /*Nosso ICONE é um SVG */
    svg {
      margin-right: 10px; /*Para distanciar o TEXTO do ICONE */
    }
  }
`;

export const Form = styled.form`
  margin-top: 30px;
  display: flex;
  flex-direction: row; /*Para garantir que o INPUT e o BOTÃO sempre fiquem um ao LADO do OUTRO
  e não um enbaixo do outro INDEPENDENTE do TAMANHO  */

  input {
    flex: 1; /*Isto vai garantir com que ele OCUPE TODO O ESPAÇO POSSIVEL */
    border: 1px solid #eee;
    padding: 10px 15px;
    border-radius: 4px;
    font-size: 16px;
  }
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);/*Meu ITEM começa com um TRANSFORM DE 0 GRAUS DE ROTAÇÃO  */

  }

  to {
    transform: rotate(360deg);/*E ele deve chegar no final da ANIMAÇÃO em uma ROTAÇÃO TOTAL DE 360° GRAUS */
  }

`;

// styles.button.attrs({ type: 'submit' })
// Estamos falando que o botão será do tipo SUBMIT
export const SubmitButton = styled.button.attrs((props) => ({
  type: 'submit',
  disabled: props.loading, // De acordo com o LOADING se for TRUE será de uma COR
  // se for FALSE será de outra COR
}))`
  background: #7159c1;
  border: 0;
  padding: 10px 15px;
  margin-left: 10px;
  border-radius: 4px;
  /*As PROPRIEDADES abaixo vão garantir que o sinal de + fique bem CENTRALIZADO na CAIXINHA */
  display: flex;
  justify-content: center;
  align-items: center;

  /*Vou por o "&"para me REFERIR AO BOTÃO,
  porque vamos deixar o botão um pouco invisivel
  quando o usuario clicar no botão +*/
  &[disabled] {
    /*Toda estilização que eu por aqui só irá funcionar
    quando o BOTÃO ESTIVER DISABLED como TRUE */
    cursor: not-allowed; /*Sinal de que o BOTÃO NÃO ESTÁ PERMITIDO PARA FAZER AQUELE AÇÃO DE CLICAR */
    opacity: 0.6;
  }

  /*Vamos adicionar uma FUNÇÃO aqui pegando minhas PROPRIEDADES
  se minha PROPRIEDADE "LOADING" for TRUE */
  ${(props) =>
    props.loading &&
    css`
      /*Usamos o "css" para quando queremos adicionar um CONJUNTO de "css" a um ELEMENTO BASEADO EM ALGUMA PROPRIEDADE,
      ALGUMA INFORMAÇÃO QUE VEM DE FORA DELE   */
      svg {
        animation: ${rotate} 2s linear infinite;
      }
    `}
`;

export const List = styled.ul`
  /*Agora vamos estilizar essa LISTA */
  list-style: none;
  margin-top: 30px;

  /*Para cada <li></li> ... */
  li {
    padding: 15px 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between; /*Aki irá jogar o titulo do REPOSITÓRIO para ESQUERDA,
    e o "DETALHES" para a DIREITA */
    align-items: center; /*Para FORÇAR que o TITULO e o "DETALHES" se eles tiverem
    TAMANHOS DIFERENTES FIQUEM NO MESMO ALINHAMENTO VERTICAL */

    /*Vamos adicionar uma BORDINHA(cinza) ENTRE CADA ITEM */
    /*& + li SIGNIFICA to pegando todos <li></li> e pegando qualquer <li> que seja seguido por um <li> anterior    */
    /*Ou seja irá APLICAR ESTILIZAÇÃO EM TODOS <li> MENOS NO PRIMEIRO */
    & + li {
      border-top: 1px solid #eee;
    }

    /*Agora vamos pegar o <a></a> que é o "DETALHES" */
    a {
      color: #7159c1;
      text-decoration: none;
    }
  }
`;
