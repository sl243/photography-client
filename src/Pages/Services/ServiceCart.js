import React from 'react';
import { Link } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';

const ServiceCart = ({ service }) => {
    const { img, name, price, _id, details } = service;

    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
            {/* <PhotoProvider>
                <div className="foo">
                    {service?.map((item, index) => (
                        <PhotoView key={index} src={img}>
                            <img src={img} alt="" />
                        </PhotoView>
                    ))}
                </div>
            </PhotoProvider> */}
            <figure><img src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title font-bold text-2xl text-white">{name}</h2>
                <p className='text-xl font-semibold text-orange-600'>Price: ${price}</p>
                <p className='text-xl font-semibold'>{details?.slice(0, 100) + ' ...'}</p>
                <div className="card-actions justify-end">
                    <Link to={`/services/${_id}`}>
                        <button className="btn btn-primary">Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceCart;