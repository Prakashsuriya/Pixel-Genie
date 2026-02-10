import React from 'react';
import { motion } from 'framer-motion';

const Industries = () => {
    const industries = [
        { icon: 'fa-microchip', name: 'Technology' },
        { icon: 'fa-chalkboard-user', name: 'Education' },
        { icon: 'fa-gears', name: 'Engineering' },
        { icon: 'fa-building', name: 'Real Estate' },
        { icon: 'fa-car-side', name: 'Automobile' },
        { icon: 'fa-utensils', name: 'F & B' },
        { icon: 'fa-stethoscope', name: 'Healthcare' },
        { icon: 'fa-handshake-angle', name: 'NGO' },
        { icon: 'fa-industry', name: 'Manufacturing' },
        { icon: 'fa-cart-shopping', name: 'Ecommerce' }
    ];

    return (
        <section className="py-5 position-relative overflow-hidden" style={{ background: 'var(--bg-dark)', minHeight: '80vh' }}>
            {/* Animated Background Gradient */}
            <div className="position-absolute top-0 start-0 w-100 h-100" style={{
                background: 'radial-gradient(circle at 20% 50%, rgba(0, 245, 255, 0.1) 0%, transparent 50%), radial-gradient(circle at 80% 50%, rgba(255, 0, 229, 0.08) 0%, transparent 50%)',
                zIndex: 0
            }}></div>

            <div className="container py-5 position-relative" style={{ zIndex: 1 }}>
                {/* Section Header */}
                <motion.div
                    className="text-center mb-5"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2
                        className="display-3 fw-bold mb-4"
                        style={{
                            color: '#FFFFFF',
                            letterSpacing: '1px',
                            textShadow: '0 0 30px rgba(0, 245, 255, 0.3)'
                        }}
                    >
                        Trusted Across Industries
                    </h2>
                    <p className="lead mx-auto" style={{ maxWidth: '700px', color: 'rgba(255,255,255,0.8)', fontSize: '1.2rem' }}>
                        Delivering excellence across diverse sectors
                    </p>
                </motion.div>

                {/* Industries Grid */}
                <motion.div
                    className="row g-5 justify-content-center"
                    variants={{
                        hidden: { opacity: 0 },
                        show: {
                            opacity: 1,
                            transition: {
                                staggerChildren: 0.08
                            }
                        }
                    }}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-50px" }}
                >
                    {industries.map((ind, index) => (
                        <motion.div
                            key={index}
                            className="col-6 col-sm-4 col-md-3 col-lg-2"
                            variants={{
                                hidden: { opacity: 0, y: 50 },
                                show: {
                                    opacity: 1,
                                    y: 0,
                                    transition: {
                                        type: "spring",
                                        stiffness: 100,
                                        damping: 12
                                    }
                                }
                            }}
                        >
                            <motion.div
                                whileHover={{
                                    scale: 1.2,
                                    transition: { duration: 0.3 }
                                }}
                                className="text-center"
                                style={{
                                    cursor: 'pointer'
                                }}
                            >
                                {/* Animated Icon */}
                                <motion.div
                                    animate={{
                                        y: [0, -15, 0],
                                    }}
                                    transition={{
                                        duration: 3,
                                        repeat: Infinity,
                                        ease: "easeInOut",
                                        delay: index * 0.2
                                    }}
                                    className="mb-4"
                                >
                                    <motion.i
                                        className={`fa-solid ${ind.icon}`}
                                        style={{
                                            fontSize: '5rem',
                                            background: 'var(--theme-gradient)',
                                            backgroundClip: 'text',
                                            WebkitBackgroundClip: 'text',
                                            WebkitTextFillColor: 'transparent',
                                            filter: 'drop-shadow(0 0 25px rgba(0, 245, 255, 0.6))'
                                        }}
                                        animate={{
                                            rotate: [0, 5, -5, 0],
                                        }}
                                        transition={{
                                            duration: 4,
                                            repeat: Infinity,
                                            ease: "easeInOut",
                                            delay: index * 0.3
                                        }}
                                        whileHover={{
                                            rotate: 360,
                                            scale: 1.3,
                                            transition: { duration: 0.6 }
                                        }}
                                    />
                                </motion.div>

                                {/* Industry Name */}
                                <motion.h4
                                    className="fw-bold mb-0"
                                    style={{
                                        color: '#FFFFFF',
                                        fontSize: '1.4rem',
                                        letterSpacing: '1px',
                                        fontFamily: 'Syne, sans-serif',
                                        textShadow: '0 2px 15px rgba(0, 0, 0, 0.7)'
                                    }}
                                    whileHover={{
                                        y: -5,
                                        transition: { duration: 0.2 }
                                    }}
                                >
                                    {ind.name}
                                </motion.h4>
                            </motion.div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Industries;
