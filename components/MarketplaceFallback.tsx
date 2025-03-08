import Image from 'next/image';
import React from 'react';

export default function MarketplaceFallback() {
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
            <div className="bg-[#1a1e2e] rounded-lg p-6">
              <div className="mb-6">
                <div className="mb-6">
                  <label htmlFor="postalCode" className="block text-sm font-medium mb-2 uppercase tracking-wide">POSTNUMMERE</label>
                  <input 
                    type="text" 
                    id="postalCode"
                    placeholder="Søkeverdier..."
                    className="w-full p-3 bg-[#2a2f3f] text-white rounded border-0"
                  />
                </div>
                
                <div>
                  <p className="block text-sm font-medium mb-4 uppercase tracking-wide">VELG OMRÅDER</p>
                  <div className="grid grid-cols-2 gap-y-3">
                    {[
                      ['OSLO', 'ASKER'],
                      ['SKI', 'DRAMMEN'],
                      ['LØRENSKOG', 'BÆRUM'],
                      ['SKEDSMO', 'JESSHEIM'],
                      ['KOLBOTN']
                    ].map((row, rowIndex) => (
                      <React.Fragment key={rowIndex}>
                        {row.map((area) => (
                          <div key={area} className="flex items-center">
                            <div className="w-5 h-5 border border-white flex items-center justify-center mr-2">
                              <div className="w-3 h-3 bg-white"></div>
                            </div>
                            <label htmlFor={area} className="text-sm">{area}</label>
                          </div>
                        ))}
                      </React.Fragment>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Map with grid background */}
              <div className="w-full h-[400px] rounded-lg overflow-hidden relative bg-black mb-4">
                {/* Grid lines */}
                <div className="absolute inset-0">
                  <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                      <pattern id="grid" width="80" height="80" patternUnits="userSpaceOnUse">
                        <path d="M 80 0 L 0 0 0 80" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
                      </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#grid)" />
                    
                    {/* Main cross lines */}
                    <line x1="0" y1="200" x2="600" y2="200" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
                    <line x1="300" y1="0" x2="300" y2="400" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
                    
                    {/* Diagonal lines */}
                    <line x1="0" y1="0" x2="600" y2="400" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
                    <line x1="0" y1="400" x2="600" y2="0" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
                  </svg>
                </div>
                
                {/* Map markers */}
                <div className="absolute inset-0">
                  {/* Center marker */}
                  <div className="absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2">
                    <div className="w-12 h-12 rounded-full bg-[#d63384] flex items-center justify-center text-white font-bold text-xl">
                      7
                    </div>
                  </div>
                  
                  {/* Top center marker */}
                  <div className="absolute top-[15%] left-[50%] transform -translate-x-1/2">
                    <div className="w-12 h-12 rounded-full bg-[#d63384] flex items-center justify-center text-white font-bold text-xl">
                      7
                    </div>
                  </div>
                  
                  {/* Top right marker */}
                  <div className="absolute top-[30%] right-[30%]">
                    <div className="w-12 h-12 rounded-full bg-[#d63384] flex items-center justify-center text-white font-bold text-xl">
                      5
                    </div>
                  </div>
                  
                  {/* Right markers */}
                  <div className="absolute top-[45%] right-[20%]">
                    <div className="w-12 h-12 rounded-full bg-[#d63384] flex items-center justify-center text-white font-bold text-xl">
                      18
                    </div>
                  </div>
                  
                  <div className="absolute top-[35%] right-[10%]">
                    <div className="w-12 h-12 rounded-full bg-[#d63384] flex items-center justify-center text-white font-bold text-xl">
                      10
                    </div>
                  </div>
                  
                  {/* Bottom right marker */}
                  <div className="absolute bottom-[25%] right-[30%]">
                    <div className="w-12 h-12 rounded-full bg-[#d63384] flex items-center justify-center text-white font-bold text-xl">
                      6
                    </div>
                  </div>
                  
                  {/* Bottom center marker */}
                  <div className="absolute bottom-[15%] left-[50%] transform -translate-x-1/2">
                    <div className="w-12 h-12 rounded-full bg-[#dc3545] flex items-center justify-center text-white font-bold text-xl">
                      4
                    </div>
                  </div>
                  
                  {/* Bottom left marker */}
                  <div className="absolute bottom-[30%] left-[35%]">
                    <div className="w-12 h-12 rounded-full bg-[#dc3545] flex items-center justify-center text-white font-bold text-xl">
                      3
                    </div>
                  </div>
                  
                  {/* Left markers */}
                  <div className="absolute top-[60%] left-[25%]">
                    <div className="w-12 h-12 rounded-full bg-[#dc3545] flex items-center justify-center text-white font-bold text-xl">
                      2
                    </div>
                  </div>
                  
                  <div className="absolute top-[30%] left-[30%]">
                    <div className="w-12 h-12 rounded-full bg-[#dc3545] flex items-center justify-center text-white font-bold text-xl">
                      2
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                  <svg 
                    className="w-5 h-5 text-gray-400" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24" 
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" 
                    />
                  </svg>
                </div>
                <input 
                  type="text" 
                  placeholder="Søkested i Norge" 
                  className="w-full p-3 pl-10 bg-[#2a2f3f] text-white rounded border-0"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 