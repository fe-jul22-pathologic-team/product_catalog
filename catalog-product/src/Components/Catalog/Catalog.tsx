import { CardItem } from '../HomePage/CardItem';
import { CardList } from './CardList';
import './Catalog.css';
import phones from '../../api/phones.json';


export const Catalog = () => {
  const countModels = phones.length;

  return (
    <>
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
            >
              <option value="sixteen" selected>16</option>
              <option value="four">4</option>
            </select>
          </div>
        </div>

        <div className="catalog__list">
          <CardList />
        </div>
      </section>
    </>
  );
};