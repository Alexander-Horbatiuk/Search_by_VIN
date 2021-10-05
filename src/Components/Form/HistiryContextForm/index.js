import React, {useState, useEffect, createContext} from "react";

export const ContextForm = createContext()

export const useLocalStorage = ({children}) => {

    // const [vinItems, setVinItems] = useState(
    //     JSON.parse(localStorage.getItem('items' )) || []
    // );
    //
    // if (vinItems.length > 6) {
    //     setVinItems(reg => reg.splice(1))
    // }
    //
    // useEffect(() => {
    //     localStorage.setItem('items', JSON.stringify(vinItems))
    // }, [vinItems])

    return (
        <ContextForm.Provider value={children}>
            {children}

        </ContextForm.Provider>
    )
}