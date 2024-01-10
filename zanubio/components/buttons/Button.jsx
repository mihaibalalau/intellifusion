import React from "react";
import classlist from "zanubio/utils/classlist";

const Button = ({ className = '', ...props }) => {
    return (
        <button {...props} className={classlist('button', className)} />
    );
}

export default Button;
