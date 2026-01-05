import React from 'react';

const Footer = () => {

    const styles = {
        footer: {
            backgroundColor: '#0f0f1b', // Slightly darker than your main bg for contrast
            color: '#ffffff',
            padding: '4rem 2rem 1rem',
            marginTop: 'auto',
        },
        container: {
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            maxWidth: '1200px',
            margin: '0 auto',
            gap: '2rem',
            borderBottom: '1px solid #333',
            paddingBottom: '2rem',
        },
        column: {
            flex: '1',
            minWidth: '250px',
        },
        heading: {
            fontSize: '1.2rem',
            marginBottom: '1rem',
            color: '#4db5ff', // Matches your "Blue" theme accents
        },
        text: {
            fontSize: '0.9rem',
            color: '#ccc',
            lineHeight: '1.6',
            marginBottom: '0.5rem',
        },
        link: {
            display: 'block',
            color: '#ccc',
            textDecoration: 'none',
            marginBottom: '0.5rem',
            fontSize: '0.9rem',
            transition: 'color 0.3s',
        },
        copyright: {
            textAlign: 'center',
            paddingTop: '1.5rem',
            fontSize: '0.8rem',
            color: '#666',
        }
    };


    return (
        <footer style={styles.footer}>
            <div style={styles.container}>

                {/* Column 1: Company Info */}
                <div style={styles.column}>
                    <h3 style={styles.heading}>GeoPresence Solutions</h3>
                    <p style={styles.text}>
                        Verifying the future of education through secure, IoT-based attendance systems.
                    </p>
                </div>

                {/* Column 2: Contact Details */}
                <div style={styles.column}>
                    <h3 style={styles.heading}>Contact Us</h3>
                    <p style={styles.text}>📍 School of Computer Sciences, USM, 11800 Penang, Malaysia</p>
                    <p style={styles.text}>📧 contact@geopresence.com</p>
                    <p style={styles.text}>📞 +60 12-345 6789</p>
                </div>

                {/* Column 3: Quick Links */}
                <div style={styles.column}>
                    <h3 style={styles.heading}>Quick Links</h3>
                    <a href="#home" style={styles.link}>Home</a>
                    <a href="#products" style={styles.link}>Our Solutions</a>
                    <a href="#team" style={styles.link}>Meet the Team</a>
                </div>
            </div>

            {/* Copyright Bar */}
            <div style={styles.copyright}>
                <p>© 2026 GeoPresence Solutions. All Rights Reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;