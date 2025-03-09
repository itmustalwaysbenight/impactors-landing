"use client";

import Image from 'next/image';
import { useState, useRef, TouchEvent } from 'react';

export default function WorkOpportunities() {
  const [selectedProfile, setSelectedProfile] = useState<string | null>(null);
  const [isDetailView, setIsDetailView] = useState(false);
  
  // Profile data
  const profiles = [
    {
      id: 'jean',
      image: "/images/jean.png", // Corrected image path
      name: "Jean M",
      profession: "Digital marketing",
      location: "Paris, France",
      role: "Freelancer",
      projects: 2,
      reviews: "7/10"
    },
    {
      id: 'lynette',
      image: "/images/lynette.png",
      name: "Lynette A",
      profession: "UX/UI designer",
      location: "Oslo, Norway",
      role: "Student",
      projects: 4,
      reviews: "8/10"
    },
    {
      id: 'jacopo',
      image: "/images/kompis.png",
      name: "Jacopo S",
      profession: "Graphic designer",
      location: "Berlin, Germany",
      role: "Consultant",
      projects: 3,
      reviews: "9/10"
    }
  ];
  
  // Handle profile selection
  const handleProfileClick = (profileId: string) => {
    setSelectedProfile(profileId);
    setIsDetailView(true);
  };
  
  // Handle back button click
  const handleBackClick = () => {
    setIsDetailView(false);
    setSelectedProfile(null);
  };

  // Get the selected profile data
  const selectedProfileData = profiles.find(profile => profile.id === selectedProfile);

  return (
    <section className="bg-black text-white py-24">
      <div className="container max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="relative order-2 md:order-1">
            {/* iPhone frame with talent marketplace */}
            <div className="relative max-w-[320px] mx-auto">
              {/* iPhone outer frame */}
              <div className="relative bg-[#111111] rounded-[40px] overflow-hidden border border-[#333333] shadow-xl" style={{ aspectRatio: '9/19' }}>
                {/* Notch */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[30%] h-[25px] bg-[#111111] rounded-b-[14px] z-10"></div>
                
                {/* Screen content */}
                <div className="relative bg-white rounded-[32px] overflow-hidden mx-[5px] my-[5px]" style={{ height: 'calc(100% - 10px)' }}>
                  {/* Content area */}
                  <div className="h-full overflow-y-auto">
                    {isDetailView && selectedProfileData ? (
                      // Profile detail view
                      <div className="h-full">
                        {/* Header with back button */}
                        <div className="sticky top-0 z-10 bg-white px-4 py-3 flex items-center border-b border-gray-200">
                          <button 
                            onClick={handleBackClick}
                            className="mr-3 p-1 rounded-full hover:bg-gray-100 transition-colors"
                          >
                            <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                          </button>
                          <h3 className="text-gray-800 text-lg font-bold">Profile Details</h3>
                        </div>
                        
                        {/* Profile content */}
                        <div>
                          {/* Profile image */}
                          <div className="relative">
                            <Image 
                              src={selectedProfileData.image}
                              alt={`${selectedProfileData.name}'s profile photo`}
                              width={600}
                              height={800}
                              className="w-full h-auto filter grayscale"
                            />
                            
                            {/* Profile info overlay */}
                            <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black/70 to-transparent text-white">
                              <h3 className="text-2xl font-medium">{selectedProfileData.name}</h3>
                              <p className="text-lg">{selectedProfileData.profession}</p>
                              <p className="text-lg">{selectedProfileData.location}</p>
                              <p className="text-lg">{selectedProfileData.role}</p>
                            </div>
                          </div>
                          
                          {/* CV content */}
                          <div className="bg-black text-white">
                            <div className="text-center py-3 bg-black border-b border-gray-800">
                              <p className="uppercase text-xs tracking-wider text-gray-400 font-semibold">PROFESSIONAL RESUME</p>
                              <h3 className="text-xl font-bold text-white">{selectedProfileData.name}'s CV</h3>
                            </div>
                            
                            <div className="p-4">
                              <div className="mb-5">
                                <div className="flex items-center mb-2">
                                  <div className="bg-gray-800 text-white rounded-full w-6 h-6 flex items-center justify-center mr-2 flex-shrink-0">
                                    <span className="text-xs">01</span>
                                  </div>
                                  <h4 className="text-sm font-bold text-white">Work Experience</h4>
                                </div>
                                
                                {selectedProfileData.id === 'lynette' ? (
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
                                ) : selectedProfileData.id === 'jacopo' ? (
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
                                ) : (
                                  <>
                                    <div className="ml-8 mb-3">
                                      <div className="flex justify-between">
                                        <p className="text-sm font-medium text-white">Marketing Specialist at DigiGrowth</p>
                                        <p className="text-xs text-gray-400">Sep'22-Present</p>
                                      </div>
                                      <p className="text-xs text-gray-400">Managed digital campaigns and social media strategy</p>
                                    </div>
                                    
                                    <div className="ml-8">
                                      <div className="flex justify-between">
                                        <p className="text-sm font-medium text-white">Content Creator</p>
                                        <p className="text-xs text-gray-400">Mar'20-Aug'22</p>
                                      </div>
                                      <p className="text-xs text-gray-400">Created content for various digital platforms</p>
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
                                
                                {selectedProfileData.id === 'lynette' ? (
                                  <div className="ml-8">
                                    <div className="flex justify-between">
                                      <p className="text-sm font-medium text-white">BA Design, Oslo University</p>
                                      <p className="text-xs text-gray-400">2021-2024</p>
                                    </div>
                                    <p className="text-xs text-gray-400">Focus: UX/UI design, Design thinking</p>
                                  </div>
                                ) : selectedProfileData.id === 'jacopo' ? (
                                  <div className="ml-8">
                                    <div className="flex justify-between">
                                      <p className="text-sm font-medium text-white">MA Graphic Design, Berlin Arts</p>
                                      <p className="text-xs text-gray-400">2015-2017</p>
                                    </div>
                                    <p className="text-xs text-gray-400">Focus: Brand identity, Typography</p>
                                  </div>
                                ) : (
                                  <div className="ml-8">
                                    <div className="flex justify-between">
                                      <p className="text-sm font-medium text-white">Digital Marketing Certificate, Paris School of Digital</p>
                                      <p className="text-xs text-gray-400">2020-2022</p>
                                    </div>
                                    <p className="text-xs text-gray-400">Focus: Social Media Marketing, SEO, Content Strategy</p>
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
                                
                                {selectedProfileData.id === 'lynette' ? (
                                  <div className="ml-8 flex flex-wrap gap-1">
                                    <span className="text-xs bg-gray-800 text-white px-2 py-1 rounded-md">Figma</span>
                                    <span className="text-xs bg-gray-800 text-white px-2 py-1 rounded-md">Adobe XD</span>
                                    <span className="text-xs bg-gray-800 text-white px-2 py-1 rounded-md">Sketch</span>
                                    <span className="text-xs bg-gray-800 text-white px-2 py-1 rounded-md">UI/UX</span>
                                    <span className="text-xs bg-gray-800 text-white px-2 py-1 rounded-md">Prototyping</span>
                                  </div>
                                ) : selectedProfileData.id === 'jacopo' ? (
                                  <div className="ml-8 flex flex-wrap gap-1">
                                    <span className="text-xs bg-gray-800 text-white px-2 py-1 rounded-md">Illustrator</span>
                                    <span className="text-xs bg-gray-800 text-white px-2 py-1 rounded-md">Photoshop</span>
                                    <span className="text-xs bg-gray-800 text-white px-2 py-1 rounded-md">InDesign</span>
                                    <span className="text-xs bg-gray-800 text-white px-2 py-1 rounded-md">Branding</span>
                                    <span className="text-xs bg-gray-800 text-white px-2 py-1 rounded-md">Typography</span>
                                  </div>
                                ) : (
                                  <div className="ml-8 flex flex-wrap gap-1">
                                    <span className="text-xs bg-gray-800 text-white px-2 py-1 rounded-md">SEO</span>
                                    <span className="text-xs bg-gray-800 text-white px-2 py-1 rounded-md">Content Marketing</span>
                                    <span className="text-xs bg-gray-800 text-white px-2 py-1 rounded-md">Social Media Management</span>
                                    <span className="text-xs bg-gray-800 text-white px-2 py-1 rounded-md">Email Marketing</span>
                                    <span className="text-xs bg-gray-800 text-white px-2 py-1 rounded-md">Analytics</span>
                                  </div>
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ) : (
                      // Talent marketplace view
                      <div className="p-6">
                        <h2 className="text-gray-800 text-2xl font-bold mb-4">A marketplace for talent</h2>
                        <h3 className="text-gray-700 text-xl mb-6">Find new hires</h3>
                        
                        <div className="space-y-6">
                          {profiles.map((profile) => (
                            <div key={profile.id} className="flex bg-gray-100 rounded-lg overflow-hidden shadow-sm">
                              {/* Profile image */}
                              <div className="w-1/2">
                                <Image 
                                  src={profile.image}
                                  alt={`${profile.name}'s profile photo`}
                                  width={300}
                                  height={300}
                                  className="w-full h-full object-cover filter grayscale"
                                />
                              </div>
                              
                              {/* Profile info */}
                              <div className="w-1/2 p-4 flex flex-col justify-between bg-gray-50">
                                <div>
                                  <h4 className="text-gray-800 text-lg font-medium mb-1">{profile.name}</h4>
                                  <p className="text-gray-600 text-sm mb-3">{profile.profession}</p>
                                  <p className="text-gray-600 text-sm">Projects: {profile.projects}</p>
                                  <p className="text-gray-600 text-sm">Reviews: {profile.reviews}</p>
                                </div>
                                
                                <button 
                                  onClick={() => handleProfileClick(profile.id)}
                                  className="mt-4 w-full py-2 bg-[#4d5a4a] text-white rounded text-sm font-medium hover:bg-[#5d6a5a] transition-colors"
                                >
                                  View portfolio
                                </button>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
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