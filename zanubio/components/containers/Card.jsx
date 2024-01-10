import React from 'react';

import classlist from 'zanubio/utils/classlist';

const Card = ({ className = '', ...props }) => {
    return (
        <div {...props} className={classlist('card', className)} />
    );
}

export default Card;
