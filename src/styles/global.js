//
import { createGlobalStyle } from 'styled-components';

// Exportando por default a função 'createGlobalStyle'

export default createGlobalStyle`
  /*Todo código que botarmos aki será compartilhado com toda aplicação
  CSS GLOBAL*/
  *{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;/*PROPRIEDADE DO CSS que faz com que a MARGIN, PADDING,
    e todos os outros ESPAÇAMENTOS eles sejam sempre SOMADOS com a LARGURA do ELEMENTO
      */
  }

  html, body, #root {
    min-height: 100%/*Setar uma altura minima de 100% */
  }

  body {
    background: #7159c1;
    -webkit-font-smoothing: antialiased !important; /* Colocando !important, porque as vezes o BROWSER tenta tirar essa PROPRIEDADE,
    ela vai deixar nossas FONTS bem mais DEFINIDAS */
  }

  body, input, button {
    color: #222;
    font-size: 14px;
    font-family: Arial, Helvetica, sans-serif;
  }

  button {
    cursor: pointer;
  }

`;
