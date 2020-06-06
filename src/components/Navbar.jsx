import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';


const Navbar = ({ filter, setFiltering,count })=>{
  
  return (
    <nav className="navbar green navbar-expand-lg navbar-light bg-light fixed-top">
        <Link className="navbar-brand crimson" to="/">   <i className="fas fa-shopping-cart"></i> Mes Courses en Ligne</Link>
      
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
      <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <div className="ml-auto cart">
          <div>
            <form className="search form-inline my-2 my-lg-0">
              <input
                className="form-control mr-sm-2"
                type="search"
                placeholder="trouver un produit"
                aria-label="Search"
                onChange={(e)=> {
                  setFiltering(e.target.value.length > 0)
                  filter(e.target.value)
                }}
                />
            </form>
          </div>
          <div className="menu-right">
             {/*Cart */}
            <Link to="/panier">
             <i className="fas fa-shopping-bag fa-2x grey"></i>
             
             <div class="p_icon">
                        <a href="#">
                          <i class="ti-eye"></i>
                        </a>
                        <a href="#">
                          <i class="ti-heart"></i>
                        </a>
                        <a href="#">
                          <i class="ti-shopping-cart"></i>
                        </a>
                      </div>
            


             <span className="badge badge-pill badge-success">{count}</span>
             </Link> 

            
             {/* <span class="badge badge-pill badge-success">{items.length > 0 && items.length}</span> */}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;