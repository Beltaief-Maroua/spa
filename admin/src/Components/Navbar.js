import React, { useState } from 'react';
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBCollapse,
} from 'mdb-react-ui-kit';
import { useDispatch} from "react-redux";
import { logout } from '../Redux/Action/AdminAction';


export default function App() {
  
  const [showBasic, setShowBasic] = useState(false);
  const dispatch = useDispatch();



  return (
    <MDBNavbar expand='lg' light bgColor='light'>
      <MDBContainer fluid>
      <MDBNavbarBrand >
      <img
        src='https://www.bobio.tn/img/bobio-logo-1536767027.jpg'
        alt='Logo'
        style={{ height: '50px', width: '180px'  }}
      />
    </MDBNavbarBrand>
        <MDBNavbarToggler
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
          onClick={() => setShowBasic(!showBasic)}
        >
          <MDBIcon icon='bars' fas />
        </MDBNavbarToggler>

        <MDBCollapse navbar show={showBasic}>
          <MDBNavbarNav className='mr-auto mb-2 mb-lg-0'>
            {/* <MDBNavbarItem>
              <MDBNavbarLink active aria-current='page' href='/ajout'
              style={{color:'#00aeef', fontWeight:'bold'}}
              >
                Ajout service
              </MDBNavbarLink>
            </MDBNavbarItem> */}
            <MDBNavbarItem>
              <MDBNavbarLink active aria-current='page' href='/reservation'
              style={{color:'#00aeef', fontWeight:'bold'}}
              >
                Liste réservation
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink active aria-current='page' href='/'
              style={{color:'#00aeef', fontWeight:'bold'}}
              onClick={()=>{dispatch(logout())}}
              >
                Déconnexion
              </MDBNavbarLink>
            </MDBNavbarItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
  );
}