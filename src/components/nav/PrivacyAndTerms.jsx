import React from 'react';

import classlist from 'zanubio/utils/classlist';
import NavLink from 'zanubio/components/links/NavLink';

import style from './PrivacyAndTerms.module.css';

const PrivacyAndTerms = ({ className = '', ...props }) => {
    return (
        <ul className={classlist(className, style.list)} {...props}>
            <li>
                <NavLink href="#">
                    Privacy Policy
                </NavLink>
            </li>
            <li>
                <NavLink href="#">
                    Terms of Service
                </NavLink>
            </li>
            <li>
                <NavLink href="#">
                    Cookies Settings
                </NavLink>
            </li>
        </ul>
    );
}

export default PrivacyAndTerms;
