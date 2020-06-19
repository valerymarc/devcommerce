import React from 'react';

import SideMenu from '../components/SideMenu';
import List from '../components/List';


const Home = props => {
    const {category, chargeCategory, filtering, filtered, list} = props
    return ( <div>
      <div className="container">
            
       <div className="row">
         <div className="col-sm-2 formal">
           <SideMenu chargeCategory={chargeCategory} category={category}/>
         </div>
         <div className="col-sm">
           <div className="row">
            <List  data={filtering ? filtered : list[category]}  category={category}/>
          
           </div>
         </div>
       </div>
       </div> 
    </div> );
}
 
export default Home;