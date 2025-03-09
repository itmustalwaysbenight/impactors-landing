"use client";

import { useEffect, useState } from 'react';

interface TypeformSurveyProps {
  isVisible: boolean;
}

export default function TypeformSurvey({ isVisible }: TypeformSurveyProps) {
  const [iframeHeight, setIframeHeight] = useState(700);

  useEffect(() => {
    // Set iframe height based on viewport height
    const updateHeight = () => {
      const viewportHeight = window.innerHeight;
      setIframeHeight(Math.max(700, viewportHeight * 0.8)); // At least 700px or 80% of viewport
    };

    updateHeight();
    window.addEventListener('resize', updateHeight);
    return () => window.removeEventListener('resize', updateHeight);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="typeform-wrapper">
      <div className="bg-white p-4 rounded-t-lg border-t border-l border-r border-blue-200 flex items-center justify-between">
        <div className="flex items-center">
          <svg className="w-6 h-6 text-blue-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
          </svg>
          <h4 className="text-lg font-medium text-blue-800">Impactors Community Survey</h4>
        </div>
        <a 
          href="https://pxm2nddova4.typeform.com/to/QQrtYKY5" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-blue-600 hover:text-blue-800 text-sm flex items-center"
        >
          <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
          </svg>
          Open in new tab
        </a>
      </div>
      <div className="typeform-container rounded-b-lg overflow-hidden border border-blue-200 shadow-lg">
        <iframe
          title="Impactors Survey"
          id="typeform-full"
          width="100%"
          height={`${iframeHeight}px`}
          frameBorder="0"
          allow="camera; microphone; autoplay; encrypted-media; fullscreen; geolocation"
          src="https://pxm2nddova4.typeform.com/to/QQrtYKY5?typeform-embed=embed-fullpage"
          style={{ border: 0 }}
        ></iframe>
      </div>
    </div>
  );
} 