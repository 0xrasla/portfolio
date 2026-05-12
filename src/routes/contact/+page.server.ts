import { MAIL_TO, SMTP_HOST, SMTP_PASS, SMTP_PORT, SMTP_USER } from '$env/static/private';
import { fail } from '@sveltejs/kit';
import nodemailer from 'nodemailer';
import type { Actions } from './$types';

export const actions = {
    default: async ({ request }) => {
        const data = await request.formData();
        const name = data.get('name');
        const email = data.get('email');
        const message = data.get('message');

        if (!name || !email || !message) {
            return fail(400, { error: 'All fields are required.' });
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email.toString())) {
            return fail(400, { error: 'Invalid email address.' });
        }

        try {
            const transporter = nodemailer.createTransport({
                host: SMTP_HOST,
                port: parseInt(SMTP_PORT || '587'),
                secure: parseInt(SMTP_PORT || '587') === 465,
                auth: {
                    user: SMTP_USER,
                    pass: SMTP_PASS
                }
            });

            await transporter.sendMail({
                from: `"${name}" <${SMTP_USER}>`,
                replyTo: email.toString(),
                to: MAIL_TO,
                subject: `New Inquiry from ${name} via Portfolio`,
                text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
                html: `
                    <h3>New Inquiry via Portfolio</h3>
                    <p><strong>Name:</strong> ${name}</p>
                    <p><strong>Email:</strong> ${email}</p>
                    <p><strong>Message:</strong></p>
                    <p>${message.toString().replace(/\n/g, '<br>')}</p>
                `
            });

            return { success: true };
        } catch (error) {
            console.error('Email sending error:', error);
            return fail(500, { error: 'Failed to send inquiry. Please try again later.' });
        }
    }
} satisfies Actions;
