import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

export const ContactUs = () => {
  const form = useRef();
  const [feedback, setFeedback] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_xa0drtt', 
        'template_ehhmb7m', 
        form.current, 
        { publicKey: '3sbGL_jTTQYd-B7_F' }
      )
      .then(
        () => {
          console.log('SUCCESS!');
          setFeedback('Message sent successfully!');
          // Reset the form after successful submission
          form.current.reset();
        },
        (error) => {
          console.log('FAILED...', error.text);
          setFeedback('Failed to send message. Please try again later.');
        }
      );
  };

  return (
    <section id="contact" className="p-8 bg-black min-h-screen">
      <div className="max-w-2xl mx-auto">
      <h2 className="text-3xl font-bold text-white text-center">Contact Me</h2>
        <form 
          ref={form} 
          onSubmit={sendEmail} 
          className="max-w-lg mx-auto mt-6"
        >
          <input 
            type="text" 
            name="name" 
            placeholder="Your Name" 
            className="w-full p-2 border rounded-lg mb-4" 
            required 
          />
          <input 
            type="email" 
            name="email" 
            placeholder="Your Email" 
            className="w-full p-2 border rounded-lg mb-4" 
            required 
          />
          <textarea 
            placeholder="Message" 
            name="message" 
            className="w-full p-2 border rounded-lg mb-4" 
            required
          ></textarea>
          <button 
            type="submit"
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Send
          </button>
        </form>
        {/* Display feedback message */}
        {feedback && (
          <p 
            className="mt-4 text-center font-medium"
            style={{ color: feedback.includes('successfully') ? 'green' : 'red' }}
          >
            {feedback}
          </p>
        )}
      </div>
    </section>
  );
};

export default ContactUs;
