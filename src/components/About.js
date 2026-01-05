import React from 'react';

const About = () => {
    const containerStyle = {
        padding: '80px 20px',
        backgroundColor: 'white',
        textAlign: 'center'
    };

    // Flex container for mission,vision cards
    const gridStyle = {
        display: 'flex',
        justifyContent: 'center',
        gap: '40px',
        flexWrap: 'wrap',
        marginTop: '40px',
        maxWidth: '1200px',
        marginLeft: 'auto',
        marginRight: 'auto'
    };

    // Individual card style
    const cardStyle = {
        flex: '1',
        minWidth: '300px',
        padding: '30px',
        borderRadius: '12px',
        backgroundColor: '#f8f9fa',
        boxShadow: '0 5px 15px rgba(0,0,0,0.05)',
        borderLeft: '5px solid #4db5ff'
    };

    const headingStyle = {
        fontSize: '1.8rem',
        marginBottom: '15px',
        color: '#1a1a2e'
    };

    return (
        <section id="about" style={containerStyle}>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '20px', color: '#1a1a2e' }}>Who We Are</h2>
            <p style={{ maxWidth: '700px', margin: '0 auto', fontSize: '1.1rem', color: '#555' }}>
                Founded by Computer Science graduates from USM, GeoPresence Solutions is an IoT-focused software house dedicated to modernizing educational institutions through smart location technology.
            </p>

            <div style={gridStyle}>
                {/* Mission Card */}
                <div style={cardStyle}>
                    <h3 style={headingStyle}>Our Mission</h3>
                    <p style={{ color: '#666', lineHeight: '1.6' }}>
                        To eliminate academic dishonesty and streamline classroom management by providing secure, non-intrusive, and precise location verification systems for universities worldwide.
                    </p>
                </div>

                {/* Vision Card */}
                <div style={cardStyle}>
                    <h3 style={headingStyle}>Our Vision</h3>
                    <p style={{ color: '#666', lineHeight: '1.6' }}>
                        To become the global standard for "Smart Campus" integration, creating an ecosystem where physical presence is verified instantly, securely, and automatically without disrupting the learning process.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default About;