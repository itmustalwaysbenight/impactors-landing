"use client";

import { useState, useRef, useEffect } from 'react';
import TypeformSurvey from './TypeformSurvey';

export default function EmailSubscription() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const surveyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Scroll to the survey when it becomes visible
    if (success && surveyRef.current) {
      setTimeout(() => {
        surveyRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 500); // Small delay to ensure DOM is updated
    }
  }, [success]);

  const validateEmail = (email: string) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Reset states
    setError('');
    setSuccess(false);
    
    // Validate email
    if (!email.trim()) {
      setError('Please enter your email address');
      return;
    }
    
    if (!validateEmail(email)) {
      setError('Please enter a valid email address');
      return;
    }
    
    setLoading(true);
    
    try {
      // Send the email to our API endpoint
      console.log('Submitting email:', email);
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });
      
      const data = await response.json();
      console.log('Response:', data);
      
      if (!response.ok) {
        throw new Error(data.error || 'Something went wrong');
      }
      
      setSuccess(true);
      setEmail('');
    } catch (error: any) {
      console.error('Subscription error:', error);
      setError(error.message || 'Something went wrong. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-white relative">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white z-0"></div>
      
      <div className="container max-w-7xl mx-auto px-8 relative z-10">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-10 border border-gray-100">
            <div className="text-center mb-10">
              <h2 className="text-4xl font-bold mb-6 text-black">Join our interest list</h2>
              <p className="text-xl text-gray-600">
                Be the first to know when we launch and get early access to our platform.
              </p>
            </div>
            
            {success ? (
              <div>
                <div className="bg-green-50 border border-green-200 rounded-lg p-8 mb-8 text-center">
                  <svg className="w-16 h-16 text-green-500 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                  <h3 className="text-green-800 font-bold text-2xl mb-2">
                    Thank you for subscribing!
                  </h3>
                  <p className="text-green-700 text-lg mb-4">
                    You're now on our interest list and will be notified when we launch.
                  </p>
                </div>
                
                <div ref={surveyRef} className="bg-blue-50 border border-blue-200 rounded-lg p-8 mb-8 text-center">
                  <div className="flex items-center justify-center mb-4">
                    <div className="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold mr-2">1</div>
                    <div className="h-1 w-12 bg-blue-300"></div>
                    <div className="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold">2</div>
                  </div>
                  <h3 className="text-blue-800 font-bold text-2xl mb-3">
                    One more step: Quick Survey
                  </h3>
                  <p className="text-blue-700 text-lg mb-3">
                    We'd love to learn more about you to better tailor our platform to your needs.
                  </p>
                  <p className="text-blue-600 font-medium mb-4">
                    This short survey will take only 2-3 minutes to complete.
                  </p>
                  <button 
                    onClick={() => {
                      const surveyElement = document.querySelector('.typeform-container');
                      if (surveyElement) {
                        surveyElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
                      }
                    }}
                    className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-colors mb-4"
                  >
                    Start Survey Now
                  </button>
                  <p className="text-gray-500 text-sm mb-4">
                    Having trouble viewing the survey? Use the "Open in new tab" option at the top of the survey.
                  </p>
                  <div className="flex justify-center">
                    <svg className="w-6 h-6 text-blue-500 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                    </svg>
                  </div>
                </div>
                
                <TypeformSurvey isVisible={true} />
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="max-w-md mx-auto">
                <div className="flex flex-col gap-4">
                  <div className="flex-grow">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email address"
                      className={`w-full px-4 py-4 border ${error ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg`}
                      disabled={loading}
                    />
                    {error && <p className="mt-2 text-red-600 text-sm text-left">{error}</p>}
                  </div>
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full px-6 py-4 bg-black text-white font-medium rounded-lg hover:bg-gray-800 transition-colors disabled:opacity-70 text-lg"
                  >
                    {loading ? (
                      <span className="flex items-center justify-center">
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Submitting...
                      </span>
                    ) : 'Subscribe Now'}
                  </button>
                </div>
                <p className="text-gray-500 text-sm mt-4 text-center">
                  We respect your privacy. Unsubscribe at any time.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
} 