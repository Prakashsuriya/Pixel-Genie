import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <section id="about" className="py-5 position-relative overflow-hidden" style={{ background: 'var(--bg-white)' }}>
            {/* Decorative Background Element for Distinction */}
            <div className="position-absolute end-0 top-0 opacity-20" style={{
                width: '400px',
                height: '400px',
                background: 'radial-gradient(circle, rgba(102, 102, 255, 0.2) 0%, transparent 70%)',
                filter: 'blur(80px)',
                zIndex: 0
            }}></div>

            <div className="container py-5 position-relative z-1">
                <div className="row align-items-center justify-content-center">
                    <div className="col-lg-10">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="p-5 rounded-5 shadow-lg text-center"
                            style={{
                                background: 'rgba(255, 255, 255, 0.8)',
                                backdropFilter: 'blur(20px)',
                                border: '1px solid rgba(0,0,0,0.05)'
                            }}
                        >
                            <span className="text-secondary text-uppercase letter-spacing-3 fw-bold mb-3 d-block small">Who We Are</span>
                            <h2 className="display-4 fw-bold mb-5" style={{ color: 'var(--text-main)' }}>About Us</h2>

                            <div className="row justify-content-center">
                                <div className="col-lg-10">
                                    <p className="lead mb-4" style={{ lineHeight: 1.8, fontFamily: 'Outfit, sans-serif', color: 'var(--text-secondary)' }}>
                                        Welcome to <span className="fw-bold" style={{ color: 'var(--theme-color)' }}>Pixel Genie</span>, where creativity meets strategy to bring your brand's vision to life. We are a dynamic, full-service creative and digital agency dedicated to crafting compelling narratives and building powerful, measurable online presences for businesses like yours.
                                    </p>
                                    <p className="lead mb-0" style={{ lineHeight: 1.8, fontFamily: 'Outfit, sans-serif', color: 'var(--text-secondary)' }}>
                                        We at Pixel Genie offer all your digital needs from Video Production, E-Learning, Digital Marketing, Branding, Website Design, Advertising and Corporate Gifts.
                                    </p>
                                </div>
                            </div>

                            {/* Stats or Decor */}
                            <div className="row mt-5 pt-4 border-top border-secondary border-opacity-10 g-4">
                                <div className="col-md-4">
                                    <h3 className="h2 fw-bold mb-1" style={{ color: '#000' }}>Full-Service</h3>
                                    <p className="small text-uppercase fw-bold" style={{ color: '#000' }}>Creative Agency</p>
                                </div>
                                <div className="col-md-4">
                                    <h3 className="h2 fw-bold mb-1" style={{ color: '#000' }}>Global</h3>
                                    <p className="small text-uppercase fw-bold" style={{ color: '#000' }}>Client Reach</p>
                                </div>
                                <div className="col-md-4">
                                    <h3 className="h2 fw-bold mb-1" style={{ color: '#000' }}>Digital</h3>
                                    <p className="small text-uppercase fw-bold" style={{ color: '#000' }}>Transformation</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
