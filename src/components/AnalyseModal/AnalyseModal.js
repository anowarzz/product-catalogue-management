import React from 'react';
import { Button } from 'react-bootstrap';

const AnalyseModal = () => {
    return (
        <div>


<Button variant='danger' className='px-4' data-bs-toggle="modal" data-bs-target="#chartModal" style={{ position: 'fixed' , bottom: '30px', right:'50px' }}>
ANALYSE
</Button>



<div className="modal fade modal-lg modal-dialog-centered" aria-labelledby="chartModalLabel" id="chartModal"   aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-3 text-center" id="chartModalLabel">Categories In Catalogue</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
        <div className='d-flex gap-4 justify-content-center align-items-center flex-wrap'>
         <div>
         <hr className='bg-warning py-1'></hr><p  className='d-inline'>Electronics</p>
         </div>
       <div>
       <hr className='bg-danger py-1'></hr>
            <p className='d-inline'>Jewelery</p>
       </div>
           <div>
           <hr  className='bg-info py-1'></hr>
            <p className='d-inline'>Men's Clothing</p>
           </div>
       <div>
       <hr  className='bg-success py-1'></hr>
            <p className='d-inline'>Women's Clothing</p>
       </div>
       
        </div>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>


        </div>
    );
};

export default AnalyseModal;