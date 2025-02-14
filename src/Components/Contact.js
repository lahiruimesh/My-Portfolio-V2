import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="p-8 bg-white min-h-screen">
      <h2 className="text-3xl font-bold text-center">Contact Me</h2>
      <form className="max-w-lg mx-auto mt-6">
        <input type="text" placeholder="Your Name" className="w-full p-2 border rounded-lg mb-4" />
        <input type="email" placeholder="Your Email" className="w-full p-2 border rounded-lg mb-4" />
        <textarea placeholder="Message" className="w-full p-2 border rounded-lg mb-4"></textarea>
        <button className="bg-blue-600 text-white px-6 py-2 rounded-lg">Send</button>
      </form>
    </section>
  );
};

export default Contact;
