import { createContext, useState } from "react";

export const orderByContext=createContext()

const  OrderByProvider = ({children})=>{
    const [pickOrder, setPickOrder]= useState("DESC")

    return(
        <orderByContext.Provider value={{pickOrder, setPickOrder}}>
            {children}
        </orderByContext.Provider>
    )
}

export default OrderByProvider