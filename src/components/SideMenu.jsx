import React, { useState } from 'react';
import '../style.css';

const SideMenu = ({ chargeCategory, category }) => {
    const liens = ["Fruits", "Légumes", "Produits frais", "Epiceries", "Boissons"];
    
    return (<div>
       <div className="col-sm-2 sidebar ">
           <div><p style={{width:'100%'}} className="p-3 mb-2 bg-primary text-white text-white bg-dark">Produits</p></div>
           <ul>
             <div className="ite">
               {liens.map((lien, index) =>{
                 return(<div><li style={{color:category==index && 'white'}}  className={category==index && 'active'} key={index} onClick={()=>chargeCategory(index)}><p>{lien}</p></li></div>);
               })}
               </div>
           </ul>
       </div>
    </div>);
}
 
export default SideMenu;