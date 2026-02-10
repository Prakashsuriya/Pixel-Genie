import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Advertising = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const subServices = [
        { title: 'Television', icon: 'fa-tv', desc: 'Captivating TV commercials that reach millions' },
        { title: 'FM Radio', icon: 'fa-radio', desc: 'Audio advertising that connects with listeners' },
        { title: 'Newspaper', icon: 'fa-newspaper', desc: 'Print ads that make a lasting impression' },
        { title: 'Outdoor Advertising', icon: 'fa-signs-post', desc: 'Billboards and outdoor displays that demand attention' },
        { title: 'Vehicle Advertising', icon: 'fa-van-shuttle', desc: 'Mobile advertising that travels with your message' },
        { title: 'Welcome Arch', icon: 'fa-archway', desc: 'Grand entrance displays for events and launches' }
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
                    backgroundImage: 'url(/images/Adddd.jpeg)',
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
                        <h1 className="display-2 fw-bold text-white mb-4">Advertising</h1>
                        <div className="d-flex align-items-center gap-3 mb-4">
                            <div className="d-flex align-items-center justify-content-center rounded-circle bg-white" style={{ width: '60px', height: '60px' }}>
                                <i className="fa-solid fa-bullhorn" style={{ fontSize: '28px', color: '#10b981' }}></i>
                            </div>
                            <p className="lead text-white mb-0" style={{ maxWidth: '800px', fontSize: '1.8rem', fontWeight: '500' }}>
                                Campaigns that demand attention and drive action
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
                                    <strong>PixelGenie Advertising</strong> creates impactful campaigns across traditional and modern media channels. We understand that successful advertising requires the perfect blend of creativity, strategic placement, and compelling messaging.
                                </p>
                                <p className="mb-4" style={{ lineHeight: '1.8', fontSize: '1.8rem', color: 'rgba(255,255,255,0.9)' }}>
                                    From television commercials and radio spots to outdoor billboards and innovative vehicle advertising, we manage end-to-end advertising campaigns that capture attention and drive results. Our team handles everything from concept development and creative production to media buying and campaign execution.
                                </p>
                                <p style={{ lineHeight: '1.8', fontSize: '1.8rem', color: 'rgba(255,255,255,0.9)' }}>
                                    Whether you need mass market reach through TV and print, targeted local visibility through outdoor advertising, or mobile brand presence through vehicle wraps, we deliver advertising solutions that make your brand impossible to ignore. We create visuals that stop the scroll and messaging that drives action.
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
                                            background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)'
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

export default Advertising;
