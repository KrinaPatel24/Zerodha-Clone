import React from "react";

function Pricing() {
  return (
    <div className="container mb-5 pb-5">
      <div className="row">
        <div className="col-4">
          <h1 className="mb-4">Unbeatable pricing</h1>
          <p>
            We pioneered the concept of discount broking and price transparency
            in India.Flat fees and no hidden charges.
          </p>
          <a href="" style={{textDecoration:"none"}}>
            See pricing &nbsp; <b>⟶</b>
          </a>
        </div>
        <div className="col-2"></div>
        <div className="col-6  row">
            <div className="col-6 border text-center py-4">
                <h1 >₹0</h1>
<p className="pt-4">Free equity delivery and direct mutual funds</p>
            </div>
            <div className="col-6 border text-center pt-4">
            <h1>₹20</h1>
            <p className="pt-4">Intraday and F&O trades</p>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
