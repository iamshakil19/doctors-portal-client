import React from 'react';
import footerImg from '../../Resources/images/footer.png'

const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <footer style={{
            background: `url(${footerImg})`,
            backgroundPosition: "center"
        }} class="p-10 ">
            <div className='footer'>
                <div className='lg:mx-auto'>
                    <span class="footer-title">Services</span>
                    <a class="link link-hover">Branding</a>
                    <a class="link link-hover">Design</a>
                    <a class="link link-hover">Marketing</a>
                    <a class="link link-hover">Advertisement</a>
                </div>
                <div className='lg:mx-auto'>
                    <span class="footer-title">Company</span>
                    <a class="link link-hover">About us</a>
                    <a class="link link-hover">Contact</a>
                    <a class="link link-hover">Jobs</a>
                    <a class="link link-hover">Press kit</a>
                </div>
                <div className='lg:mx-auto'>
                    <span class="footer-title">Legal</span>
                    <a class="link link-hover">Terms of use</a>
                    <a class="link link-hover">Privacy policy</a>
                    <a class="link link-hover">Cookie policy</a>
                </div>
            </div>
            <div className='mb-10 mt-28 text-center'>
                <p>Copyright © {currentYear} - All right reserved</p>
            </div>
        </footer>
    );
};

export default Footer;