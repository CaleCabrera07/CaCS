import React from 'react';
import '../App.css';
import '../styles/GameCard.css';
//game icons
import lolIcon from '../assets/images/lol.png';
import codIcon from '../assets/images/cod.png';
import stats from '../assets/images/stats.png';
import banner from '../assets/images/banner.png';

import sniperplay from '../assets/videos/sniperplay.mp4';
import caitlyn from '../assets/videos/caitlyn.mp4';

//Serives = Gaming
const GameCard = () => {
    return (
        <>
            <div className='container__gaming'>
                <div className='box__gaming'>
                    <div className='content'>
                        <img src={lolIcon} alt='lol icon' />
                        <h3>League Of Legends</h3>
                        <p>
                            I started playing in mid-season 4, and since then
                            I've been playing in Lan (main), NA and EUW.
                        </p>
                    </div>
                </div>
                <div className='box__gaming'>
                    <video
                        src={caitlyn}
                        className='gameplay'
                        autoPlay
                        loop
                        muted
                    ></video>
                </div>
                <div className='box__gaming'>
                    <div className='content'>
                        <img src={stats} alt='stats icon' className='stats' />
                        <h3>Stats</h3>
                        <p>
                            Position: Mid / Supp. <br />
                            LAN: CaleCabrera07 | GOLD IV <br />
                            NA: AbortoePerro | Unranked <br />
                            EUW: KilodeChorizo | Unranked <br />
                        </p>
                    </div>
                </div>
            </div>

            <div className='banner__container'>
                <div className='banner'>
                    <img src={banner} alt='banner cacs' />
                </div>
            </div>

            <div className='container__gaming'>
                <div className='box__gaming'>
                    <div className='content cod'>
                        <img src={codIcon} alt='lol icon' />
                        <h3>Call of Duty</h3>
                        <p>
                            I started playing since Call of Duty 4: Modern
                            Warfare, <br /> I've played most of them as well.
                            <br />
                            Bo2 is king (Change my mind).
                        </p>
                    </div>
                </div>

                <div className='box__gaming'>
                    <video
                        src={sniperplay}
                        className='gameplay-cod'
                        autoPlay
                        loop
                        muted
                    ></video>
                </div>

                <div className='box__gaming'>
                    <div className='content cod'>
                        <img src={stats} alt='stats icon' className='stats' />
                        <h3>Stats</h3>
                        <p>
                            BattleNet: Cale#1610 <br />
                            Region: Americas <br />
                            Currently Playing: Warzone <br />
                            K/DA: 1.26 <br />
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default GameCard;
