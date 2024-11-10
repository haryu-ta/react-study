import { MinusCircleIcon, PlusCircleIcon } from "@heroicons/react/16/solid";
import { useDispatch } from "react-redux";
import { removeItem, addItem,downItem } from "../features/cart/CartSlice"

const CartItem = ({ item }: {
    item: {
        id: number;
        title: string;
        price: number;
        img: string;
        amount: number;
    }
}) => {

    const dispatch = useDispatch();

    const itemPlus = (id:number) => {
        dispatch(addItem(id));
    }

    return (
        <article className="cart-item">
            <img src={item.img} alt=""/>
            <div style={{ textAlign: "left" }}>
                <h4>{item.title}</h4>
                <h4 className="item-price">{item.price}円</h4>
                <button className="remove-btn" onClick={() => dispatch(removeItem(item.id))}>削除</button>
            </div>
            <div>
                <button className="amount-btn" onClick={() => itemPlus(item.id)}>
                    <PlusCircleIcon />
                </button>
                <p className="amount">{item.amount}</p>
                <button className="amount-btn" onClick={() => dispatch(downItem(item.id))}>
                    <MinusCircleIcon />
                </button>
            </div>
        </article>
    )
}
export default CartItem;