import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const MyReviewDetails = ({ myreview, handleDelete }) => {
    const { _id, serviceName, service, customer, phone, photoURL,message } = myreview;
    const [reviewSevice, setReviewService] = useState({})

    useEffect(() => {
        fetch(`https://shamim-photography-server.vercel.app/services/${service}`)
            .then(res => res.json())
            .then(data => setReviewService(data))
    }, [service])

    return (
        <tr>
            <th>
                <label>
                    <button onClick={() => handleDelete(_id)} className="btn btn-circle">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                    </button>
                </label>
            </th>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="rounded w-24 h-24">
                            {reviewSevice?.img &&
                                <img src={reviewSevice.img} alt="Avatar Tailwind CSS Component" />
                            }
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{serviceName}</div>
                    </div>
                </div>
            </td>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="rounded w-24 h-24">
                            {reviewSevice?.img &&
                                <img className='rounded-full h-24 w-24' src={photoURL} alt="Avatar Tailwind CSS Component" />
                            }
                        </div>
                    </div>
                    <div>
                        {customer}
                        <br />
                        <span className="badge badge-ghost badge-sm">{phone}</span>
                    </div>
                </div>
            </td>
            <th >
                <td>{message}</td>
            </th>
            <th>
                <td>
                    <Link to={`/updatereview/${_id}`}> <button
                        className="btn btn-ghost">
                        Edit Review
                    </button></Link>
                </td>
            </th>
        </tr >
    );
};

export default MyReviewDetails;