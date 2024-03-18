import { useContext } from "react"
import UserContext from "../context/UserContext"

const Pprofile = () => {

    const {user} = useContext(UserContext) ;
  if(!user) return <div>Login</div>

  return <div>Welcome {user.username}</div>
}

export default Pprofile