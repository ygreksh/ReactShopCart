import React, { Component } from "react"


class Product extends Component {
    constructor(props) {
        super(props);
        this.onAddClick = this.props.onAddClick;
        this.onProductClick = this.props.onProductClick;
        this.item = this.props.product;

    }
    
    handleAddClick() {
        this.onAddClick(this.item.id);
    }
    handleProductClick() {
        //this.onProductClick(item);
        console.log(this.item.id);
    }

    render() {

        return (
            <div className="card" key={this.item.id}>
                        <div className="card-image">
                            <img src={this.item.img} alt={this.item.title} onClick={() => this.handleProductClick()}/>
                            <span className="card-title">{this.item.title}</span>
                            <button to="/" className="btn-floating halfway-fab waves-effect waves-light red" onClick={()=>{this.handleAddClick()}}><i className="material-icons">add</i></button>
                        </div>

                        <div className="card-content">
                            <p>{this.item.description}</p>
                            <p><b>Цена: {this.item.price}$</b></p>
                        </div>
            </div>
            )
    }
}

export default Product