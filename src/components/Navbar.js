import React,{useContext} from 'react'
import NavContext from '../context/contextApi'
import {useNavigate } from 'react-router-dom'

import './NavBar.css'

function Navbar() {

  const navigate = useNavigate();
  const {filterData,error, setSearch,data} = useContext(NavContext)

  const handleCart = ()=> {
    if(filterData.length > 0){
      navigate("shopping-cart")
    }else{
      error();
    }
  }

  const handleSearch = (e) => {
    const value = e.target.value.toLowerCase();
    let searchData;
    if(value==="men"){
       searchData = data.filter(item => item.gender.includes("M"))
    }else if (value === "women") {
       searchData = data.filter(item => item.gender.includes("F"))

    }else {
       searchData = data.filter(item => item.name.toLowerCase().includes(value) || item.description.toLowerCase().includes(value))
    }
    setSearch(searchData);
  }

  return (
    <nav>
        <div className="icon-holder">
        <img src="amir.jfif" alt="NavLogo" />
        </div>
        <div className="cate">
          <h4 onClick={()=> setSearch(data.filter(item=> item.gender.includes("M")))}>Men</h4>
          <h4 onClick={()=> setSearch(data.filter(item=> item.gender.includes("F")))}>Women</h4>
          <h4 onClick={()=> setSearch(data.filter(item=> item.name.toLowerCase().includes("ki")|| item.description.toLowerCase().includes("ki")))}>Kids</h4>
        </div>
        <input type="text" onChange={handleSearch} placeholder='Search for products, brands and more'/>
        
        <div className="cart-holder" onClick={handleCart}>
        <img src="shopping-cart-solid.svg" alt="cart" />
        <div className="cart-list-length">{filterData.length}</div>
        </div>
    </nav>
  )
}

export default Navbar