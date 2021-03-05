import React, {useState, createContext} from "react";

export const BuahContext = createContext();

export const BuahProvider = props => {
    const [dataBuah, setdataBuah] = useState(null);
    const [currentId, setCurrentId] = useState(null);
    
    return (
        <BuahContext.Provider value={[dataBuah, setdataBuah, setdataBuah, currentId, setCurrentId]}>
            {props.childern}
        </BuahContext.Provider>
    );
};