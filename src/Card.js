import React from "react";
// import Image1 from "./image1.png"
import Star from "./Star.png"


export default function Card(props){
    let badgeText
    if(props.item.openSpots===0){
        badgeText="SOLD"
    }else if(props.item.location === "Online"){
        badgeText="ONLINE"
    }
    return(
        <div className="card">
            {badgeText && <div className="card--badge">{badgeText}</div>}
            <img src={`./img/${props.item.coverImg}`} className="card--image" alt="coverimg"/>
            <div className="card--stats">
                <img src={Star} className="card--star" alt="star"/>
                <span>{props.item.stats.rating}</span>
                <span className="gray">({props.item.stats.reviewCount}) • </span>
                <span className="gray">{props.item.country}</span>
            </div>
            <p>{props.item.title}</p>
            <p><span className="bold">From ${props.item.price}</span> / person</p>
        </div>
    )
}