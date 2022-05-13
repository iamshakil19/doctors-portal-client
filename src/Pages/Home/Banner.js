import React from 'react';
import chairImage from "../../Resources/images/chair.png"
import PrimaryButton from '../Shared/PrimaryButton';
import bannerBg from '../../Resources/images/bg.png'
const Banner = () => {
    return (
        <div style={{
            background: `url(${bannerBg})`,
            backgroundAttachment: "fixed"
        }} className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={chairImage} className="w-[400px] md:w-[400px] lg:w-[500px] mb-7 lg:mb-0 rounded-lg shadow-2xl " alt=''/>
                <div>
                    <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
                    <p className="py-6 lg:pr-8 text-justify">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <PrimaryButton>Get Started</PrimaryButton>
                </div>
            </div>
        </div>
    );
};

export default Banner;