import React, { Component } from "react"


class Product extends Component {
    constructor(props) {
        super(props);
        this.onAddClick = this.props.onAddClick;
        this.onProductClick = this.props.onProductClick;
    }
    
    handleAddClick(item) {
        this.onAddClick(item.id);
    }
    handleProductClick(item) {
        //this.onProductClick(item);
        console.log(item.title);
    }

    render() {
        const item = this.props.product;

        return (
            <div className="card" key={item.id}>
                        <div className="card-image">
                            <img src={item.img} alt={item.title} onClick={item => this.handleProductClick(item)}/>
                            <span className="card-title">{item.title}</span>
                            <button to="/" className="btn-floating halfway-fab waves-effect waves-light red" onClick={()=>{this.handleAddClick(item)}}><i className="material-icons">add</i></button>
                        </div>

                        <div className="card-content">
                            <p>{item.description}</p>
                            <p><b>Цена: {item.price}$</b></p>
                        </div>
            </div>
            )
    }
}

export default Product