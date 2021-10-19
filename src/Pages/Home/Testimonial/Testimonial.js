import React from 'react';
import './Testimonial.css'
const Testimonial = () => {
    return (
        <div className='mb-3 testimonial'>
            <h3 className='text-warning'>Testimonials</h3>
            <hr />
            <div class="wrapper">
    <div class="box">
      <i class="fas fa-quote-left quote"></i>
      <p>The hospital has an entire section within its website devoted to patient stories. The individuals within each story come from different backgrounds, genders, and races. Of course, most of them also have different reasons for coming to the hospital as well.</p>
      <div class="content">
        <div class="info">
          <div class="name">Alex Smith</div>
          <div class="job">Doctor | Medicine</div>
          <div class="stars">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="far fa-star"></i>
            <i class="far fa-star"></i>
            <i class="far fa-star"></i>
          </div>
        </div>
        <div class="image">
          {/* <img src="images/profile-1.jpeg" alt=""/> */}
        </div>
      </div>
    </div>
    <div class="box">
      <i class="fas fa-quote-left quote"></i>
      <p>Outside of what the client gave, these call-outs also include include responses from Dr. Richardson. These add a nice personal touch that lets visitors know that he cares about everyone who comes to his office.</p>
      <div class="content">
        <div class="info">
          <div class="name">Steven Chris</div>
          <div class="job">Doctor | Psychology</div>
          <div class="stars">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="far fa-star"></i>
            <i class="far fa-star"></i>
          </div>
        </div>
        <div class="image">
          {/* <img src="images/profile-2.jpeg" alt=""/> */}
        </div>
      </div>
    </div>
    <div class="box">
      <i class="fas fa-quote-left  quote"></i>
      <p>Not to mention everyone has their own style of handwriting so you know the sender actually wrote it themselves. Cherrywood Dental understands this novelty, which is why the majority of their patient testimonials are handwritten by their clients.</p>
      <div class="content">
        <div class="info">
          <div class="name">Kristina Bellis</div>
          <div class="job">Doctor | Child</div>
          <div class="stars">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="far fa-star"></i>
          </div>
        </div>
        <div class="image">
          {/* <img src="images/profile-3.jpeg" alt=""/> */}
        </div>
      </div>
    </div>
  </div>
        </div>
    );
};

export default Testimonial;