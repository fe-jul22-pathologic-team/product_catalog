import { Product } from "../../../types/Product";

type Props = {
  phones: Product[];
  from: number;
  to: number;
};

export const CatalogList: React.FC<Props> = ({ 
  phones,
  from,
  to, 
}) => {
  return (
    <div className="catalog__list">
    {phones.slice(from - 1, to).map((phone) => (
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
          <button className="buttons__buy">Add to cart</button>
          <button className="buttons__favorite">
          </button>
        </div>

      </div>
    ))}
  </div>
  );
}
