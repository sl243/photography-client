import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import MyReviewDetails from './MyReviewDetails';

const MyReview = () => {
    const { user } = useContext(AuthContext)
    const [myreviews, setMyreviews] = useState([])

    useEffect(() => {
        fetch(`https://shamim-photography-server.vercel.app/reviews?email=${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setMyreviews(data)
            })
    }, [user?.email])

    // delete
    const handleDelete = id => {
        const procced = window.confirm('Are you sure, you want to cancle your order')
        if (procced) {
            fetch(`https://shamim-photography-server.vercel.app/reviews/${id}`, {
                method: 'DELETE',
                // // jwt token verify
                // headers: {
                //     authorization: `Bearer ${localStorage.getItem('genius-token')}`
                // }
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if (data.deletedCount > 0) {
                        alert('Your review Deleted Successfully')
                        const remaining = myreviews.filter(mrev => mrev._id !== id)
                        setMyreviews(remaining)
                    }
                })

        }
    }

    return (
        <div className='mt-20'>
            {
                myreviews.length > 0 ?
                    <>
                        <h1 className='text-3xl text-center text-white mb-2'>You have {myreviews.length} Reviews</h1>
                        <div className="overflow-x-auto w-full">
                            <table className="table w-full">
                                <thead>
                                    <tr>
                                        <th>
                                        </th>
                                        <th>Services</th>
                                        <th>User Info</th>
                                        <th>Review</th>
                                        <th>Status</th>
                                    </tr>
                                </thead>
                                <tbody>

                                    {
                                        myreviews.map(myreview => <MyReviewDetails
                                            key={myreview._id}
                                            myreview={myreview}
                                            handleDelete={handleDelete}
                                        ></MyReviewDetails>)
                                    }

                                </tbody>

                            </table>
                        </div>
                    </>
                    :
                    <>
                        <div className='w-3/4 mx-auto text-4xl text-center text-white font-semibold'>
                            <h1 className='m-40'>No reviews were added</h1>
                        </div>
                    </>
            }
        </div>
    );
};

export default MyReview;