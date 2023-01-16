import React from 'react';
import './App.css';
import Customer from './components/Customer';
import { CustomerClass } from './components/CustomerClass';

import Employee from './components/Employee';
import { EmployeeClass } from './components/EmployeeClass';

function App() {
  return (
    <React.Fragment>
      <div className='container mt-3'>
        <div className="grid">
          <div className="row">
            <div className="col">
              <p className="h3 fw-bold text-success">App Component</p>
              <p className="fst-italic">Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore placeat nam maiores temporibus quasi similique dignissimos, explicabo quod, quos dicta perspiciatis optio numquam id harum quidem voluptatem repudiandae dolorum? Soluta?</p>
              <button className="btn btn-success btn-sm">
                <i className='fa fa-book'></i> Read More
              </button>
            </div>
          </div>
          {/* <div className="row">
            <div className="col">
              <Customer name={"edinson"} age={27} title={"Sistemas"} />
            </div>
          </div>
          <div className="row">
            <div className="col">
              <CustomerClass name={"edinson"} age={27} title={"Sistemas"}/>
            </div>
          </div> */}
          <div className="row">
            <div className="col">
              <Employee/>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <EmployeeClass/>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
