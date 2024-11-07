import { createContext, useState } from "react";

export const usernameContext = createContext()

const UsernameProvider = (props)=>{
    const [username, setUsername]= useState("jessjelly")

    return(
        <usernameContext.Provider value={{username, setUsername}}>
            {props.children}
        </usernameContext.Provider>
    )
}

export default UsernameProvider
