"use client";

import { useState, useEffect } from 'react';
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

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  // Log the current image for debugging
  useEffect(() => {
    console.log('Hero component - Current image index:', currentImageIndex);
    console.log('Hero component - Current image path:', heroImages[currentImageIndex]);
  }, [currentImageIndex]);
  
  useEffect(() => {
    const rotateImages = () => {
      setCurrentImageIndex(prevIndex => {
        const nextIndex = prevIndex + 1;
        return nextIndex >= heroImages.length ? 0 : nextIndex;
      });
    };
    
    const interval = setInterval(rotateImages, 5000); // Change image every 5 seconds
    
    return () => clearInterval(interval);
  }, []);
  
  // Preload images to ensure smooth transitions
  useEffect(() => {
    heroImages.forEach(imagePath => {
      const img = new Image();
      img.src = imagePath;
    });
  }, []);

  return (
    <div 
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.65)), url('${heroImages[currentImageIndex]}')`,
        height: "100vh",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        position: "relative",
        transition: "background-image 1s ease-in-out"
      }}
    >
      <div 
        style={{
          position: "absolute",
          top: "50%",
          left: "10%",
          transform: "translateY(-50%)",
          color: "white",
          maxWidth: "600px"
        }}
      >
        <h1 style={{ fontSize: "3.5rem", fontWeight: "bold", marginBottom: "1rem" }}>
          We match digital volunteers with nonprofits.
        </h1>
        <p style={{ fontSize: "1.2rem", marginBottom: "2rem" }}>
          Align your digital skills with meaningful portfolio projects
        </p>
        <Link
          href="#contact"
          style={{
            display: "inline-block",
            backgroundColor: "white",
            color: "black",
            padding: "0.75rem 1.5rem",
            textDecoration: "none",
            fontSize: "0.875rem",
            fontWeight: "500"
          }}
        >
          Join the interest list
        </Link>
      </div>
      
      {/* Image indicators */}
      <div style={{
        position: "absolute",
        bottom: "2rem",
        left: "50%",
        transform: "translateX(-50%)",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        maxWidth: "80%",
        gap: "0.5rem"
      }}>
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            style={{
              width: "0.5rem",
              height: "0.5rem",
              borderRadius: "50%",
              backgroundColor: index === currentImageIndex ? "white" : "rgba(255, 255, 255, 0.4)",
              border: "none",
              padding: 0,
              cursor: "pointer",
              transition: "background-color 0.3s"
            }}
            aria-label={`Switch to image ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Hero; 