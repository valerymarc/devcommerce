import React, { useState } from 'react';
import '../style.css';

const SideMenu = ({ chargeCategory, category }) => {
    const liens = ["Fruits", "Légumes", "Produits frais", "Epiceries", "Boissons"];
    
    return (<div>
       <div className="col-sm-2 sidebar">
           <ul>
               {liens.map((lien, index) =>{
                 return(<div><li className={category==index && 'active'} key={index} onClick={()=>chargeCategory(index)}>{lien} </li></div>);
               })}
           </ul>
       </div>
    </div>);
}
 
export default SideMenu;