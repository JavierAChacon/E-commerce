import { HashRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Product from './pages/Product'
import Login from './pages/Login'
import Purchases from './pages/Purchases'
import './App.css'
import MyNav from './components/MyNav'
import Loading from './components/Loading'


function App() {

  return (
   <HashRouter>
    <MyNav/>
    <Loading/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/product/:id" element={<Product/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/cart" element={<Purchases/>}></Route>
      </Routes>
   </HashRouter>
  )
}

export default App
