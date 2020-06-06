import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux'
import { store } from './lib/store'
import * as serviceWorker from './serviceWorker';
import {AppContainer} from './pages/containers';
import { addToPanier } from './lib/action';


//Pour initialiser le store
console.log(store.getState())
const unsubscribe = store.subscribe(()=> console.log(store.getState()))
//store.dispatch(addToPanier({name:"citron"}, 2))
//store.dispatch(addToPanier({name:"kiwi"}, 5))
unsubscribe()


{/*  <React.StrictMode>*/}
ReactDOM.render(
  
   <Provider store={store}>
    <AppContainer/>
    </Provider>
  , document.getElementById('root')
); 

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();





