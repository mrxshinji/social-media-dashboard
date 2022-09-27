import React from 'react';
import facebook from '../assets/images/icon-facebook.svg';
import instagram from '../assets/images/icon-instagram.svg';
import twitter from '../assets/images/icon-twitter.svg';
import youtube from '../assets/images/icon-youtube.svg';
import down from '../assets/images/icon-down.svg';
import up from '../assets/images/icon-up.svg';

//require sns, number, mode, percentage

export default function UpdateCard({sns, number, mode, info, percentage}) {
    let logo, alt;
    if (sns ==="facebook") {
        logo = facebook;
        alt = "facebook logo";
    } else if (sns ==="twitter") {
        logo = twitter;
        alt = "twitter logo";
    } else if (sns ==="instagram") {
        logo = instagram;
        alt = "instagram logo";
    } else if (sns ==="youtube") {
        logo = youtube;
        alt = "youtube logo";
    };

    return (
        <div className={`update-card card ${mode}`}>
            <div className='update-text'>
                <p>{info}</p>
                <img src={logo} alt={alt} />
            </div>
            <div className='update-details'>
                <h4>{number}</h4>
                <div className='update-mini'>
                    <img src={percentage > 0 ? up : down} alt="arrow sign"/>
                    <p
                        style={percentage > 0 ? {color: 'var(--LimeGreen'} : {color: 'var(--BrightRed'} }
                    >
                        {Math.abs(percentage)}%
                    </p>
                </div>
            </div>
        </div>
    )
}