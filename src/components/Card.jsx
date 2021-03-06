import React from 'react';
import '../data.js';
import Modal from './Modal';

const Card = props => {
  const {elt} = props;
  
  const htarget = "#"+elt.ref;
  
    return (
        <div className="col-sm-4">
         <div className="card">
            <img
              width="170"
              height="170"
              src={process.env.PUBLIC_URL + `/assets/${elt.category}/${elt.image}`}
              alt={elt.name}
            />
            <div className="card-body">
              <div className="row">
                <div className="col-sm-6">
                  <h4>{elt.name}</h4>
                </div>
                <div className="col-sm-6">
                  <p>
                      €{elt.price}/{elt.unit}
                  </p>
                  <button className="btn btn-warning btn-sm"  data-toggle="modal" data-target={htarget}>Voir le produit</button>
                </div>
              </div>
            </div>
          </div>
    <Modal  item={elt} /> 
        </div>
      );
}
 
export default Card;