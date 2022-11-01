import { useEffect, useState } from "react";
import { Card } from "../types/Card";
import phones from '../../../api/phones.json';
import './CardItem.css';

type Props = {
  from: number;
  to: number;
};

export const CardList: React.FC<Props> = (from, to) => {
  const [phonesFromServer, setPhonesFromServer] = useState<Card[]>([]);

  useEffect(() => {
    setPhonesFromServer(phones);
  }, []);

  return (
    <>
      {phonesFromServer.map((phone: Card) => (
        <div className='phone'>
          <img
            src={phone.image}
            alt={phone.name}
            className={'phone__image'}
          />
          <p className='phone__name'>
            {phone.name}
          </p>

          <div className='phone__price price'>
            <p className='price__current'>{`$${phone.price}`}</p>
            <p className="price__full">{`$${phone.fullPrice}`}</p>
          </div>

          <div className="characteristic">
            <p className="characteristic__title">Screen</p>
            <p className="characteristic__value">{phone.screen}</p>
          </div>

          <div className="characteristic">
            <p className="characteristic__title">Capacity</p>
            <p className="characteristic__value">{phone.capacity}</p>
          </div>

          <div className="characteristic characteristic--last">
            <p className="characteristic__title">RAM</p>
            <p className="characteristic__value">{phone.ram}</p>
          </div>

          <div className="buttons">
            <div className="buttons__buy">Add to cart</div>
            <div className="buttons__favorite">
            </div>
          </div>

        </div>
      ))}
    </>
  );
};
