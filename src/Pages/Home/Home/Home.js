import React from 'react';
import Banner from '../Banner/Banner';
import Newsletter from '../Newsletter/Newsletter';
import Services from '../Services/Services';
import Testimonial from '../Testimonial/Testimonial';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <Newsletter></Newsletter>
            <Testimonial></Testimonial>
            
        </div>
    );
};

export default Home;