import React from "react";

function Hero() {
  return (
    <div className="container p-5 mb-5">
      <div className="row w-75 mx-auto text-center ">
        <img
          src="media/images/homeHero.png"
          alt="Hero Image"
          className="mb-5  "
        />
      </div>
      <div className="text-center">
        <p style={{ color: "#424242", fontSize: "3rem", fontWeight: "500" }}>
          Invest in everything
        </p>
        <p className="fs-4">
          Online platform to invest in stocks, derivatives, mutual funds, and
          more
        </p>
        <button className="btn btn-primary w-25 p-2 fs-5 fw-bold mt-3  ">
          Signup Now
        </button>
      </div>
    </div>
  );
}

export default Hero;
