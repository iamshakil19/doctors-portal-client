import React from 'react';

const Service = ({service}) => {
    const {name, img, description} = service
    return (
        <div className="card lg:max-w-lg bg-base-100 shadow-xl mx-auto mt-16">
            <figure className="px-10 pt-10">
                <img width={"115px"} src={img} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{name}</h2>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default Service;