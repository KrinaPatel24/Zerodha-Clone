import React from 'react';

function Education() {
    return ( 
       <div className="container mt-5 pt-5">
        <div className="row">
            <div className="col-6 " >
                <img src="media/images/education.svg" alt="Image" style={{width:"75%"}} />
            </div>
            <div className="col-6">
                <h1 className="mb-5">Free and open market education</h1>
                <p>Varsity, the largest online stock market education book in the world covering everythin grom the basics to advanced trading.</p>
                <a href="" style={{textDecoration:"none"}}>
            Versity &nbsp; <b>⟶</b>
          </a>
          <p className="mt-4">TradingQ&A, the most active trading and investment community in India for all your market related queries.</p>
          <a href="" style={{textDecoration:"none"}}>
          TradingQ&A &nbsp; <b>⟶</b>
          </a>
            </div>
        </div>
       </div>
     );
}

export default Education;