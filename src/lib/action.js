/**
 * actions Types
 */
export const actions  ={
    ADD_TO_PANIER : "ADD_TO_PANIER",
    UPDATE_PANIER : "UPDATE_PANIER",
    REMOVE_FROM_PANIER :  "REMOVE_FROM_PANIER",
    SAVE_PANIER : "SAVE_PANIER"
}


/**
 * actions creators
 */
 const uid = () => Math.random().toString(34).slice(2)
 export function addToPanier(item, quantity){
    return {
        type: actions.ADD_TO_PANIER,
        payload : {id: uid(), quantity, details:item}
    }
 }

 /*export function updatePanier(item, quantity){
     return{
         type:actions.UPDATE_PANIER,
         payload:{item:item, quantity}
     }
 }*/

 export function updatePanier(id, quantity){
    return{
        type:actions.UPDATE_PANIER,
        payload:{id:id, quantity:quantity}
    }
}


 export function removeFromPanier(id){
    return{
        type:actions.REMOVE_FROM_PANIER,
        payload:id
    }
 } 

 export function savePanier(items){
     return{
         type:actions.SAVE_PANIER,
         payload:{items:items}
     }
 }