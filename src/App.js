import React, { Fragment, useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import './style.css';
import Navbar from './components/Navbar';
import SideMenu from './components/SideMenu';
import List from './components/List';
import  { list } from './data';


const App = () =>{


  const [category, setCategory] = useState(0);
  const chargeCategory = i =>{
     // console.log("Numéro "+i);
      setCategory(i);
  }

  const filterResult = input=>{
     //on utiise flat pour faire une liste dans un tableau
     let fulllist = list.flat()
   
     let filtered = fulllist.filter(item => {
       const name = item.name.toLowerCase()
       const cherche = input.toLowerCase()
       return name.indexOf(cherche) > -1
     })
     console.log(filtered)
  }

//useEffect(()=>)

  return(<Fragment>
     <Navbar filter={filterResult}/>
     <div className="container">
       <div className="row">
         <div className="col-sm-2">
           <SideMenu chargeCategory={chargeCategory} category={category}/>
         </div>
         <div className="col-sm">
           <div className="row">
            <List  data={list[category]}  category={category}/>
          
           </div>
         </div>
       </div>%
       </div>  
    <p>Aucun produit dans la boutique</p></Fragment>); 
}

export default App;
