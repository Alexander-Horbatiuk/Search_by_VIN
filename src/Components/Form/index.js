import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios'
import './DetailItem/style.css'
import {DetailItem} from './DetailItem';
import Button from '@mui/material/Button';
import './style.css'
import {SavedVinCode} from './SavedVinCode'

export const Form = () =>{
    const [vin, setVin] = useState('')
    const [vinDetails, setVinDetails] = useState(null)
    const [errorName, setErrorName] = useState(false)

// ____________________________________----------------Local
    const [vinItems, setVinItems] = useState(
        JSON.parse(localStorage.getItem('vinList' )) || []
    );

    if (vinItems.length > 6) {
        setVinItems(reg => reg.splice(1))
    }

    useEffect(() => {
        localStorage.setItem('vinList', JSON.stringify(vinItems))
    }, [vinItems])
// _____________________________________----------------Local

    const getVinInput = (e) => {
        setVin(e.target.value)
    }

    const validateName = (e) => {
        if (vin.trim() === '') {
            setErrorName('не ленись заполни поле')
            return false
        }
        if (/.{18,}/.test(e.target.value)) {
            setErrorName('максимум (17) символов, попробуй еще раз ');
            setVin('')
            return false
        }
        return setErrorName('')
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setVin('');

        const resultAxios = await axios.get(`https://vpic.nhtsa.dot.gov/api/vehicles/decodevin/${vin}?format=json`)
        const itemVin = resultAxios.data.Results.filter(filterResult => filterResult.Value)

        // __________________________________----------------Local
        if (vin.trim() !== '') {
            const newItem = {
                item: vin,
                value: itemVin,
            } || []
            setVinItems((items) => [...items, newItem])
        }
    
        setVinDetails(itemVin)
        // __________________________----------------Local
    }

    return (
        <div className="form_box">
            <h1>Проверь VIN</h1>
            <div className="form_sub_box">
                <label className="error_label">
                    {errorName?  <span className="error_title">{errorName}</span> : ''}
                    <input type="text"
                           className="form_input"
                           pattern="vin code"
                           value={vin}
                           onChange={getVinInput}
                           onBlur={validateName}
                    />
                    </label>
                <Button onClick={handleSubmit } variant="contained" fullWidth>проверить vin</Button>
                <Button component={Link} to="/variables" variant="outlined" fullWidth>посмотреть все ошибки</Button>
            </div>
            {vinItems && vinItems.map((item, index) => <SavedVinCode key={index} item={item} />)}

            <div className="card_box">
                {vinDetails && vinDetails.map((item, index) => <DetailItem key={index} detail={item} />)}
            </div>
        </div>

    )
}


















