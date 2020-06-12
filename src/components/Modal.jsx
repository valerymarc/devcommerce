import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import {addToPanier} from '../lib/action';
import '../style.css';

const Modal = ({item}) => {
   const [qty, setQty] = useState(1);
   
   const dispatch = useDispatch()

   const addPanier = (item, quantity) =>{
     dispatch(addToPanier(item, quantity))
   }
  
   const compter = () =>{
       
       setQty(qty+1);
       return qty;
   }
   const decompter = () =>{
       if (qty>1){
        
        setQty(qty-1);
       }else{
           setQty(1);
       }
    return qty;
}
    return (<div>
<div className="modal fade" id={item.ref} data-backdrop="static" data-keyboard="false" tabindex="-1" role="dialog" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header coul">
        <h5 className="modal-title" id="staticBackdropLabel">{item.name}</h5>
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-body">
       <div className="row">
           <div className="col-sm-4">
           <img
              width="170"
              height="170"
              src={process.env.PUBLIC_URL + `/assets/${item.category}/${item.image}`}
              alt={item.name}
            />
           </div>
           <div className="col-sm">
               <p className="lead">
               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut a nunc augue. Duis iaculis mauris non neque tristique consequat.
               </p>
    <h3 className="price">€{item.price}/{item.unit}</h3>
    <br/>

    <div className="btn-group" role="group" aria-label="Basic example">
        <button type="button" className="btn btn-primary" onClick={() => {decompter()}}>-</button>
        <span className="btn btn-light qty">{qty}</span>
        <button type="button" className="btn btn-primary" onClick={() => {compter()}}>+</button>
    </div>
           </div>
       </div>      
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" className="btn btn-success" data-dismiss="modal" onClick={() => addPanier(item, qty)}>Ajouter au panier</button>
      </div>
    </div>
  </div>
</div>

    </div>  );
}
 
export default Modal;