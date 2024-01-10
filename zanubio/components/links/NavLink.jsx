import React from "react";
import classlist from "zanubio/utils/classlist";
import Link from "./Link";

const NavLink = ({ className = '', ...props }) => {
    return (
        <Link className={classlist(className, 'nav')} {...props} />
    );
}

export default NavLink;
