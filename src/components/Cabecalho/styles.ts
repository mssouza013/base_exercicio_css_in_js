import styled from 'styled-components'
import { fadeInUp } from '../../styles'

export const CabecalhoEstilizado = styled.header`
  background-color: ${(props) => props.theme.corFundo};
  text-align: center;
  padding: 28px 0;
  border-bottom: 1px solid ${(props) => props.theme.corBorda};
  box-shadow: ${(props) => props.theme.sombra};
  animation: ${fadeInUp} 0.6s ease both;

  h1 {
    display: inline-block;
    font-size: 32px;
    font-weight: 800;
    letter-spacing: -0.5px;
    background: linear-gradient(
      90deg,
      ${(props) => props.theme.corPrincipal},
      ${(props) => props.theme.corDestaque},
      ${(props) => props.theme.corPrincipal}
    );
    background-size: 200% auto;
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    transition: transform ${(props) => props.theme.transicao};
  }

  h1:hover {
    transform: scale(1.05);
  }
`
