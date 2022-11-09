import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import MyReviewDetails from './MyReviewDetails';

const MyReview = () => {
    const {user} = useContext(AuthContext)
    const [myreviews, setMyreviews] = useState([])

    useEffect(() => {
        fetch(`http://localhost:5000/reviews?email=${user?.email}`)
        .then( res => res.json())
        .then( data => {
            setMyreviews(data)
        })
    },[user?.email])

    // delete
    const handleDelete = id => {
        const procced = window.confirm('Are you sure, you want to cancle your order')
        if (procced) {
            fetch(`http://localhost:5000/reviews/${id}`, {
                method: 'DELETE',
                // // jwt token verify
                // headers: {
                //     authorization: `Bearer ${localStorage.getItem('genius-token')}`
                // }
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data, 'shamim')
                    // if (data.deletedCount > 0) {
                    //     alert('Your Order Deleted Successfully')
                    //     const remaining = orders.filter(order => order._id !== id)
                    //     setOrders(remaining)
                    // }
                })

        }
    }

    return (
        <div className='mt-20'>
            <h1 className='text-3xl text-center mb-2'>You have {myreviews.length} Reviews</h1>
            <div className="overflow-x-auto">
                <table className="table">
                    <thead className='w-100'>
                        <tr className='w-1/4'>
                            <th>
                            </th>
                            <th>Services</th>
                            <th>User Info</th>
                            <th>Price</th>
                            <th className='w-1/4'>Message</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody className='w-1/4 mx-auto'>

                        {
                            myreviews.map(myreview => <MyReviewDetails
                                key={myreview._id}
                                myreview={myreview}
                                handleDelete={handleDelete}
                                // handleStatusUpdate={handleStatusUpdate}
                            ></MyReviewDetails>)
                        }

                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default MyReview;