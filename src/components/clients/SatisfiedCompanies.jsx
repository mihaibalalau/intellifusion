'use client';
import React from 'react';

import Icon from 'zanubio/components/Icon';
import classlist from 'zanubio/utils/classlist';

import style from './SatisfiedCompanies.module.css';

const SatisfiedCompanies = ({ className = '', ...props }) => {
    return (
        <div className={classlist(style["satisfied-companies"], className)} {...props}>
            <Icon name={'MultiCircle'} />

            <span className={style.count}>1000+</span>
            Satisfied Companies
        </div>
    );
}

export default SatisfiedCompanies;
