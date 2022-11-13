import "./BakeryItem.css";
export default function BakeryItem(props){
    return (
    <div>
        <img src={props.info.image}/>
        <div class="text">
            <h1>{props.info.name}</h1>
            <p>{props.info.description}</p>
            <p>{props.info.price}</p>
            <button onClick={() => props.setCart([...props.cart, props.info])} > Add to Cart!</button>
        </div>
    </div>
    );
}