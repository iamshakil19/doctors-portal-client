import React from 'react';
import footerImg from '../../Resources/images/footer.png'

const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <footer style={{
            background: `url(${footerImg})`,
            backgroundPosition: "center"
        }} className="p-10 ">
            <div className='footer'>
                <div className='lg:mx-auto'>
                    <span className="footer-title">Services</span>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </div>
                <div className='lg:mx-auto'>
                    <span className="footer-title">Company</span>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </div>
                <div className='lg:mx-auto'>
                    <span className="footer-title">Legal</span>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </div>
            </div>
            <div className='mb-10 mt-28 text-center'>
                <p>Copyright © {currentYear} - All right reserved</p>
            </div>
        </footer>
    );
};

export default Footer;