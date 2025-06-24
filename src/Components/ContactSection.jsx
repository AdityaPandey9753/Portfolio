import React, { useState } from 'react';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ name, email, subject, message });
    alert('Form submitted! (Check console for data)');
  };

  return (
    <section id="contact" className="bg-offWhite px-4 sm:px-6 lg:px-20 py-12 font-poppins">
      <div className="max-w-5xl mx-auto p-5 md:p-14">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
          Let’s connect
        </h2>
        <p className="text-gray-600 mb-8">
          I’m open to freelance opportunities, collaborations, or just a friendly hello 👋
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Your Name
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name"
                className="w-full px-4 py-3 border border-gray-200 rounded-md shadow-sm focus:ring-teal focus:border-teal text-sm"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Your Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="w-full px-4 py-3 border border-gray-200 rounded-md shadow-sm focus:ring-teal focus:border-teal text-sm"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Subject
            </label>
            <input
              type="text"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              placeholder="Let’s talk about your idea"
              className="w-full px-4 py-3 border border-gray-200 rounded-md shadow-sm focus:ring-teal focus:border-teal text-sm"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Message
            </label>
            <textarea
              rows="5"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Write your message here..."
              className="w-full px-4 py-3 border border-gray-200 rounded-md shadow-sm focus:ring-teal focus:border-teal text-sm"
            ></textarea>
          </div>

          <div>
            <button
              type="submit"
              className="inline-flex items-center px-6 py-3 bg-teal text-white text-sm font-medium rounded-md shadow hover:bg-gray-700 transition"
            >
              Just Send
              <svg
                className="ml-2 h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
