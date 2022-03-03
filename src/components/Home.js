import React, { Component} from 'react';
import { connect } from 'react-redux'
import { addToCart, selectItem, loadProducts } from './actions/cartActions'
import Product from './Product';

 class Home extends Component {

    
    componentDidMount() {
        let loadedProducts = fetch("http://localhost:3004/products").then(res => res.json()).then(result => this.setState({
            loading: false,
            products: result
        })).catch(console.log);
        
        this.props.loadProducts(loadedProducts);
    }

    handleLoadClick = () => {
        let loadedProducts = fetch("http://localhost:3004/products").then(res => res.json()).then(result => this.setState({
            loading: false,
            products: result
        })).catch(console.log);
        
        this.props.loadProducts(loadedProducts);
    }

    handleAddClick = (id)=>{
        this.props.addToCart(id); 
    }

    handleProductClick = (id) => {
        console.log(`SelectedItem = ${id}`);
        this.props.selectItem(id);
    }

    render(){
        let itemList;
        if (!this.props.items) {return (
                    <div>
                    <h3>Список товаров пуст</h3>
                    <button onClick={()=>{}} >Загрузить</button>
                    </div>)
            }
        else {
            itemList = this.props.items.map(item=>{
                return(
                        <Product key={item.id} product={item} onAddClick={this.handleAddClick} onProductClick={this.handleProductClick}/>
                )
            })
        }

        return(
            <div className="container">
                <div>
                    <button onClick={()=>{}} >Добавить товар</button>
                </div>
                <h3 className="center">Список товаров</h3>
                <div className="box">
                    {itemList}
                </div>
            </div>
        )
    }
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