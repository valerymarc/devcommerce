import React, {Fragment, useState, useEffect} from 'react';
import Table from '../components/Table';
import {useSelector} from 'react-redux';
import {Link} from 'react-router-dom';
import '../style.css';
import '../confirmOrder/confirm.css'



const Panier = () => {
  {/*Acceder à l'état actuel de l'application */}
const items = useSelector(state => state.items)
 const [sousTotal, setSousTotal] = useState(0.00)
 const [total, setTotal] = useState(0.00)
 const shipping = 5.00

let active
if(!items.length){
  active='disabled'
}else{
  active=''
}

 useEffect(()=>{
   console.log('Vous possedez '+items.length+ ' produit dans votre panier')
  let totals = items.map(item =>{
    return (item.quantity * item.details.price)
  })

  setSousTotal(totals.reduce((item1, item2) => item1+item2, 0))
  setTotal(sousTotal+shipping)
  //console.log('SousTotal : '+subTotal)

 }, [items, sousTotal, total])

 console.log('Vous possedez '+(items.length+1)+ ' produit dans votre panier')

    return ( <Fragment>
     <div className="container">
        <div className="row">
          {items.length > 0 &&
          <div className="col-sm cart">
              <Table items={items}/>
          </div>}

          {items.length == 0 &&
          <div className="col-sm cart">
            <div className="jumbotron text-center">
              <p className="lead">
                   <strong>
                      <b> Sélectionnez un ou plusieurs produits</b>
                   </strong>
                   </p>
                   </div>
          </div>}
          <div className="col-sm-3 order-summary">
            <ul className="list-group">
              <li className="list-group-item">Order Summary</li>

              <li className="list-group-item">
                <ul className="list-group flex">
                  <li className="text-left">Subtotal</li>
    <li className="text-right">€{sousTotal.toFixed(2)}</li>
                </ul>
                <ul className="list-group flex">
                  <li className="text-left">shipping</li>
                  <li className="text-right">€{shipping.toFixed(2)}</li>
                </ul>
                <ul className="list-group flex">
                  <li className="coupon crimson">
                    <small> Code de réduction</small>
                  </li>
                </ul>
              </li>

              <li className="list-group-item ">
                <ul className="list-group flex">
                  <li className="text-left">Total</li>
    <li className="text-right">€{sousTotal == 0.00 ? "0.00" : total.toFixed(2)}</li>
                </ul>
              </li>
            </ul>
              <Link to="checkout" className={'white btn btn-light btn-lg btn-block checkout '+active+' bg-crimson'}>
                Checkout
              </Link>
            
          </div>
        </div>
        </div>
    </Fragment> );
}
 
export default Panier;