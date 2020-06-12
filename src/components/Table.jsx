import React, {useEffect} from 'react';
import Row from './Row';
import { useDispatch, useSelector } from 'react-redux';

const Table = ({items}) => {
  {/*Acceder à l'état actuel de l'application 
 items = useSelector(state => state.items);
useEffect(()=>{
  console.log('Vous avez '+items.length+' dans votre panier')
  
})*/}
    return (<table  className="table table-stripped">
        <tr>
          <th width="200">Product</th>
          <th width="80">Reference</th>
          <th width="150">Price</th>
          <th width="150">Quantity</th>
          <th width="200">Total</th>
        </tr>
        {/*Afficher dans les produits sélectionnés dans le panier*/}
        {items.map(item => {
          return (<Row item={item} />)
        })}
      </table>  );
}
 
export default 



Table;