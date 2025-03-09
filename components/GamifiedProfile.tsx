"use client";

import Image from 'next/image';
import { useState, useRef, TouchEvent } from 'react';

export default function GamifiedProfile() {
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
      name: " Jacopo",
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
          <div className="relative">
            {/* iPhone frame with profile image */}
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
                        
                        {/* Profile text */}
                        <div className="text-center p-4 text-black flex-grow">
                          <p className="uppercase text-xs tracking-wider mb-1 text-gray-500">YOUR PROFILE</p>
                          <h3 className="text-xl font-bold mb-1">Your profile card</h3>
                          <p className="text-xs text-gray-600 mb-3">
                            Showcase your skills to nonprofits
                          </p>
                          
                          <div className="text-left">
                            {index === 0 ? (
                              <>
                                <div className="mb-2">
                                  <div className="flex items-start">
                                    <span className="text-gray-400 text-xs mr-2">01</span>
                                    <div>
                                      <h4 className="text-sm font-semibold">What drives you</h4>
                                    </div>
                                  </div>
                                </div>
                                
                                <div className="mb-0">
                                  <div className="flex items-start">
                                    <span className="text-gray-400 text-xs mr-2">02</span>
                                    <div>
                                      <h4 className="text-sm font-semibold">Your long-term goals</h4>
                                    </div>
                                  </div>
                                </div>
                              </>
                            ) : (
                              <>
                                <div className="mb-2">
                                  <div className="flex items-start">
                                    <span className="text-gray-400 text-xs mr-2">03</span>
                                    <div>
                                      <h4 className="text-sm font-semibold">The unique individual behind the skills</h4>
                                    </div>
                                  </div>
                                </div>
                                
                                <div className="mb-0">
                                  <div className="flex items-start">
                                    <span className="text-gray-400 text-xs mr-2">04</span>
                                    <div>
                                      <h4 className="text-sm font-semibold">Skills and experience</h4>
                                    </div>
                                  </div>
                                </div>
                              </>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Swipe indicator */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                  <div 
                    className={`w-2 h-2 rounded-full cursor-pointer ${currentProfile === 0 ? 'bg-black' : 'bg-gray-400'}`}
                    onClick={() => setCurrentProfile(0)}
                  ></div>
                  <div 
                    className={`w-2 h-2 rounded-full cursor-pointer ${currentProfile === 1 ? 'bg-black' : 'bg-gray-400'}`}
                    onClick={() => setCurrentProfile(1)}
                  ></div>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <p className="text-sm mb-3">Gamified profile</p>
            <h2 className="text-5xl font-bold mb-8">
              Can we unlock your potential?
            </h2>
            
            <p className="text-lg mb-10">
              Create your personal profile and include your skills, interests, availability, and
              personal goals for your future.
            </p>
            
            <div className="grid grid-cols-1 gap-10">
              <div>
                <h3 className="text-2xl font-bold mb-3">Skill development</h3>
                <p className="text-lg text-gray-300">
                  Improve your skills, experience and portfolio while supporting causes that
                  matter to you.
                </p>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold mb-3">Networking opportunities</h3>
                <p className="text-lg text-gray-300">
                  Engage with like-minded, industry professionals and mentors in your area of
                  interest.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 