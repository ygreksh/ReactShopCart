import React from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

 const Navbar = (props)=>{
    let totalCart = props.totalCart
    return(
            <nav className="nav-wrapper">
                <div className="container">
                    <Link to="/" className="brand-logo">Магазин</Link>
                    
                    <ul className="right">
                        <li><Link to="/cart">Корзина ({totalCart})</Link></li>
                    </ul>
                </div>
            </nav>
   
        
    )
}

const mapStateToProps = (state) => {
    return {
      totalCart: state.totalCart
    }
  }

export default connect(mapStateToProps)(Navbar)