import { Footer } from "../HomePage/Footer";
import { Header } from "../HomePage/Header";
import { Vector } from './Vector';
import { CardItem } from '../HomePage/CardItem/CardItem';
import './Cart.css';

export const Cart = () => {
  return (
    <>
    <Header />
      <div className="cart">
        <div className="cart__container">
          <div className="backButton">
            <a href="back" className="backLink">
              <Vector/>
              Back
            </a>
          </div>
          <span className="cart__logo">
            Cart
          </span>
          <form 
            className="cart__form" 
            action="submit"
            id="cart_form"
          >
            <ul className="cart__list">
              <li className="cart__item">
                <CardItem />
              </li>
            </ul>
            <div className="cart__bill">
              <div className="bill">
                <span className="totalPrice">2000$</span>
                <span className="totalItems">Total for 3 items</span>
              </div>
              <button 
                className="bill__button" 
                type="submit" 
                form="cart__form" 
                value="Submit"
              >
                Checkout
              </button>
            </div>
          </form>
        </div>
      </div>
      
    <Footer />
    </>
  );
};
