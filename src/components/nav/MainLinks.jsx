import React from 'react';

import NavLink from 'zanubio/components/links/NavLink';
import classlist from 'zanubio/utils/classlist';

import style from './MainLinks.module.css';

const MainLinks = ({ className = '', ...props }) => {
    return (
        <ul className={classlist(className, style.list)} {...props}>
            <li>
                <NavLink href="#features">
                    Features
                </NavLink>
            </li>
            <li>
                <NavLink href="#benefits">
                    Benefits
                </NavLink>
            </li>
            <li>
                <NavLink href="#howitworks">
                    How it Works
                </NavLink>
            </li>
            <li>
                <NavLink href="#pricing">
                    Pricing
                </NavLink>
            </li>
            <li>
                <NavLink href="#testimonials">
                    Testimonials
                </NavLink>
            </li>
        </ul>
    );
}

export default MainLinks;
