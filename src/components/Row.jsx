import React, {useState, useEffect} from 'react';
import { useDispatch } from 'react-redux';
import {updatePanier, removeFromPanier} from '../lib/action';


const Row = props => {
  const {id, quantity, details } = props.item 
  const [qte, setQte] = useState(quantity)
  const dispatch = useDispatch()
  
 {/* const update = (item, quantity) =>{
    dispatch(updatePanier(item, quantity))
  }*/}

  {/*const update = quantity =>{
    dispatch(updatePanier(id, quantity))
  }*/}

  const update = (action) =>{
    if(action=='incrementer'){
      setQte(qte+1)
    }
    if(action=='decrementer'){
      setQte(qte-1)
    }
   
    console.log(qte)
    //debugger;
  }

  const remove = id =>{
    dispatch(removeFromPanier(id))
  }

  useEffect(() => {
    dispatch(updatePanier(id, qte))
    //debugger;
  }, [qte, ])
    return (  
        <tr>
        <td>
          <img
            width="70"
            height="70"
            src={process.env.PUBLIC_URL + `/assets/${details.category}/${details.image}`}
            alt={details.name}
          />
        </td>
    <td>{details.ref}</td>
    <td>{details.price}€</td>
        <td>
          <div className="btn-group" role="group" aria-label="Basic example">
            <button
              type="button"
              className="btn btn-secondary"
              onClick={() => {
                if(qte>1){
                  //setQte(qte-1)
                  {/*update(details, qte)*/}
                  //update(qte)
                  update('decrementer')
                }
              }}
              >
              -
            </button>
    <span className="btn btn-light">{qte}</span>
            <button
              type="button"
              className="btn btn-secondary"
              onClick ={()=> {
                //setQte(qte+1)
                {/*update(details, qte)*/}
                //update(qte)
                update('incrementer')
              
              }}
              >
              +
            </button>
          </div>
        </td>
    <td>{(details.price * qte).toFixed(2)}€</td>
        <td>
          <button
            type="button"
            className="btn btn-danger remove"
            onClick = {()=>{
              remove(id)
            }}
             >
               <i class="fa fa-trash" aria-hidden="true"></i>
            {/*X*/}
          </button>
        </td>
      </tr>
    );
}
 
export default Row;