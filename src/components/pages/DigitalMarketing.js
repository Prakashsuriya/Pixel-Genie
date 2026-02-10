import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const DigitalMarketing = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const subServices = [
        { title: 'SEO', icon: 'fa-magnifying-glass', desc: 'Search engine optimization to boost your visibility and organic traffic' },
        { title: 'Social Media Management', icon: 'fa-users', desc: 'Strategic social media management across all platforms' },
        { title: 'Social Media Marketing', icon: 'fa-hashtag', desc: 'Targeted campaigns that engage and convert your audience' },
        { title: 'Email Marketing', icon: 'fa-envelope', desc: 'Direct email campaigns that nurture leads and drive sales' },
        { title: 'Content Marketing', icon: 'fa-pen-nib', desc: 'Compelling content that tells your brand story effectively' }
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
                className="service-hero"
                style={{
                    backgroundImage: `url('/images/Digital%20Marketing.jpeg')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    padding: '120px 0 80px',
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
                        <h1 className="display-2 fw-bold text-white mb-4">Digital Marketing</h1>
                        <div className="d-flex align-items-center gap-3 mb-4">
                            <div className="d-flex align-items-center justify-content-center rounded-circle bg-white" style={{ width: '60px', height: '60px' }}>
                                <i className="fa-solid fa-chart-line" style={{ fontSize: '28px', color: '#ec4899' }}></i>
                            </div>
                            <p className="lead text-white mb-0" style={{ maxWidth: '800px', fontSize: '1.8rem', fontWeight: '500' }}>
                                Data-driven growth strategies to amplify your reach
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
                                    <strong>PixelGenie Digital Marketing</strong> is based in Bengaluru and helps brands grow smarter with data-driven strategies, creative storytelling, and measurable results. We are a full-service digital marketing agency dedicated to helping businesses build a strong, impactful, and sustainable online presence in today's competitive digital landscape.
                                </p>
                                <p className="mb-4" style={{ lineHeight: '1.8', fontSize: '1.8rem', color: 'rgba(255,255,255,0.9)' }}>
                                    Our expertise spans SEO, social media marketing, performance advertising, content creation, website optimization, and brand strategy. By combining deep market insights with innovative digital tools, we create customized solutions that align with your business goals and speak directly to your target audience. Whether you're a startup looking to establish your brand or an established business aiming to scale, we tailor our approach to deliver maximum ROI.
                                </p>
                                <p style={{ lineHeight: '1.8', fontSize: '1.8rem', color: 'rgba(255,255,255,0.9)' }}>
                                    At PixelGenie, we believe in transparency, continuous optimization, and long-term partnerships. Our team closely monitors performance, analyzes data, and refines strategies to ensure consistent growth, higher engagement, and meaningful conversions. With a passion for creativity and a focus on results, we help your brand stand out, connect, and succeed in the digital world.
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
                        className="row g-4 justify-content-center"
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
                                            background: 'linear-gradient(135deg, #ec4899 0%, #be185d 100%)'
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

export default DigitalMarketing;
