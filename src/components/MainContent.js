import React from 'react';
import { personalIntroduction, experienceInIndia, youtube, blogs, publication } from '../data';

const MainContent = () => {
    return (        
        <div className="content pure-u-1 pure-u-md-3-4">
            <div className="posts">        
                <h1 className="content-subhead">{personalIntroduction.category}</h1>        
                {/* <section className="post">                        
                    <div className="post-description">
                        <div className="post-images pure-g">
                            <div className="pure-u-1 pure-u-md-1-2 pad-class">
                                <iframe src={personalIntroduction.video.link} title={personalIntroduction.video.title} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                            </div>
                            <div className="pure-u-1 pure-u-md-1-2" style={{'padding':'0 10px 0 0'}}>
                                {personalIntroduction.video.description}
                            </div>
                        </div>
                    </div>
                </section> */}
                <section className="post">                        
                    <div className="post-description">
                        <div className="post-images pure-g">
                            <div className="pure-u-1 pure-u-md-1-2 pad-class">
                                <a href={publication.url} target="_blank" rel="noopener noreferrer">
                                    <div style={{background: `url(${publication.image}) no-repeat left`,backgroundSize: 'cover', height: '315px'}} className="pub-image-bg"></div>
                                    <img src={publication.image} alt="Publication" style={{width: '100%',height:'315px'}} className="pub-img" />
                                </a>
                            </div>
                            <div className="pure-u-1 pure-u-md-1-2" style={{'padding':'0 10px 0 0'}}>
                                <div className="post-meta">{publication.meta}</div>
                                {publication.description}
                            </div>
                        </div>
                    </div>
                </section>
                
                <h1 className="content-subhead">{experienceInIndia.category}</h1>        
                <section className="post">                        
                    <div className="post-description">
                        <div className="post-images pure-g">
                        {experienceInIndia.exp.map((item, key) => (
                            <div className="pure-u-1 pure-u-md-1-2 pad-class" key={key}>
                                <div className="post-title">{item.title}</div>
                                <div className="post-meta">{item.meta}</div>
                                    <ul className="experienceIndiaUL">
                                    {item.description.map((d, key2) => (
                                        <li key={key2}>{d}</li>
                                    ))}
                                    </ul>
                            </div>                           
                        ))}
                        </div>
                    </div>
                </section>

                <h1 className="content-subhead">{youtube.category}</h1>        
                <section className="post">                        
                    <div className="post-description">
                        <div className="post-images pure-g">
                        {youtube.videos.map((item, key) => (
                            <div className="pure-u-1 pure-u-md-1-2 pad-class" key={key}>
                                <iframe src={item.url} title={item.title} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                                <div className="post-title">{item.title}</div>
                                <div className="post-meta">{item.meta}</div>                                
                            </div>                           
                        ))}
                        </div>
                    </div>
                </section>

                <h1 className="content-subhead">{blogs.category}</h1> 
                <section className="post">                        
                    <div className="post-description">
                        <div className="post-images pure-g">
                        {blogs.content.map((item, key) => (
                            <div className="pure-u-1 pure-u-md-1-4" style={{'padding':'0 15px 0 0'}} key={key}>
                                <a href={item.url} target="_blank" rel="noopener noreferrer"><div className="blog-grid-item-image" style={{background: `url(${item.image}) no-repeat center`,backgroundSize: 'cover'}}></div></a>
                                <div className="blog-grid-item-title"><a href={item.url} target="_blank" rel="noopener noreferrer">{item.title}</a></div>                                                                
                            </div>                           
                        ))}
                        </div>
                    </div>
                </section>    
            </div>
        </div>
    );
}

export default MainContent;