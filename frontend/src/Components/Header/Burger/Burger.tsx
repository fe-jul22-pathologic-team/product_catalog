import { FC } from 'react';
import { Link } from 'react-router-dom';
import { Favorites } from '../Favorites';
import { Logo } from '../Logo';
import { Menu } from '../Menu';
import { Shop } from '../Shop';
import classNames from 'classnames';
import './Burger.scss';
type Props = {
    active: boolean;
    toggleBurgerMenu: () => void;
};

const Burger: FC<Props> = ({
    active,
    toggleBurgerMenu,
}) => {

    const menuList = [
        {id: 0, link: "/home", title: 'Home'},
        {id: 1, link: "/phones", title: 'Phones'},
        {id: 2, link: "/tablets", title: 'Tablets'},
        {id: 3, link: "/accessories", title: 'Accessories'},
    ];

    return (
        <div className={classNames('burger', { 'burger-hidden': !active })}>
            <div className='burger__header'>
                <div className='burger__logo'>
                    <Logo/>
                </div>
                <div className='burger__button' onClick={toggleBurgerMenu}>
                    <Menu/>
                </div>
            </div>
            <div className='burger__main'>
                <ul className='burger__list'>
                    {menuList.map(item => 
                        <li key={item.id} onClick={toggleBurgerMenu}>
                            <Link to={item.link} className='burger__item'>
                                {item.title.toUpperCase()}
                            </Link>
                        </li>
                    )}
                </ul>
            </div>
            <div className='burger__footer'>
                    <Link to="/favourites" className='burger__favorites' onClick={toggleBurgerMenu}>
                         <Favorites />
                    </Link>
                    <Link to="/cart" className='burger__favorites' onClick={toggleBurgerMenu}>
                        <Shop />
                    </Link>
            </div>
        </div>
    );
};

export default Burger;
