"use server";

import nodemailer from "nodemailer";

export async function sendMail({ name, email, message, companyName, product,  }) {
  console.log({ name, email, message, companyName, product })

  const transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: process.env.EMAIL_USERNAME, 
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  const mailOptions = {
    from: email, 
    to: "sales@rjenterpriseinfo.com", 
    subject: `New Contact Form Submission from ${name}`,
    html: `
      <div style="font-family: Arial, sans-serif; color: #333; line-height: 1.6; max-width: 600px; margin: 0 auto; border: 1px solid #ddd; border-radius: 8px; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);">
        <div style="background-color: #ffc53e; padding: 12px 20px; border-top-left-radius: 8px; border-top-right-radius: 8px; text-align: center;">
          <h2 style="margin: 0; color: #fff;">New Contact Form Submission</h2>
        </div>
        <div style="padding: 20px;">
          <h3 style="margin-top: 0; color: #0198bb;">Contact Details:</h3>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> <a href="mailto:${email}" style="color: #0198bb; text-decoration: none;">${email}</a></p>
          <p><strong>Company Name:</strong> ${companyName}</p>
          <p><strong>Product of Interest:</strong> ${product}</p>
  
          <h3 style="margin-top: 20px; color: #0198bb;">Message:</h3>
          <p style="background-color: #f9f9f9; padding: 15px; border-left: 4px solid #ffc53e; margin: 0;">
            ${message.replace(/\n/g, "<br>")}
          </p>
        </div>
        <div style="background-color: #414141; padding: 12px; text-align: center; color: #fff; border-bottom-left-radius: 8px; border-bottom-right-radius: 8px;">
          <p style="margin: 0;">Thank you for your submission!</p>
        </div>
      </div>
    `,
  };
  

  try {
    await transporter.sendMail(mailOptions);
    console.log("Email sent successfully!");
  } catch (error) {
    console.error("Error sending email:", error);
    throw error;
  }
}
