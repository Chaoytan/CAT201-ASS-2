import React from 'react';

const Team = () => {
    const teamMembers = [
        { name: "ALBERT ONG WEN XING", role: "Chief Executive Officer (CEO)", img: "/images/albert.png" },
        { name: "TAN YING CHAO", role: "Chief Operating Officer (COO)", img: "/images/tyc.JPG" },
        { name: "CHING KHAI CHEN", role: "Chief Technology Officer (CTO)", img: "/images/ckc.jpg" }
    ];

    const sectionStyle = {
        padding: '50px 20px',
        textAlign: 'center',
        backgroundColor: '#f4f4f4'
    };

    const gridStyle = {
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap', // Responsive on mobile
        gap: '30px',
        marginTop: '30px'
    };

    const cardStyle = {
        backgroundColor: 'white',
        padding: '20px',
        borderRadius: '10px',
        boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
        width: '250px'
    };

    const imgStyle = {
        width: '100px',
        height: '100px',
        borderRadius: '50%',
        objectFit: 'cover',
        marginBottom: '15px'
    };

    return (
        <section id="team" style={sectionStyle}>
            <h2 style={{ color: '#333' }}>Meet Our Team</h2>
            <p>The minds behind the technology.</p>

            <div style={gridStyle}>
                {teamMembers.map((member, index) => (
                    <div key={index} style={cardStyle}>
                        {/* Dynamic Image Loading */}
                        <img src={member.img} alt={member.name} style={imgStyle} />
                        <h3 style={{ margin: '10px 0', color: '#1a1a2e' }}>{member.name}</h3>
                        <p style={{ color: '#666' }}>{member.role}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Team;