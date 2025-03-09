"use client";

import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';

export default function MarketplaceFallback() {
  const [selectedJob, setSelectedJob] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [expandedJob, setExpandedJob] = useState<string | null>(null);
  const [isDetailView, setIsDetailView] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const scrollTimeout = useRef<NodeJS.Timeout | null>(null);
  const tooltipTimeout = useRef<NodeJS.Timeout | null>(null);
  
  // Job listings data
  const allJobs = [
    {
      id: 'ux-designer',
      title: 'UX Designer',
      match: '85%',
      description: 'Create user-centered designs for nonprofit websites',
      details: 'View Details',
      skills: ['UI Design', 'User Research', 'Wireframing', 'Prototyping'],
      organization: 'Environmental Defense Fund',
      duration: '2-4 weeks',
      location: 'Remote'
    },
    {
      id: 'graphic-designer',
      title: 'Graphic Designer',
      match: '92%',
      description: 'Design visual assets for environmental campaigns',
      details: 'View Details',
      skills: ['Adobe Creative Suite', 'Illustration', 'Brand Design', 'Typography'],
      organization: 'Ocean Conservation Alliance',
      duration: '1-3 weeks',
      location: 'Remote'
    },
    {
      id: 'frontend-developer',
      title: 'Frontend Developer',
      match: '88%',
      description: 'Build responsive interfaces for community organizations',
      details: 'View Details',
      skills: ['React', 'JavaScript', 'CSS', 'Responsive Design'],
      organization: 'Community Action Network',
      duration: '3-6 weeks',
      location: 'Remote'
    },
    {
      id: 'web-developer',
      title: 'Web Developer',
      match: '85%',
      description: 'Develop websites for social impact organizations',
      details: 'View Details',
      skills: ['HTML', 'CSS', 'JavaScript', 'WordPress'],
      organization: 'Education for All',
      duration: '2-5 weeks',
      location: 'Remote'
    },
    {
      id: 'content-strategist',
      title: 'Content Strategist',
      match: '79%',
      description: 'Plan content for advocacy groups',
      details: 'View Details',
      skills: ['Content Planning', 'SEO', 'Copywriting', 'Social Media'],
      organization: 'Human Rights Watch',
      duration: '2-3 weeks',
      location: 'Remote'
    }
  ];

  // Filter jobs based on search query
  const [filteredJobs, setFilteredJobs] = useState(allJobs);

  useEffect(() => {
    if (searchQuery.trim() === '') {
      setFilteredJobs(allJobs);
    } else {
      const query = searchQuery.toLowerCase();
      const filtered = allJobs.filter(job => 
        job.title.toLowerCase().includes(query) || 
        job.description.toLowerCase().includes(query) ||
        job.skills.some(skill => skill.toLowerCase().includes(query))
      );
      setFilteredJobs(filtered);
    }
  }, [searchQuery]);

  // Handle scroll events with debounce
  const handleScroll = () => {
    if (scrollRef.current) {
      // Update position immediately for smooth UI
      setScrollPosition(scrollRef.current.scrollTop);
      
      // Set scrolling state
      setIsScrolling(true);
      
      // Clear any existing timeout
      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current);
      }
      
      // Set a timeout to mark scrolling as finished
      scrollTimeout.current = setTimeout(() => {
        setIsScrolling(false);
      }, 100);
    }
  };

  // Handle job click
  const handleJobClick = (jobId: string) => {
    setExpandedJob(jobId);
    setSelectedJob(jobId);
    setIsDetailView(true);
    
    // Reset scroll position when entering detail view
    if (scrollRef.current) {
      scrollRef.current.scrollTop = 0;
    }
  };

  // Handle back button click
  const handleBackClick = () => {
    setIsDetailView(false);
    // Small delay to make the transition smoother
    setTimeout(() => {
      setExpandedJob(null);
    }, 100);
  };

  // Handle apply button click
  const handleApplyClick = () => {
    setShowTooltip(true);
    
    // Clear any existing timeout
    if (tooltipTimeout.current) {
      clearTimeout(tooltipTimeout.current);
    }
    
    // Hide tooltip after 3 seconds
    tooltipTimeout.current = setTimeout(() => {
      setShowTooltip(false);
    }, 3000);
  };

  // Get the selected job data
  const selectedJobData = allJobs.find(job => job.id === expandedJob);

  // Determine if header should be compact
  const isHeaderCompact = scrollPosition > 20;

  return (
    <section className="bg-black text-white py-24">
      <div className="container max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-sm mb-3">Meaningful marketplace</p>
            <h2 className="text-5xl font-bold mb-8">
              Engaging and meaningful projects
            </h2>
            
            <p className="text-lg mb-10">
              Prompt or filter your way through engaging projects that resonates with your
              personal needs, wants and what you want to achieve.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div>
                <h3 className="text-2xl font-bold mb-3">Flexible and remote</h3>
                <p className="text-lg text-gray-300">
                  Choose projects based on your own schedule and contribute from where you
                  feel inspired.
                </p>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold mb-3">UNs sustainability goals</h3>
                <p className="text-lg text-gray-300">
                  Match your skills and interests with small and medium organizations in lack of
                  talented resources.
                </p>
              </div>
            </div>
          </div>
          
          <div className="relative">
            {/* iPhone frame with job browsing */}
            <div className="relative max-w-[320px] mx-auto">
              {/* iPhone outer frame */}
              <div className="relative bg-[#111111] rounded-[40px] overflow-hidden border border-[#333333] shadow-xl" style={{ aspectRatio: '9/19' }}>
                {/* Notch */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[30%] h-[25px] bg-[#111111] rounded-b-[14px] z-10"></div>
                
                {/* Screen content */}
                <div className="relative bg-[#121212] rounded-[32px] overflow-hidden mx-[5px] my-[5px]" style={{ height: 'calc(100% - 10px)' }}>
                  {/* Main content area with scroll */}
                  <div 
                    ref={scrollRef}
                    className="h-full overflow-y-auto hide-scrollbar"
                    onScroll={handleScroll}
                  >
                    {/* Header - collapsible on scroll */}
                    <div 
                      className={`sticky top-0 z-10 bg-[#121212] ${
                        isScrolling ? 'transition-none' : 'transition-all duration-300'
                      }`}
                      style={{
                        paddingLeft: '1.5rem',
                        paddingRight: '1.5rem',
                        paddingTop: isDetailView ? '1rem' : isHeaderCompact ? '1rem' : '2rem',
                        paddingBottom: isDetailView ? '1rem' : isHeaderCompact ? '0.5rem' : '1rem',
                        borderBottom: isDetailView ? '1px solid #2a2a2a' : 'none'
                      }}
                    >
                      {isDetailView ? (
                        <div className="flex items-center">
                          <button 
                            onClick={handleBackClick}
                            className="mr-3 p-1 rounded-full hover:bg-[#2a2a2a] transition-colors"
                          >
                            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                          </button>
                          <h3 className="text-white text-lg font-bold">Job Details</h3>
                        </div>
                      ) : (
                        <>
                          <h3 
                            className="text-white font-bold"
                            style={{
                              fontSize: '2rem',
                              lineHeight: '1.2',
                              marginBottom: isHeaderCompact ? '0' : '0.5rem',
                              transform: isHeaderCompact ? 'translateY(0)' : 'translateY(0)',
                              transition: isScrolling ? 'none' : 'all 0.3s ease'
                            }}
                          >
                            Find Your Match
                          </h3>
                          
                          <div 
                            style={{
                              height: isHeaderCompact ? '0' : 'auto',
                              opacity: isHeaderCompact ? 0 : 1,
                              overflow: 'hidden',
                              marginBottom: isHeaderCompact ? '0' : '1rem',
                              transition: isScrolling ? 'none' : 'all 0.3s ease'
                            }}
                          >
                            <p className="text-gray-400 text-lg">
                              Search for opportunities based on your skills
                            </p>
                          </div>
                          
                          <div 
                            className="relative"
                            style={{
                              marginTop: isHeaderCompact ? '0.5rem' : '0',
                              transition: isScrolling ? 'none' : 'all 0.3s ease'
                            }}
                          >
                            <input 
                              type="text" 
                              value={searchQuery}
                              onChange={(e) => setSearchQuery(e.target.value)}
                              placeholder="Search skills, roles..." 
                              className="w-full bg-[#1a1a1a] text-white rounded-lg py-3 px-4 pl-11 border border-[#2a2a2a]"
                            />
                            <div className="absolute inset-y-0 left-4 flex items-center">
                              <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                              </svg>
                            </div>
                          </div>
                        </>
                      )}
                    </div>
                    
                    {/* Content area */}
                    {isDetailView && selectedJobData ? (
                      // Detailed job view
                      <div className="p-6 animate-fadeIn">
                        <div className="mb-4">
                          <div className="flex justify-between items-start mb-3">
                            <h2 className="text-white text-2xl font-bold">{selectedJobData.title}</h2>
                            <span className="text-sm px-3 py-1 rounded bg-[#4d5a4a] text-white">{selectedJobData.match} match</span>
                          </div>
                          <p className="text-gray-300 text-base mb-6">{selectedJobData.description}</p>
                          
                          <div className="space-y-6">
                            <div>
                              <h3 className="uppercase text-sm text-gray-500 mb-2">ORGANIZATION</h3>
                              <p className="text-white text-lg">{selectedJobData.organization}</p>
                            </div>
                            
                            <div>
                              <h3 className="uppercase text-sm text-gray-500 mb-2">DURATION</h3>
                              <p className="text-white text-lg">{selectedJobData.duration}</p>
                            </div>
                            
                            <div>
                              <h3 className="uppercase text-sm text-gray-500 mb-2">LOCATION</h3>
                              <p className="text-white text-lg">{selectedJobData.location}</p>
                            </div>
                            
                            <div>
                              <h3 className="uppercase text-sm text-gray-500 mb-3">SKILLS</h3>
                              <div className="flex flex-wrap gap-2">
                                {selectedJobData.skills.map((skill, index) => (
                                  <span 
                                    key={index} 
                                    className="text-base px-4 py-2 rounded-full bg-[#1d1d1d] text-white"
                                  >
                                    {skill}
                                  </span>
                                ))}
                              </div>
                            </div>
                            
                            <div>
                              <h3 className="uppercase text-sm text-gray-500 mb-2">ABOUT THE ROLE</h3>
                              <p className="text-white text-base mb-3">
                                As a {selectedJobData.title} for {selectedJobData.organization}, you'll be working on impactful projects that make a real difference. This role is perfect for someone who wants to apply their skills in a meaningful way.
                              </p>
                              <p className="text-white text-base">
                                The project requires expertise in {selectedJobData.skills.join(', ')}. You'll be working remotely with a dedicated team of professionals who are passionate about their mission.
                              </p>
                            </div>
                          </div>
                        </div>
                        
                        <div className="sticky bottom-0 pt-4 pb-2 bg-[#121212]">
                          <div className="relative">
                            <button 
                              onClick={handleApplyClick}
                              className="w-full py-3 bg-[#4d5a4a] text-white rounded-lg text-base font-medium hover:bg-[#5d6a5a] transition-colors flex items-center justify-center"
                            >
                              <span>Join Interest List</span>
                              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                              </svg>
                            </button>
                            
                            {/* Tooltip */}
                            {showTooltip && (
                              <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-[90%] bg-[#2a2a2a] text-white p-3 rounded-lg shadow-lg animate-fadeIn">
                                <p className="text-sm text-center">
                                  Applications aren't open yet. Join our interest list to be notified when this position becomes available.
                                </p>
                                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 rotate-45 w-3 h-3 bg-[#2a2a2a]"></div>
                              </div>
                            )}
                          </div>
                          
                          <p className="text-center text-gray-400 text-xs mt-3">
                            Coming soon - Applications opening in Q2 2024
                          </p>
                        </div>
                      </div>
                    ) : (
                      // Job listings view
                      <div>
                        <div className="border-t border-[#1a1a1a]"></div>
                        
                        <div className="p-6 pt-4">
                          <p className="uppercase text-sm tracking-wider mb-4 text-gray-500">MATCHING OPPORTUNITIES</p>
                          
                          {filteredJobs.length === 0 ? (
                            <div className="text-center py-8">
                              <p className="text-gray-400">No matching opportunities found</p>
                              <p className="text-gray-500 text-sm mt-2">Try adjusting your search criteria</p>
                            </div>
                          ) : (
                            <div className="space-y-4">
                              {filteredJobs.map((job) => (
                                <div 
                                  key={job.id}
                                  className="bg-[#1a1a1a] rounded-lg cursor-pointer transform transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
                                  onClick={() => handleJobClick(job.id)}
                                >
                                  <div className="p-5">
                                    <div className="flex justify-between items-start mb-2">
                                      <h4 className="text-white text-xl font-semibold">{job.title}</h4>
                                      <span className="text-sm px-3 py-1 rounded bg-[#4d5a4a] text-white">{job.match} match</span>
                                    </div>
                                    <p className="text-gray-400 text-base mb-3">{job.description}</p>
                                    <p className="text-[#6d8a6d] text-sm font-medium">{job.details}</p>
                                  </div>
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Add this to your globals.css file if not already there
// @keyframes fadeIn {
//   from { opacity: 0; }
//   to { opacity: 1; }
// }
// 
// .animate-fadeIn {
//   animation: fadeIn 0.3s ease-in-out;
// } 