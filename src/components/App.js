import React, {useState} from 'react'
import '../styles/App.css';
import Filter from './Filter';
import AppContext from '../context/contextApi.js';
import data from "../data";
import { Routes, Route } from 'react-router-dom';

import { ToastContainer, toast } from 'react-toast';
import ShoppingCart from './ShoppingCart';
import FormDetails from './FormDetails';

const App = () => {

  const [filterData , setFilterData] = useState([]);
  const [search , setSearch] = useState("")
  const [color, setcolor] = useState("")
  const success = ()=>{
    toast.success("Product added to cart success !")
  }

  const error = () =>{
    toast("Cart is Empty add item to view Cart !")
  }

    const shop = () =>{
      toast.success("Order Placed Successfully")
    }

  return (
    <AppContext.Provider value={{
      data:data,
      search:search,
      filterData:filterData,
      setFilterData:setFilterData,
      success:success,
      shop:shop,
      setSearch:setSearch,
      color:color,
      setcolor:setcolor,
      error:error
    }}>
      <div id="main">
        
        <Routes>
        <Route path="/" element={<Filter />} />
        <Route path='/shopping-cart' element={<ShoppingCart />}/>
        <Route path='/confirm-order' element={<FormDetails  />}/>
        
        </Routes>
      </div>
      <ToastContainer />
    </AppContext.Provider>
  )
}


export default App;
