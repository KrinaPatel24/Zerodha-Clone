import React from "react";

function OpenAccount() {
  return (
    <div className="container p-5 mb-5 mt-5">
    
      <div className="text-center">
        <p style={{ color: "#424242", fontSize: "3rem", fontWeight: "500" }}>
        Open a Zerodha account
        </p>
        <p className="fs-4 mt-5">
         Modern platforms and apps, ₹ 0 investments, and a flat ₹ 20 intraday and F&O trades.
        </p>
        <button className="btn btn-primary w-25 p-2 fs-5 fw-bold mt-5  ">
          Sign up Now
        </button>
      </div>
    </div>
  );
}

export default OpenAccount;
