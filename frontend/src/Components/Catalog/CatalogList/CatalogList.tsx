import { Product } from "../../../types/Product";
import { Loader } from "../../Loader";
import { BASE_URL } from "../../../utils/fetchClient";

type Props = {
  phones: Product[];
  from: number;
  to: number;
  handleAdd: (phone: Product) => void;
  isLoading: boolean;
  sortedCatalog: Product[];
  setCountProducts: (countProducts: number) => void;
};

export const CatalogList: React.FC<Props> = ({
  phones,
  from,
  to,
  isLoading,
  handleAdd,
  sortedCatalog,
  setCountProducts,
}) => {
  return (
    <>
      {
        isLoading
          ? (
            <div className="catalog__list">
              {sortedCatalog.slice(from - 1, to).map((phone) => (
              <div className='phone' key={phone.id}>
                <img
                  src={`${BASE_URL}/${phone.image}`}
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
                  <button className="buttons__buy" onClick={() => {
                    handleAdd(phone);

                    setCountProducts(1);
                  }}>Add to cart</button>
                  <button className="buttons__favorite">
                  </button>
                </div>

              </div>
              ))}
            </div>
          ) : <Loader />
      }
    </>
  );
}
