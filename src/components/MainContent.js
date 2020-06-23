import React from 'react';
import { personalIntroduction, experienceInIndia, youtube, blogs } from '../data';

const MainContent = () => {
    return (        
        <div className="content pure-u-1 pure-u-md-3-4">
            <div className="posts">        
                <h1 className="content-subhead">{personalIntroduction.category}</h1>        
                <section className="post">                        
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
                </section>
                
                <h1 className="content-subhead">{experienceInIndia.category}</h1>        
                <section className="post">                        
                    <div className="post-description">
                        <div className="post-images pure-g">
                        {experienceInIndia.exp.map((item, key) => (
                            <div className="pure-u-1 pure-u-md-1-2 pad-class" key={key}>
                                <div className="post-title">{item.title}</div>
                                <div className="post-meta">{item.meta}</div>
                                {item.description}
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
                                {item.description}
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
                                <div className="blog-grid-item-image" style={{backgroundImage: `url(${item.url})`}}></div>
                                <div className="blog-grid-item-title">{item.title}</div>                                                                
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