import { useParams } from "react-router-dom" ;
const User = () => {
  const {userId} = useParams() ;
  return (
    <div className="bg-slate-700 text-white text-3xl items-center flex justify-center">hello User : {userId}</div>
  )
}

export default User