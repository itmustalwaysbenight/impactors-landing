"use client";

import Link from 'next/link';

const Header = () => {
  return (
    <header style={{
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      zIndex: 50,
      padding: "2rem 0"
    }}>
      <div style={{
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "0 1rem",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
      }}>
        <Link href="/" style={{
          fontSize: "1.5rem",
          fontWeight: "bold",
          fontStyle: "italic",
          color: "white",
          textDecoration: "none"
        }}>
          Logo
        </Link>
        
        <div style={{
          display: "flex",
          alignItems: "center",
          gap: "2rem"
        }}>
          <Link 
            href="/partners" 
            style={{
              fontSize: "0.875rem",
              fontWeight: "500",
              color: "white",
              textDecoration: "none"
            }}
          >
            Partners
          </Link>
          
          <Link
            href="#contact"
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              height: "2.5rem",
              padding: "0 1.5rem",
              fontSize: "0.875rem",
              fontWeight: "500",
              color: "white",
              backgroundColor: "transparent",
              border: "1px solid white",
              textDecoration: "none",
              transition: "background-color 0.2s, color 0.2s"
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.backgroundColor = "white";
              e.currentTarget.style.color = "black";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.backgroundColor = "transparent";
              e.currentTarget.style.color = "white";
            }}
          >
            Join the interest list
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header; 