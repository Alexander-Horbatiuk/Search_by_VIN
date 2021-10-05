import React from "react";
import {NavLink} from "react-router-dom";


export const DescriptionPage = ({detail}) => {
    // const state = location.detail
    console.log(detail)

    return (
        <div className="card_box_description">
            <h1>DescriptionPage-2</h1>
                <p>{detail}</p>

            <NavLink exact to="/variables">variables </NavLink>
            <NavLink exact to="/">home</NavLink>
        </div>
    )

}