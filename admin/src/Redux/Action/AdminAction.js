import axios from 'axios'
import { LOGIN, LOGOUT } from '../ActionType/ActionType'
 

export const adminLogin =(data,navigate)=>async(dispatch)=>{
   try {

const res = await axios.post('/api/loginAdmin',data)
    if(res.data.msg==="success"){
        localStorage.setItem("token",res.data.session)
        navigate("/gestion")
    }
dispatch({type:LOGIN,payload: res.data.session})

} catch (error) { 
    console.log(error)
}
}

export const logout = () => async (dispatch) => {
    try {
    await localStorage.removeItem('token'); // Remove token from localStorage
    dispatch({ type: LOGOUT });
  } catch (error) {
    console.log(error)
  }
}
