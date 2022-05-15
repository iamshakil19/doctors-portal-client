import React from 'react';
import doctor from '../../Resources/images/doctor.png'
import appointment from '../../Resources/images/appointment.png'
import PrimaryButton from '../Shared/PrimaryButton';
import './Appointment.css'
const HomeAppointmentBanner = () => {
    return (
        <section style={{
            background: `url(${appointment}) no-repeat center fixed`
        }} className='flex justify-center items-center my-20'>
            <div className='lg:flex-1'>
                <img className=' image-control hidden lg:block mt-[-150px]' src={doctor} alt="" />
            </div>
            <div className='lg:flex-1 p-5'>
                <h3 className='text-xl font-bold text-secondary mb-5'>Appointment</h3>
                <h2 className='text-3xl text-white mb-5 font-semibold'>Make an appointment Today</h2>
                <p className='text-white mb-4 text-justify'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                <PrimaryButton>Get Started</PrimaryButton>
            </div>
        </section>
    );
};

export default HomeAppointmentBanner;