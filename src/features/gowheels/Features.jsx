import React from 'react';
import "./Features.css"
function Features() {
  return (
    <div className="container mt-5">
            <div className='text-center m-3 p-2'>
                <h1>Features</h1>
                </div>
      <div className="row d-flex justify-content-center">
        <div className="col-md-3 col-sm-6 feture">
          <div className="shadow p-4 mb-4 bg-white rounded border border-2 text-center">
            <i class="bi bi-people fs-1"></i>
            <h1 className="fs-5">Customer Management</h1> 
                <p>Easily Create,Update and manage customers profiles</p>
          </div>
        </div>
        <div className="col-md-3 col-sm-6 feture">
          <div className="shadow p-4 mb-4 bg-white rounded border border-2 text-center">
            <i class="bi bi-check-circle fs-1"></i>
            <h1 className="fs-5">Task and event tracking</h1>
            <p>OPrganize tasks,events,dedines with remainders </p>
          </div>
        </div>
        <div className="col-md-3 col-sm-6 feture">
          <div className="shadow p-4 mb-4 bg-white rounded border border-2 text-center">
          <i class="bi bi-envelope-check fs-1"></i>
            <h1 className="fs-5">Email Integration</h1>
            <p>Send and receive emails directly through Gmail and Outlook</p>
          </div>
        </div>
        <div className="col-md-3 col-sm-6 feture">
          <div className="shadow p-4 mb-4 bg-white rounded border border-2 text-center ">
           <i class="bi bi-microsoft fs-1"></i>
            <h1 className="fs-5">About</h1>
            <p>Bus expenses refer to the costs associated with traveling by bus</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Features;
