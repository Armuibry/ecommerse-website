import React, {useState} from 'react'
import Model from './Model';

import './Card.css'

function Card({ image, name, description, finalPrice, oldPrice, discount,prod }) {

    const [flag , setFlag] = useState(false);

    return (
       <>
       {
          flag?(<Model setFlag={setFlag} prod={prod}/>):("")
        }
       <div className="card">
       <div className='indiv-tile-holder'>
       <img src={image} alt="ProductImage" 
       onClick={()=>{setFlag(true)}}
       />
       <h3>{name}</h3>
       <i>{description}</i>
       <div className="price">
       <p>Rs. {finalPrice}</p>
       <strike>{oldPrice}</strike>
       <p>{discount}% OFF</p>
       </div>
       </div>
       </div>
       </>
    )
}

export default Card