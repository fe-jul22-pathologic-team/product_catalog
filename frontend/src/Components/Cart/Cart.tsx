import { Footer } from "../HomePage/Footer";
import { Header } from "../HomePage/Header";
import { Vector } from './Vector';
import './Cart.css';
import { CartItem } from "../CartItem";
import { Product } from "../../types/Product";
import { useCallback, useState } from "react";

type Props = {
  cartProducts: Product[];
  setCartProducts: React.Dispatch<React.SetStateAction<Product[]>>;
};

export const Cart: React.FC<Props> = ({ cartProducts, setCartProducts }) => {
  const removeDuplicate = () => {
    const result: Product[] = [];

    cartProducts.map(product => {
      if (!result.includes(product)) {
        result.push(product);
      }

      return result;
    });

    return result;
  }

  const visibleProducts = removeDuplicate();
  const [totalPrice, setTotalPrice] = useState(cartProducts.map(({ price }) => price).reduce((a, b) => a + b, 0));

  const handleBuy = useCallback(() => {
    alert('Lol!!!');

    setCartProducts([]);
  }, [setCartProducts])

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
          <div
            className="cart__form"
            id="cart_form"
          >
            {visibleProducts.length > 0
              ? (
                <>
                  <ul className="cart__list">
                    {visibleProducts.map((product) => (
                      <li className="cart__item" key={product.id}>
                        <CartItem 
                          products={cartProducts}
                          product={product} 
                          setCartState={setCartProducts}
                          setTotal={setTotalPrice}
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
                      form="cart__form"
                      value="Submit"
                      onClick={handleBuy}
                    >
                      Checkout
                    </button>
                  </div>
                </>
              )
              : (
                <h1> Cart is empty</h1>
              )}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};
