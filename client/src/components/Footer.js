import React from 'react'
import './Footer.css'

import { Link } from 'react-router-dom';

function Footer() {
    return (
        <div className='footer-container'>
            <section class='social-media'>
                <div class='social-media-wrap'>

                    <div class='footer-logo'>
                        <Link to='/' className='social-logo'>
                            CassiaShield
                            <i class='fas fa-coffee' />
                        </Link>
                    </div>

                    <small class='author'>By Lilan Chamuditha (2024)</small>

                    <div class='social-icons'>
                        <Link
                            class='social-icon-link facebook'
                            to='/'
                            target='_blank'
                            aria-label='Facebook'
                        >
                            <i class='fab fa-facebook-f' />
                        </Link>
                        <Link
                            class='social-icon-link instagram'
                            to='/'
                            target='_blank'
                            aria-label='Instagram'
                        >
                            <i class='fab fa-instagram' />
                        </Link>
                        <Link
                            class='social-icon-link youtube'
                            to='/'
                            target='_blank'
                            aria-label='Youtube'
                        >
                            <i class='fab fa-youtube' />
                        </Link>
                        <Link
                            class='social-icon-link twitter'
                            to='/'
                            target='_blank'
                            aria-label='Twitter'
                        >
                            <i class='fa-brands fa-x-twitter' />
                        </Link>
                        <Link
                            class='social-icon-link twitter'
                            to='/'
                            target='_blank'
                            aria-label='LinkedIn'
                        >
                            <i class='fab fa-linkedin' />
                        </Link>
                    </div>

                </div>
            </section>
        </div>
    );
}

export default Footer;
