import React from "react";
import { connect } from "react-redux";
import { addToCart } from './actions/cartActions'

const ProductDelails = ({selectedItem, addToCart}) => {


    return (
            <div>
                <h1>
                    Описание товара
                </h1>
                <div className="card" key={selectedItem.id}>
                        <div className="card-image">
                            <img src={selectedItem.img} alt={selectedItem.title} />
                            <span className="card-title">{selectedItem.title}</span>
                            <button to="/" className="btn-floating halfway-fab waves-effect waves-light red" onClick={()=>addToCart(selectedItem.id)} ><i className="material-icons">add</i></button>
                        </div>

                        <div className="card-content">
                            <p>{selectedItem.description}</p>
                            <p><b>Цена: {selectedItem.price}$</b></p>
                        </div>
            </div>
            </div>
    )
}

const mapStateToProps = (state)=>{
    return {
        selectedItem: state.selectedItem
    }
  }
const mapDispatchToProps= (dispatch)=>{
    
    return{
        addToCart: (id) => {dispatch(addToCart(id))}
    }
}

  export default connect(mapStateToProps, mapDispatchToProps)(ProductDelails)