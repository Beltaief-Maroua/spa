import React, { useEffect } from "react";
import "../App.css";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
} from "mdb-react-ui-kit";
import { useDispatch, useSelector } from "react-redux";
import { deleteService, get_all_services } from "../Redux/Action/ServiceAction";
import { EditService } from "./EditService";
import { AddService } from "./AddService";
import Navbar from "./Navbar"


export default function Gestion() {
const services = useSelector((state)=>state.ServiceReducer.services.reverse())

  const dispatch = useDispatch();

  const getAllServices = () => {
    dispatch(get_all_services());
  };

  useEffect(() => {
    getAllServices();
  },[]);

  return (
    <>
    <div className="navbar">
      <Navbar/>
    </div>
  

    <div className="home">
  
      {services.map(
        (service)=>{
          return (
         <MDBCard className="card">
        <MDBCardImage
          src={service.serviceImage}
          position="top"
          alt="..."
        />
        <MDBCardBody>
          <MDBCardTitle className="title">{service.serviceTitle}</MDBCardTitle>
          <MDBCardText className="name"> {service.serviceName} </MDBCardText>
          <MDBCardText> {service.serviceDescription} </MDBCardText>
          <MDBCardText className="price"> {service.servicePrice} TND </MDBCardText>
          <div className="buttonGestion">
          <MDBBtn 
          className="delete"
          onClick={()=>{dispatch(deleteService(service.id))}}> Supprimer </MDBBtn>
          <EditService id={service.id}/>
          </div>
        </MDBCardBody>
      </MDBCard>
      
          )
        }
      )}
      
    </div>
    <div className="addService">

<AddService data={services}/>
</div>
    </>
  );
}
