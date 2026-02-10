import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Branding = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const subServices = [
        { title: 'Brand Development', icon: 'fa-compass-drafting', desc: 'Complete brand strategy from concept to execution' },
        { title: 'Brand Implementation', icon: 'fa-rocket', desc: 'Bringing your brand to life across all touchpoints' },
        { title: 'Logo Design', icon: 'fa-star', desc: 'Memorable logos that define your brand identity' },
        { title: 'Brand Identity', icon: 'fa-fingerprint', desc: 'Comprehensive visual identity systems' },
        { title: 'Style Guides', icon: 'fa-book', desc: 'Detailed brand guidelines for consistency' },
        { title: 'Brand Redesign', icon: 'fa-arrows-rotate', desc: 'Refreshing and modernizing established brands' }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1 }
        }
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5 }
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
                    backgroundImage: 'url(/images/Branding.jpg)',
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
                        <h1 className="display-2 fw-bold text-white mb-4">Brand Identity</h1>
                        <div className="d-flex align-items-center gap-3 mb-4">
                            <div className="d-flex align-items-center justify-content-center rounded-circle bg-white" style={{ width: '60px', height: '60px' }}>
                                <i className="fa-solid fa-palette" style={{ fontSize: '28px', color: '#7c3aed' }}></i>
                            </div>
                            <p className="lead text-white mb-0" style={{ maxWidth: '800px', fontSize: '1.8rem', fontWeight: '500' }}>
                                Crafting the soul of your business with distinctive visual languages
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
                                    At <strong>PixelGenie</strong>, we believe that great brands are built on strong identities. Our branding services help businesses create distinctive, memorable brand identities that resonate with their target audience and stand out in competitive markets.
                                </p>
                                <p className="mb-4" style={{ lineHeight: '1.8', fontSize: '1.8rem', color: 'rgba(255,255,255,0.9)' }}>
                                    From initial brand strategy and logo design to comprehensive brand identity systems and detailed style guides, we handle every aspect of brand development. Whether you're launching a new brand or refreshing an existing one, we create visual identities that tell your unique story and connect emotionally with your customers.
                                </p>
                                <p style={{ lineHeight: '1.8', fontSize: '1.8rem', color: 'rgba(255,255,255,0.9)' }}>
                                    Our branding process includes in-depth market research, competitor analysis, audience insights, and creative exploration to ensure your brand identity is not just beautiful, but strategically aligned with your business goals. We craft logos, color palettes, typography systems, and visual languages that work seamlessly across all brand touchpoints.
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
                                            background: 'linear-gradient(135deg, #7c3aed 0%, #5b21b6 100%)'
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

export default Branding;
