import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

import "bootstrap/dist/css/bootstrap.min.css";
import './WelcomeModal.css';

function WelcomeModal(){
    const [show, setShow] = useState(true);
    const handleClose = () => setShow(false);
    //const handleShow = () => setShow(true);
    return (                    
        <Modal.Dialog show="true" onClose={handleClose}>
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

 