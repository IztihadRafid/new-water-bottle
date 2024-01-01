import { useEffect } from "react";
import { useState } from "react";
import Bottle from "../Bottle/Bottle";
import './Bottles.css'
import { addToLS, getStoredCart } from "../../utilities/localstorage";
const Bottles = () => {
    const [bottles,setBottles]= useState([])
    const [cart,setCart] =useState([])
    const [cartPics,setCartPic] =useState([])


    useEffect(()=>{
       fetch('bottles.json')
       .then(res=>res.json())
       .then(data=> setBottles(data))
    },[])



    useEffect(()=>{
      const storedCart = getStoredCart()
      console.log(storedCart);
    },[])



    const handleAddtoCart = bottle =>{
      //console.log(bottle);
      const newCart = [...cart,bottle]
      setCart(newCart)
      addToLS(bottle.id)
    }



    const handleBottlePic = img =>{
      const newPic = [...cartPics,img]
      setCartPic(newPic)
    }


    const handleRemoveCart = ()=>{
      
    }

    return (
        <div>
            <h2>Bottles Available: {bottles.length}</h2>
            <h4>Cart {cart.length}</h4>
            <div className="cartPic-container">
              {
                cartPics.map((img)=>(<img src={img}></img>))
              }
            </div>
          <div className="bottle-container">
          {
                bottles.map(bottle=><Bottle key={bottle.id} 
                  handleAddtoCart={handleAddtoCart}
                  handleBottlePic={handleBottlePic} bottle={bottle}></Bottle>)
            }
          </div>
        </div>
    );
};

export default Bottles;