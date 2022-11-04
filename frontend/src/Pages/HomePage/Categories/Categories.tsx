import './Categories.scss';

const phone_image = require('../../../img/category-phones.png');
const tablet_image = require('../../../img/category-tablets.png');
const accessories_image = require('../../../img/category-accessories.png');

export const Categories = () => {
  const mobile_phones = {
    name: 'mobile_phones',
    title: 'Mobile phones',
    amount: 95,
    image: phone_image,
  };

  const tablets = {
    name: 'tablets',
    title: 'Tablets',
    amount: 24,
    image: tablet_image,
  };

  const accessories = {
    name: 'accessories',
    title: 'Accessories',
    amount: 100,
    image: accessories_image,
  };

  const categories = [mobile_phones, tablets, accessories];

  return (
    <section className="categories">
      <h2 className="categories__title">
        Shop by category
      </h2>
      {categories.map(({name, title, amount, image}) => (
        <>
          <div className={`categories__${name}`}>
            {/* <img 
              src={image} 
              alt="category_image" 
              className="categories__image"
            /> */}
          </div>

          <h4 className="categories__subtitle">
            {title}
          </h4>

          <p className="categories__amount">
            {`${amount} models`}
          </p>
        </>
      ))}
    </section>
  );
}