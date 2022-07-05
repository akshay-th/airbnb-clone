import React from "react";
import Heroimg from "./hero-img.png";

export default function Hero(){
    return(
        <div className="hero-content">
        <div className="hero">
            <img src={Heroimg} alt="heroimg" />
           
            
            </div>
            <div className="heading">
         <h1>Online Experiences</h1>
         <p>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
         
    
        </div>
        </div>
    )
        
}