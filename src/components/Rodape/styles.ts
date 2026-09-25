import styled from 'styled-components'
import { fadeInUp } from '../../styles'

export const RodapeEstilizado = styled.footer`
  background-color: ${(props) => props.theme.corFundo};
  border-top: 1px solid ${(props) => props.theme.corBorda};
  box-shadow: ${(props) => props.theme.sombra};
  padding: 40px 0;
  margin-top: 64px;
  animation: ${fadeInUp} 0.6s ease both;
`

export const ConteudoRodape = styled.div`
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  text-align: center;

  @media (max-width: 1024px) {
    max-width: 80%;
  }
`

export const MarcaRodape = styled.h3`
  font-family: ${(props) => props.theme.fontTitulo};
  font-size: 24px;
  font-weight: 800;
  letter-spacing: -0.5px;
  background: linear-gradient(
    90deg,
    ${(props) => props.theme.corPrincipal},
    ${(props) => props.theme.corDestaque}
  );
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
`

export const Tagline = styled.p`
  color: ${(props) => props.theme.corTextoSuave};
  font-size: 15px;
  max-width: 420px;
  line-height: 1.6;
`

export const RedesSociais = styled.ul`
  display: flex;
  gap: 24px;

  li a {
    color: ${(props) => props.theme.corTextoSuave};
    text-decoration: none;
    font-size: 14px;
    font-weight: 500;
    position: relative;
    transition: color ${(props) => props.theme.transicao};
  }

  li a::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -4px;
    width: 100%;
    height: 2px;
    background: linear-gradient(
      90deg,
      ${(props) => props.theme.corPrincipal},
      ${(props) => props.theme.corDestaque}
    );
    transform: scaleX(0);
    transform-origin: left;
    transition: transform ${(props) => props.theme.transicao};
  }

  li a:hover {
    color: ${(props) => props.theme.corPrincipal};
  }

  li a:hover::after {
    transform: scaleX(1);
  }
`

export const Direitos = styled.small`
  color: ${(props) => props.theme.corTextoSuave};
  font-size: 13px;
  margin-top: 8px;
`
