import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';

const Reviews = () => {
    const {_id, price, name} = useLoaderData();
    const {user} = useContext(AuthContext);

    const handleReview = event => {
        event.preventDefault()
        const form = event.target;

        const fname = form.fullName.value;
        const photoURL = form.photoURL.value;
        const phone = form.phone.value;
        const email = user?.email || 'unregistered';
        const message = form.message.value;

        const review = {
            service: _id,
            serviceName: name,
            price,
            customer: fname,
            photoURL,
            email,
            phone,
            message
        }


        fetch('https://shamim-photography-server.vercel.app/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                // authorization: `Bearer ${localStorage.getItem('genius-token')}`
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if(data.acknowledged === true){
                    alert('Your review placed successfully');
                    form.reset();
                }
            })
            .catch(error => console.error(error))

    }

    return (
        <div className='mt-20'>
            <form onSubmit={handleReview}>
                <h1 className='text-3xl text-white font-bold text-center mb-5'>Please Review: {name}</h1>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-5'>
                    <input
                        name='fullName'
                        type="text"
                        placeholder="Enter Your Name"
                        className="input input-bordered w-full"
                    />
                    <input
                        name='photoURL'
                        type="text"
                        placeholder="Enter Your Photo URL"
                        className="input input-bordered w-full"
                    />
                    <input
                        name='phone'
                        type="text"
                        placeholder="Phone Number"
                        className="input input-bordered w-full"
                        required
                    />
                    <input
                        name='email'
                        type="text"
                        defaultValue={user?.email}
                        readOnly
                        placeholder="Email"
                        className="input input-bordered w-full"
                        required
                    />
                </div>
                <textarea
                    name='message'
                    className="textarea textarea-bordered h-40 w-full mt-3"
                    placeholder="Your Review"
                    required
                ></textarea>
                <input
                    type="submit"
                    value="Confirm Review"
                    className="btn w-1/2 mx-auto mt-3 mb-5"
                />

            </form>
        </div>
    );
};

export default Reviews;