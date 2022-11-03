import { Link } from "react-router-dom";
import { Product } from "../../../types/Product";
import { CartList } from "../CartList";
import { Vector } from "../Vector";

type Props = {
  visibleProducts: Product[];
  cartProducts: Product[];
  setCartProducts: (value: React.SetStateAction<Product[]>) => void;
};

export const MainCart: React.FC<Props> = ({
  visibleProducts,
  cartProducts,
  setCartProducts,
}) => {
  return (
    <div className="cart">
        <div className="cart__container">
          <div className="backButton">
            <Link to='/home' className="backLink">
              <Vector />
              Back
            </Link>
          </div>
          <span className="cart__logo">
            Cart
          </span>
          <CartList 
            visibleProducts={visibleProducts}
            cartProducts={cartProducts}
            setCartProducts={setCartProducts} 
          />
        </div>
      </div>
  );
};
