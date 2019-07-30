import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import './WelcomeModal.css';

function WelcomeModal(){
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (              
        <Modal.Dialog show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Modal title</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p>Modal body text goes here.</p>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>Close</Button>
                <Button variant="primary" onClick={handleClose}>Save changes</Button>
            </Modal.Footer>
        </Modal.Dialog>       
    );
}
export default WelcomeModal;

 