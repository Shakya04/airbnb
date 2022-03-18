import React from "react";
import star from "../images/Star 1.png"
export default function Card(props){
    let badgeText
    if (props.content.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.content.location === "Online") {
        badgeText = "ONLINE"
    }
    
    return(
        <div className="card-container">
            {badgeText && <div className="card-badge">{badgeText}</div>}
            <img className="card-photo" src={props.content.coverImg} />
            <div className="card-info">
                <img className="card-star" src={star}/>
                <span>{props.content.stats.rating}</span>
                <span>({props.content.stats.reviewCount}) | {props.content.location}</span>
            </div>
            <p className="card-title">{props.content.title}s</p>
            <p className="card-price"><strong>{props.content.price}</strong> / person</p>
        </div>
    )
}