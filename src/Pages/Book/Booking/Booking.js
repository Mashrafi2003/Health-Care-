import React from 'react';
import { useParams } from 'react-router';

const Booking = () => {
    const {serviceID } = useParams()
    return (
        <div>
            <h2>You Have Taken : {serviceID} no. Service</h2>
            <img src="https://i.ibb.co/k5F3nxR/woman-with-plaster-shoulder-sitting-chair-after-vaccination.jpg" height='300' width='500' alt="" />
            <h4>Covid Vaccination</h4>
            <p> "COVID-19 vaccines are safe, effective and built to save lives.<br/> Learn more about the benefits today. Fact-based content. Trusted information. Highlights:</p>
            <h5>Price : $5000</h5>
            <button className='btn btn-warning mb-3 text-white'>Buy Now</button>


        </div>
    );
};

export default Booking;