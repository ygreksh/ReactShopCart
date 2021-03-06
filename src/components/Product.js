import React from "react"
import { useNavigate } from 'react-router-dom';

const Product = (props) => {
    
        const onAddClick = props.onAddClick;
        const onProductClick = props.onProductClick;
        const item = props.product;
        const key = props.key;
        const navigate = useNavigate();
    
    
    const handleAddClick = () => {
        onAddClick(item.id);
    }
    const handleProductClick = () => {
        onProductClick(item.id);
        //console.log(item.id);
        navigate(`/productdetails/${item.id}`);
    }

    

        return (
            <div className="card" key={key}>
                        <div className="card-image" >
                            <img src={item.img} alt={item.title} />
                            <span className="card-title" onClick={() => handleProductClick()}>{item.title}</span>
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
