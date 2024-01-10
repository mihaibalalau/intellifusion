import React from 'react';

import Card from 'zanubio/components/containers/Card';
import classlist from 'zanubio/utils/classlist';
import H3 from 'zanubio/components/typography/H3';
import P1 from 'zanubio/components/typography/P1';

import style from './IconCard.module.css';

const IconCard = ({
    title = '',
    icon,
    className = '',
    children = [],
    ...props }) => {

    return (
        <Card className={classlist(style.card, className)} {...props}>
            <Card className={style.icon}>
                {icon}
            </Card>

            <H3>
                {title}
            </H3>

            <P1>
                {children}
            </P1>
        </Card>
    );
}

export default IconCard;
