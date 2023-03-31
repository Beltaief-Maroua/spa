import React, { useState } from 'react'
import {useDispatch} from 'react-redux'
import {
    MDBContainer,
    MDBCol,
    MDBRow,
    MDBBtn,
    MDBInput,
    MDBCard,
    MDBRipple,
    MDBCardImage,
    MDBCardBody
  }
  from 'mdb-react-ui-kit';
import { adminLogin } from '../Redux/Action/AdminAction';
import { useNavigate } from 'react-router-dom';

export default function Login() {

  const navigate=useNavigate()
  const dispatch=useDispatch()

  const [amdinMail, setamdinMail]=useState('')
  const [adminPassword, setadminPassword]=useState('')
 

  const handleLogin=()=>{
      dispatch(adminLogin({amdinMail,adminPassword},navigate))
  }
   return (
    
    <MDBContainer fluid className="my-5">
      <MDBRow className="justify-content-center">
        <MDBCol md="8" lg="6" xl="4">
          <MDBCard style={{ borderRadius: "15px" }}>
            <MDBRipple
              rippleColor="light"
              rippleTag="div"
              className="bg-image rounded hover-overlay"
            >
              <MDBCardImage
                src="https://www.bobio.tn/modules/tvcmsslider/views/img/51386e1aec05ad41b8a6_banner-site-bobio-4.png"
                fluid
                className="w-100"
                style={{
                  borderTopLeftRadius: "15px",
                  borderTopRightRadius: "15px",
                }}
              />
            </MDBRipple>
            <MDBCardBody className="pb-0"> 
                <MDBInput 
                onChange={(e)=>{setamdinMail(e.target.value)}} 
                wrapperClass='mb-4' 
                label='Adresse mail' 
                id='formControlLg' 
                type='email' 
                size="lg"
                />  
            </MDBCardBody>
            
            <MDBCardBody className="pb-0">
               <MDBInput 
               onChange={(e)=>{setadminPassword(e.target.value)}} 
               wrapperClass='mb-4' 
               label='Mot de passe' 
               id='formControlLg' 
               type='password' 
               size="lg"
               />

            </MDBCardBody>
           
            <MDBCardBody className="pb-0">
              <div className="align-items-center pb-2 mb-4"
                  
              >
                <div className="button">
                <MDBBtn 
                color="primary"
                onClick={handleLogin}
                >
                    Se connecter
                </MDBBtn>
                </div>
              </div>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}