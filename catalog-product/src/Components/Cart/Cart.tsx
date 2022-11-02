import { Footer } from "../HomePage/Footer";
import { Header } from "../HomePage/Header";
import { Vector } from './Vector';
import './Cart.css';
import { CartItem } from "../CartItem";
import { Product } from "../../types/Product";

type Props = {
  cartProducts: Product[];
  setCartProducts: React.Dispatch<React.SetStateAction<Product[]>>;
};

export const Cart: React.FC<Props> = ({ cartProducts, setCartProducts }) => {
  const totalPrice = cartProducts.map(({ price }) => price).reduce((a, b) => a + b, 0);

  return (
    <>
      <Header />
      <div className="cart">
        <div className="cart__container">
          <div className="backButton">
            <a href="back" className="backLink">
              <Vector />
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
            {cartProducts.length > 0
              ? (
                <>
                  <ul className="cart__list">
                    {cartProducts.map((product) => (
                      <li className="cart__item" key={product.id}>
                        <CartItem 
                          products={cartProducts}
                          product={product} 
                          setCartState={setCartProducts} 
                        />
                      </li>
                    ))}
                  </ul>
                  <div className="cart__bill">
                    <div className="bill">
                      <span className="totalPrice">{`${totalPrice}$`}</span>
                      <span className="totalItems">Total for {cartProducts.length} items</span>
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
                </>
              )
              : (
                <h1> Cart is empty</h1>
              )}
          </form>
        </div>
      </div>

      <Footer />
    </>
  );
};
