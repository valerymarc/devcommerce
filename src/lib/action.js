/**
 * actions Types
 */
export const actions  ={
    ADD_TO_PANIER : "ADD_TO_PANIER",
    UPDATE_PANIER : "UPDATE_PANIER",
    REMOVE_FROM_PANIER :  "REMOVE_FROM_PANIER"
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

 export function updatePanier(item, quantity){
     return{
         type:actions.UPDATE_PANIER,
         payload:{item:item, quantity}
     }
 }


 export function removeFromPanier(item){
    return{
        type:actions.REMOVE_FROM_PANIER,
        payload:{item:item}
    }
 } 