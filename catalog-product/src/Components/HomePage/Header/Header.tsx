import { Favorites } from './Favorites';
import { Menu } from './Menu';
import { Logo } from './Logo';
import { Shop } from './Shop';
import './Header.css';


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
            <a href="#home" className="nav__link is-active">
              Home
            </a>
          </li>
          <li className="nav__item">
            <a href="#phones" className="nav__link">
              Phones
            </a>
          </li>
          <li className="nav__item">
            <a href="#tablets" className="nav__link">
              Tablets
            </a>
          </li>
          <li className="nav__item">
            <a href="#accessories" className="nav__link">
              Accessories
            </a>
          </li>
        </ul>
      </nav>

      <div className="icons header__icons">
        <ul className="icons__list">
          <li className='icons__item icons__item--menu'>
            <a href="#menu" className="icons__link">
              <Menu />
            </a>
          </li>
          <li className='icons__item icons__item--favorites'>
            <a href="#favorites" className="icons__link">
              <Favorites />
            </a>
          </li>
          <li className='icons__item icons__item--shop'>
            <a href="#shop" className="icons__link">
              <Shop />
            </a>
          </li>
        </ul>
      </div>
    </header>
  )
};
