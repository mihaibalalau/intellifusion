import React from "react";
import Button from "./Button";
import classlist from "zanubio/utils/classlist";

const MainButton = ({ className = '', ...props }) => {
    return (
        <Button {...props} className={classlist(className, 'main')} />
    );
}

export default MainButton;
