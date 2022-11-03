import { useCallback, useState } from 'react';
import { Product } from '../../types/Product';
import './CartItem.scss';
import { BASE_URL } from '../../utils/fetchClient';

type Props = {
  product: Product;
  products: Product[];
  setCartState: React.Dispatch<React.SetStateAction<Product[]>>;
  setTotal: React.Dispatch<React.SetStateAction<number>>
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
  setTotal,
}) => {
  const deleteProduct = useCallback(() => {
    const filterProducts = products.filter(item => item !== product);

    setCartState(filterProducts);
  }, [product, products, setCartState]);

  const [productCount, setProductCount] = useState(products.filter(item => item === product).length);

  const plusProduct = useCallback(() => {
    products.push(product);

    setProductCount(products.filter(item => item === product).length);

    setCartState(products);

    setTotal(products.map(({ price }) => price).reduce((a, b) => a + b, 0));
  }, [product, products, setCartState, setTotal]);

  const minusProduct = useCallback(() => {
  const indexOfProduct = products.indexOf(product);

  products.splice(indexOfProduct, 1);

    setCartState(products);

    setProductCount(products.filter(item => item === product).length);
    setTotal(products.map(({ price }) => price).reduce((a, b) => a + b, 0));
  }, [product, products, setCartState, setTotal]);

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
            src={`${BASE_URL}/${image}`}
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

          <button className="cart-item__button cart-item__raise" onClick={plusProduct}>
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
