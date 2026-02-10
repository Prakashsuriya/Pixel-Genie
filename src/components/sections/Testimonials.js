import React from 'react';
import { motion } from 'framer-motion';

const Testimonials = () => {
    const reviews = [
        { name: "Sarah Jenkins", role: "CMO, TechFlow", text: "Pixel Genie didn't just build a website; they crafted a digital experience that completely repositioned our brand in the market. Absolutely stunning work." },
        { name: "David Chen", role: "Founder, StartUp X", text: "The team's attention to detail and ability to translate complex ideas into visual narratives is unmatched. Our conversion rates doubled within a month." },
        { name: "Elena Rodriguez", role: "Director, Creative Arts", text: "A rare combination of technical expertise and artistic brilliance. They are not just vendors; they are partners in true sense." },
        { name: "Michael Chang", role: "VP Marketing, Innovate Inc", text: "Exceptional delivery and creativity. The best agency we have worked with for our digital transformation." },
        { name: "Priya Sharma", role: "CEO, NextGen Solutions", text: "Pixel Genie transformed our vision into reality. Their strategic approach is a game changer." }
    ];

    return (
        <section className="py-5 position-relative overflow-hidden" id="testimonials" style={{ background: 'var(--bg-light)' }}>
            {/* Background Gradient Effect */}
            <div className="position-absolute start-50 top-50 translate-middle" style={{
                width: '600px',
                height: '600px',
                background: 'radial-gradient(circle, rgba(255, 255, 255, 0.1) 0%, transparent 70%)',
                filter: 'blur(60px)',
                zIndex: 0
            }}></div>

            <div className="container-fluid py-5 position-relative z-1">
                <motion.div
                    className="text-center mb-5"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="display-4 fw-bold mb-2" style={{ color: 'var(--text-on-bg)' }}>Client Stories</h2>
                    <p className="lead" style={{ color: 'rgba(255,255,255,0.9)' }}>What our partners say about us</p>
                </motion.div>

                {/* Infinite Marquee Container */}
                <motion.div
                    className="d-flex position-relative overflow-hidden w-100"
                    style={{ whiteSpace: 'nowrap' }}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.5 }}
                >
                    <motion.div
                        className="d-flex gap-4"
                        animate={{ x: ["0%", "-50%"] }}
                        transition={{ ease: "linear", duration: 40, repeat: Infinity }}
                        style={{ width: 'fit-content' }}
                    >
                        {/* Duplicate reviews for seamless loop (x3 for safety on wide screens) */}
                        {[...reviews, ...reviews, ...reviews].map((review, i) => (
                            <div
                                key={i}
                                className="p-4 p-md-5 rounded-5 shadow-sm glass-panel"
                                style={{
                                    width: '450px',
                                    minWidth: '450px',
                                }}
                            >
                                <div className="mb-4" style={{ color: 'var(--theme-color)' }}>
                                    <i className="fa-solid fa-quote-left fa-2x opacity-50"></i>
                                </div>
                                <p className="fs-5 fst-italic mb-4 text-secondary text-wrap" style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 300, lineHeight: 1.6 }}>
                                    "{review.text}"
                                </p>
                                <div className="d-flex align-items-center gap-3">
                                    <div className="rounded-circle d-flex align-items-center justify-content-center fw-bold text-white" style={{ width: '50px', height: '50px', background: 'var(--theme-gradient)' }}>
                                        {review.name.charAt(0)}
                                    </div>
                                    <div>
                                        <h5 className="fw-bold mb-0 fs-6" style={{ color: 'var(--text-main)' }}>{review.name}</h5>
                                        <small className="text-secondary text-uppercase" style={{ fontSize: '0.75rem', letterSpacing: '1px' }}>{review.role}</small>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default Testimonials;
