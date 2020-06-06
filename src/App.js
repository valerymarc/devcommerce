import React, { Fragment, useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import './style.css';
import Navbar from './components/Navbar';
import  { list } from './data';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './pages/Home';
import Panier from './pages/Panier';
import { updatePanier } from './lib/action';


const App = props =>{
  const { items, onAddToPanier, onUpdatePanier } = props

  const [count, setCount]= useState(1);
  const [category, setCategory] = useState(0);
  const [filtering, setFiltering] = useState(false);
  const [filtered, setFiltered] = useState(false);

  const chargeCategory = i =>{
      setCategory(i);
  }

  const filterResult = input=>{
     //on utiise flat pour faire une liste dans un tableau
     let fulllist = list.flat()
   
     let resultat = fulllist.filter(item => {
       const name = item.name.toLowerCase()
       const cherche = input.toLowerCase()
       return name.indexOf(cherche) > -1
     })
     setFiltered(resultat)
  }

useEffect(()=>{
  console.log(filtering)
})

const add = (item, quantity) =>{
   onAddToPanier(item, quantity)
}

const update = () =>{

}

  return(<Fragment>
    
    <Router>
     <Navbar filter={filterResult} setFiltering={setFiltering} count={count}/>
     
    {/*Gestion des routes*/}
    <Route exact path="/" component={() => <Home category={category} 
                                              chargeCategory={chargeCategory} 
                                              filtering={filtering}
                                              filtered={filtered}
                                              count={count}
                                              
                                              mdfPanier={update}
                                              list={list}/>} />
    <Route path="/panier" component={Panier}/>

    </Router>
    </Fragment>); 
}

export default App;
