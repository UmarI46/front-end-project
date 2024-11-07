import { useContext, useEffect } from "react"
import { usernameContext } from "../contexts/UsernameProvider"
export default function SignIn() {
    const {setUsername} = useContext(usernameContext)
    useEffect(()=>{
      setUsername("jessjelly")
    })
  return (
    <div>You are already signed in as jessjelly</div>
  )
}
