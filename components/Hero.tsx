"use client";

import Link from 'next/link';

const Hero = () => {
  return (
    <div 
      style={{
        backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url('/hero.jpeg')",
        height: "100vh",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        position: "relative"
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
          Align your digital skills with meaningful portfolio projects
        </h1>
        <p style={{ fontSize: "1.2rem", marginBottom: "2rem" }}>
          We match digital volunteers with small- and medium nonprofit organisations in lack of resources.
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
    </div>
  );
};

export default Hero; 