import Header from './components/Header.js';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from './pages/Home.js'
import { Curriculo } from './pages/Curriculo.js'
import { Contato } from './pages/Contato.js'
import { Atendimentos } from './pages/Atendimentos.js'
import Footer from './components/Footer.js'
import ScrollToTop from './components/ScrollToTop';


function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" exact Component={Home} />
        <Route path="/atendimentos" Component={Atendimentos} />
        <Route path="/formacao-experiencia" Component={Curriculo} />
        <Route path="/contato" Component={Contato} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App;