import React from 'react';
import chairImage from "../../Resources/images/chair.png"
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import bannerBg from '../../Resources/images/bg.png'

const AppointmentBanner = ({ date, setDate }) => {

    return (
        <div 
        style={{
            background: `url(${bannerBg})`,
            backgroundAttachment: "fixed",
            backgroundSize: "cover"
        }}
        className="hero my-16">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={chairImage} className="max-w-sm rounded-lg shadow-2xl md:ml-10" alt="chairImage" />
                <div className='shadow-lg rounded-lg sm:mt-5 md:mr-10'>
                    <DayPicker
                        mode="single"
                        selected={date}
                        onDayClick={setDate}
                    />
                </div>
            </div>
        </div>
    );
};

export default AppointmentBanner;