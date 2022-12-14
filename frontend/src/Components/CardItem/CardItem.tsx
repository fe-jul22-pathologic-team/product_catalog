import classNames from "classnames";
import { useContext } from "react";
import { CartContext } from "../../App";
import { Product } from "../../types/Product";
import { BASE_URL } from '../../utils/fetchClient';

interface Props {
  phone: Product;
  handleAdd: (phone: Product) => void;
}

export const CardItem: React.FC<Props> = ({ phone, handleAdd }) => {
  const {
    name,
    image,
    price,
    fullPrice,
    screen,
    capacity,
    ram,
  } = phone;

  const cartState = useContext(CartContext);

  const isAddedPhone = cartState.includes(phone);

  return (
    <div className='phone'>
      <img
        src={`${BASE_URL}/${image}`}
        alt={name}
        className={'phone__image'}
      />
      <p className='phone__name'>
        {name}
      </p>

      <div className='phone__price price'>
        <p className='price__current'>{`$${price}`}</p>
        <p className="price__full">{`$${fullPrice}`}</p>
      </div>

      <div className="characteristic">
        <p className="characteristic__title">Screen</p>
        <p className="characteristic__value">{screen}</p>
      </div>

      <div className="characteristic">
        <p className="characteristic__title">Capacity</p>
        <p className="characteristic__value">{capacity}</p>
      </div>

      <div className="characteristic characteristic--last">
        <p className="characteristic__title">RAM</p>
        <p className="characteristic__value">{ram}</p>
      </div>

      <div className="buttons">
        <button
          className={classNames(
            { 'buttons__buy': !isAddedPhone },
            { 'buttons__buy--active': isAddedPhone }
          )}
          onClick={() => {
            handleAdd(phone)
          }
          }
          disabled={isAddedPhone}
        >
          {isAddedPhone ? 'Added to cart' : 'Add to cart'}
        </button>
        <button className="buttons__favorite">
        </button>
      </div>

    </div>
  )
}
