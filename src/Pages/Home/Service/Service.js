import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css'


const Service = (props) => {
    const {name , img , description, price, availability,id } = props.service
    
    return (
        <div>
          <div className="card service">
  <img src={img} className='card-img-top' alt="" />
  <div className="card-body">
    <h5 className="card-title">{name}</h5>
    <h6>Cost :{price}</h6>
    <h6>Treatment : {availability}</h6>
    <p className="card-text">{description}</p>
      <Link to={`/book/${id}`}>
      <button className='btn-banner'>Get Now</button>
      </Link>
  </div>
</div>
        </div>
    );
};

export default Service;