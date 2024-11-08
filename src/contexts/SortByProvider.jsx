import { createContext, useState } from "react";

export const sortByContext=createContext()

const  SortByProvider = ({children})=>{
    const [pickSort, setPickSort]= useState("created_at")

    return(
        <sortByContext.Provider value={{pickSort, setPickSort}}>
            {children}
        </sortByContext.Provider>
    )
}

export default SortByProvider