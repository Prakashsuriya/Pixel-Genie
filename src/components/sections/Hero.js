import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <section className="position-relative vh-100 d-flex align-items-center justify-content-center overflow-hidden" id="home">

            {/* Background Video with Overlay */}
            <div className="position-absolute top-0 start-0 w-100 h-100 z-0">
                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-100 h-100 object-fit-cover"
                    style={{ filter: 'brightness(0.4)' }}
                >
                    <source src="/images/bg.webm" type="video/webm" />
                </video>
                <div className="position-absolute top-0 start-0 w-100 h-100"
                    style={{ background: 'linear-gradient(to bottom, rgba(10,10,10,0.3), rgba(10,10,10,1))' }}>
                </div>
            </div>

            {/* Content Container */}
            <div className="container position-relative z-1 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                >
                    <h1 className="display-1 fw-bold text-white mb-2" style={{ fontFamily: 'Syne, sans-serif', fontSize: 'clamp(3rem, 8vw, 7rem)', lineHeight: 0.9 }}>
                        WE CREATE <br />
                        <span className="text-accent-gradient">DIGITAL MAGIC</span>
                    </h1>
                </motion.div>

                <motion.p
                    className="lead text-secondary mt-4 mb-5 mx-auto"
                    style={{ maxWidth: '600px', fontFamily: 'Outfit, sans-serif' }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                >
                    Pixel Genie is a forward-thinking creative agency blending imagination with technology to build immersive brand experiences.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.6, duration: 0.5 }}
                >
                    <a href="#services" className="btn-premium">
                        Explore Our Work
                    </a>
                </motion.div>

                {/* Scroll Indicator */}
                <motion.div
                    className="position-absolute start-50 translate-middle-x"
                    style={{ bottom: '20px' }}
                    animate={{ y: [0, 10, 0] }}
                    transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                >
                    <div style={{
                        width: '30px',
                        height: '50px',
                        border: '2px solid rgba(255,255,255,0.2)',
                        borderRadius: '15px',
                        display: 'flex',
                        justifyContent: 'center',
                        paddingTop: '10px'
                    }}>
                        <div style={{ width: '4px', height: '8px', background: '#fff', borderRadius: '2px' }}></div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
