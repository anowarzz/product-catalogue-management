import { render } from '@testing-library/react';
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import CategoryPieChart from '../CategoryPieChart/CategoryPieChart';

function ChartModal() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="danger" className='px-3' onClick={handleShow}  style={{ position: 'fixed' , bottom: '30px', right:'50px' }}>
      ANALYSE
      </Button>

      <Modal show={show} onHide={handleClose} className="modal-md">
        <Modal.Header closeButton>
          <Modal.Title className='text-center'>Categories In Catalogue</Modal.Title>
        </Modal.Header>
        <Modal.Body>
 

    <CategoryPieChart />

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}



export default ChartModal;

