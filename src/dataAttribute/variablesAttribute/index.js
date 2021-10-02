import React, {createContext, useState, useEffect} from "react";
import axios from "axios";

export const DataAttributeContext = createContext()

export const  MuContextProvider = ({children}) => {

    const [vinDescription, setVinDescription] = useState(null)

    useEffect(() => {
        axios.get(`https://vpic.nhtsa.dot.gov/api/vehicles/getvehiclevariablelist?format=json`)
            .then(response => setVinDescription(response.data.Results))
    }, [])

    return (
        <DataAttributeContext.Provider value={vinDescription}>
            {children}
        </DataAttributeContext.Provider>
    )
}