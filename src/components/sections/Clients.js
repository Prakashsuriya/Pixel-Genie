import React from 'react';
import { motion } from 'framer-motion';

const Clients = () => {
    const clientImages = [
        '/images/clients/yellow-img.webp',
        '/images/clients/TGV 2 logo-1.webp',
        '/images/clients/T E Logo-2.webp',
        '/images/clients/salem-img.webp',
        '/images/clients/skin-img.webp',
        '/images/clients/smart-img.webp',
        '/images/clients/Q-img.webp',
        '/images/clients/NUA-img.webp',
        '/images/clients/FB L.webp'
    ];

    return (
        <section id="clients" className="py-5 position-relative overflow-hidden" style={{ background: 'transparent' }}>
            <div className="container py-4">
                <motion.div
                    className="rounded-5 p-5 position-relative overflow-hidden shadow-lg"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    style={{ background: '#f3f4f6' }} // Light Gray Card Background
                >
                    <div className="text-center mb-5">
                        <motion.h2
                            className="display-4 fw-bold mb-3"
                            style={{ color: '#1f2937' }} // Dark Text
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                        >
                            Our Happy Clients
                        </motion.h2>
                        <div className="mx-auto" style={{ width: '60px', height: '4px', background: '#3b82f6' }}></div>
                    </div>

                    {/* Marquee Container */}
                    <div className="d-flex position-relative overflow-hidden w-100 mask-gradient" style={{ whiteSpace: 'nowrap' }}>
                        <motion.div
                            className="d-flex gap-4 align-items-center"
                            animate={{ x: ["0%", "-50%"] }}
                            transition={{ ease: "linear", duration: 30, repeat: Infinity }}
                        >
                            {/* Tripled list for smoother infinite scroll on wide screens */}
                            {[...clientImages, ...clientImages, ...clientImages].map((src, index) => (
                                <div
                                    key={index}
                                    className="flex-shrink-0 d-flex align-items-center justify-content-center"
                                    style={{
                                        width: '180px',
                                        height: '120px',
                                        padding: '10px'
                                    }}
                                >
                                    <img
                                        src={src}
                                        alt={`Client ${index}`}
                                        style={{
                                            width: '150px',
                                            height: '100px',
                                            objectFit: 'contain',
                                            filter: 'grayscale(100%)',
                                            opacity: 0.8,
                                            transition: 'all 0.3s ease'
                                        }}
                                        onMouseEnter={(e) => {
                                            e.target.style.opacity = '1';
                                            e.target.style.filter = 'none';
                                            e.target.style.transform = 'scale(1.1)';
                                        }}
                                        onMouseLeave={(e) => {
                                            e.target.style.opacity = '0.8';
                                            e.target.style.filter = 'grayscale(100%)';
                                            e.target.style.transform = 'scale(1)';
                                        }}
                                    />
                                </div>
                            ))}
                        </motion.div>
                    </div>
                </motion.div>
            </div>

            {/* CSS moved to index.css */}
        </section>
    );
};

export default Clients;
