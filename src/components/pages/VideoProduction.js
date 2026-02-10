import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const VideoProduction = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const subServices = [
        { title: 'Corporate Videos', icon: 'fa-building', desc: 'Professional corporate films that communicate your brand story' },
        { title: 'Podcast Videos', icon: 'fa-microphone', desc: 'High-quality podcast recording and production' },
        { title: 'Explainer Videos', icon: 'fa-lightbulb', desc: 'Clear, engaging videos that explain complex concepts' },
        { title: 'E-Learning Videos', icon: 'fa-graduation-cap', desc: 'Educational content that makes learning engaging' },
        { title: 'Motion Graphics', icon: 'fa-layer-group', desc: 'Stunning animated graphics that bring ideas to life' },
        { title: 'Animation Videos', icon: 'fa-wand-magic-sparkles', desc: 'Creative animations for any storytelling need' },
        { title: 'Video Editing Services', icon: 'fa-scissors', desc: 'Expert post-production editing and color grading' },
        { title: 'Product Photoshoot', icon: 'fa-camera', desc: 'Stunning product photography that showcases your products beautifully' },
        { title: 'Event Photoshoot', icon: 'fa-calendar-check', desc: 'Professional event coverage capturing memorable moments' }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5
            }
        }
    };

    return (
        <div className="service-detail-page">
            {/* Hero Section */}
            <motion.section
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="service-hero service-hero-padding"
                style={{
                    backgroundImage: 'url(/images/Video-Production.jpg)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    position: 'relative',
                    overflow: 'hidden'
                }}
            >
                <div className="position-absolute w-100 h-100 top-0 start-0" style={{
                    background: 'rgba(0,0,0,0.4)',
                    pointerEvents: 'none'
                }}></div>

                <div className="container position-relative">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                    >
                        <Link to="/" className="text-white text-decoration-none d-inline-flex align-items-center mb-4" style={{ opacity: 0.9 }}>
                            <i className="fa-solid fa-arrow-left me-2"></i> Back to Home
                        </Link>
                        <h1 className="display-2 fw-bold text-white mb-4">Video Production</h1>
                        <div className="d-flex align-items-center gap-3 mb-4">
                            <div className="d-flex align-items-center justify-content-center rounded-circle bg-white" style={{ width: '60px', height: '60px' }}>
                                <i className="fa-solid fa-film" style={{ fontSize: '28px', color: '#667eea' }}></i>
                            </div>
                            <p className="lead text-white mb-0" style={{ maxWidth: '800px', fontSize: '1.8rem', fontWeight: '500' }}>
                                Cinematic storytelling that captures the essence of your brand
                            </p>
                        </div>
                    </motion.div>
                </div>
            </motion.section>

            {/* Description Section */}
            <section className="py-5" style={{ background: 'var(--bg-light)' }}>
                <div className="container py-4">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="row justify-content-center"
                    >
                        <div className="col-lg-10">
                            <div className="glass-card p-5 rounded-4">
                                <p className="mb-4" style={{ lineHeight: '1.8', fontSize: '1.8rem', color: 'rgba(255,255,255,0.9)' }}>
                                    Based in the heart of India's tech capital, <strong>PixelGenie</strong> is a Bengaluru-based video production powerhouse built for the modern era. We bridge the gap between high-end creative artistry and systematic, tech-first efficiency to deliver premium video content at the speed of business.
                                </p>
                                <p className="mb-4" style={{ lineHeight: '1.8', fontSize: '1.8rem', color: 'rgba(255,255,255,0.9)' }}>
                                    Our video production services include brand films, corporate videos, social media videos, product demos, promotional videos, reels, motion graphics, and post-production editing. From concept development and scripting to filming, editing, and final delivery, we manage the entire production process with precision and creativity. Every video is crafted to align with your brand identity and marketing goals.
                                </p>
                                <p style={{ lineHeight: '1.8', fontSize: '1.8rem', color: 'rgba(255,255,255,0.9)' }}>
                                    At PixelGenie, we don't just make films; we build the engines that power your brand's visual narrative. From Bengaluru to the world, we are India's comprehensive partner for all things video.
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Sub-Services Grid */}
            <section className="py-5" style={{ background: 'var(--bg-dark)' }}>
                <div className="container py-4">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center display-5 fw-bold mb-5"
                        style={{ color: 'var(--text-on-bg)' }}
                    >
                        Our Expertise
                    </motion.h2>

                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="row g-4"
                    >
                        {subServices.map((service, index) => (
                            <motion.div
                                key={index}
                                variants={cardVariants}
                                className="col-lg-4 col-md-6"
                            >
                                <motion.div
                                    whileHover={{ scale: 1.05, y: -5 }}
                                    transition={{ duration: 0.3 }}
                                    className="service-sub-card h-100 p-4 rounded-4"
                                    style={{
                                        background: 'rgba(255, 255, 255, 0.05)',
                                        backdropFilter: 'blur(10px)',
                                        border: '1px solid rgba(255, 255, 255, 0.1)',
                                        cursor: 'pointer'
                                    }}
                                >
                                    <div className="d-flex align-items-center justify-content-center rounded-circle mb-3 mx-auto"
                                        style={{
                                            width: '70px',
                                            height: '70px',
                                            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
                                        }}
                                    >
                                        <i className={`fa-solid ${service.icon} text-white`} style={{ fontSize: '28px' }}></i>
                                    </div>
                                    <h4 className="h5 fw-bold text-center mb-3" style={{ color: 'var(--text-on-bg)' }}>
                                        {service.title}
                                    </h4>
                                    <p className="text-center mb-0" style={{ color: 'rgba(255,255,255,0.8)' }}>
                                        {service.desc}
                                    </p>
                                </motion.div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default VideoProduction;
