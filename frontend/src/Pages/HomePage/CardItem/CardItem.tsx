import './CardItem.scss';
import { BASE_URL } from '../../../utils/fetchClient';

export const CardItem = () => {
  const product = {
    id: "1",
    categor: "phones",
    phoneId: "apple-iphone-7-32gb-black",
    itemId: "apple-iphone-7-32gb-black",
    name: "Apple iPhone 7 32GB Black",
    fullPrice: 400,
    price: 375,
    screen: "4.7' IPS",
    capacity: "32GB",
    color: "black",
    ram: "2GB",
    year: 2016,
    image: "img/phones/apple-iphone-7/black/00.jpg",
  }; 

    return (
      <div className='product'>
        <img 
          src={`${BASE_URL}/${product.image}`}
          alt={product.name}
          className={'product__image'}
        />
        <p className='product__name'>
          {product.name}
        </p>

        <div className='product__price price'>
          <p className='price__current'>{`$${product.price}`}</p>
          <p className="price__full">{`$${product.fullPrice}`}</p>
        </div>

        <div className="characteristic">
          <p className="characteristic__title">Screen</p>
          <p className="characteristic__value">{product.screen}</p>
        </div>

        <div className="characteristic">
          <p className="characteristic__title">Capacity</p>
          <p className="characteristic__value">{product.capacity}</p>
        </div>

        <div className="characteristic characteristic--last">
          <p className="characteristic__title">RAM</p>
          <p className="characteristic__value">{product.ram}</p>
        </div>

        <div className="buttons">
          <button
            className="buttons__buy"
            onClick={() => console.log('Test')}
            >
              Add to cart
          </button>
          <div className="buttons__favorite">
          </div>
        </div>

      </div>
    )
}
