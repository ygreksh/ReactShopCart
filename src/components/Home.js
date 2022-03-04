import React, { useEffect} from 'react';
import { connect } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { addToCart, selectItem, loadProducts } from './actions/cartActions';
import Product from './Product';

const Home = (props) => {
    
    useEffect(() => {
        fetch("http://localhost:3004/products").then(res => res.json()).then(result => props.loadProducts(result)).catch(console.log);
    });
    const navigate = useNavigate();
    

    function handleAddProduct() {
        navigate('/form');
    }

    const handleAddClick = (id)=>{
        props.addToCart(id); 
    }

    const handleProductClick = (id) => {
        console.log(`SelectedItem = ${id}`);
        props.selectItem(id);
    }
    // const listItems = props.items.map(
    //     item=>
    //     (<Product 
    //             key={item.id} 
    //             product={item} 
    //             onAddClick={handleAddClick} 
    //             onProductClick={handleProductClick}/>
    // ))
    return (
            <div className="container">
                <div>
                    <button className="btn btn-primary" onClick={handleAddProduct} >Добавить товар</button>
                </div>
                <h3 className="center">Список товаров</h3>
                <div className="box">
                {
                    props.items.map(
                        item=>
                        (<Product 
                                key={item.id} 
                                product={item} 
                                onAddClick={handleAddClick} 
                                onProductClick={handleProductClick}/>
                    ))
                }
                </div>
            </div>
    )
}
const mapStateToProps = (state)=>{
    return {
        items: state.items
    }
  }
const mapDispatchToProps= (dispatch)=>{
    
    return{
        addToCart: (id) => {dispatch(addToCart(id))},
        selectItem: (id) => {dispatch(selectItem(id))},
        loadProducts: (products) => {dispatch(loadProducts(products))}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Home)