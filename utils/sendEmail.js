import emailjs from '@emailjs/browser';

export default async function sendEmail({ name, email, message, fileUrl, service }) {
    const serviceID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    const templateParams = {
        name,                  // Used in email body and From Name
        email,                 // Used in email body and Reply To
        message,               // Used in body
        file: fileUrl || 'No file uploaded',  // Used in body
        title: `from ${name}`, // 👈 Used in subject
        service                // Used in subject
    };

    return await emailjs.send(serviceID, templateID, templateParams, publicKey);
}
