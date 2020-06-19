import React, {Fragment, useState, useEffect, useContext} from 'react';
import {Link} from 'react-router-dom';
import {UserProfileContext} from '../lib/UserProfileContext';
import '../style.css';

const Checkout = () => {
const [isValid, setValid] = useState(false)
const [active, setActive] = useState('disabled')
const value = useContext(UserProfileContext)

const {
  firstname,
  lastname,
  email,
  address,
  zipCode,
  city,
  setUserProfileContext
} = value
const validation = () =>{
  let errors = []
  const inputs = document.querySelectorAll(".form-control")
  inputs.forEach(input=> {
    !input.value ? errors.push(input) : errors.length && errors.pop()
  })
  console.log(errors)
  setValid(!errors.length)
 console.log("Valeur de isValid : "+isValid)
  
  
  
  if(isValid){
    setActive('')
  }else{
    setActive('disabled')
  }
  
}


useEffect(()=>{
  validation()
  
  
})

{/*if(valid===0){active='disabled'}
if(valid===1){active=''}*/}

    return (<Fragment>
<div className="col-sm-6 offset-3">
          <h2>Checkout</h2>
          <br />
          <form>
            <div className="row">
              <div className="col">
                <input
                  type="text"
                  className="form-control"
                  placeholder="First name"
                  property=""
                  name="firstname"
                  defaultValue={firstname}
                  onChange={e=>{
                    setUserProfileContext({ [e.target.name] : e.target.value})
                  }}/>
              </div>
              <div className="col">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Last name"
                  property=""
                  name="lastname"
                  defaultValue={lastname}
                  onChange={e=>{
                    setUserProfileContext({ [e.target.name] : e.target.value})
                  }}/>
              </div>
            </div>
            <br />
            <div className="form-group">
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                placeholder="Email address"
                property=""
                name="email"
                defaultValue={email}
                onChange={e=>{
                  setUserProfileContext({[e.target.name] : e.target.value})
                }}/>
              <small id="emailHelp" className="form-text text-muted">
                We'll never share your email with anyone else.
              </small>
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                id="exampleInputEmail1"
                placeholder="Address"
                property=""
                name="address"
                defaultValue={address} 
                onChange={e=>{
                  setUserProfileContext({[e.target.name] : e.target.value})
                }}/>
            </div>
            <div className="row">
              <div className="col">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Postal Code"
                  property=""
                  name="zipCode"
                  defaultValue={zipCode} 
                  onChange={e=>{
                    setUserProfileContext({[e.target.name] : e.target.value})
                  }}/>
              </div>
              <div className="col">
                <input
                  type="text"
                  className="form-control"
                  placeholder="City"
                  property=""
                  name="city"
                  defaultValue={city} 
                  onChange={e=>{
                    setUserProfileContext({[e.target.name] : e.target.value})
                  }}/>
              </div>
            </div>
            <br />
            
              <Link to="confirm" className={'white btn btn-light btn-lg btn-block bg-crimson checkout '+active}>
                Confirm
              </Link>
            
          </form>
        </div>
    </Fragment>  );
}
 
export default Checkout;