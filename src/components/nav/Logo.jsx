'use client';
import React from "react";
import LogoSVG from "../../assets/logo.svg";
import style from "./Logo.module.css";

const Logo = () => {
    return (
        <div className={style.logo}>
            <LogoSVG />
            IntelliFusion
        </div>
    );
}

export default Logo;
