import React from 'react';

const ReviewShow = ({ review }) => {
    const { photoURL, customer, message, serviceName } = review;
    return (
        <div className="card lg:card-side bg-base-100 shadow-2xl mb-5">
            <figure className='reviewer-pic'>
                <img
                    src={photoURL}
                    alt="Album"
                    className='rounded-full h-24 w-24 ml-5'
                />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{customer}</h2>
                <p>Service Name: {serviceName}</p>
                <div className="card-actions justify-end">
                    <p>{message}</p>
                </div>
            </div>
        </div>
    );
};

export default ReviewShow;