import React, {useContext, useState} from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faSpinner} from '@fortawesome/free-solid-svg-icons'
import axios from 'axios';
import {useNavigate} from 'react-router-dom'
import { AuthContext } from './AuthProvider';

const Login = () => {

  const [username,setusername] = useState('');
  const [password,setpassword] = useState('');
  const [Loading,setLoading] = useState(false);
  const navigate=useNavigate();
  const [errors,seterrors] = useState('');   //To show errors of form
  const {isLoggedin,setisLoggedin} = useContext(AuthContext)
  

  const HandleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    const userData = {username,password};
    
    try {
      const responce = await axios.post('http://127.0.0.1:8000/api/v1/token/',userData);
      localStorage.setItem('accessToken',responce.data.access)
      localStorage.setItem('refreshToken',responce.data.refresh)
      console.log('Login Successful.');
      setisLoggedin(true);
      navigate('/dashboard');
    } catch (error) {
      console.error('Invalid credentials');
      seterrors('Invalid credentials');
    } finally{
      setLoading(false);
    }
  }

  return (
    <>
      <div className='container pt-5' >
        <div className="row justify-content-center" >
          <div className="col-md-5 register-bg rounded p-5 pb-7">
            <h2 className="text-light text-center pb-4">Welcome Back.</h2>

            <form onSubmit={HandleLogin}>

              <input type="text" className="form-control mb-3" placeholder='Username:' value={username} onChange={(e) => setusername(e.target.value) } />
                          
              <input type="password" className="form-control mb-3" placeholder='password:' value={password} onChange={(e) => setpassword(e.target.value)}/>
            
              {errors && <div className='text-danger' > {errors} </div> }   

              {Loading ? (
                <button type="submit" className='btn btn-info d-block mx-auto' disabled > <FontAwesomeIcon icon={faSpinner} spin /> Logging in...</button>   //if loading show this message and this button needs to be disabled so we used disabled here
              ) : (
                <button type="submit" className='btn btn-info d-block mx-auto '>Login</button>       // else no loading occurs directly register 
              )}
              
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login