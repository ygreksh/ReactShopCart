import React, { Component } from 'react';
import {BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Cart from './components/Cart'
import ProductDelails from './components/ProductDetails';
import Form from './components/Form';


class App extends Component {
  render() {
    return (
       <BrowserRouter>
            <div className="App">
            
              <Navbar/>
                  <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/cart" element={<Cart/>}/>
                    <Route path="/productdetails/:id" element={<ProductDelails/>}/>
                    <Route path="/form" element={<Form/>}/>
                  </Routes>
             </div>
       </BrowserRouter>
      
    );
  }
}

export default App;
