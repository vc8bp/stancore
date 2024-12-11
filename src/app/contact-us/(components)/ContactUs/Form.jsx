"use client"
import React, { useState } from 'react'
import styles from './ContactUs.module.scss'
import { sendMail } from './sendMail';


function Form() {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });
    const [status, setStatus] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus("Sending...");
        try {
          await sendMail(formData); 
          setStatus("Message sent successfully!");
          setFormData({ name: "", email: "", message: "" }); 
        } catch (error) {
          console.error(error);
          setStatus("Failed to send message. Please try again later.");
        }
      };

    return (
        <form className={styles.contactForm} onSubmit={handleSubmit}>
            <h2 className="title">Contact Us</h2>
            <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
            />
            <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
            />
            <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                required
            ></textarea>
            <button type="submit">Send</button>
            {status && <p>{status}</p>}
        </form>
    )
}

export default Form