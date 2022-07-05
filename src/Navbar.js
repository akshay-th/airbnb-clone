import React from "react";
import Logo from "./airbnblogo.png"

export default function Navbar(){
    return(
        <nav className="navbar">
           <img src={Logo} alt="logo"/>

        </nav>
    )
}