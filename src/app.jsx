import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useState } from 'preact/hooks'
import preactLogo from './assets/preact.svg'
import viteLogo from '/vite.svg'
import './app.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Menu from './components/common/Menu.jsx'
import Footer from './components/common/Footer.jsx'
import Principal from './components/views/Principal.jsx'

export function App() {

  return (
    <>
    <Menu/>
    <BrowserRouter>
    <Routes>
    <Route exact path="/" element={<Principal/>}></Route>
    </Routes>
    </BrowserRouter>
    <Footer/>
    </>
  )
}
