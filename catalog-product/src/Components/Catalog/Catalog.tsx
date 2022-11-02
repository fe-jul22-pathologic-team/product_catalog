import './Catalog.css';
import { useSearchParams } from 'react-router-dom';

import { useEffect, useState } from "react";

import { useCallback, useEffect, useState } from "react";

import './CardItem.css';
import { getNumbers } from './helpers/getNumbers';
import { Pagination } from './Pagination/Pagination';
import { Header } from '../HomePage/Header';
import { Footer } from '../HomePage/Footer';
import { Product } from '../../types/Product';
import { getProducts } from '../../api/products';
import { Loader } from '../Loader';
import { CatalogList } from './CatalogList';
import { Product } from '../../types/Product';

type Props = {
  phoneProducts: Product[];
  cartState: Product[];
  setCartState: React.Dispatch<React.SetStateAction<Product[]>>;
};


const items = getNumbers(1, 42);


export const Catalog: React.FC<Props> = ({ phoneProducts, setCartState, cartState }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  
  const [page, setPage] = useState(+(searchParams.get('page') || 1));
  
  const [perPage, setPerPage] = useState(+(searchParams.get('perPage') || 5));
  
  const [phonesFromServer, setPhonesFromServer] = useState<Product[]>([]);
  
  const [isLoading, setIsLoading] = useState(false);

  const loadData = async () => {
    const data = await getProducts();

    setPhonesFromServer(data);
  };

  useEffect(() => {
    loadData().then(() => setIsLoading(true));
  }, []);


  useEffect(() => {
    setPhonesFromServer(phoneProducts);
  }, [phoneProducts]);


  useEffect(() => {
    const params = new URLSearchParams();

    params.append('page', `${page}`);
    params.append('perPage', `${perPage}`);

    setSearchParams(params.toString());
  }, [perPage, page, setSearchParams]);

  const from = ((page - 1) * perPage) + 1;
  const to = Math.min(items.length, page * perPage);

  const countModels = phonesFromServer.length;

  const handlePageChange = (newPage: number) => {
    setPage(newPage);
  };

  const handleAdd = useCallback((phone: Product) => {
    if (!cartState.includes(phone)) {
      setCartState([...cartState, phone])
    };
  }, [cartState, setCartState]);

  return (
    <>
      <Header />

      <section className="catalog">
        <div className="navigation">
          <img src="./img/Home.svg" alt="" className="navigation__previous" />

          <span className="navigation__nesting">&gt;</span>

          <span className="navigation__current">Phones</span>
        </div>

        <h1 className="catalog__title">
          Mobile phones
        </h1>

        <p className="catalog__amount">
          {countModels} models
        </p>

        <div className="catalog__sorter">
          <div className="catalog__sort-by">
            <p className="sort-by">
              Sort by
            </p>

            <select
              name=""
              id=""
              className="sort-by__list"
            >
              <option value="newest" selected>Newest</option>
              <option value="oldest">Oldest</option>
              <option value="byPrice">By price</option>
            </select>
          </div>

          <div className="catalog__items-on-page">
            <p className="sort-by">
              Items on page
            </p>

            <select
              name=""
              id=""
              className="sort-by__list"
              value={perPage}
              onChange={event => {
                setPerPage(+event.target.value);
                setPage(1);
              }}
            >
              <option value="3">3</option>
              <option value="5">5</option>
              <option value="10">10</option>
              <option value="20">20</option>
            </select>
          </div>
        </div>

        {
          isLoading
            ? (
              <div className="catalog__list">
                {phonesFromServer.slice(from - 1, to).map((phone: Product) => (
                <div
                  className='phone'
                  key={phone.id}
                >
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
              </div>
            )
            : <Loader />
        }

        <Pagination
          total={items.length}
          perPage={perPage}
          currentPage={page}
          onPageChange={handlePageChange}
        />
      </section>

      <Footer />

        <select
          name=""
          id=""
          className="sort-by__list"
          value={perPage}
          onChange={event => {
            setPerPage(+event.target.value);
            setPage(1);
          }}
        >
          <option value="3">3</option>
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="20">20</option>
        </select>
      </div>
    </div>

    <CatalogList 
      phones={phonesFromServer} 
      from={from} 
      to={to}
      handleAdd={handleAdd}
    />

    <Pagination
    total={items.length}
    perPage={perPage}
    currentPage={page}
    onPageChange={handlePageChange}
  />
    </section>

    <Footer />
    </>
  );
};