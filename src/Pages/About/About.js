import React from 'react';
import banner1 from '../../images/banner1.jpg'
import banner2 from '../../images/banner2.jpg'
import banner3 from '../../images/banner3.jpg'
import './About.css'

const About = () => {
    return (
       <div className='about'>
           <h2 className='text-primary m-2'>About Us</h2>
           <hr />
            <div className='about-container'>
            <div>
                <img src={banner1} alt="" />
            </div>
            <div className='banner-description'>
                <h3 className='text-success'>We are The Best Service Provider In Bangladesh For Now A decade of time</h3>
                Primary health care, or PHC, refers to "essential health care" that is based on scientifically sound and socially acceptable methods and technology. This makes universal health care accessible to all individuals and families in a community.
                <br /><button className='btn btn-warning'>Visit Our Services</button>
            </div>
            <div className='banner-description'>
                <h3 className='text-success mb-2'>We Will Provide Every Necessery Steps</h3>
                <p>A primary care provider (PCP) is a health care practitioner who sees people that have common medical problems. This person is most often a doctor. However, a PCP may be a physician assistant or a nurse practitioner. Your PCP is often involved in your care for a long time</p>
            </div>
            <div>
                <img src={banner2} alt="" />
            </div>
            <div>
                <img src={banner3} alt="" />
            </div>
            <div className='banner-description'>
                <h3 className='text-success'>Perfect Consultancy Against COVID-19</h3>
                <p>A consultation allows you to gather information from your client, understand their goals, and recommend the right products. The key to a great consultation is understanding the client's needs and expectations, which are then recorded and signed off by the client and the stylist or therapist</p>
            </div>

        </div>
       </div>
    );
};

export default About;