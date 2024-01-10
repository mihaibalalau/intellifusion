import React from "react";
import Link from "./Link";
import classlist from "zanubio/utils/classlist";

const ButtonLink = ({ className = '', ...props }) => {
    return (
        <Link className={classlist(className, 'button')} {...props} />
    );
}

export default ButtonLink;
