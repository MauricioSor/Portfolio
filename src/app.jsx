import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './app.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Menu from './components/common/Menu.jsx'
import Footer from './components/common/Footer.jsx'
import Principal from './components/views/Principal.JSX'

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
