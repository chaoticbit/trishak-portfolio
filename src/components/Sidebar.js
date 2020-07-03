import React from 'react';
import { info } from '../data.js';

const Sidebar = () => {
    return (        
        <div className="sidebar pure-u-1 pure-u-md-1-4">
            <div className="header">
                <div className="avatar-wrapper">
                    <div className="avatar" style={{background: `url(${info.avatar}) no-repeat center`,backgroundSize: 'cover'}}></div>
                </div>
                <h1 className="brand-title">{info.name}</h1>
                <h2 className="brand-tagline pure-hidden-xs pure-hidden-sm pure-hidden-md">{info.aboutMe}</h2>
                <Nav />
            </div>
        </div>        
    );
}

const Nav = () => {    
    return (
        <nav className="nav">
            <ul className="nav-list">
                {info.nav.map((item, key) => (
                    <li key={key}>
                        <div className="pure-g">
                            <div className="pu pure-u-md-1-8"><img src={item.img} alt="icon" /></div>
                            <div className="pu pure-u-1 pure-u-md-7-8">{
                            item.link ? <a href={item.link} target="_blank" rel="noopener noreferrer">{item.text}</a> : <span>{item.text}</span>
                        }                        </div>
                        </div>                                                
                    </li>
                ))}
            </ul>
        </nav>
    );
}

export default Sidebar;