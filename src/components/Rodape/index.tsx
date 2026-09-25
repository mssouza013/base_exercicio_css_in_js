import {
  RodapeEstilizado,
  ConteudoRodape,
  MarcaRodape,
  Tagline,
  RedesSociais,
  Direitos
} from './styles'

const Rodape = () => (
  <RodapeEstilizado>
    <ConteudoRodape>
      <MarcaRodape>EBAC Jobs</MarcaRodape>
      <Tagline>
        Conectando talentos às melhores oportunidades em tecnologia, design e
        artes visuais.
      </Tagline>
      <RedesSociais>
        <li>
          <a href="#">LinkedIn</a>
        </li>
        <li>
          <a href="#">GitHub</a>
        </li>
        <li>
          <a href="#">Instagram</a>
        </li>
      </RedesSociais>
      <Direitos>© 2026 EBAC Jobs. Todos os direitos reservados.</Direitos>
    </ConteudoRodape>
  </RodapeEstilizado>
)

export default Rodape
