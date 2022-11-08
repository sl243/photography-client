import React from 'react';
import Banner from '../../Banner/Banner';
import PhotoGallary from '../../PhotoGallary/PhotoGallary';
import Services from '../../Services/Services';
import WiddingDetails from '../../WiddingDetails/WiddingDetails';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <WiddingDetails></WiddingDetails>
            <PhotoGallary></PhotoGallary>
        </div>
    );
};

export default Home;