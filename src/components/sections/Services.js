import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const servicesData = [
    {
        id: 'video',
        title: 'Video Production',
        icon: 'fa-film',
        desc: 'Cinematic storytelling that captures the essence of your brand. From product shoots to full-scale commercials.',
        img: '/images/Main.webm',
        type: 'video',
        color: '#4f46e5',
        tags: ['Commercials', 'Product Shoots', 'Reels'],
        route: '/services/video-production'
    },
    {
        id: 'branding',
        title: 'Design & Branding',
        icon: 'fa-palette',
        desc: 'Crafting the soul of your business with distinctive logos, color palettes, and visual languages.',
        img: '/images/brand-identity.jpg',
        type: 'img',
        color: '#7c3aed',
        tags: ['Logo Design', 'Guidelines', 'Typography'],
        route: '/services/branding'
    },
    {
        id: 'digital',
        title: 'Digital Marketing',
        icon: 'fa-chart-line',
        desc: 'Data-driven growth strategies to amplify your reach and convert audiences into loyal customers.',
        img: '/images/digital-marketing.jpg',
        type: 'img',
        color: '#ec4899',
        tags: ['Social Media', 'SEO', 'PPC'],
        route: '/services/digital-marketing'
    },
    {
        id: 'web',
        title: 'Website & App Development',
        icon: 'fa-code',
        desc: 'Building scalable, high-performance digital products that offer seamless user experiences.',
        img: '/images/web-app-dev.jpg',
        type: 'img',
        color: '#06b6d4',
        tags: ['React', 'UI/UX', 'E-Commerce'],
        route: '/services/website'
    },
    {
        id: 'gifts',
        title: 'Corporate Gifting',
        icon: 'fa-gift',
        desc: 'Premium merchandise and custom gifts that leave a lasting impression on clients and employees.',
        img: '/images/corporate-gifting.jpg',
        type: 'img',
        color: '#f59e0b',
        tags: ['Custom Merch', 'Hampers', 'Branding'],
        route: '/services/corporate-gifts'
    },
    {
        id: 'ads',
        title: 'Advertising',
        icon: 'fa-bullhorn',
        desc: 'Campaigns that demand attention. We create visuals that stop the scroll and drive action.',
        img: '/images/Stella.webm',
        type: 'video',
        color: '#10b981',
        tags: ['Billboards', 'Digital Ads', 'Print'],
        route: '/services/advertising'
    }
];

const Services = () => {
    return (
        <section id="services" className="py-5" style={{ background: 'var(--bg-light)' }}>
            <div className="container py-5">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-5 text-center"
                >
                    <h2 className="display-4 fw-bold mb-3" style={{ color: 'var(--text-on-bg)' }}>Our Expertise</h2>
                    <p className="lead mx-auto" style={{ maxWidth: '600px', color: 'rgba(255,255,255,0.9)' }}>
                        We blend creativity with strategy to deliver exceptional results.
                    </p>
                </motion.div>

                <div className="d-flex flex-column gap-5">
                    {servicesData.map((service, index) => (
                        <motion.div
                            key={service.id}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="row align-items-center g-5"
                        >
                            {/* Image Side */}
                            <div className={`col-lg-7 ${index % 2 !== 0 ? 'order-lg-2' : ''}`}>
                                <motion.div
                                    whileHover={{ scale: 1.02 }}
                                    className="rounded-4 overflow-hidden position-relative shadow-lg"
                                    style={{
                                        border: '1px solid rgba(0,0,0,0.05)',
                                        height: '400px',
                                        background: '#fff'
                                    }}
                                >
                                    {service.type === 'video' ? (
                                        <video
                                            src={service.img}
                                            autoPlay
                                            muted
                                            loop
                                            className="w-100 h-100 object-fit-cover"
                                        />
                                    ) : (
                                        <img
                                            src={service.img}
                                            alt={service.title}
                                            className="w-100 h-100 object-fit-cover"
                                        />
                                    )}
                                    <div className="position-absolute top-0 start-0 w-100 h-100" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.1), transparent)' }}></div>
                                </motion.div>
                            </div>

                            {/* Content Side */}
                            <div className={`col-lg-5 ${index % 2 !== 0 ? 'order-lg-1' : ''}`}>
                                <div className="p-2">
                                    <div className="d-flex flex-wrap gap-2 mb-3">
                                        {service.tags.map((tag, i) => (
                                            <span
                                                key={i}
                                                className="badge rounded-pill px-3 py-2 fw-normal"
                                                style={{
                                                    background: 'rgba(102, 102, 255, 0.1)',
                                                    border: '1px solid rgba(102, 102, 255, 0.2)',
                                                    color: 'var(--theme-color)'
                                                }}
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                    <h3 className="display-6 fw-bold mb-3" style={{ color: 'var(--text-main)' }}>{service.title}</h3>
                                    <p className="lead text-secondary mb-4">{service.desc}</p>

                                    <div className="d-flex align-items-center gap-3">
                                        <div
                                            className="d-flex align-items-center justify-content-center rounded-circle"
                                            style={{ width: '40px', height: '40px', background: service.color }}
                                        >
                                            <i className={`fa-solid ${service.icon} text-white`}></i>
                                        </div>
                                        <Link to={service.route} className="text-decoration-none fw-bold group-hover-arrow" style={{ color: 'var(--theme-color)' }}>
                                            Explore <i className="fa-solid fa-arrow-right ms-2"></i>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
