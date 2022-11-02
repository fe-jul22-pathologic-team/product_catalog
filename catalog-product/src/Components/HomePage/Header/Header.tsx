import { Favorites } from './Favorites';
import { Menu } from './Menu';
import { Logo } from './Logo';
import { Shop } from './Shop';
import './Header.css';
import { Link } from 'react-router-dom';


export const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="header__logo logo">
        <a href="#home" className="logo__link">
          <Logo />
        </a>
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
            <Link to="/menu" className="icons__link">
              <Menu />
            </Link>
          </li>
          <li className='icons__item icons__item--favorites'>
            <Link to="/favorites" className="icons__link">
              <Favorites />
            </Link>
          </li>
          <li className='icons__item icons__item--shop'>
            <Link to="/cart" className="icons__link">
              <Shop />
            </Link>
          </li>
        </ul>
      </div>
    </header>
  )
};
