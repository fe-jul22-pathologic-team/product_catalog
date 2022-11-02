import { useState } from 'react';
import { Product } from '../../types/Product';
import './CartItem.css';

type Props = {
  product: Product;
  products: Product[];
  setCartState: React.Dispatch<React.SetStateAction<Product[]>>;
};

export const CartItem: React.FC<Props> = ({
  products,
  product, 
  product: {
    name,
    image,
    price,
  },
  setCartState,
}) => {
  const deleteProduct = () => {
    const filterProducts = products.filter(item => item !== product);

    setCartState(filterProducts);
  }

  const [productCount, setProductCount] = useState(1);

  const addedProduct = () => setProductCount(productCount + 1);
  const minusProduct = () => setProductCount(productCount - 1);

  return (
    <div className="cart-item">
      <div className="cart-item__info">
        <button className="cart-item__exit" onClick={deleteProduct}>
          X
        </button>

        <a
          href="/"
          className="cart-item__link"
        >
          <img
            src={image}
            alt="product"
            className="cart-item__image"
          />
        </a>

        <p className="cart-item__title">
          {name}
        </p>
      </div>

      <div className="cart-item__buy">
        <div className="cart-item__counter">
          <button className="cart-item__button cart-item__drop" onClick={minusProduct}>
            -
          </button>

          <p className="cart-item__count">
            {productCount}
          </p>

          <button className="cart-item__button cart-item__raise" onClick={addedProduct}>
            +
          </button>
        </div>

        <p className="cart-item__price">
          {price}
        </p>
      </div>
    </div>
  );
};
