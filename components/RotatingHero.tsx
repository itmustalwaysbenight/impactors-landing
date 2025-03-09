"use client";

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

const heroImages = [
  '/images/low-res/u9299633394_low-res_pixel_art_of_a_group_of_marketing_working_645d03de-ef84-4564-b3a1-0240f51993f6_2.png',
  '/images/low-res/u9299633394_low-res_pixel_art_of_a_small_group_of_social_medi_08396967-7f40-4b24-ab24-0d76e841a003_2.png',
  '/images/low-res/u9299633394_low-res_pixel_art_of_a_small_group_of_social_medi_3837f882-d8ca-4eb7-b5bc-a870b118832a_2.png',
  '/images/low-res/u9299633394_low-res_pixel_art_of_a_two_people_working_on_mark_7171fcaf-5a40-4b3c-9fae-93c8a60ee96c_0.png',
  '/images/low-res/u9299633394_low-res_pixel_art_of_a_diverse_couple_working_fro_b0eb278c-3614-4573-82fc-7a7e21b9bb71_0.png',
  '/images/low-res/u9299633394_low-res_pixel_art_of_a_couple_working_from_a_loun_69354181-1f31-423d-a893-bf5ea21fe88a_1.png',
  '/images/low-res/u9299633394_httpss.mj.runPri0aAeJu7o_Convert_to_low-res_pixel_f100555e-466b-41b1-905f-38c6af11895d_0.png',
  '/images/low-res/u9299633394_httpss.mj.runc0Rd4-sWIyc_Convert_to_low-res_pixel_189a8f90-5ff8-42fa-a70a-ec53d81bbf4c_1.png',
  '/images/low-res/u9299633394_httpss.mj.runc0Rd4-sWIyc_Convert_to_low-res_pixel_e684da3b-7ab1-4770-988c-66d451305d12_1.png',
  '/images/low-res/u9299633394_httpss.mj.runhQYQLmig5ic_Convert_to_low-res_pixel_37e37ac9-481a-49f2-a002-81c2a9de3689_1 (1).png',
  '/images/low-res/u9299633394_httpss.mj.runZM3dqOyYRzg_Convert_to_low-res_pixel_8d7464f7-cbc4-48fd-9397-ba63f39ee29a_2.png',
  '/images/low-res/u9299633394_httpss.mj.runZM3dqOyYRzg_Convert_to_low-res_pixel_8d7464f7-cbc4-48fd-9397-ba63f39ee29a_0.png',
  '/images/low-res/u9299633394_httpss.mj.runOLVKlfcl6Wg_Convert_to_low-res_pixel_e4b4102d-a36d-47e2-be2e-e1a3a120aa4a_1.png',
  '/images/low-res/u9299633394_low-res_pixel_art_of_a_two_people_working_from_a__e26414c0-964b-44b7-b693-b113f5d52c85_2.png',
  '/images/low-res/u9299633394_low-res_pixel_art_of_a_small_diverse_group_workin_72e8ec5b-273a-40e3-b4e9-487dbbe046db_3.png',
  '/images/low-res/u9299633394_low-res_pixel_art_of_a_small_diverse_group_workin_72e8ec5b-273a-40e3-b4e9-487dbbe046db_0.png',
  '/images/low-res/u9299633394_low-res_pixel_art_of_a_small_diverse_group_workin_bdf1965a-0010-4d9f-86f7-376849003cdd_3.png',
  '/images/low-res/u9299633394_low-res_pixel_art_of_a_small_diverse_group_workin_bdf1965a-0010-4d9f-86f7-376849003cdd_2.png',
  '/images/low-res/u9299633394_low-res_pixel_art_of_a_small_diverse_group_workin_bdf1965a-0010-4d9f-86f7-376849003cdd_1.png',
  '/images/low-res/u9299633394_low-res_pixel_art_of_a_small_diverse_group_workin_bdf1965a-0010-4d9f-86f7-376849003cdd_0.png',
  '/images/low-res/u9299633394_low-res_pixel_art_of_a_small_diverse_group_workin_42f134e2-d379-4bb6-a36f-d995279033d5_0.png',
  '/images/low-res/u9299633394_low-res_pixel_art_of_a_diverse_small_group_workin_78c8f50e-e0bc-4b21-ad31-80cc29df8b42_1.png',
  '/images/low-res/pixelhero1.png',
  '/images/low-res/pixelhero2.png',
  '/images/low-res/pixelhero3.png',
  '/images/low-res/pixelhero4.png',
  '/images/low-res/pixelhero.png'
];

