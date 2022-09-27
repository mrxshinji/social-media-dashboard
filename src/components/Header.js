import React from 'react';

export default function Header(props) {
    return (
        <header id="header" className={props.mode}>
            <div className='header-text'>
                <h1>Social Media Dashboard</h1>
                <p>Total Followers: {props.follower}</p>
            </div>
            <hr />
            <div id="mode">
                <p>{props.mode === "dark" ? 'Dark' : 'Light'} mode</p>
                <div id="toggle-box" >
                    <button onClick={props.toggleMode} className={props.mode === "dark" ? '' : 'active'}></button>
                    <span id="toggler" className={props.mode === "dark" ? '' : 'active'}></span>
                </div>
            </div>
        </header>
    );
};