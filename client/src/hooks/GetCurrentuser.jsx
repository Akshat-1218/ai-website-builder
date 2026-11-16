import { useEffect } from 'react'
import axios from 'axios'
import { serverUrl } from '../config'
import { useDispatch } from 'react-redux'
import { setUserData } from '../redux/userSlice'

const GetCurrentuser = () => {
    const dispatch = useDispatch();
  useEffect(() => {
    axios.get(`${serverUrl}/api/user/me`, { withCredentials: true }) 
      .then((response) => {
        dispatch(setUserData(response.data))
        console.log('Current-user response:', {
          status: response.status,
          authenticated: Boolean(response.data?._id)
        })
      })
      .catch((error) => {
        if (error.response?.status !== 401) {
          console.error('Unable to load the current user:', error)
        }
      })
  }, [dispatch])

  return null
}

export default GetCurrentuser
