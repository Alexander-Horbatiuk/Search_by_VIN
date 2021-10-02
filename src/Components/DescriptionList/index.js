import React, {useContext} from "react";
import Button from '@mui/material/Button';
import {DescriptionItem} from "./DescriptionItem";
import "./style.css"
import {DataAttributeContext} from "../../dataAttribute/variablesAttribute";
import {Link} from "react-router-dom";

export const DescriptionList = () => {
    const vinDescription = useContext(DataAttributeContext)

    return (
        <div className="card_box_description">
            <Button component={Link} to="/" variant="outlined" >Вернуться на главную страницу</Button>

            <div className="card_box">
                {vinDescription && vinDescription.map((item, index) => <DescriptionItem detail={item} key={index} id={item.ID}/>)}
            </div>
        </div>

    )
}