import React from 'react';

import classlist from 'zanubio/utils/classlist';
import Logo from 'src/components/nav/Logo';
import MainLinks from 'src/components/nav/MainLinks';
import P2 from 'zanubio/components/typography/P2';
import PrivacyAndTerms from 'src/components/nav/PrivacyAndTerms';

import style from './Footer.module.css';

const Footer = ({ className = '', ...props }) => {
    return (
        <footer className={classlist(className, style.footer)} {...props}>
            <Logo />
            <MainLinks />
            <PrivacyAndTerms className={style.terms} />
            <P2 className={style.copyright}>
                © 2023 Zanubio. All rights reserved.
            </P2>
        </footer>
    );
}

export default Footer;
