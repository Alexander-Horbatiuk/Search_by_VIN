import React, {useState} from "react";
import "../../DescriptionList/DescriptionItem/style.css"
import Button from '@mui/material/Button';

export const SavedVinCode = ({item, key}) => {
    const [showVinCode, setShowVinCode] = useState(false)




    const openHistoryVin = () => {

            setShowVinCode(Object.values(item.value.map(reg => {
                return  (
                    <div className="card" >
                        <h3 className="card_variables_title">{JSON.stringify(reg.Variable)}</h3>
                        <p className="card_variables_sub_title">{JSON.stringify(reg.Value)}</p>
                    </div>
                )
            })))
    }

    return (
        <div onClick={openHistoryVin} style={{width: '100%', display: 'flex'}}>

           <Button variant="outlined">{`${item.item}`} </Button>
            <div style={{width: '100%', display: 'flex'}}>{showVinCode}</div>
        </div>
    )
}