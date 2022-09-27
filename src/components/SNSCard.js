import React from 'react';
import facebook from '../assets/images/icon-facebook.svg';
import instagram from '../assets/images/icon-instagram.svg';
import twitter from '../assets/images/icon-twitter.svg';
import youtube from '../assets/images/icon-youtube.svg';
import down from '../assets/images/icon-down.svg';
import up from '../assets/images/icon-up.svg';

// require name, mode, sns, number, update

export default function SNSCard({name, mode, sns, number, update}) {

    // init card details based on sns name
    let logo, alt, topColor;
    if (sns ==="facebook") {
        logo = facebook;
        alt = "facebook logo";
        topColor = {backgroundColor: "var(--Facebook)"};
    } else if (sns ==="twitter") {
        logo = twitter;
        alt = "twitter logo";
        topColor = {backgroundColor: "var(--Twitter)"};
    } else if (sns ==="instagram") {
        logo = instagram;
        alt = "instagram logo";
        topColor = {backgroundImage: "var(--Instagram)"};
    } else if (sns ==="youtube") {
        logo = youtube;
        alt = "youtube logo";
        topColor = {backgroundColor: "var(--YouTube)"};
    };

    return (
        <div className={`${mode} SNS card`}>
            <span style={topColor}></span>
            <div className='SNS-heading'>
                <img src={logo} alt={alt} />
                <p>@{name}</p>
            </div>
            <h2>{number}</h2>
            <p>F O L L O W E R S</p>
            <div className='update'>
                <img src={update > 0 ? up : down} alt="arrow sign"/>
                <p
                    style={update > 0 ? {color: 'var(--LimeGreen'} : {color: 'var(--BrightRed'} }
                >
                    {Math.abs(update)} Today
                </p>
            </div>
        </div>
    );
};