import React, { useContext } from 'react'
import ShoppingCartContext from '../context/contextApi'
import { Scrollbars } from 'react-custom-scrollbars-2';

import './ShoppingCart.css'
import { Link } from 'react-router-dom';


function ShoppingCart() {

    const { filterData } = useContext(ShoppingCartContext);
    const Price = filterData.map(item => item.prod.finalPrice).reduce((acc, curr) => acc = parseInt(acc) + parseInt(curr))



    return (
        <div className='shopping-cart'>
            <h1>Checkout Page</h1>
            <div className="cart-wrap">
                <h3>Shopping Cart</h3>
                <div className="cart-items">
                    
                    <Scrollbars style={{ width: "100%", height: 350 }}>

                        {
                            filterData.map((product, index) =>

                                <div key={index} className="single-item">
                                    <div className="image">
                                        <img src={product.prod.otherImages[0]} alt=" productImage" />
                                    </div>
                                    <div className="name">
                                        <h4>{product.prod.name}</h4>
                                        <h5>{product.prod.description}</h5>
                                    </div>
                                    <div className="sizecart">
                                        <h5>Size: {product.size}</h5>
                                    </div>
                                    <div className="price">
                                        <p>Price: Rs. {product.prod.finalPrice}</p>
                                    </div>
                                </div>)
                        }


                    </Scrollbars>
                </div>
                <div className="checkout">
                    <h3>Total Items: 0{filterData.length}</h3>
                    <h3>Total Amount: Rs. {Price}</h3>
                    <Link to="/confirm-order">
                        <button>Checkout</button>
                    </Link>
                </div>

            </div>
            
            

        </div>
    )
}

export default ShoppingCart