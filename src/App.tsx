import { ThemeProvider } from 'styled-components'

import Header from './components/Cabecalho'
import Hero from './components/Hero'
import Rodape from './components/Rodape'
import ListaVagas from './containers/ListaVagas'

import { EstiloGlobal, Container } from './styles'
import tema from './themes/tema'

function App() {
  return (
    <ThemeProvider theme={tema}>
      <EstiloGlobal />
      <Header />
      <Hero />
      <Container>
        <ListaVagas />
      </Container>
      <Rodape />
    </ThemeProvider>
  )
}

export default App
