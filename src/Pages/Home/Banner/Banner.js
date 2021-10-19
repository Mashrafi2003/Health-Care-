import React from 'react';
import { Link } from 'react-router-dom';
import './banner.css'

const Banner = () => {
    return (
        <div className='banner'>
        <h1>Want To Get The Best HealthCare?</h1>
        
        <Link to='/home#services'>
        <button  className='btn-banner'>Click Now</button>
        </Link>
        </div>
    );
};

export default Banner;