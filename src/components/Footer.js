import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from './Button';
import '../styles/Footer.css';

const Footer = () => {
    return (
        <div className='footer-container'>
            {/* <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          Join the Adventure newsletter to receive our best vacation deals
        </p>
        <p className='footer-subscription-text'>
          You can unsubscribe at any time.
        </p>
        <div className='input-areas'>
          <form>
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='Your Email'
            />
            <Button buttonStyle='btn--outline'>Subscribe</Button>
          </form>
        </div>
      </section> */}
            <div class='footer-links'>
                <div className='footer-link-wrapper'>
                    <div class='footer-link-items'>
                        <h2>About Us</h2>
                        <Link to='/sign-up'>How it works</Link>
                        <Link to='/'>Testimonials</Link>
                        <Link to='/'>Contact</Link>
                        <Link to='/'>Terms of Service</Link>
                    </div>
                    <div class='footer-link-items'>
                        <h2>Social Media</h2>
                        <a
                            href='https://www.youtube.com/channel/UCXU1ohhGUZCAqjLJWM-QvCQ'
                            target='_blank'
                            aria-label='Youtube'
                        >
                            Youtube
                        </a>
                        <a
                            href='https://www.instagram.com/cacs__ig/'
                            target='_blank'
                            aria-label='Instagram'
                        >
                            Instagram
                        </a>
                        <a
                            href='https://twitter.com/cacs__tw'
                            target='_blank'
                            aria-label='Twitter'
                        >
                            Twitter
                        </a>
                        <a
                            href='https://www.tiktok.com/@cacs__tiktok?'
                            target='_blank'
                            aria-label='TikTok'
                        >
                            Tiktok
                        </a>
                    </div>
                    <div class='footer-link-items'>
                        <h2>Contact Us</h2>
                        <Link to='/'>Contact</Link>
                        <Link to='/'>Support</Link>
                        <Link to='/'>Destinations</Link>
                        <Link to='/'>Sponsorships</Link>
                    </div>
                </div>
                {/* <div className='footer-link-wrapper'>
                    <div class='footer-link-items'>
                        <h2>Videos</h2>
                        <Link to='/'>Submit Video</Link>
                        <Link to='/'>Ambassadors</Link>
                        <Link to='/'>Agency</Link>
                        <Link to='/'>Influencer</Link>
                    </div>
                </div> */}
            </div>
            <section class='social-media'>
                <div class='social-media-wrap'>
                    <div class='footer-logo'>
                        <Link to='/' className='social-logo'>
                            CACS
                            <i class='fas fa-gamepad' />
                        </Link>
                    </div>
                    <small class='website-rights'>CACS © 2020</small>
                    <div class='social-icons'>
                        <a
                            class='social-icon-link youtube'
                            href='https://www.youtube.com/channel/UCXU1ohhGUZCAqjLJWM-QvCQ'
                            target='_blank'
                            aria-label='Youtube'
                        >
                            <i class='fab fa-youtube' />
                        </a>
                        <a
                            class='social-icon-link instagram'
                            href='https://www.instagram.com/cacs__ig/'
                            target='_blank'
                            aria-label='Instagram'
                        >
                            <i class='fab fa-instagram' />
                        </a>
                        <a
                            class='social-icon-link twitter'
                            href='https://twitter.com/cacs__tw'
                            target='_blank'
                            aria-label='Twitter'
                        >
                            <i class='fab fa-twitter' />
                        </a>
                        <a
                            class='social-icon-link facebook'
                            href='https://www.tiktok.com/@cacs__tiktok?'
                            target='_blank'
                            aria-label='TikTok'
                        >
                            <i class='fab fa-tiktok' />
                        </a>
                        {/* <Link
                            class='social-icon-link twitter'
                            to='/'
                            target='_blank'
                            aria-label='LinkedIn'
                        >
                            <i class='fab fa-linkedin' />
                        </Link> */}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Footer;
