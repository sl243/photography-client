import React from 'react';
import widding from '../../images/body/widding.jpg'

const WiddingDetails = () => {
    return (
        <div className='flex'>
            <div className='w-1/2'>
                <h1 className='text-4xl text-white text-center font-bold'>Best Wedding Photography</h1>
                <p className='text-xl p-5 text-justify'>
                A good wedding photographer's job is to capture the sweet love story of a couple. What makes us stand out is our ability to capture the best moments, the tiniest of details, and the life of any wedding to make it a story worth telling. We have a team of highly enthusiastic and best wedding photographers who are versatile and capable of catering to different wedding photography styles. 
                </p>
                <p className='text-xl p-5 text-justify'>
                The best wedding photographer in Bangladesh who offer value for your money as all our professional photographers offer their impeccable skills on your big day. Being the best wedding photography, we seek to bring out the pomp and color on your special day and make you feel really special!
                </p>
            </div>
            <div className='w-1/2 mt-5'>
                <img className='rounded' src={widding} alt=''></img>
            </div>
        </div>
    );
};

export default WiddingDetails;