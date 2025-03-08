"use client";

import { useState } from 'react';

const Contact = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log('Form submitted with:', { name, email });
    setSubmitted(true);
    setName('');
    setEmail('');
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2 max-w-3xl">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Join our interest list
            </h2>
            <p className="text-lg text-gray-600 md:text-xl">
              Be the first to know when we match new projects with nonprofits.
            </p>
          </div>
        </div>
        
        <div className="mx-auto max-w-md mt-10">
          {submitted ? (
            <div className="p-6 text-center">
              <h3 className="text-lg font-medium text-green-800">Thank you for joining!</h3>
              <p className="mt-2 text-sm text-green-700">
                We&apos;ve received your information and will be in touch soon.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium leading-none">
                  Name
                </label>
                <input
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="flex h-10 w-full border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:border-black"
                  placeholder="Your name"
                  required
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium leading-none">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex h-10 w-full border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:border-black"
                  placeholder="your.email@example.com"
                  required
                />
              </div>
              <button
                type="submit"
                className="inline-flex h-10 w-full items-center justify-center bg-black px-6 py-2 text-sm font-medium text-white transition-colors hover:bg-black/90 focus:outline-none"
              >
                Join the interest list
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact; 