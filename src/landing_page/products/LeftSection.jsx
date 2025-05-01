import React from "react";

function LeftSection(
 { imageURL,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore}
) {
  return (
    <div className="container border-top mt-5 p-5">
      <div className="row">
        <div className="col-6">
          <img src={imageURL} className="w-75" />
        </div>
        <div className="col-6" style={{}}>
            <h1>{productName}</h1>
            <p style={{width:"80%"}} className="mt-5" >{productDescription}</p>
           <div className="mt-4">
           <a href={tryDemo}  style={{textDecoration: "none"}}>Try Demo <b>⟶</b></a>
           <a className="px-5"  style={{textDecoration: "none"}} href={learnMore}>Learn more <b>⟶</b></a>
           </div>
            <div  className="mt-4">
            <a href={googlePlay}><img src="media/images/googlePlayBadge.svg" /></a>
            <a  className="px-3"href={appStore}><img src="media/images/appstoreBadge.svg"  /></a>
            </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;
