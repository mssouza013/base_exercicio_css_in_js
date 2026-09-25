import styled from 'styled-components'
import { fadeInUp } from '../../styles'

export const VagaEstilizada = styled.li`
  background-color: ${(props) => props.theme.corFundo};
  color: ${(props) => props.theme.corTexto};
  border: 1px solid ${(props) => props.theme.corBorda};
  border-radius: ${(props) => props.theme.radius};
  padding: 24px;
  box-shadow: ${(props) => props.theme.sombra};
  transition: transform ${(props) => props.theme.transicao},
    box-shadow ${(props) => props.theme.transicao},
    border-color ${(props) => props.theme.transicao};
  animation: ${fadeInUp} 0.5s ease both;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 4px;
    background: linear-gradient(
      90deg,
      ${(props) => props.theme.corPrincipal},
      ${(props) => props.theme.corDestaque}
    );
    transform: scaleX(0);
    transform-origin: left;
    transition: transform ${(props) => props.theme.transicao};
  }

  ul li {
    color: ${(props) => props.theme.corTextoSuave};
    font-size: 14px;
    line-height: 1.9;
  }

  &:hover {
    transform: translateY(-8px);
    box-shadow: ${(props) => props.theme.sombraHover};
    border-color: ${(props) => props.theme.corPrincipal};
  }

  &:hover::before {
    transform: scaleX(1);
  }
`

export const VagaTitulo = styled.h3`
  font-weight: 700;
  font-size: 18px;
  color: ${(props) => props.theme.corPrincipal};
  margin-bottom: 16px;
`

export const VagaLink = styled.a`
  display: inline-block;
  background: linear-gradient(
    120deg,
    ${(props) => props.theme.corPrincipal},
    ${(props) => props.theme.corDestaque}
  );
  color: #ffffff;
  padding: 10px 18px;
  text-decoration: none;
  margin-top: 20px;
  font-family: ${(props) => props.theme.fontTitulo};
  font-weight: 600;
  font-size: 14px;
  border-radius: ${(props) => props.theme.radius};
  text-align: center;
  transition: transform ${(props) => props.theme.transicao},
    box-shadow ${(props) => props.theme.transicao};

  &:hover {
    transform: translateY(-2px);
    box-shadow: ${(props) => props.theme.sombraHover};
  }

  @media (max-width: 768px) {
    display: block;
  }
`
