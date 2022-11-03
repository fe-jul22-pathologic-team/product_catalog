import './Cart.scss';
import { Header } from "../../Components/Header";

import { Product } from "../../types/Product";
import { MainCart } from './MainCart';
import { Footer } from '../../Components/Footer';

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
    <>
      <Header />

      <MainCart
        visibleProducts={visibleProducts}
        cartProducts={cartProducts}
        setCartProducts={setCartProducts}
      />

      <Footer />
    </>
  );
};
