import React from 'react';

const Footer = () => {

    return (
        <div className='footer'>
            <div className='brand'>
                <h2> </h2>
                <h6 className='summary'> Back Home was designed to be a simple and easy to access tool with only one goal, help lost pets get back to their beloved family.
                    Back Home - NY - 2022</h6>
            </div>

            <div className='social_media'>
                <a href="https://www.facebook.com/Back-Home-110748035078931">
                    <button className='social_network' type="button" >  </button>
                </a>
                <button className='social_network2'></button>
                <button className='social_network3'></button>
            </div>
        </div>
    );
}

export default Footer;