import '../styles/MediaCard.css';
import '../App.css';
import instagramLogo from '../assets/images/ig.png';
import youtubeLogo from '../assets/images/youtube.png';
import twitterLogo from '../assets/images/twitter.png';
import tiktokLogo from '../assets/images/tiktok.png';

const MediaCard = () => {
    return (
        <>
            <h2 className='title'>Join Our Community</h2>
            <div className='container'>
                <div className='box'>
                    <div className='imgBx'>
                        <a
                            href='https://www.youtube.com/channel/UCXU1ohhGUZCAqjLJWM-QvCQ'
                            target='_blank'
                        >
                            <img src={youtubeLogo} alt='Youtube Channel' />
                        </a>
                    </div>
                    <div className='content'>
                        <h2>Youtube Channel</h2>
                    </div>
                </div>

                <div className='box'>
                    <div className='imgBx'>
                        <a
                            href='https://www.instagram.com/cacs__ig/'
                            target='_blank'
                        >
                            <img src={instagramLogo} alt='instagram' />
                        </a>
                    </div>
                    <div className='content'>
                        <h2>Follow me on Instagram! </h2>
                    </div>
                </div>

                <div className='box'>
                    <div className='imgBx'>
                        <a href='https://twitter.com/cacs__tw' target='_blank'>
                            <img src={twitterLogo} alt='Twitter' />
                        </a>
                    </div>
                    <div className='content'>
                        <h2>Follow me on Twitter!</h2>
                    </div>
                </div>

                <div className='box'>
                    <div className='imgBx'>
                        <a
                            href='https://www.tiktok.com/@cacs__tiktok?'
                            target='_blank'
                        >
                            <img src={tiktokLogo} alt='Tik Tok' />
                        </a>
                    </div>
                    <div className='content'>
                        <h2>Follow me on Tik Tok!</h2>
                    </div>
                </div>
            </div>
        </>
    );
};

export default MediaCard;
