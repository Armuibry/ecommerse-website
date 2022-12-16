import React, { useContext,useState} from 'react'
import Card from './Card'
import AppContext from '../context/contextApi'


import './Filter.css'
import Navbar from './Navbar';


function Filter() {

  const { data,search,setSearch} = useContext(AppContext);
  const [checkbox , setCheckBox] = useState(false);
  const [sleeve , setSleeve] =useState(false);
  const [male , setMale] = useState("");
  const [value , setValue] = useState("new");


  return (
    <div className="main">
    <Navbar />
      <div className='filter-holder'>
        <div className="gender">
          <h4>Gender:-</h4>
          <div>
          <input onClick={
            (e)=> {
              // setRadio(e.target.value);
              setMale("Male")
              if(!search){
              setSearch(data.filter(item=> item.gender.includes("M")))
              }else if(search && checkbox){
                setSearch(data.filter(item=> item.gender.includes("M") && item.cat.toLowerCase().includes("w")))
                // setSearch(search.filter(item => item.cat.includes("W")))
              }else if(search && !checkbox){
                setSearch(data.filter(item=> item.gender.includes("M")))
              }
              console.log(value);
              

              
            }

          } type="radio" value="M" name='gender' id='male' /><label htmlFor="male">Male</label><br />
          <input onClick={
            (e)=> {
              // setRadio(e.target.value);
              setMale("Female")
              if(!search){
              setSearch(data.filter(item=> item.gender.includes("F")))
              }else if(search && checkbox){
                setSearch(data.filter(item=> item.gender.includes("F") && item.cat.toLowerCase().includes("w")))

              }else if(search && !checkbox){
                setSearch(data.filter(item=> item.gender.includes("F")))              
              }
            }
          } type="radio" value="F" name='gender' id='female' /><label htmlFor="female">Female</label>
          </div>
          
          
        </div>

        <div className="category">
          <h4>Categories:-</h4>
          <div>
          <input onChange={
            ()=> {
              setCheckBox(!checkbox)
              if(!search){
                setSearch(data.filter(item=> item.cat.toLowerCase().includes("w")))
              }
              else if(search && checkbox){
                setSearch(data.filter(item => male==="Male"?item.gender.includes("M"):item.gender.includes("F")))
              }else if(search && !checkbox)
              setSearch(data.filter(item => male==="Male"?item.gender.includes("M") && item.cat.toLowerCase().includes("w")
              :
              item.gender.includes("F") && item.cat.toLowerCase().includes("w")))
            }
            } type="checkbox" name='shirt' id='white' checked={checkbox}/><label htmlFor="male">White</label><br />
          <input onChange={
            ()=> {
              setSleeve(!sleeve);
              if(!search){
                setSearch(data.filter(item=> item.folded.toLowerCase().includes("y")))
              }
              else if(search && !sleeve && checkbox){

                setSearch(data.filter(item => male==="Male"? item.folded.toLowerCase().includes("y") 
                && item.cat.toLowerCase().includes("w")
                && item.gender.includes("M"):
                item.folded.toLowerCase().includes("y") 
                && item.cat.toLowerCase().includes("w")
                && item.gender.includes("F")
                ))
              }
              else if (search && sleeve && checkbox){
                setSearch(data.filter(item => male==="Male"?
               item.cat.toLowerCase().includes("w")
                && item.gender.includes("M"):
                item.cat.toLowerCase().includes("w")
                && item.gender.includes("F")
                ))
              }
              else if(!sleeve){
                setSearch(data.filter(item => male==="Male"?
                item.gender.includes("M") && item.folded.toLowerCase().includes("y") :
                item.gender.includes("F") && item.folded.toLowerCase().includes("y") 
                ))
              }
              else {
                setSearch(data.filter(item => male==="Male"?
                item.gender.includes("M"):
                item.gender.includes("F") 
                ))
              }
            }
            } 
            type="checkbox" name='shirt' id='folded' checked={sleeve}/><label htmlFor="female">Folded Sleeves</label>
          </div>
          
          
        </div>

        <div className="sort-holder">
          <select name='opns' onChange={
            (e)=>{
                setValue(e.target.value)
              if(search && e.target.value === "price"){
                setSearch(search.sort((a,b)=> a.finalPrice - b.finalPrice))
              }else if (search && e.target.value === "discount"){
                setValue("discount")
                setSearch(search.sort((a,b)=> a.discount - b.discount))
              }
              else if(!search && e.target.value === "price"){
                setSearch(data.sort((a,b)=> a.finalPrice - b.finalPrice))
              }else if (!search && e.target.value === "discount"){
                setValue("discount")
                setSearch(data.sort((a,b)=> b.discount - a.discount<0?-1:1))
              }
            }
          }>
            <option value="new">What's New</option>
            <option value="price">Price low to high</option>
            <option value="discount">Better Discount</option>
          </select>
        </div>

        </div>
        <div className="product-tile-holder">
          {
            search?search.map((product,index) =>
              <Card
                key={index}
                image={product.otherImages[0]}
                name={product.name}
                description={product.description}
                finalPrice={product.finalPrice}
                oldPrice={product.strickPrice}
                discount={product.discount}
                prod={product}
              />):data.map((product,index) =>
              <Card
                key={index}
                image={product.otherImages[0]}
                name={product.name}
                description={product.description}
                finalPrice={product.finalPrice}
                oldPrice={product.strickPrice}
                discount={product.discount}
                prod={product}
              />)
          }
         
        </div>
        
      </div>
      )
}

      export default Filter