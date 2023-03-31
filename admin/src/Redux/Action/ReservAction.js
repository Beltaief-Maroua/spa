import axios from 'axios'
import {
    GET_RESERVATION
   } from '../ActionType/ActionType'

export const getReservation = ()=> async(dispatch)=>{
    try {
        const res= await axios.get('/api/getReservation')
        dispatch({type:GET_RESERVATION, payload:res.data})
    } catch (error) {
        console.log(error)
    }
}

