
import React from 'react'
import { useSelector } from 'react-redux'
import { cartState } from '../store';
import { ShoppingCartIcon } from '@heroicons/react/16/solid';
import CartContainer from './CartContainer';


const Navbar: React.FC = () => {

  // storeで定義した値の使用（useSelector）
  const { amount } = useSelector((store: cartState) => store.cart)
  const personName = useSelector((store: cartState) => store.person);
  console.log(personName);

  return (
    <>
      <nav>
        <div className="nav-center">
          <h3>Redux Shopping</h3>
          <div className="nav-container">
            <ShoppingCartIcon />
            <div className="amount-container">
              <p className="total-amount">{amount}</p>
            </div>
          </div>
        </div>
      </nav>
      <CartContainer/>
    </>
  )
}

export default Navbar