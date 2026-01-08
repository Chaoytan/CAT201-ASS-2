import React from 'react';

const Hero = () => {
    const heroStyle = {
        textAlign: 'center',
        padding: '100px 20px',
        background: 'linear-gradient(to right, #16222A, #3A6073)',
        color: 'white'
    };

    // Smooth scrolling to DemoVideo section
    const scrollToDemo = () => {
        const element = document.getElementById('demo');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };


    return (
        <div id="home" style={heroStyle}>
            <h1 style={{ fontSize: '3rem', marginBottom: '20px' }}>
                SmartAttend. <span style={{ color: '#4db5ff' }}>Verified.</span>
            </h1>
            <p style={{ fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto 30px' }}>
                We are an IoT specialist company dedicated to eliminating academic fraud
                through precise Geofencing and Biometric technology.
            </p>

            {/* Call-to-Action Button */}
            <button
                onClick={scrollToDemo}
                style={{
                    padding: '15px 30px',
                    fontSize: '1rem',
                    backgroundColor: '#4db5ff',
                    border: 'none',
                    borderRadius: '5px',
                    cursor: 'pointer',
                    fontWeight: 'bold',
                    color: 'white'
                }}
            >
                See It In Action
            </button>
        </div>
    );
};

export default Hero;