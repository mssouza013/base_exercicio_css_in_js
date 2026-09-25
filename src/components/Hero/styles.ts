import styled, { keyframes } from 'styled-components'
import { fadeInUp } from '../../styles'

const zoomLento = keyframes`
  from {
    transform: scale(1);
  }
  to {
    transform: scale(1.12);
  }
`

export const HeroEstilizado = styled.section`
  height: 360px;
  width: 100%;
  position: relative;
  display: flex;
  align-items: center;
  overflow: hidden;

  &::after {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    content: '';
    background-image: url('https://cdn.pixabay.com/photo/2018/08/10/15/45/woman-3597101_1280.jpg');
    background-size: cover;
    background-position: center;
    animation: ${zoomLento} 12s ease-in-out infinite alternate;
    z-index: 0;
  }

  &::before {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    content: '';
    background: linear-gradient(
      120deg,
      ${(props) => props.theme.corPrincipal},
      ${(props) => props.theme.corDestaque}
    );
    opacity: 0.78;
    z-index: 1;
  }

  > div {
    position: relative;
    z-index: 2;
    color: #fdf4ff;
  }

  @media (max-width: 768px) {
    height: auto;
    padding: 32px 0;
  }
`

export const HeroTitulo = styled.h2`
  font-family: ${(props) => props.theme.fontTitulo};
  font-size: 48px;
  font-weight: 800;
  line-height: 1.15;
  max-width: 720px;
  text-shadow: 0 2px 12px rgba(46, 16, 101, 0.35);
  animation: ${fadeInUp} 0.8s ease both;

  @media (max-width: 768px) {
    font-size: 32px;
  }
`
