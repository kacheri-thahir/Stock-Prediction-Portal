import axios from 'axios'
import React, { useEffect } from 'react'
import axiosinstance from '../../axiosinstance'

const Dashboard = () => {
    useEffect( () => {
        const fetchprotectedData = async () =>{
            try {
                const response = await axiosinstance.get('/protected-view')
                console.log('Success: ',response.data);
            } catch (error) {   
                console.error('Error in fetching data:',error);
            }
    }
    fetchprotectedData();
    },[])

  return (
    <div className='text-light' >Dashboard</div>
    
)
}

export default Dashboard