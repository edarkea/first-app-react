import React from 'react';
import './App.css';

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
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
