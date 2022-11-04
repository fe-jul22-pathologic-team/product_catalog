import './Cart.scss';
import { Product } from "../../types/Product";
import { MainCart } from './MainCart';

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

    return result.sort((product1, product2) => product1.price - product2.price);
  }

  const visibleProducts = removeDuplicate();

  return (
      <MainCart
        visibleProducts={visibleProducts}
        cartProducts={cartProducts}
        setCartProducts={setCartProducts}
      />
  );
};
