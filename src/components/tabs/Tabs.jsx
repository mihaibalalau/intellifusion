import React from 'react';

import Card from 'zanubio/components/containers/Card';
import classlist from 'zanubio/utils/classlist';

import style from './';

const Tabs = ({ active, options, className = '', ...props }) => {

    return (
        <Card style={classlist(className, style.tabs)} {...props}>
            {options.forEach(option => <div key={option} className={style.tab}>{option}</div>)}
        </Card>
    );
}

export default Tabs;
