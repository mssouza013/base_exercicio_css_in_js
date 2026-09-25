import styled from 'styled-components'
import { fadeInUp } from '../../styles'

export const FormEstilizado = styled.form`
  display: grid;
  grid-template-columns: 1fr auto;
  background-color: ${(props) => props.theme.corFundo};
  padding: 32px;
  border-radius: ${(props) => props.theme.radius};
  margin-top: 40px;
  box-shadow: ${(props) => props.theme.sombra};
  border: 1px solid ${(props) => props.theme.corBorda};
  animation: ${fadeInUp} 0.6s ease both;
`

export const Campo = styled.input`
  padding: 0 16px;
  height: 44px;
  font-size: 16px;
  color: ${(props) => props.theme.corTexto};
  background-color: ${(props) => props.theme.corSecundaria};
  border: 2px solid ${(props) => props.theme.corBorda};
  border-radius: ${(props) => props.theme.radius};
  outline: none;
  transition: border-color ${(props) => props.theme.transicao},
    box-shadow ${(props) => props.theme.transicao};

  &::placeholder {
    color: ${(props) => props.theme.corTextoSuave};
  }

  &:focus {
    border-color: ${(props) => props.theme.corPrincipal};
    box-shadow: 0 0 0 4px rgba(124, 58, 237, 0.15);
  }
`

export const BotaoPesquisar = styled.button`
  background: linear-gradient(
    120deg,
    ${(props) => props.theme.corPrincipal},
    ${(props) => props.theme.corDestaque}
  );
  border: none;
  height: 44px;
  padding: 0 24px;
  font-family: ${(props) => props.theme.fontTitulo};
  font-size: 16px;
  font-weight: 600;
  color: #ffffff;
  margin-left: 12px;
  border-radius: ${(props) => props.theme.radius};
  cursor: pointer;
  transition: transform ${(props) => props.theme.transicao},
    box-shadow ${(props) => props.theme.transicao};

  &:hover {
    transform: translateY(-2px);
    box-shadow: ${(props) => props.theme.sombraHover};
  }

  &:active {
    transform: translateY(0);
  }
`
