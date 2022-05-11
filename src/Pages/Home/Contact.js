import React from 'react';
import appointment from '../../Resources/images/appointment.png'
import PrimaryButton from '../Shared/PrimaryButton';
const Contact = () => {
    return (
        <section style={{
            background: `url(${appointment}) no-repeat center fixed`
        }} className='text-center py-14'>
            <h4 className='text-xl text-secondary font-medium mb-3'>Contact Us</h4>
            <h2 className='text-3xl text-white mb-9'>Stay connected with us</h2>

            <input className='outline-none w-80 lg:w-96 h-10 rounded-lg px-4 mb-5' type="email" name="email" placeholder='Email Address' />
            <br />
            <input className='outline-none w-80 lg:w-96 h-10 rounded-lg px-4 mb-5' type="text" name="subject" placeholder='Subject' />
            <br />
            <textarea className='outline-none w-80 lg:w-96 h-24 rounded-lg px-4 mb-5 pt-2' name="message" placeholder='Your Message'></textarea>
            <br />
            <PrimaryButton> Submit </PrimaryButton>
        </section>
    );
};

export default Contact;