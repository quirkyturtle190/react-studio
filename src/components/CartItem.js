import "./BakeryItem.css";
export default function CartItem(props){
    return (
        <div>
            <div class="text">
                <p>{props.info.name} : {props.info.price}</p>
            </div>
        </div>
    );
}