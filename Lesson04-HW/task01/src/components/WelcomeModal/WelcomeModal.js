// Разработано по https://react-bootstrap.github.io/components/modal/
import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

import "bootstrap/dist/css/bootstrap.min.css";
import './WelcomeModal.css';

function WelcomeModal(props){
    const { toggleModal } = props;
    const [show, setShow] = useState(true);
    const handleClose = () => setShow(false);
    //const handleShow = () => setShow(true);
    const modalBodyText = `Aute tempor eiusmod nisi aliqua consequat ut velit Lorem. 
                            Minim excepteur culpa in cillum aliquip non amet nulla 
                            laboris irure elit est fugiat. Quis ex ipsum cillum 
                            pariatur cupidatat amet amet ex anim culpa ad pariatur 
                            incididunt ex. Ea dolore et commodo exercitation sit 
                            mollit sunt deserunt. Nisi duis ex nulla aliquip quis 
                            nulla reprehenderit commodo cillum amet veniam excepteur
                            veniam nisi. Aute proident minim cillum amet incididunt.
                            Eiusmod proident incididunt do ut nulla.
                        `
    return (
        // <Modal show={ show } onHide={ handleClose } >
        //<Modal.Dialog className="modal-dialog-centered">
        <Modal show = {toggleModal} onHide={ toggleModal } centered>
            <Modal.Header closeButton onHide={ toggleModal }>
                <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {modalBodyText}    
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={toggleModal/* handleClose */}>Close</Button>
                <Button variant="primary" onClick={toggleModal/* handleClose */}>Save Changes</Button>
            </Modal.Footer>
      </Modal>     
    );
}
export default WelcomeModal;

 