'use client';
import { useState } from 'react';

import BurgerMenuSvg from 'zanubio/assets/icons/BurgerMenu.svg';
import Icon from 'zanubio/components/Icon';
import Logo from 'src/components/nav/Logo';
import MainButton from 'zanubio/components/buttons/MainButton';
import MainLinks from 'src/components/nav/MainLinks';
import NavLink from 'zanubio/components/links/NavLink';

import style from './Header.module.css';

const Header = () => {
    const [isOpen, setOpen] = useState(false);

    return (
        <header className={style.header}>
            <NavLink href='#'>
                <Logo />
            </NavLink>

            <BurgerMenuSvg className={style['nav-icon']}
                onClick={() => setOpen(isOpen => !isOpen)}
            />

            {isOpen && <nav className={style.nav}>
                <MainLinks />

                <div className={style.auth}>
                    <NavLink href="#" >
                        Log In
                    </NavLink>x

                    <NavLink href="#">
                        <MainButton>
                            Sign Up

                            <Icon name={'ArrowCorner'} />
                        </MainButton>
                    </NavLink>
                </div>
            </nav>}
        </header>
    );
}

export default Header;
