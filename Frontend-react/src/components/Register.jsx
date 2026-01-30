import React , {useState} from 'react'
import axios from 'axios'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faSpinner} from '@fortawesome/free-solid-svg-icons'

const Register = () => {

  const [username,setusername] = useState('');
  const [email,setemail] = useState('');
  const [password,setpassword] = useState('');
  const [errors,seterrors] = useState({});   //To show errors of form
  const [success,setsuccess] = useState(false);   // for successful message
  const [Loading,setLoading] = useState(false); // To show please wait message if server delays


  const HandleRegister = async (e) => {  //Handling Register submit button
    e.preventDefault();     //Prevents refreshing the page
    setLoading(true);       // whenever user click register button loading must be true because if server delays this message will appear
    
    const userData = {      //Creating userData object and sending it to api
      username,email,password
    };
    
    //sending data in backend 
    
    try {
      const response = await axios.post('http://127.0.0.1:8000/api/v1/register/',userData);
      console.log('response.data==>',response.data);
      console.log("Registration successful.");
      seterrors({})  //if no error occurs no error will be displayed
      setsuccess(true) //set true if registration is successful
    }catch (error) {
      seterrors(error.response.data); //To show error
      console.error('Registration error:',error.response.data);
    }finally{
      setLoading(false)    //if any error occurs or registration successful we dont need to show please wait message 
    }
  }

  return (
    <>
      <div className='container pt-5' >
        <div className="row justify-content-center" >
          <div className="col-md-5 register-bg rounded p-5 pb-7">
            <h2 className="text-light text-center pb-4">Register now !</h2>
            <form onSubmit={HandleRegister} >

              <input type="text" className="form-control mb-3" placeholder='Username:' value={username} onChange={(e) => setusername(e.target.value) } />
              {/* To show username error if exists */}
              <small> {errors.username && <div className="text-danger">{errors.username}</div>} </small>
              
              <input type="email" className="form-control mb-3" placeholder='Email address:' value={email} onChange={(e) => setemail(e.target.value)} />
              {/* To show email error if exists */}
              <small> {errors.email && <div className="text-danger">{errors.email}</div>} </small>

              <input type="password" className="form-control mb-3" placeholder='Set password:' value={password} onChange={(e) => setpassword(e.target.value)}/>
              {/* To show password error if exists */}
              <small> {errors.password && <div className="text-danger">{errors.password}</div>} </small>

              {/* To check and show registration successful message */}
              {success && <div className='alert alert-success mb-3' >Registration Successful!</div> }

              {Loading ? (
                <button type="submit" className='btn btn-info d-block mx-auto' disabled > <FontAwesomeIcon icon={faSpinner} spin /> Please wait...</button>   //if loading show this message and this button needs to be disabled so we used disabled here
              ) : (
                <button type="submit" className='btn btn-info d-block mx-auto '>Register</button>       // else no loading occurs directly register 
              )}
              
            </form>
          </div>
        </div>
      </div>
    </>
  )
} 

export default Register