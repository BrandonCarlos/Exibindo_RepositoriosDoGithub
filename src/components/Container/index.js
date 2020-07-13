import styled from 'styled-components';

const Container = styled.div`
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

export default Container;
