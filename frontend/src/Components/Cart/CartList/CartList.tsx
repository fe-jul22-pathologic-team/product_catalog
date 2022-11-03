import { useCallback, useState } from "react";
import { Product } from "../../../types/Product";
import { CartItem } from "../CartItem";

type Props = {
  visibleProducts: Product[];
  cartProducts: Product[];
  setCartProducts: (value: React.SetStateAction<Product[]>) => void;
};

export const CartList: React.FC<Props> = ({ 
  visibleProducts, 
  cartProducts,
  setCartProducts,
}) => {
  const [totalPrice, setTotalPrice] = useState(cartProducts.map(({ price }) => price).reduce((a, b) => a + b, 0));

  const handleBuy = useCallback(() => {
    alert('Lol!!!');

    setCartProducts([]);
  }, [setCartProducts])

  return (
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
  );
};
