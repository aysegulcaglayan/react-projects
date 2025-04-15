import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Product from './pages/Products';
import NotFoundPage from './pages/NotFoundPage';
import Header from './components/Header'
import EmployeeAbout from './pages/EmployeeAbout';
import CompanyAbout from './pages/CompanyAbout';
import Products from './pages/Products';
import ProductDetails from './pages/ProductDetails';
function App() {

  //URL YÖNLENDİRMESİ YAPMAYA YARAR.
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />}>
          <Route path='employee' element={<EmployeeAbout />} />
          <Route path='company' element={<CompanyAbout />} />
        </Route>
        <Route path='/contact' element={<Contact />} />
        <Route path='/product' element={<Products />} />
        <Route path='/product-details/:id' element={<ProductDetails />} />
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </div>
  )
}

export default App
