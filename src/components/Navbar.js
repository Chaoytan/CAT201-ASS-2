import React from 'react';

const Navbar = () => {
    const navStyle = {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        padding: '1rem 2rem',
        backgroundColor: '#1a1a2e',
        color: '#fff',
        boxShadow: '0 2px 5px rgba(0,0,0,0.2)',
        position: 'sticky',
        top: '0',
        zIndex: '1000',
        width: '100%',
        boxSizing: 'border-box'
    };

    const linkContainerStyle = {
        display: 'flex',
        alignItems: 'center',
        gap: '20px',
        flexWrap: 'wrap',
        marginTop: '10px'
    };

    const linkStyle = {
        color: '#fff',
        textDecoration: 'none',
        fontWeight: 'bold',
        whiteSpace: 'nowrap'
    };

    return (
        <nav style={navStyle}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
                {/* Company Logo */}
                <img
                    src="/geoplogo1.png"
                    alt="Logo"
                    style={{ height: '40px', marginRight: '10px' }}
                />
                {/* Company Title */}
                <h1 style={{ fontSize: '1.5rem', whiteSpace: 'nowrap' }}>
                    GeoPresence Solutions
                </h1>
            </div>


            {/* Navigation Link Container*/}
            <div style={linkContainerStyle}>
                <a href="#home" style={linkStyle}>Home</a>
                <a href="#products" style={linkStyle}>Products</a>
                <a href="#team" style={linkStyle}>Our Team</a>
            </div>
        </nav>
    );
};

export default Navbar;