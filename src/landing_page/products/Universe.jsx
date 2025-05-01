import React from "react";

function Universe() {
  const myStyle = {
    widht: "10rem",
    height: "4rem",
  };

  return (
    <div className="container border-top mb-5">
      <div className="row text-center mt-5 mb-5">
        <h1>The Zerodha Universe</h1>
        <p className="mt-3">
          Extend your tradingand investment experience even further with our
          partner platforms
        </p>

        <div className="col-4  p-3 mt-5">
          <img
            style={myStyle}
            src="media/images/smallcaseLogo.png"
            alt="image"
          />
          <p className="text-muted text-small mt-2">
            Thematic investment platform
          </p>
        </div>

        <div className="col-4 p-3 mt-5">
          <img
            style={myStyle}
            className="w-50"
            src="media/images/streakLogo.png"
            alt="image"
          />
          <p className="text-muted text-small mt-2">Algo & strategy platform</p>
        </div>

        <div className="col-4 p-3 mt-5">
          <img
            style={{
              widht: "3rem",
              height: "3rem",
            }}
            src="media/images/sensibullLogo.svg"
            alt="image"
          />
          <p className="text-muted text-small mt-2">Options trading platform</p>
        </div>

        <div className="col-4  p-3 mt-5">
          <img
            style={myStyle}
            src="media/images/zerodhaFundhouse.png"
            alt="image"
          />
          <p className="text-muted text-small mt-2">Asset management</p>
        </div>

        <div className="col-4  p-3 mt-5">
          <img
            style={myStyle}
            src="media/images/goldenpiLogo.png"
            alt="image"
          />
          <p className="text-muted text-small mt-2">Bonds trading platform</p>
        </div>

        <div className="col-4  p-3 mt-5">
          <img  style={{
              widht: "3rem",
              height: "3rem",
            }} src="media/images/dittoLogo.png" alt="image" />
          <p className="text-muted text-small mt-2">Insurance</p>
        </div>
     <div className="row d-flex justify-content-center ">
     <button className="btn btn-primary w-25 p-2 fs-5 fw-bold mt-5">
          Sign up Now
        </button>
     </div>
      </div>
    </div>
  );
}

export default Universe;
