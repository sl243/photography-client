import React, { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import ReviewShow from '../ReviewShow/ReviewShow';

const ServiceDetails = () => {
    const { name, img, price, details, _id } = useLoaderData();
    const [reviews, setReviews] = useState([])

    useEffect(() => {
        fetch('https://shamim-photography-server.vercel.app/reviews')
            .then(res => res.json())
            .then(data => {
                setReviews(data)
            })
    }, [])

    return (
        <div>
            <div>
                <div className="card card-compact mt-10 bg-base-100 shadow-xl">
                    <figure><img className='mt-5' src={img} alt="Shoes" /></figure>
                    <div className="card-body w-3/4 mx-auto">
                        <h2 className="card-title font-bold text-2xl text-white">{name}</h2>
                        <p className='text-xl font-semibold text-orange-600'>Price: ${price}</p>
                        <p className='text-xl font-semibold'>{details}</p>
                    </div>
                    <div className="card-actions justify-center">
                        <h1 className='text-2xl text-white font-bold mt-2'>
                        Please login to add a review: <Link to='/login'>Login</Link>
                        </h1>
                        <Link to={`/reviews/${_id}`}>
                            <button className="btn btn-primary mb-10">Add A Review</button>
                        </Link>
                    </div>
                </div>

            </div>
            <div>
                <h1 className='text-4xl text-center text-white font-bold mt-10'>All Reviews Here...</h1>
                <div className='w-3/4 mx-auto'>
                    {
                        reviews.map(review => <ReviewShow
                            key={review._id}
                            review={review}
                        ></ReviewShow>)
                    }
                </div>
            </div>
        </div>
    );
};

export default ServiceDetails;