import { useContext } from 'react';
import { CartContext } from '../../../App';
import './CartBall.scss';

export const CartBall: React.FC = () => {
  const cartLength = useContext(CartContext).length;

  return cartLength > 0
    ? (
      <div className="cart-ball">
        {cartLength}
      </div>
    )
    : null;
};
