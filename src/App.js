import React, { Component } from 'react';
import {BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Cart from './components/Cart'
import ProductDelails from './components/ProductDetails';


class App extends Component {
  render() {
    return (
       <BrowserRouter>
            <div className="App">
            
              <Navbar/>
                  <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/cart" element={<Cart/>}/>
                    <Route path="/productdetails" element={<ProductDelails/>}/>

                  </Routes>
             </div>
       </BrowserRouter>
      
    );
  }
}

export default App;
