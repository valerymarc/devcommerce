import React from 'react';
import '../style.css';

const SideMenu = ({ chargeCategory, category }) => {
    const liens = ["Fruit", "Légumes", "Produits frais", "Epiceries", "Boissons"];
    
    return (<div>
      <div><p className="cat">Category </p></div>
       <div className="col-sm-2 sidebar ">
           
           <ul>
             <div className="ite">
               {liens.map((lien, index) =>{
                 return(<div><li style={{color:'white'}}  className={category==index && 'btn btn-info active'} key={index}  onClick={()=>chargeCategory(index)} ><a><p>{lien}</p></a></li></div>);
               })}
               </div>
           </ul>
       </div>
    </div>);
}
 
export default SideMenu;