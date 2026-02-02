import { useContext } from 'react'
import { AuthContext } from './components/AuthProvider'
import {Navigate} from 'react-router-dom'

// It is used when a login user use to go to login again by using url this restricts and send him to dashboard because user is already logged in 

const PublicRoute = ({children}) => {
    const {isLoggedin} = useContext(AuthContext)
  return !isLoggedin ?(
    children
    ) : (
        <Navigate to={'/dashboard'}/>
    )
}

export default PublicRoute