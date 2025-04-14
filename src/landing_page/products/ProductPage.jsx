import React from 'react';
import Hero from './Hero';
import LeftSection from './LeftSection';
import RightSection from './RightSection';
import Universe from './Universe'

function ProductPage() {
    return ( 
      <div className="container">
        <Hero/>
        <LeftSection/>
        <RightSection/>
        <Universe/>
        </div>

     );
}

export default ProductPage;