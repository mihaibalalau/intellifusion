import React from 'react';

import Button from 'zanubio/components/buttons/Button';
import Card from 'zanubio/components/containers/Card';
import classlist from 'zanubio/utils/classlist';
import H3 from 'zanubio/components/typography/H3';
import Icon from 'zanubio/components/Icon';

import style from './PricingCard.module.css';

const PricingCard = ({
    name,
    pricePerMonth,
    features,
    className = '',
    ...props }) => {

    return (
        <Card className={classlist(style.card, className)} {...props}>

            <H3>
                {name}
            </H3>


            <div>{/** TODO change with P or smth */}
                {pricePerMonth}
            </div>

            <Button>
                Try for Free
                <Icon name={'ArrowCorner'} />
            </Button>


            <ul>
                {features.forEach(feature => <li key={feature}>{feature}</li>)}
            </ul>
        </Card>
    );
}

export default PricingCard;
