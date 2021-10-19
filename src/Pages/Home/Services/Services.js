import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css'

const Services = () => {
    const [service , setService] = useState();

    useEffect(()=>{
        fetch('./service.json')
        .then(res=>res.json())
        .then(data =>setService(data))
    },[])
    return (
        <div  id='services'>
           <h2 className='service-header'>Our Services</h2>
         <div className='services m-2'>
         {
               service?.map(serve=><Service
               key={serve.id}
               service={serve}
               >

               </Service>)
           }
         </div>
        </div>
    );
};

export default Services;