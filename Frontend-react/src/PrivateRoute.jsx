import { useContext } from 'react'
import { AuthContext } from './components/AuthProvider'
import {Navigate} from 'react-router-dom'
// It is used when non login user use to go to dashboard by url this restricts and send him to login first

const PrivateRoute = ({children}) => {
    const {isLoggedin} = useContext(AuthContext)
  return isLoggedin ? (
    children   
  ) : (
    <Navigate to={'/login'} />
  )
}

export default PrivateRoute