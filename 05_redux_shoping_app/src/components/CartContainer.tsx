import { useDispatch, useSelector } from "react-redux";
import { cartState } from "../store";
import CartItem from "./CartItem";
import { calcTotal, } from "../features/cart/CartSlice"
import { openModal } from "../features/modal/ModalSlice"
import { useEffect } from "react";


const CartContainer: React.FC = () => {
    const { amount, total, cartItem } = useSelector((state: cartState) => state.cart);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(calcTotal());
    },[cartItem])

    if (amount == 0) {
        return (
            <section>
                <header className="cart">
                    <h2>買い物かご</h2>
                    <h4 className="empty-cart">何も入ってません</h4>
                </header>
            </section>
        )
    } else {
        return (
            <section className="cart">
                <header>
                    <h2>買い物かご</h2>
                </header>
                <div>
                    {cartItem.map((item) => {
                        return <CartItem key={item.id} item={item} />
                    })}
                </div>
                <footer>
                    <hr />
                    <div className="cart-total">
                        <h4>
                            合計 <span>{total}円</span>
                        </h4>
                    </div>
                    <button className="btn clear-btn" onClick={() => dispatch(openModal())}>全削除</button>
                </footer>
            </section>
        )

    }
}

export default CartContainer;