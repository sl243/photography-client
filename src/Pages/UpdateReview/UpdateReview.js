import React, { useContext } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';

const UpdateReview = () => {
    const { user } = useContext(AuthContext)
    const { _id, customer, photoURL, phone, message } = useLoaderData()
    const navigate = useNavigate()



    const handleReviewChange = event => {
        event.preventDefault()
        const form = event.target;

        const message = form.message.value;

        const review = {
            message
        }


        fetch(`http://localhost:5000/reviews/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('photography-token')}`
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged === true) {
                    alert('Your review updated successfully');
                    form.reset();
                    navigate('/myreview')
                }
            })
            .catch(error => console.error(error))

    }

    return (
        <div>
            <div className='mt-20'>
                <form onSubmit={handleReviewChange}>
                    <h1 className='text-3xl font-bold text-center mb-5'>Update Your Review </h1>
                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-5'>
                        <input
                            name='fullName'
                            type="text"
                            defaultValue={customer}
                            readOnly
                            placeholder="Enter Your Name"
                            className="input input-bordered w-full"
                        />
                        <input
                            name='photoURL'
                            type="text"
                            defaultValue={photoURL}
                            placeholder="Enter Your Photo URL"
                            className="input input-bordered w-full"
                        />
                        <input
                            name='phone'
                            type="text"
                            defaultValue={phone}
                            readOnly
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
                        defaultValue={message}
                        className="textarea textarea-bordered h-40 w-full mt-3"
                        placeholder="Update Your Review"
                        required
                    ></textarea>
                    <input
                        type="submit"
                        value="Update Review"
                        className="btn w-1/2 mx-auto mt-3 mb-5"
                    />

                </form>
            </div>
        </div>
    );
};

export default UpdateReview;