import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { useDispatch, useSelector } from 'react-redux';
import { addService } from '../Redux/Action/ServiceAction';

export const AddService=({data})=> {
  const [show, setShow] = useState(false);
  const [add, setAdd] = useState({});

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const dispatch = useDispatch();

   const addServices = (data)=>{
    dispatch(addService(data))
   }

   const handleChange =(e)=>{
        setAdd({...add, [e.target.name]:e.target.value})
   }

   const service = useSelector((state)=>state.ServiceReducer.services)

useEffect(()=>{
  setAdd(service)
},[service])


  return (
    <>
      <Button 
      variant="primary" 
      onClick={handleShow}>
        Ajouter un service
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Ajout d'un nouveau Service</Modal.Title>
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
                value={add.serviceTitle}
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
                value={add.serviceName}
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
                value={add.serviceImage}
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
                value={add.servicePrice}
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
              value={add.serviceDescription}
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
              addServices(add)
              handleClose()
           }}>
            Enregistrer
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}


