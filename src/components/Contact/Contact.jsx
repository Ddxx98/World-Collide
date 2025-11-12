import React, { useState } from 'react';
import axios from 'axios';
import styles from './Contact.module.css';
import CustomButton from '../Button/Button';
import Copy from '../../assets/icons/content_copy.svg';

function Contact() {
    const [formData, setFormData] = useState({ fullName: '', email: '', message: '' });
    const [errors, setErrors] = useState({});
    const [statusMessage, setStatusMessage] = useState('');
    const [copyMessage, setCopyMessage] = useState('');

    const validate = () => {
        const newErrors = {};
        if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required.';
        if (!formData.email.trim()) {
            newErrors.email = 'Email is required.';
        } else {
            const re = /^\S+@\S+\.\S+$/;
            if (!re.test(formData.email)) newErrors.email = 'Invalid email address.';
        }
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleChange = e => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        setErrors(prev => ({ ...prev, [name]: undefined }));
        setStatusMessage('');
    };

    const handleSubmit = async e => {
        e.preventDefault();
        if (!validate()) {
            setStatusMessage('');
            return;
        }
        try {
            await axios.post('/api/contact', formData); // Update URL
            setStatusMessage('Message sent successfully!');
            setFormData({ fullName: '', email: '', message: '' });
            setErrors({});
        } catch (err) {
            console.error(err);
            setStatusMessage('Failed to send message. Please try again.');
        }
    };

    const handleCopyEmail = () => {
        navigator.clipboard.writeText('jason@2worldscollide.org')
            .then(() => {
                setCopyMessage('Copied!');
                setTimeout(() => setCopyMessage(''), 2000);
            })
            .catch(() => setCopyMessage('Copy failed'));
    };

    return (
        <section className={styles.contactSection} id="contact">
            <div className={styles.contactBox}>
                <h2 className={styles.contactTitle}>Contact us</h2>
                <div className={styles.contactSubtitle}>
                    If you want to contribute to us in some other way or want to reach out to us
                </div>
                <form className={styles.contactForm} onSubmit={handleSubmit} noValidate>
                    <label>
                        <div>Your full name<span className={styles.required}>*</span></div>
                        <input
                            type="text"
                            name="fullName"
                            value={formData.fullName}
                            onChange={handleChange}
                            className={`${styles.underlinedInput} ${errors.fullName ? styles.inputError : ''}`}
                            placeholder="Your full name"
                            aria-invalid={!!errors.fullName}
                            aria-describedby="fullName-error"
                        />
                    </label>
                    {errors.fullName && <div id="fullName-error" className={styles.errorText}>{errors.fullName}</div>}

                    <label>
                        <div>Your email<span className={styles.required}>*</span></div>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className={`${styles.underlinedInput} ${errors.email ? styles.inputError : ''}`}
                            placeholder="Your email"
                            aria-invalid={!!errors.email}
                            aria-describedby="email-error"
                        />
                    </label>
                    {errors.email && <div id="email-error" className={styles.errorText}>{errors.email}</div>}

                    <label>
                        If you have anything to say or any questions to ask mention them here
                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            className={styles.underlinedTextarea}
                            placeholder="Write here"
                        />
                    </label>

                    <CustomButton className="primary" size="lg" type="submit">Submit</CustomButton>
                </form>

                {statusMessage && (
                    <div className={statusMessage.includes('Failed') ? styles.statusError : styles.statusSuccess}>
                        {statusMessage}
                    </div>
                )}

                <div className={styles.directEmailBox}>
                    <span>Or you can also directly email us here at&nbsp;</span>
                    <a href="mailto:jason@2worldscollide.org" className={styles.directEmail}>jason@2worldscollide.org</a>
                    <button type="button" className={styles.copyButton} onClick={handleCopyEmail} aria-label="Copy email">
                        <img src={Copy} alt="Copy Icon" className={styles.copyIcon} />
                    </button>
                    <span className={styles.copyMessage}>{copyMessage}</span>
                </div>
            </div>
        </section>
    );
}

export default Contact;
