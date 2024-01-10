import React from 'react';

import classlist from 'zanubio/utils/classlist';

import style from './Section.module.css';

const Section = ({ className, ...props }) => {
    return (
        <section className={classlist(className, style.section)} {...props} />
    );
}

export default Section;
