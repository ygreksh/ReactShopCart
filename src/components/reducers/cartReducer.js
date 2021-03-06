import Item1 from '../../images/item1.jpg'
// import Item2 from '../../images/item2.jpg'
// import Item3 from '../../images/item3.jpg'
// import Item4 from '../../images/item4.jpg'
// import Item5 from '../../images/item5.jpg'
// import Item6 from '../../images/item6.jpg'
import { ADD_TO_CART,REMOVE_ITEM,SUB_QUANTITY,ADD_QUANTITY, SELECT_ITEM, LOAD_PRODUCTS, ADD_PRODUCT } from '../actions/action-types/cart-actions'


const initState = {
    items: [
        {id:1,title:'Стол  кухонный', description: "Деверянный кухонный стол 60смх80см", price:110,img:Item1}
        // {id:2,title:'Стол письменный', description: "Письменный стол с выдвижными ящиками", price:80,img: Item2},
        // {id:3,title:'Стул офисный', description: "Простой офисный стул без регулировок",price:120,img: Item3},
        // {id:4,title:'Диван раскладной', description: "Мягкий тканевый диван для гостинной", price:260,img:Item4},
        // {id:5,title:'Детская кровать', description: "Детская кровать с ящиками", price:160,img: Item5},
        // {id:6,title:'Шкаф-купе', description: "Шкаф-купе двухобъемный. Одна дверь зеркальная",price:90,img: Item6}
    ],
    addedItems:[],
    totalScore: 0,
    totalCart: 0,
    selectedItem: null

}



const cartReducer= (state = initState,action)=>{
    // ADD_PRODUCT
    if (action.type === ADD_PRODUCT) {
        let newItem = {
            id: state.items.quantity + 1,
            ...action.item
        }
        return {
            ...state,
            items: [...state.items, newItem]
        }
    }

    // LOAD_PRODUCTS
    if (action.type === LOAD_PRODUCTS) {
        return {
            ...state,
            items: action.items
        }
    }

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
                totalCart: state.totalCart + 1,
                totalScore: state.totalScore + addedItem.price 
                  }
        }
         else{
            addedItem.quantity = 1;
            //calculating the totalScore
            let newtotalScore = state.totalScore + addedItem.price 
            
            return{
                ...state,
                addedItems: [...state.addedItems, addedItem],
                totalCart: state.totalCart + 1,
                totalScore : newtotalScore
            }
            
        }
    }
    if(action.type === REMOVE_ITEM){
        let itemToRemove= state.addedItems.find(item=> action.id === item.id)
        let new_items = state.addedItems.filter(item=> action.id !== item.id)
        
        //calculating the totalScore and totalCart
        let newtotalScore = state.totalScore - (itemToRemove.price * itemToRemove.quantity )
        let newTotalCart = state.totalCart - (itemToRemove.quantity)
        return{
            ...state,
            addedItems: new_items,
            totalCart: newTotalCart,
            totalScore: newtotalScore
        }
    }
    //INSIDE CART COMPONENT
    if(action.type=== ADD_QUANTITY){
        let addedItem = state.items.find(item=> item.id === action.id)
        let newTotalCart
        newTotalCart = state.totalCart + 1
        addedItem.quantity += 1 
          let newtotalScore = state.totalScore + addedItem.price
          return{
              ...state,
              totalCart: newTotalCart,
              totalScore: newtotalScore
          }
    }
    if(action.type=== SUB_QUANTITY){  
        let addedItem = state.items.find(item=> item.id === action.id) 
        let newTotalCart = state.totalCart
        //if the qt == 0 then it should be removed
        if(addedItem.quantity === 1){
            newTotalCart -= 1
            let new_items = state.addedItems.filter(item=>item.id !== action.id)
            let newtotalScore = state.totalScore - addedItem.price
            return{
                ...state,
                addedItems: new_items,
                totalCart: newTotalCart,
                totalScore: newtotalScore
            }
        }
        else {
            addedItem.quantity -= 1
            newTotalCart -= 1
            let newtotalScore = state.totalScore - addedItem.price
            return{
                ...state,
                totalCart: newTotalCart,
                totalScore: newtotalScore
            }
        }
        
    }
    
  else{
    return state
    }
    
}

export default cartReducer
