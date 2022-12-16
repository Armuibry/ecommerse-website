import React, {useState,useContext} from 'react'
import CartContext from '../context/contextApi'


import './Model.css'

function Model({ prod, setFlag }) {

    const {filterData, setFilterData,success} = useContext(CartContext);

    const [color , setColor] = useState();
    const [size , setSize] = useState("");

    const option={
        border: "1px solid green"
    }

    const handleCart = ()=>{
        if(size !== ""){
            setFilterData([...filterData,{prod, size:size}]);
            setFlag(false)
            success()
        }
        
    }

    const changeColor = (e)=>{
        setColor(option)
        setSize(e.target.innerText)
    }
    return (
        <div className='product-modal'>
            <div className="crossbtn">
            <span onClick={()=>setFlag(false)}>X</span>
            </div>
            <div className="cross">
                <div className="img">
                    {prod.otherImages.map((image,index) => <img key={index} src={image} alt="ProductImage"/>)}
                </div>
                <div className="details">
                    <h3>{prod.name}</h3>
                    <i>{prod.description}</i>
                    <p>RS. {prod.finalPrice}</p>
                    <strike>{prod.strickPrice}</strike>
                    <p>{prod.discount}% OFF</p>
                    <div className="size">
                        {
                            prod.productSize.split(",").map((size,index) => <button key={index} style={color} onClick={changeColor}>{size}</button>)
                        }
                    </div>
                    {
                        size?<p style={{color:"white",marginTop: "10px"}}>Selected Size: {size} </p>
                        :
                        <p style={{color:"white",marginTop: "10px"}}>Please Select Size: {size} </p>
                    }
                    
                    <button onClick={handleCart}>Add to cart</button>
                    
                </div>
            </div>



        </div>
    )
}

export default Model