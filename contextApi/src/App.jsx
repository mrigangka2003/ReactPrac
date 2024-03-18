import './App.css'
import Login from './component/Login'
import Pprofile from './component/Pprofile'
import UserContextProvider from './context/UserContextProvider'

function App() {
  

  return (
    <UserContextProvider>
      <h1>Learning Context Api</h1>
      <Login/>
      <Pprofile/>
    </UserContextProvider>
  )
}

export default App
