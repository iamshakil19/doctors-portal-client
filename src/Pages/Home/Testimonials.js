import React from 'react';
import quote from '../../Resources/icons/quote.svg'
import people1 from '../../Resources/images/people1.png'
import people2 from '../../Resources/images/people2.png'
import people3 from '../../Resources/images/people3.png'
import Review from './Review';
const Testimonials = () => {

    const reviews = [
        {
            _id: 1,
            name: "Winson Herry",
            text: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            location: "California",
            img: people1
        },
        {
            _id: 2,
            name: "Winson Herry",
            text: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            location: "California",
            img: people2
        },
        {
            _id: 3,
            name: "Winson Herry",
            text: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            location: "California",
            img: people3
        }
    ];

    return (
        <section className='mt-20 mb-36'>
            <div className='flex justify-between items-center'>
                <div>
                    <h4 className='text-xl text-secondary font-bold'>Testimonial</h4>
                    <h2 className='text-3xl'>What Our Patients Says</h2>
                </div>
                <div>
                    <img className='w-24 lg:w-48' src={quote} alt="" />
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10'>
                {
                    reviews.map(review => <Review
                        key={review._id}
                        review={review}
                    ></Review>)
                }
            </div>
        </section>
    );
};

export default Testimonials;