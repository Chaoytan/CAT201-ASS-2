import React from 'react';

const DemoVideo = () => {
    const sectionStyle = {
        textAlign: 'center',
        padding: '80px 20px',
        backgroundColor: '#1d1d42',
        color: 'white'
    };

    const videoWrapper = {
        maxWidth: '800px',
        margin: '40px auto',
        border: '10px solid #333',
        borderRadius: '15px',
        overflow: 'hidden',
        boxShadow: '0 10px 30px rgba(0,0,0,0.5)'
    };

    return (
        <section id="demo" style={sectionStyle}>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '10px' }}>See It In Action</h2>
            <p style={{ color: '#aaa', fontSize: '1.1rem' }}>
                Watch how SmartAttend validates student location in milliseconds.
            </p>

            <div style={videoWrapper}>
                <video width="100%" controls>
                    <source src="/images/demoVideo.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
        </section>
    );
};

export default DemoVideo;