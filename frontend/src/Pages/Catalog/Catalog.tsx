import './Catalog.scss';
import './CardItem.scss';
import { useSearchParams } from 'react-router-dom';
import { useEffect, useState } from "react";
import { getNumbers } from './helpers/getNumbers';
import { Pagination } from './Pagination/Pagination';
import { CatalogList } from './CatalogList';
import { Product } from '../../types/Product';
import { Footer } from '../../Components/Footer';
import { Header } from '../../Components/Header';
import { SortBy } from './types/SortBy';

type Props = {
  phoneProducts: Product[];
  isLoading: boolean;
  handleAdd: (phone: Product) => void
};

function sortCatalog(
  phones: Product[],
  sortBy: SortBy,
): Product[] {
  const templatePhones = [...phones]

  switch (sortBy) {
    case SortBy.Newest:
      return templatePhones.sort((phone1, phone2) => (
        phone2.year - phone1.year
      ))

    case SortBy.Oldest:
      return templatePhones.sort((phone1, phone2) => (
        phone1.year - phone2.year
      ))

    case SortBy.ByPrice:
      return templatePhones.sort((phone1, phone2) => (
        phone2.price - phone1.price
      ))

    default:
      return templatePhones;
  }
}

export const Catalog: React.FC<Props> = ({
  phoneProducts,
  isLoading,
  handleAdd,
}) => {
  const items = getNumbers(1, phoneProducts.length);
  const [searchParams, setSearchParams] = useSearchParams();
  const [page, setPage] = useState(+(searchParams.get('page') || 1));
  const [perPage, setPerPage] = useState(+(searchParams.get('perPage') || 10));
  const [sortType, setSortType] = useState<SortBy>(SortBy.Newest);


  useEffect(() => {
    const params = new URLSearchParams();

    params.append('page', `${page}`);
    params.append('perPage', `${perPage}`);

    setSearchParams(params.toString());
  }, [perPage, page, setSearchParams]);

  const from = ((page - 1) * perPage) + 1;
  const to = Math.min(items.length, page * perPage);

  const countModels = phoneProducts.length;

  const handlePageChange = (newPage: number) => {
    setPage(newPage);
  };

  const sortedCatalog = sortCatalog(
    phoneProducts,
    sortType,
  );

  const selectSortType = (
    event: React.ChangeEvent<HTMLSelectElement>,
  ) => {
    if (event.target.value === 'Newest') {
      setSortType(SortBy.Newest);
    } else if (event.target.value === 'Oldest') {
      setSortType(SortBy.Oldest);
    } else {
      setSortType(SortBy.ByPrice);
    }
  };

  return (
    <>
      <Header />

      <section className="catalog">
        <div className="navigation">
          <a href="/" className='navigation__link-homePage'>
          </a>

          <div className="navigation__nesting">&gt;</div>

          <p className="navigation__current">Phones</p>
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
              value={sortType}
              className="sort-by__list"
              onChange={(event) => selectSortType(event)}
            >
              <option value="Newest">Newest</option>
              <option value="Oldest">Oldest</option>
              <option value="ByPrice">By price</option>
            </select>
          </div>

          <div className="catalog__items-on-page">
            <p className="sort-by">
              Items on page
            </p>

            <select
              className="sort-by__list"
              value={perPage}
              onChange={event => {
                setPerPage(+event.target.value);
                setPage(1);
              }}
            >
              <option value="10">10</option>
              <option value="20">20</option>
            </select>
          </div>
        </div>

        <CatalogList
          phones={phoneProducts}
          from={from}
          to={to}
          handleAdd={handleAdd}
          isLoading={isLoading}
          sortedCatalog={sortedCatalog}
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