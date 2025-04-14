import React from 'react';

function Team() {
    return ( 
        <div className="container">
            <div className="row text-center  mb-5 px-5 pt-5 border-top">
                <h1>People</h1>
            </div>
            <div className="row">
                <div className="col-6 p-5 text-center text-muted lh-base">
                    <img src="media/images/nithinKamath.jpg" alt="image" className="rounded-circle mb-4" style={{width:"60%"}} />
                    <h4>Nithin Kamath</h4>
                    <h5>Founder, CEO</h5>
                </div>
                <div className="col-6 p-5 lh-lg" style={{fontSize:"1.2rem"}}>
                    <p>Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. <br />Today, Zerodha has changed the landscape of the Indian broking industry.</p>
                    <p>He is a member of th SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Adivisory Committee (MDAC).</p>
                    <p>Playing basketball is his zen.</p>
                    <p>Connect on <a href="">Homepage</a> / <a href="">TradingQnA</a> / <a href="">  Twitter</a> </p>
                </div>
            </div>
        </div>
     );
}

export default Team;