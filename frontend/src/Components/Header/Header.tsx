import { Favorites } from './Favorites';
import { Menu } from './Menu';
import { Logo } from './Logo';
import { Shop } from './Shop';
import './Header.scss';
import { Link } from 'react-router-dom';
import { CartBall } from './CartBall';

type Props = {
  toggleBurgerMenu: () => void;
};

export const Header: React.FC<Props> = ({ toggleBurgerMenu }) => {

  return (
    <header className="header">
      <div className="header__logo logo">
        <Link to="/home" className="logo__link">
          <Logo />
        </Link>
      </div>

      <nav className="header__nav nav">
        <ul className="nav__list">
          <li className="nav__item">
            <Link to="/home" className="nav__link is-active">
              Home
            </Link>
          </li>
          <li className="nav__item">
            <Link to="/phones" className="nav__link">
              Phones
            </Link>
          </li>
          <li className="nav__item">
            <Link to="/tablets" className="nav__link">
              Tablets
            </Link>
          </li>
          <li className="nav__item">
            <Link to="/accessories" className="nav__link">
              Accessories
            </Link>
          </li>
        </ul>
      </nav>

      <div className="icons header__icons">
        <ul className="icons__list">
          <li className='icons__item icons__item--menu'>
            <div className="icons__link" onClick={toggleBurgerMenu}>
              <Menu />
            </div>
          </li>
          <li className='icons__item icons__item--favorites'>
            <Link to="/favourites" className="icons__link">
              <Favorites />
            </Link>
          </li>

          <li className='icons__item icons__item--shop'>
            <Link to="/cart" className="icons__link">
              <CartBall />
              <Shop />
            </Link>
          </li>
        </ul>
      </div>
    </header>
  )
};
