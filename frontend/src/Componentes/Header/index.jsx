import "./style.css";
import ImgLogoHome from "../../Assets/img-logo-home.svg"
import React from 'react'

function Header(){
    return (
       <header>
        <img src={ImgLogoHome} alt=''/>
       </header>
    );
}

export default Header;