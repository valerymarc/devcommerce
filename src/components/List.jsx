import React from 'react';
import Card from './Card';



const List = props =>{
    const  { data, category } = props;
    //const elements = data[category];
    console.log(data[0]);
    return (
        <div className="col-sm">
          <div className="row">
           {data.map(elt => <Card key={elt.ref} elt={elt}/>)}


            
          </div>
        </div>
      );
}

export default List;