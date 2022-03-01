import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addShipping } from './actions/cartActions'
class Recipe extends Component{
    
    
    
    render(){
  
        return(
            <div className="container">
                <div className="collection">
                    
                        <li className="collection-item"><b>Итого: {this.props.totalScore} $</b></li>
                    </div>
                    <div className="checkout">
                        <button className="waves-effect waves-light btn">Купить</button>
                    </div>
                 </div>
        )
    }
}

const mapStateToProps = (state)=>{
    return{
        addedItems: state.addedItems,
        totalScore: state.totalScore
    }
}

export default connect(mapStateToProps)(Recipe)
