import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/home'
import ProductListing from './pages/productsListing'
import ProductsDetails from './pages/productsdetails'
import { useEffect, useState } from 'react'

function App() {

  return (
    <>
    <BrowserRouter>
     <div className='App'>
      <h1>Store</h1>
      {/* breadCrums */}
      {/* Routes */}

      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/products' element={<ProductListing/>}/>
        <Route path='/products/:id' element={<ProductsDetails/>}/>
      </Routes>
     </div>
    </BrowserRouter>
    </>
  )
}

export default App
