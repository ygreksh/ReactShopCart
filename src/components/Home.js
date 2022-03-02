import React, { Component} from 'react';
import { connect } from 'react-redux'
import { addToCart, selectItem } from './actions/cartActions'
import Product from './Product';

 class Home extends Component {

    
    
    handleAddClick = (id)=>{
        this.props.addToCart(id); 
    }

    handleProductClick = (id) => {
        this.props.selectItem(id);
        console.log('SelectedItem = ${id}');
    }

    render(){
        let itemList = this.props.items.map(item=>{
            return(
                    <Product product={item} onAddClick={this.handleAddClick} onProductClick={this.handleProductClick}/>
            )
        })

        return(
            <div className="container">
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
        items: state.items,
        selectItem: state.selectItem
    }
  }
const mapDispatchToProps= (dispatch)=>{
    
    return{
        addToCart: (id) => {dispatch(addToCart(id))},
        selectItem: (id) => {dispatch(selectItem(id))} 
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Home)