export default function RotatingHero() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [nextIndex, setNextIndex] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const transitionTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  
  // Preload all images on component mount
  useEffect(() => {
    heroImages.forEach(imagePath => {
      const img = new Image();
      img.src = imagePath;
    });
  }, []);
  
  // Function to handle the transition between images
  const transitionToNextImage = (newNextIndex: number) => {
    // Don't start a new transition if one is already in progress
    if (isTransitioning) return;
    
    // Start transition
    setIsTransitioning(true);
    
    // Clear any existing timeout
    if (transitionTimeoutRef.current) {
      clearTimeout(transitionTimeoutRef.current);
    }
    
    // Set the next image index
    setNextIndex(newNextIndex);
    
    // After the fade-out completes, swap the images and fade back in
    transitionTimeoutRef.current = setTimeout(() => {
      setActiveIndex(newNextIndex);
      setIsTransitioning(false);
    }, 1500); // Match the CSS transition duration
  };
  
  // Set up the automatic rotation
  useEffect(() => {
    const startRotation = () => {
      intervalRef.current = setInterval(() => {
        const newNextIndex = (activeIndex + 1) % heroImages.length;
        transitionToNextImage(newNextIndex);
      }, 5000); // Change image every 5 seconds
    };
    
    startRotation();
    
    // Clean up on component unmount
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
      if (transitionTimeoutRef.current) {
        clearTimeout(transitionTimeoutRef.current);
      }
    };
  }, [activeIndex]); // Only re-run when activeIndex changes
  
  // Function to handle manual image selection
  const handleImageSelect = (index: number) => {
    // Don't do anything if clicking the current image or during transition
    if (index === activeIndex || isTransitioning) return;
    
    // Clear the automatic rotation interval
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    
    // Transition to the selected image
    transitionToNextImage(index);
  };
  
  return (
    <div className="relative h-screen overflow-hidden">
      {/* Active image (bottom layer) */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ 
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.65)), url('${heroImages[activeIndex]}')` 
        }}
      />
      
      {/* Next image (top layer with fade effect) */}
      <div 
        className={`absolute inset-0 bg-cover bg-center transition-opacity ease-in-out ${isTransitioning ? 'opacity-100' : 'opacity-0'}`}
        style={{ 
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.65)), url('${heroImages[nextIndex]}')`,
          transitionDuration: '1.5s'
        }}
      />
      
      {/* Content (always on top) */}
      <div className="absolute top-1/2 left-[5%] transform -translate-y-1/2 text-white max-w-[550px] pr-8 z-10">
        <h1 className="text-5xl font-bold mb-6 leading-tight shadow-sm">
          We match talented volunteers with nonprofits.
        </h1>
        <p className="text-xl mb-10 leading-relaxed shadow-sm">
          Align your digital skills with meaningful portfolio projects
        </p>
        <Link href="#contact" className="inline-flex items-center justify-center px-6 py-3 text-base font-medium bg-white text-black hover:bg-gray-200 transition-colors">
          Join the interest list
        </Link>
      </div>
      
      {/* Highlight Boxes */}
      <div className="absolute bottom-24 left-1/2 transform -translate-x-1/2 flex justify-center gap-6 z-10 w-full max-w-5xl px-4">
        {/* Box 1: Meet People */}
        <div className="bg-black/60 backdrop-blur-sm border-t border-l border-white/10 p-6 flex-1 text-center text-white transition-all shadow-md hover:translate-y-[-2px]">
          <div className="mb-3 text-2xl font-bold">Meet people</div>
          <p className="text-sm text-gray-200">Connect with other volunteers and nonprofits who share your passion</p>
        </div>
        
        {/* Box 2: Up Your Skills */}
        <div className="bg-black/60 backdrop-blur-sm border-t border-l border-white/10 p-6 flex-1 text-center text-white transition-all shadow-md hover:translate-y-[-2px]">
          <div className="mb-3 text-2xl font-bold">Up your skills</div>
          <p className="text-sm text-gray-200">Learn and grow by working on challenging projects with real impact</p>
        </div>
        
        {/* Box 3: Build Portfolio */}
        <div className="bg-black/60 backdrop-blur-sm border-t border-l border-white/10 p-6 flex-1 text-center text-white transition-all shadow-md hover:translate-y-[-2px]">
          <div className="mb-3 text-2xl font-bold">Build portfolio</div>
          <p className="text-sm text-gray-200">Create real-world projects that showcase your skills to future employers</p>
        </div>
      </div>
      
      {/* Image indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-wrap justify-center max-w-[80%] gap-2 z-10">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => handleImageSelect(index)}
            className={`w-2 h-2 rounded-full ${
              index === activeIndex ? 'bg-white' : 'bg-white/40'
            } transition-all duration-300`}
            aria-label={`Switch to image ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
} 