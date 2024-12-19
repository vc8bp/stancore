"use client"
import React, { useState } from 'react'
import styles from './ContactUs.module.scss'
import { sendMail } from './sendMail';
import { products } from '@/app/products/page';
import { useParams, usePathname, useSearchParams } from 'next/navigation';


function Form() {
    const url = useSearchParams()
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
        companyName: "",
        product: url.get("product") ?? ""
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
            <input
                type="text"
                name="companyName"
                placeholder="Your Company Name"
                value={formData.companyName}
                onChange={handleChange}
                required
            />

            <select
                name="product"
                value={formData.product}
                onChange={handleChange}
                required
            >
                <option value="" disabled>Select a Product</option> {/* Placeholder option */}
                {products.map((product) => (
                    <option key={product.id} value={product.name}>
                        {product.name}
                    </option>
                ))}
            </select>
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