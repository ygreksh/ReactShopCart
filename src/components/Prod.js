import React, { Component,useCallback } from "react"
import { useNavigate } from 'react-router-dom';

const Product = (props) => {
    
        const onAddClick = props.onAddClick;
        this.onProductClick = this.props.onProductClick;
        this.item = this.props.product;
    
    
    const handleAddClick = () => {
        onAddClick(this.item.id);
    }
    const handleProductClick = () => {
        //this.onProductClick(item);
        console.log(this.item.id);
        // const navigate = useNavigate();
        // useCallback(() => navigate('/productdetails'));
    }

    

        return (
            <div className="card" key={item.id}>
                        <div className="card-image">
                            <img src={item.img} alt={item.title} onClick={() => handleProductClick()}/>
                            <span className="card-title">{item.title}</span>
                            <button to="/" className="btn-floating halfway-fab waves-effect waves-light red" onClick={()=>{handleAddClick()}}><i className="material-icons">add</i></button>
                        </div>

                        <div className="card-content">
                            <p>{item.description}</p>
                            <p><b>Цена: {item.price}$</b></p>
                        </div>
            </div>
            )
    
}

export default Product