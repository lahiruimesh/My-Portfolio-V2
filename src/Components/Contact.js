import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';

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
    <motion.section
      id="contact"
      className="p-8 bg-gradient-to-r from-purple-900 via-black to-black min-h-screen"
      style={{
        backgroundImage: 'linear-gradient(to bottom right, #000015,rgb(12, 1, 20),rgb(25, 5, 41),rgb(8, 2, 12))',
        backgroundColor: '#000015' // fallback color
      }}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <h2 className="text-3xl font-bold text-white text-center">Contact Me</h2>
      <div className="max-w-2xl mx-auto m-12">
        <form 
          ref={form} 
          onSubmit={sendEmail} 
          className="max-w-lg mx-auto mt-6 bg-white bg-opacity-10 p-8 rounded-1g shadow-5g rounded-xl border border-gray-600"
        >
          <input 
            type="text" 
            name="name" 
            placeholder="Your Name" 
            className="w-full p-4 border rounded-lg mb-6 opacity-90" 
            required 
          />
          <input 
            type="email" 
            name="email" 
            placeholder="Your Email" 
            className="w-full p-4 border rounded-lg mb-6 opacity-90" 
            required 
          />
          <textarea 
            placeholder="Message" 
            name="message" 
            className="w-full p-6 border rounded-lg mb-6 opacity-90" 
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
    </motion.section>
  );
};

export default ContactUs;
