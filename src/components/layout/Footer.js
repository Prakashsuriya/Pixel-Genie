import React, { useState } from 'react';

const Footer = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [submitStatus, setSubmitStatus] = useState({ type: '', message: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus({ type: '', message: '' });

        try {
            const response = await fetch('https://formsubmit.co/ajax/info@pixelgenie.in', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    name: formData.name,
                    email: formData.email,
                    message: formData.message,
                    _subject: `New Contact Form Submission from ${formData.name}`,
                    _template: 'table'
                })
            });

            if (response.ok) {
                setSubmitStatus({
                    type: 'success',
                    message: 'Message sent successfully! We\'ll get back to you soon.'
                });
                setFormData({ name: '', email: '', message: '' });
            } else {
                throw new Error('Failed to send message');
            }
        } catch (error) {
            setSubmitStatus({
                type: 'error',
                message: 'Failed to send message. Please try again or email us directly.'
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <footer id="contact" className="pt-5 position-relative overflow-hidden" style={{ background: '#020617', color: 'var(--text-main)' }}>
            {/* Background Gradient Blob */}
            <div className="position-absolute top-0 start-50 translate-middle-x w-100 h-100 opacity-20"
                style={{
                    background: 'radial-gradient(circle at 50% 0%, rgba(102, 102, 255, 0.1) 0%, transparent 60%)',
                    pointerEvents: 'none'
                }}>
            </div>

            <div className="container position-relative z-1 pt-5">
                <div className="row g-5 mb-5">
                    {/* CTA Column */}
                    <div className="col-lg-6">
                        <h2 className="display-3 fw-bold mb-4" style={{ fontFamily: 'Syne, sans-serif' }}>
                            LET'S BUILD <br />
                            <span className="text-accent-gradient">SOMETHING EPIC.</span>
                        </h2>
                        <p className="lead text-secondary mb-5" style={{ maxWidth: '500px' }}>
                            Ready to transform your brand? Drop us a line or schedule a call.
                            We are currently accepting new projects for 2025.
                        </p>

                        <div className="d-flex flex-column gap-3">
                            <a href="mailto:info@pixelgenie.in" className="h3 text-decoration-none border-bottom border-secondary d-inline-block pb-1" style={{ width: 'fit-content', color: 'var(--text-main)' }}>
                                info@pixelgenie.in
                            </a>
                            <a href="mailto:pixelgeniestudio@gmail.com" className="h3 text-decoration-none border-bottom border-secondary d-inline-block pb-1" style={{ width: 'fit-content', color: 'var(--text-main)' }}>
                                pixelgeniestudio@gmail.com
                            </a>
                            <a href="tel:+918553322586" className="h3 text-decoration-none border-bottom border-secondary d-inline-block pb-1" style={{ width: 'fit-content', color: 'var(--text-main)' }}>
                                +91 85533 22586
                            </a>
                            <address className="text-secondary mt-3 fst-normal">
                                No 54, 5th Main, 7th Cross, Maruthi Nagar,<br />
                                Nagarbhavi Main Road, Bangalore - 560072
                            </address>
                        </div>
                    </div>

                    {/* Form Column */}
                    <div className="col-lg-5 offset-lg-1">
                        <form onSubmit={handleSubmit} className="p-4 p-md-5 rounded-4 shadow-sm" style={{ background: '#ffffff', border: '1px solid rgba(0,0,0,0.05)' }}>
                            <div className="mb-4">
                                <label className="mb-2 small text-uppercase fw-bold" style={{ color: '#666' }}>Your Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="form-control bg-transparent border-bottom border-0 rounded-0 px-0 py-2 shadow-none contact-input"
                                    placeholder="Jane Doe"
                                    style={{
                                        borderBottom: '1px solid #ddd',
                                        color: '#333',
                                        fontSize: '16px'
                                    }}
                                />
                            </div>
                            <div className="mb-4">
                                <label className="mb-2 small text-uppercase fw-bold" style={{ color: '#666' }}>Email Address</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="form-control bg-transparent border-bottom border-0 rounded-0 px-0 py-2 shadow-none contact-input"
                                    placeholder="jane@example.com"
                                    style={{
                                        borderBottom: '1px solid #ddd',
                                        color: '#333',
                                        fontSize: '16px'
                                    }}
                                />
                            </div>
                            <div className="mb-4">
                                <label className="mb-2 small text-uppercase fw-bold" style={{ color: '#666' }}>Project Details</label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    className="form-control bg-transparent border-bottom border-0 rounded-0 px-0 py-2 shadow-none contact-input"
                                    rows="3"
                                    placeholder="Tell us about your next big idea..."
                                    style={{
                                        borderBottom: '1px solid #ddd',
                                        color: '#333',
                                        fontSize: '16px',
                                        resize: 'vertical'
                                    }}>
                                </textarea>
                            </div>

                            {/* Status Messages */}
                            {submitStatus.message && (
                                <div className={`alert ${submitStatus.type === 'success' ? 'alert-success' : 'alert-danger'} mb-4`} role="alert">
                                    {submitStatus.message}
                                </div>
                            )}

                            <button
                                type="submit"
                                className="btn-premium w-100 py-3"
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? 'Sending...' : 'Send Message'}
                            </button>
                        </form>
                    </div>
                </div>

                <div className="row py-4 border-top border-secondary border-opacity-10 mt-5">
                    <div className="col-12 text-center">
                        <div className="d-flex gap-4 justify-content-center mb-3">
                            <a href="https://www.instagram.com/pixelgenieoff?igsh=MWRpN2s1b2M0Y25ycA==" target="_blank" rel="noopener noreferrer" className="text-white-50 hover-white"><i className="fab fa-instagram fa-lg"></i></a>
                            <a href="https://www.facebook.com/share/1BkoAV3XKs/" target="_blank" rel="noopener noreferrer" className="text-white-50 hover-white"><i className="fab fa-facebook fa-lg"></i></a>
                            <a href="https://x.com/PixelGenieoff" target="_blank" rel="noopener noreferrer" className="text-white-50 hover-white"><i className="fab fa-x-twitter fa-lg"></i></a>
                            <a href="https://www.linkedin.com/company/109363312/admin/dashboard/" target="_blank" rel="noopener noreferrer" className="text-white-50 hover-white"><i className="fab fa-linkedin fa-lg"></i></a>
                        </div>
                        <p className="text-white-50 small mb-0">© 2026 Pixel Genie. All Rights Reserved.</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
