import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Website = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const subServices = [
        { title: 'Web Design', icon: 'fa-paintbrush', desc: 'Beautiful, modern websites that captivate your audience' },
        { title: 'Web Development', icon: 'fa-code', desc: 'Custom web applications built with cutting-edge technology' },
        { title: 'E-commerce Website', icon: 'fa-cart-shopping', desc: 'Full-featured online stores that drive sales' },
        { title: 'Website Maintenance', icon: 'fa-screwdriver-wrench', desc: 'Ongoing support to keep your site running smoothly' },
        { title: 'Mobile App Development', icon: 'fa-mobile-screen', desc: 'Native and cross-platform mobile applications' },
        { title: 'UI/UX Design', icon: 'fa-pen-ruler', desc: 'User-centered design that enhances engagement' }
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
                    backgroundImage: `url('/images/Web%20%26%20App.jpg')`,
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
                        <h1 className="display-2 fw-bold text-white mb-4">Website & App Development</h1>
                        <div className="d-flex align-items-center gap-3 mb-4">
                            <div className="d-flex align-items-center justify-content-center rounded-circle bg-white" style={{ width: '60px', height: '60px' }}>
                                <i className="fa-solid fa-code" style={{ fontSize: '28px', color: '#06b6d4' }}></i>
                            </div>
                            <p className="lead text-white mb-0" style={{ maxWidth: '800px', fontSize: '1.8rem', fontWeight: '500' }}>
                                Building scalable digital products with seamless user experiences
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
                                    At <strong>PixelGenie</strong>, we create digital experiences that combine stunning design with powerful functionality. Our development team specializes in building custom websites, web applications, mobile apps, and e-commerce platforms that help businesses thrive in the digital age.
                                </p>
                                <p className="mb-4" style={{ lineHeight: '1.8', fontSize: '1.8rem', color: 'rgba(255,255,255,0.9)' }}>
                                    From responsive web design to complex web applications, from iOS and Android mobile apps to custom UI/UX design, we handle every aspect of digital product development. We use modern technologies and best practices to ensure your digital products are fast, secure, scalable, and maintainable.
                                </p>
                                <p style={{ lineHeight: '1.8', fontSize: '1.8rem', color: 'rgba(255,255,255,0.9)' }}>
                                    Whether you need a corporate website, an e-commerce store, a mobile app, or a complete digital ecosystem, our team has the expertise to bring your vision to life. We don't just build products—we create digital solutions that drive business results.
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
                                            background: 'linear-gradient(135deg, #06b6d4 0%, #0891b2 100%)'
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

export default Website;
