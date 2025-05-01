import React from "react";

function Hero() {
  return (
    <div className="container mt-5 mb-5">
      <div className="row border-bottom mt-5 text-center pb-3">
        <h1>Pricing</h1>
        <h2 className="mt-3 pb-3 text-muted fs-5">
          Free equity investments and flat ₹20 traday and F&Q trades
        </h2>
      </div>
      <div className="row mt-5">
        <div className="col-4 p-5 text-center">
          <img src="media/images/pricing0.svg" alt="image" />
          <h3 >Free equity delivery</h3>
          <p>All equity delivery investments (NSE, BSE), are absolutely free -₹ 0 brokerage.</p>
        </div>
        <div className="col-4 p-5 text-center">
          <img src="media\images\intradayTrades.svg" alt="image" />
          <h3>Intraday and F&Q trades</h3>
          <p>Flat Rs. 20 or 0.035 (whichever is lower) per executed order on intraday trades across equity, currency and commmodity trades.</p>
        </div>
        <div className="col-4 p-5 text-center">
          <img src="media/images/pricingEquity.svg" alt="image" />
          <h3>Free</h3>
          <p>All direct mutual fund investments are absolutely free - ₹ 0 commissions & charges.</p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
