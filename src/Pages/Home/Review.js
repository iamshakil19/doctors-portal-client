import React from 'react';

const Review = ({ review }) => {
    const { name, text, img, location } = review
    return (
        <div className="card lg:max-w-lg bg-base-100 shadow-xl mx-auto">
            <div className="card-body">
                <p>{text}</p>
                <div className="flex items-center mt-7">
                    <div className="avatar">
                        <div className="w-16 rounded-full ring ring-secondary ring-offset-base-100 ring-offset-2 mr-5">
                            <img className='' src={img} alt="" />
                        </div>
                    </div>
                    <div>
                        <h4 className='text-xl'>{name}</h4>
                        <p>{location}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;