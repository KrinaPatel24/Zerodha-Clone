import React from 'react';


function RightSection({
    imageURL,
    productName,
    productDescription,
    learnMore
}) {
    return ( 
        <div className="container mt-5 border-top mb-0 pb-0">
            <div className="row">
                <div className="col-6  " style={{marginTop:"10%"}}>
                    <h1>{productName}</h1>
                    <p style={{width:"80%"}} className="mt-5" >{productDescription}</p>
                    <a className="mt-3"  style={{textDecoration: "none"}} href={learnMore}>Learn more <b>⟶</b></a>
                </div>
                <div className="col-6">
                    <img style={{width:"95%"}} src={imageURL} alt="image" />
                </div>
            </div>
        </div>
     );
}

export default RightSection;