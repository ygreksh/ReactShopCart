import Item1 from '../../images/item1.jpg'
import Item2 from '../../images/item2.jpg'
import Item3 from '../../images/item3.jpg'
import Item4 from '../../images/item4.jpg'
import Item5 from '../../images/item5.jpg'
import Item6 from '../../images/item6.jpg'
import { ADD_TO_CART,REMOVE_ITEM,SUB_QUANTITY,ADD_QUANTITY,ADD_SHIPPING, SELECT_ITEM } from '../actions/action-types/cart-actions'


const initState = {
    items: [
        {id:1,title:'Стол  кухонный', description: "Деверянный кухонный стол 60смх80см", price:110,img:Item1},
        {id:2,title:'Стол письменный', description: "Письменный стол с выдвижными ящиками", price:80,img: Item2},
        {id:3,title:'Стул офисный', description: "Простой офисный стул без регулировок",price:120,img: Item3},
        {id:4,title:'Диван раскладной', description: "Мягкий тканевый диван для гостинной", price:260,img:Item4},
        {id:5,title:'Детская кровать', description: "Детская кровать с ящиками", price:160,img: Item5},
        {id:6,title:'Шкаф-купе', description: "Шкаф-купе двухобъемный. Одна дверь зеркальная",price:90,img: Item6}
    ],
    addedItems:[],
    totalScore: 0,
    total: 0,
    selectedItem: null

}
const cartReducer= (state = initState,action)=>{

    //SELECT ITEM 
    if(action.type === SELECT_ITEM){
        let selectedItem = state.items.find(item => item.id === action.id)
        return{
            ...state, 
            selectedItem: selectedItem
        }
    }
   
    //INSIDE HOME COMPONENT
    if(action.type === ADD_TO_CART){
          let addedItem = state.items.find(item=> item.id === action.id)
          //check if the action id exists in the addedItems
         let existed_item= state.addedItems.find(item=> action.id === item.id)
         if(existed_item)
         {
            addedItem.quantity += 1 
             return{
                ...state,
                //total: addedItem.
                 totalScore: state.totalScore + addedItem.price 
                  }
        }
         else{
            addedItem.quantity = 1;
            //calculating the totalScore
            let newtotalScore = state.totaLscore + addedItem.price 
            
            return{
                ...state,
                addedItems: [...state.addedItems, addedItem],
                totalScore : newtotalScore
            }
            
        }
    }
    if(action.type === REMOVE_ITEM){
        let itemToRemove= state.addedItems.find(item=> action.id === item.id)
        let new_items = state.addedItems.filter(item=> action.id !== item.id)
        
        //calculating the total
        let newtotalScore = state.totalScore - (itemToRemove.price * itemToRemove.quantity )
        console.log(itemToRemove)
        return{
            ...state,
            addedItems: new_items,
            totalScore: newtotalScore
        }
    }
    //INSIDE CART COMPONENT
    if(action.type=== ADD_QUANTITY){
        let addedItem = state.items.find(item=> item.id === action.id)
          addedItem.quantity += 1 
          let newtotalScore = state.totalScore + addedItem.price
          return{
              ...state,
              totalScore: newtotalScore
          }
    }
    if(action.type=== SUB_QUANTITY){  
        let addedItem = state.items.find(item=> item.id === action.id) 
        //if the qt == 0 then it should be removed
        if(addedItem.quantity === 1){
            let new_items = state.addedItems.filter(item=>item.id !== action.id)
            let newtotalScore = state.totalScore - addedItem.price
            return{
                ...state,
                addedItems: new_items,
                totalScore: newtotalScore
            }
        }
        else {
            addedItem.quantity -= 1
            let newtotalScore = state.totalScore - addedItem.price
            return{
                ...state,
                totalScore: newtotalScore
            }
        }
        
    }

    if(action.type=== ADD_SHIPPING){
          return{
              ...state,
              totalScore: state.totalScore + 6
          }
    }

    if(action.type=== 'SUB_SHIPPING'){
        return{
            ...state,
            totalScore: state.totalScore - 6
        }
  }
    
  else{
    return state
    }
    
}

export default cartReducer
