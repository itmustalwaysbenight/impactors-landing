"use client";

import Image from 'next/image';
import { useState, useRef, TouchEvent } from 'react';

export default function WorkOpportunities() {
  const [currentProfile, setCurrentProfile] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  
  // Profile data
  const profiles = [
    {
      image: "/images/lynette.png",
      name: "Lynette",
      profession: "UX/UI design",
      location: "Oslo, Norway",
      role: "Student"
    },
    {
      image: "/images/kompis.png",
      name: "Jacopo",
      profession: "Graphic design",
      location: "Berlin, Germany",
      role: "Consultant"
    }
  ];
  
  // Handle touch events for swiping
  const handleTouchStart = (e: TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
    setTouchEnd(null);
  };
  
  const handleTouchMove = (e: TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };
  
  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;
    
    if (isLeftSwipe && currentProfile === 0) {
      setCurrentProfile(1);
    } else if (isRightSwipe && currentProfile === 1) {
      setCurrentProfile(0);
    }
    
    // Reset touch values
    setTouchStart(null);
    setTouchEnd(null);
  };
  
  // Navigation handlers
  const goToPrevProfile = () => {
    if (currentProfile > 0) {
      setCurrentProfile(currentProfile - 1);
    }
  };
  
  const goToNextProfile = () => {
    if (currentProfile < 1) {
      setCurrentProfile(currentProfile + 1);
    }
  };

  return (
    <section className="bg-black text-white py-24">
      <div className="container max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="relative order-2 md:order-1">
            {/* iPhone frame with CV content */}
            <div className="relative max-w-[320px] mx-auto">
              {/* iPhone outer frame */}
              <div className="relative bg-[#111111] rounded-[40px] overflow-hidden border border-[#333333] shadow-xl" style={{ aspectRatio: '9/19' }}>
                {/* Notch */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[30%] h-[25px] bg-[#111111] rounded-b-[14px] z-10"></div>
                
                {/* Navigation arrows - integrated into the phone frame */}
                {currentProfile > 0 && (
                  <button 
                    onClick={goToPrevProfile}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-black/20 hover:bg-black/40 text-white w-8 h-8 rounded-full flex items-center justify-center transition-all"
                    aria-label="Previous profile"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M15 18l-6-6 6-6" />
                    </svg>
                  </button>
                )}
                
                {currentProfile < 1 && (
                  <button 
                    onClick={goToNextProfile}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-black/20 hover:bg-black/40 text-white w-8 h-8 rounded-full flex items-center justify-center transition-all"
                    aria-label="Next profile"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M9 18l6-6-6-6" />
                    </svg>
                  </button>
                )}
                
                {/* Screen content - swipeable container */}
                <div 
                  ref={containerRef}
                  className="relative bg-[#f5f5f7] rounded-[32px] overflow-hidden h-full mx-[5px] my-[5px]"
                  onTouchStart={handleTouchStart}
                  onTouchMove={handleTouchMove}
                  onTouchEnd={handleTouchEnd}
                  style={{ height: 'calc(100% - 10px)' }}
                >
                  {/* Profiles container with horizontal layout */}
                  <div 
                    className="flex transition-transform duration-300 ease-in-out h-full"
                    style={{ transform: `translateX(-${currentProfile * 100}%)` }}
                  >
                    {/* Map through profiles */}
                    {profiles.map((profile, index) => (
                      <div key={index} className="min-w-full min-h-full flex flex-col relative">
                        {/* Profile image */}
                        <div className="flex-shrink-0 relative">
                          <Image 
                            src={profile.image}
                            alt={`${profile.name}'s profile photo`}
                            width={600}
                            height={800}
                            className="w-full h-auto"
                            priority={index === 0}
                          />
                          
                          {/* Profile info overlay */}
                          <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black/70 to-transparent text-white">
                            <h3 className="text-2xl font-medium ml-1">{profile.name}</h3>
                            <p className="text-lg">{profile.profession}</p>
                            <p className="text-lg">{profile.location}</p>
                            <p className="text-lg">{profile.role}</p>
                          </div>
                        </div>
                        
                        {/* CV content */}
                        <div className="flex-grow bg-black text-white overflow-y-auto">
                          <div className="text-center py-3 bg-black border-b border-gray-800">
                            <p className="uppercase text-xs tracking-wider text-gray-400 font-semibold">PROFESSIONAL RESUME</p>
                            <h3 className="text-xl font-bold text-white">{profile.name}'s CV</h3>
                          </div>
                          
                          <div className="p-4">
                            <div className="mb-5">
                              <div className="flex items-center mb-2">
                                <div className="bg-gray-800 text-white rounded-full w-6 h-6 flex items-center justify-center mr-2 flex-shrink-0">
                                  <span className="text-xs">01</span>
                                </div>
                                <h4 className="text-sm font-bold text-white">Work Experience</h4>
                              </div>
                              
                              {index === 0 ? (
                                <>
                                  <div className="ml-8 mb-3">
                                    <div className="flex justify-between">
                                      <p className="text-sm font-medium text-white">UX Intern at DesignLab</p>
                                      <p className="text-xs text-gray-400">Jun'23-Present</p>
                                    </div>
                                    <p className="text-xs text-gray-400">Created wireframes and prototypes for mobile applications</p>
                                  </div>
                                  
                                  <div className="ml-8">
                                    <div className="flex justify-between">
                                      <p className="text-sm font-medium text-white">Freelance Designer</p>
                                      <p className="text-xs text-gray-400">Jan'22-May'23</p>
                                    </div>
                                    <p className="text-xs text-gray-400">Worked with 5+ clients on branding and UI projects</p>
                                  </div>
                                </>
                              ) : (
                                <>
                                  <div className="ml-8 mb-3">
                                    <div className="flex justify-between">
                                      <p className="text-sm font-medium text-white">Senior Designer at Studio Kompis</p>
                                      <p className="text-xs text-gray-400">Mar'21-Present</p>
                                    </div>
                                    <p className="text-xs text-gray-400">Lead designer for branding and identity projects</p>
                                  </div>
                                  
                                  <div className="ml-8">
                                    <div className="flex justify-between">
                                      <p className="text-sm font-medium text-white">Art Director at Kreativ</p>
                                      <p className="text-xs text-gray-400">Jan'18-Feb'21</p>
                                    </div>
                                    <p className="text-xs text-gray-400">Managed design team and client relationships</p>
                                  </div>
                                </>
                              )}
                            </div>
                            
                            <div className="mb-5">
                              <div className="flex items-center mb-2">
                                <div className="bg-gray-800 text-white rounded-full w-6 h-6 flex items-center justify-center mr-2 flex-shrink-0">
                                  <span className="text-xs">02</span>
                                </div>
                                <h4 className="text-sm font-bold text-white">Education</h4>
                              </div>
                              
                              {index === 0 ? (
                                <div className="ml-8">
                                  <div className="flex justify-between">
                                    <p className="text-sm font-medium text-white">BA Design, Oslo University</p>
                                    <p className="text-xs text-gray-400">2021-2024</p>
                                  </div>
                                  <p className="text-xs text-gray-400">Focus: UX/UI design, Design thinking</p>
                                </div>
                              ) : (
                                <div className="ml-8">
                                  <div className="flex justify-between">
                                    <p className="text-sm font-medium text-white">MA Graphic Design, Berlin Arts</p>
                                    <p className="text-xs text-gray-400">2015-2017</p>
                                  </div>
                                  <p className="text-xs text-gray-400">Focus: Brand identity, Typography</p>
                                </div>
                              )}
                            </div>
                            
                            <div>
                              <div className="flex items-center mb-2">
                                <div className="bg-gray-800 text-white rounded-full w-6 h-6 flex items-center justify-center mr-2 flex-shrink-0">
                                  <span className="text-xs">03</span>
                                </div>
                                <h4 className="text-sm font-bold text-white">Skills</h4>
                              </div>
                              
                              {index === 0 ? (
                                <div className="ml-8 flex flex-wrap gap-1">
                                  <span className="text-xs bg-gray-800 text-white px-2 py-1 rounded-md">Figma</span>
                                  <span className="text-xs bg-gray-800 text-white px-2 py-1 rounded-md">Adobe XD</span>
                                  <span className="text-xs bg-gray-800 text-white px-2 py-1 rounded-md">Sketch</span>
                                  <span className="text-xs bg-gray-800 text-white px-2 py-1 rounded-md">UI/UX</span>
                                  <span className="text-xs bg-gray-800 text-white px-2 py-1 rounded-md">Prototyping</span>
                                </div>
                              ) : (
                                <div className="ml-8 flex flex-wrap gap-1">
                                  <span className="text-xs bg-gray-800 text-white px-2 py-1 rounded-md">Illustrator</span>
                                  <span className="text-xs bg-gray-800 text-white px-2 py-1 rounded-md">Photoshop</span>
                                  <span className="text-xs bg-gray-800 text-white px-2 py-1 rounded-md">InDesign</span>
                                  <span className="text-xs bg-gray-800 text-white px-2 py-1 rounded-md">Branding</span>
                                  <span className="text-xs bg-gray-800 text-white px-2 py-1 rounded-md">Typography</span>
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Swipe indicator */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                  <div 
                    className={`w-2 h-2 rounded-full ${currentProfile === 0 ? 'bg-white' : 'bg-gray-600'}`}
                    onClick={() => setCurrentProfile(0)}
                  ></div>
                  <div 
                    className={`w-2 h-2 rounded-full ${currentProfile === 1 ? 'bg-white' : 'bg-gray-600'}`}
                    onClick={() => setCurrentProfile(1)}
                  ></div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="order-1 md:order-2">
            <p className="text-sm mb-3">Increased position in the marketplace</p>
            <h2 className="text-5xl font-bold mb-8">
              Attract work opportunities
            </h2>
            
            <p className="text-lg mb-10">
              We connect your skills, interests, needs and wants with existing companies
              looking for passionate and skilled talent
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div>
                <h3 className="text-2xl font-bold mb-3">Freelance projects</h3>
                <p className="text-lg text-gray-300">
                  Increase your relevance for small and medium freelance opportunities.
                </p>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold mb-3">Part-time positions</h3>
                <p className="text-lg text-gray-300">
                  Connect with professionals and mentors from startup and scale up companies.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 