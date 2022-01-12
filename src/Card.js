import React from "react"


export default function Card(props) {
    
    
    return (
        <div className="card-container">
            <img className="card-pic" src={`/images/${props.item.img}`} />
            <div className="text-container">
                <div className="country-bar">
                    <img className="card-pin" src="/images/pinpoint.jpeg" />
                    <h6>{props.item.countryName}</h6>
                    <a target="_blank" href={props.item.linkToMap}>View on Google Maps</a>
                </div>
                <h2 className="card-location">{props.item.location}</h2>
                <p className="card-date">{props.item.startDate} - {props.item.endDate}</p>
                <p className="card-description">{props.item.description}</p>
            </div>
        </div>
    )
}

