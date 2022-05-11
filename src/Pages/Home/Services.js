import React from 'react';
import fluoride from '../../Resources/images/fluoride.png'
import cavity from '../../Resources/images/cavity.png'
import whitening from '../../Resources/images/whitening.png'
import treatment from '../../Resources/images/treatment.png'
import Service from './Service';
import PrimaryButton from '../Shared/PrimaryButton';

const Services = () => {
    const services = [
        {
            _id: 1,
            name: "Fluoride Treatment",
            description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
            img: fluoride
        },
        {
            _id: 2,
            name: "Cavity Filling",
            description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
            img: cavity
        },
        {
            _id: 3,
            name: "Teeth Whitening",
            description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
            img: whitening
        }
    ]
    return (
        <div className='mt-28'>
            <div className='text-center'>
                <h3 className='text-secondary text-xl font-bold uppercase'>Our Services</h3>
                <h2 className='text-4xl'>Services We Provide</h2>
            </div>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5'>
                {
                    services.map(service => <Service
                        key={service._id}
                        service={service}
                    ></Service>)
                }
            </div>
            <div>
                <div class="hero min-h-screen">
                    <div class="hero-content grid md:grid-cols-1 lg:grid-cols-2 md:mt-10 sm:mt-10">
                        <img src={treatment} class="max-w-sm rounded-lg shadow-2xl mx-auto md:mb-5 sm:mb-5" />
                        <div>
                            <h1 class="text-5xl font-bold">Exceptional Dental Care, on Your Terms</h1>
                            <p class="py-6 text-justify">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
<PrimaryButton>Get Started</PrimaryButton>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;