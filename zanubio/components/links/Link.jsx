import React from "react";
import classlist from "zanubio/utils/classlist";

const Link = ({ className = '', ...props }) => {
    return (
        <a className={classlist(className, 'link')} {...props} />
    );
}

export default Link;
