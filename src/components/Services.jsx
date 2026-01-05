import React from 'react';

const Services = () => {
    const containerStyle = {
        padding: '60px 20px',
        textAlign: 'center',
        backgroundColor: '#fff'
    };

    const cardContainer = {
        display: 'flex',
        justifyContent: 'center',
        gap: '20px',
        flexWrap: 'wrap',
        marginTop: '40px'
    };

    const cardStyle = {
        border: '1px solid #ddd',
        borderRadius: '8px',
        padding: '30px',
        width: '300px',
        textAlign: 'left'
    };

    return (
        <section id="products" style={containerStyle}>
            <h2 style={{ fontSize: '2.5rem', color: '#1a1a2e' }}>Our Solutions</h2>

            <div style={cardContainer}>
                {/* Service 1: Geofencing */}
                <div style={cardStyle}>
                    <h3 style={{ color: '#4db5ff' }}>📍 Geofencing Attendance</h3>
                    <p>
                        Proprietary GPS algorithms ensure students are physically present
                        in the lecture hall before they can sign in.
                    </p>
                </div>

                {/* Service 2: Analytic */}
                <div style={cardStyle}>
                    <h3 style={{ color: '#4db5ff' }}>📊 Real-time Analytics</h3>
                    <p>
                        Lecturers get live dashboards showing attendance rates, late arrivals,
                        and truancy patterns instantly.
                    </p>
                </div>

                {/* Service 3: Mobile App */}
                <div style={cardStyle}>
                    <h3 style={{ color: '#4db5ff' }}>📱 Native Mobile App</h3>
                    <p>
                        Available on iOS and Android. Low battery consumption with high
                        accuracy location services.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Services;