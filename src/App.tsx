import './App.css'
import Contato from './components/contato/contato'
import Habilidades from './components/habilidades/habilidades'
import InfosNavegacao from './components/infos-e-nav/infos-e-nav'
import Perfil from './components/perfil/perfil'
import Projetos from './components/projetos/projetos'

const menuLinks = document.querySelectorAll('.info a[href^="#"]')
console.log(menuLinks);

function App() {
  
  return (
    <>
      <InfosNavegacao />
      <Perfil />
      <Projetos />
      <Habilidades />
      <Contato />
    </>
  )
}

export default App
