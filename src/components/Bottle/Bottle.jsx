import './Bottle.css'
const Bottle = ({bottle,handleAddtoCart,handleBottlePic}) => {
    const {name,img,price} = bottle
    return (
        <div className="bottle">
            <img src={img} alt="" />
            <h2>Bottle: {name}</h2>
            <h3>Price: {price}</h3>
            <button onClick={()=>{handleAddtoCart(bottle);handleBottlePic(img);}}>Purchase</button>
            {/* <button onClick={()=>handleBottlePic(img)}>Cart</button> */}
        </div>
    );
};

export default Bottle;