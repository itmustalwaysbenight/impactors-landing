"use client";

import { useState } from 'react';

type FAQItem = {
  question: string;
  answer: string;
};

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqItems: FAQItem[] = [
    {
      question: "What is gamified volunteering?",
      answer: "Gamified volunteering is on the rise. Changing traditional volunteering into a flexible and skill building experiences. It incorporates elements of game design to motivate and reward volunteers."
    },
    {
      question: "How do I sign up for the pilot?",
      answer: "Signing up is easy! Simply click the 'Sign Up' button on our homepage and fill out the registration form. Once registered, you can soon explore non-binding volunteer opportunities that match your skills."
    },
    {
      question: "Who can volunteer?",
      answer: "Anyone can volunteer! We welcome especially individuals from all backgrounds, including students, professionals, and retirees. If you have digital skills or a passion for helping others, there's a place for you here."
    },
    {
      question: "What skills are needed?",
      answer: "We seek a diverse range of skills, including graphic design, marketing, communication, AI tools, UX/UI design, and social media expertise. Whether you're a communicator or a content creator, your talents can make a difference."
    },
    {
      question: "Can I earn references?",
      answer: "Yes, volunteering with us can help you build your professional portfolio. Many nonprofits provide references upon completion of projects. This is a great way to enhance your resume while making an impact."
    },
    {
      question: "What is your business model?",
      answer: "Recruitment. For those who want - companies, start-and scale ups can find freelance or part-time hires for thir squads."
    }
  ];

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-[#121212] text-white py-24">
      <div className="container max-w-7xl mx-auto px-8">
        <div className="mb-16">
          <h2 className="text-5xl font-bold mb-6">FAQs</h2>
          <p className="text-lg max-w-3xl">
            Find answers to common questions about our platform and how to get involved.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          {faqItems.map((item, index) => (
            <div key={index} className="border-b border-gray-800">
              <button
                className="w-full py-6 text-left flex justify-between items-center focus:outline-none"
                onClick={() => toggleAccordion(index)}
              >
                <h3 className="text-xl font-bold">{item.question}</h3>
                <svg
                  className={`w-6 h-6 transform ${openIndex === index ? 'rotate-180' : ''} transition-transform duration-200`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96 pb-6' : 'max-h-0'
                }`}
              >
                <p className="text-gray-300">{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 