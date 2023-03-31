
import axios from 'axios'
import {
    GET_ALL_SERVICES,
    GET_SERVICES_ID
   } from '../ActionType/ActionType'

export const addService = (payload) => async(dispatch)=>{
    try {
        await axios.post('/api/postService',payload)
        dispatch(get_all_services())
    } catch (error) {
        console.log(error)
    }
}

export const editService = (id,payload) => async(dispatch)=>{
    try {
         await axios.put(`/api/updateService/${id}`,payload)
        dispatch(get_all_services())
    } catch (error) {
        console.log(error)
    }
}

export const get_all_services = () => async(dispatch)=>{
    try {
       const res = await axios.get('/api/getAllServices')
 dispatch({type:GET_ALL_SERVICES,payload:res.data})
 
    } catch (error) {
     console.log(error)
    }
 }
 export const get_service_id = (id) => async(dispatch)=>{
     try {
         const res = await axios.get(`/api/getServiceID/${id}`)
         dispatch({type:GET_SERVICES_ID, payload:res.data})
     } catch (error) {
         
     }
 }
 
 export const deleteService = (id) => async(dispatch)=>{
     try {
          await axios.delete(`/api/deleteService/${id}`)
         dispatch(get_all_services())
     } catch (error) {
         console.log(error)
     }
 }
 

 
 