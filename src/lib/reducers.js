import {actions} from './action';

const saveToLocalStorage = object =>{
  localStorage.setItem("items", JSON.stringify(object))
}
const initialState = {
    //items : []
    items : JSON.parse(localStorage.getItem("items")) !== null ?
    JSON.parse(localStorage.getItem("items")) : []
}

export default function onlineStoreApp(state = initialState, action){
     switch(action.type){
         case actions.ADD_TO_PANIER : return Object.assign({}, state, {items : [...state.items, action.payload]})
         case actions.UPDATE_PANIER : return Object.assign({}, state, {
             items : state.items.map(item => {
                 //return item.id === action.payload.item.id ? 
                 return item.id === action.payload.id ? 
                 Object.assign({}, item, {
                      quantity: action.payload.quantity
                 }) : item
             })
         })
         case actions.REMOVE_FROM_PANIER : return Object.assign({}, state, {
             items : state.items.filter(item=>{
                 //return item.id === action.payload.id
                 return item.id != action.payload
             })
         })
         case actions.SAVE_PANIER : 
         saveToLocalStorage(action.payload.items)
         return state
         case actions.RESET_PANIER : 
         saveToLocalStorage([])
         return Object.assign({}, state, {
             items : []
         })
         default : return state
     }
}