import './CartItem.css';

export const CartItem = () => {
  return (
    <div className="cart-item">
      <div className="cart-item__info">
        <a href='/' className="cart-item__exit">
          X
        </a>

        <a
          href=""
          className="cart-item__link"
        >
          <img
            src="/"
            alt="Phone"
            className="cart-item__image"
          />
        </a>

        <p className="cart-item__title">
          Apple iPhone 11 Pro Max 64GB Gold (iMT9G2FS/A)
        </p>
      </div>

      <div className="cart-item__buy">
        <div className="cart-item__counter">
          <button className="cart-item__button cart-item__drop">
            -
          </button>

          <p className="cart-item__count">
            1
          </p>

          <button className="cart-item__button cart-item__raise">
            +
          </button>
        </div>

        <p className="cart-item__price">
          $1099
        </p>
      </div>
    </div>
  );
};