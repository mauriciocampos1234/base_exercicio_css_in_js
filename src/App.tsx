import Header from './components/Cabecalho'
import Hero from './components/Hero'
import ListaVagas from './containers/ListaVagas'
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import Vaga from './components/FormVagas'

import './global.css'

function App() {
  return (
    <>
      <Header />
      <Hero />
      <div className="container">
        <ListaVagas vagas={undefined} />
      </div>
    </>
  )
}

export default App
