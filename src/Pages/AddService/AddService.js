import React from 'react';
import { useNavigate } from 'react-router-dom';

const AddService = () => {
    const navigate = useNavigate()

    const handleAddService = event => {
        event.preventDefault()
        const form = event.target;

        const serviceName = form.serviceName.value;
        const img = form.img.value;
        const price = form.price.value;
        const service_id = form.service_id.value;
        const details = form.details.value;

        const services = {
            serviceName,
            img,
            price,
            service_id,
            details
        }


        fetch('http://localhost:5000/services', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                // authorization: `Bearer ${localStorage.getItem('genius-token')}`
            },
            body: JSON.stringify(services)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if(data.acknowledged === true){
                    alert('Add Service successfully');
                    form.reset();
                    navigate('/')
                }
            })
            .catch(error => console.error(error))

    }

    return (
        <div className='mt-20'>
            <form onSubmit={handleAddService}>
                <h1 className='text-3xl text-white font-bold text-center mb-5'>Please Add Your Service </h1>
                <div className=''>
                    <input
                        name='serviceName'
                        type="text"
                        placeholder="Enter Service Name"
                        className="input input-bordered w-full mb-3"
                    />
                    <input
                        name='img'
                        type="text"
                        placeholder="Enter Service Photo URL"
                        className="input input-bordered w-full mb-3"
                    />
                    <input
                        name='price'
                        type="text"
                        placeholder="Enter Service Price"
                        className="input input-bordered w-full mb-3"
                    />
                    <input
                        name='service_id'
                        type="text"
                        placeholder="Enter Service Id"
                        className="input input-bordered w-full mb-3"
                    />
                    
                </div>
                <textarea
                    name='details'
                    className="textarea textarea-bordered h-40 w-full mt-3"
                    placeholder="Your Service Details"
                    required
                ></textarea>
                <input
                    type="submit"
                    value="Add Service"
                    className="btn w-1/2 mx-auto mt-3 mb-5"
                />

            </form>
        </div>
    );
};

export default AddService;