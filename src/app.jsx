import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './app.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Menu from './components/common/Menu.jsx'
import Footer from './components/common/Footer.jsx'
import { useState } from 'preact/hooks'
import Main from './components/views/Ingles/Main.jsx'
import Principal from './components/views/Español/Principal.jsx'

export function App() {
  const [idioma, setIdioma] = useState(false)
  const CambioIdioma=()=>setIdioma(!idioma)
  return (
    <>
      <Menu CambioIdioma={CambioIdioma} idioma={idioma}/>
          {idioma?
            <Main/>:
            <Principal/>
          }
      <Footer />
    </>
  )
}
