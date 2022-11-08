import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const ServiceDetails = () => {
    const { name, img, price, details, _id } = useLoaderData();
    return (
        <div>
            <div>
                <div className="card card-compact mt-10 bg-base-100 shadow-xl">
                    <figure><img src={img} alt="Shoes" /></figure>
                    <div className="card-body w-3/4 mx-auto">
                        <h2 className="card-title font-bold text-2xl text-white">{name}</h2>
                        <p className='text-xl font-semibold text-orange-600'>Price: ${price}</p>
                        <p className='text-xl font-semibold'>{details}</p>
                    </div>
                    <div className="card-actions justify-center">
                    <Link to={`/reviews/${_id}`}>
                        <button className="btn btn-primary mb-10">Add A Review</button>
                    </Link>
                </div>
                </div>
                
            </div>
            <div>
                <h1>Reviews Here...</h1>
            </div>
        </div>
    );
};

export default ServiceDetails;