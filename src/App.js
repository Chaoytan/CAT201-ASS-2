import React from 'react';

// Import child component to build page
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import DemoVideo from './components/DemoVideo';
import Team from './components/Team';
import Footer from './components/Footer';
import './App.css'; // Styling

function App() {
    return (
        <div className="App">
            <Navbar />
            <Hero />
            <About />
            <Services />
            <DemoVideo />
            <Team />
            <Footer />
        </div>
    );
}

export default App;