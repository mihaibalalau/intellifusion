import React from 'react';

import classlist from 'zanubio/utils/classlist';

import Button from './Button';

const HollowButton = ({ className = '', ...props }) => {
    return (
        <Button {...props} className={classlist('hollow', className)} />
    );
}

export default HollowButton;
