import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { useDispatch, useSelector } from 'react-redux';
import { editService, get_service_id } from '../Redux/Action/ServiceAction';

export const EditService=({id})=> {
  const [show, setShow] = useState(false);
  const [edit, setEdit] = useState({});

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const dispatch = useDispatch();



   const getServById = (id)=>{
    dispatch(get_service_id(id))
   }

   const editServById = (id,data)=>{
    dispatch(editService(id,data))
   }

   const handleChange =(e)=>{
        setEdit({...edit, [e.target.name]:e.target.value})
   }

   const service = useSelector((state)=>state.ServiceReducer.serviceID)

useEffect(()=>{
  setEdit(service)
},[service])


  return (
    <>
      <Button 
      className='edit'
      variant="primary" 
      onClick={()=>{
        getServById(id)
        handleShow()
        }}>
        Modifier
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modification Service</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Titre</Form.Label>
              <Form.Control
                type="text"
                placeholder="Titre"
                name="serviceTitle"
                autoFocus
                value={edit.serviceTitle}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Nom</Form.Label>
              <Form.Control
                type="text"
                placeholder="Nom"
                name="serviceName"
                autoFocus
                value={edit.serviceName}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Image</Form.Label>
              <Form.Control
                type="text"
                placeholder="Image"
                autoFocus
                name="serviceImage"
                value={edit.serviceImage}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Prix</Form.Label>
              <Form.Control
                type="text"
                placeholder="Prix"
                autoFocus
                name="servicePrice"
                value={edit.servicePrice}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Description</Form.Label>
              <Form.Control 
              as="textarea" 
              rows={4} 
              name="serviceDescription"
              value={edit.serviceDescription}
              onChange={handleChange}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Fermer
          </Button>
          <Button variant="primary" onClick={()=>{
              editServById(id,edit)
              handleClose()
           }}>
            Enregistrer
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}


