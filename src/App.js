import "./App.css";
import { useState } from "react";
import bakeryData from "./assets/bakery-data.json";
import BakeryItem from "./components/BakeryItem";
import CartItem from "./components/CartItem";

/* ####### DO NOT TOUCH -- this makes the image URLs work ####### */
bakeryData.forEach((item) => {
  item.image = process.env.PUBLIC_URL + "/" + item.image;
});
/* ############################################################## */

function App() {
  // TODO: use useState to create a state variable to hold the state of the cart
  /* add your cart state code here */
    const [cartArr, setCartArr] = useState([])
  return (
    <div className="App">
        <div>
            {bakeryData.map((item, index) => ( <BakeryItem info={item} cart={cartArr} setCart={setCartArr}/>))}
        </div>
        <div>
            <h1>Cart</h1>
            {/* TODO: render a list of items in the cart */}
            {cartArr.map((item) => ( <CartItem info={item}/>))}
        </div>
    </div>
  );
}

export default App;
