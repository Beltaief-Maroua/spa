import React, { useEffect } from "react";
import Navbar from "./Navbar"
import "../App.css";
import { useDispatch, useSelector } from "react-redux";
import {getReservation} from "../Redux/Action/ReservAction"
import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBCardImage,
    MDBBtn,
  } from "mdb-react-ui-kit";


export default function ListReservation() {
    const reservation = useSelector((state)=>state.ReservReducer.reservation)
    
      const dispatch = useDispatch();
    
      const getAllReservation = () => {
        dispatch(getReservation());
      };
    
      useEffect(() => {
        getAllReservation();
      },[]);
    
      return (
        <>
        <div className="navbar">
          <Navbar/>
        </div>
        <div className="addService">
    
        {/* <AddService data={services}/> */}
    
        <div className="home">
      
          {reservation.map(
            (service)=>{
              return (
             <MDBCard className="card">           
            <MDBCardBody>             
              <MDBCardText className="nameReserv"> {service.serviceName} </MDBCardText>
            </MDBCardBody>
          </MDBCard>
              )
            }
          )}
         </div>
        </div>
        </>
      );
    }
    