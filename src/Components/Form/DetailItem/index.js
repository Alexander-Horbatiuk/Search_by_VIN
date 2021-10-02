import React from "react"
import "./style.css"

export const DetailItem = ({detail}) => {

    return (
        <div className="card">
            <h3 className="card_title">{detail.Variable}</h3>
            <span className="card_text">{detail.Value}</span>
        </div>
    )
};
