import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ServiceCart from './ServiceCart';

const Services = () => {
    const [services, setServices] = useState([])

    useEffect(() => {
        fetch('https://shamim-photography-server.vercel.app/services')
            .then(res => res.json())
            .then(data => {
                setServices(data)
            })
    }, [])

    return (
        <div>
            <div>
                <h1 className='text-4xl text-white text-center mt-5 mb-5'>Services</h1>
            </div>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    services.map(service => <ServiceCart
                        key={service._id}
                        service={service}
                    ></ServiceCart>)
                }
            </div>
            <div className="card-actions justify-center mt-10">
                <Link to='/services'>
                    <button className="btn btn-primary">See All</button>
                </Link>
            </div>
        </div>
    );
};

export default Services;