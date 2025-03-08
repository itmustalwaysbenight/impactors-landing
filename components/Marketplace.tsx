"use client";

import { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

// This would normally be in an environment variable
// For demo purposes only - you should use your own token from https://account.mapbox.com/
// Sign up for a free account and replace this with your own token
const MAPBOX_TOKEN = 'pk.eyJ1IjoiZGVtb3VzZXIiLCJhIjoiY2xvNXE2aTNlMGN2aDJrcGR5ZDFkaHl4ZSJ9.2-9gC8yzJLYRDXlvKuYLrw';

type ProjectMarker = {
  id: number;
  count: number;
  lat: number;
  lng: number;
  color: string;
};

export default function Marketplace() {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [mapLoaded, setMapLoaded] = useState(false);

  // Sample project markers for the map
  const projectMarkers: ProjectMarker[] = [
    { id: 1, count: 7, lat: 59.9139, lng: 10.7522, color: '#d63384' }, // Oslo center
    { id: 2, count: 2, lat: 59.9039, lng: 10.7322, color: '#dc3545' },
    { id: 3, count: 3, lat: 59.9239, lng: 10.7622, color: '#dc3545' },
    { id: 4, count: 4, lat: 59.9339, lng: 10.7422, color: '#dc3545' },
    { id: 5, count: 5, lat: 59.9189, lng: 10.7722, color: '#d63384' },
    { id: 6, count: 6, lat: 59.9039, lng: 10.8022, color: '#d63384' },
    { id: 7, count: 7, lat: 59.9439, lng: 10.7922, color: '#d63384' },
    { id: 8, count: 10, lat: 59.9289, lng: 10.7822, color: '#d63384' },
    { id: 9, count: 18, lat: 59.9389, lng: 10.8122, color: '#d63384' },
  ];

  useEffect(() => {
    if (!mapContainer.current || map.current) return;

    mapboxgl.accessToken = MAPBOX_TOKEN;
    
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/dark-v11',
      center: [10.7522, 59.9139], // Oslo coordinates
      zoom: 12,
    });

    map.current.on('load', () => {
      setMapLoaded(true);
    });

    return () => {
      map.current?.remove();
    };
  }, []);

  // Add markers when map is loaded
  useEffect(() => {
    if (!map.current || !mapLoaded) return;

    projectMarkers.forEach((marker) => {
      // Create a DOM element for the marker
      const el = document.createElement('div');
      el.className = 'marker';
      el.style.width = '40px';
      el.style.height = '40px';
      el.style.borderRadius = '50%';
      el.style.backgroundColor = marker.color;
      el.style.display = 'flex';
      el.style.justifyContent = 'center';
      el.style.alignItems = 'center';
      el.style.color = 'white';
      el.style.fontWeight = 'bold';
      el.style.cursor = 'pointer';
      el.innerText = marker.count.toString();

      // Add marker to map
      if (map.current) {
        new mapboxgl.Marker(el)
          .setLngLat([marker.lng, marker.lat])
          .addTo(map.current);
      }
    });
  }, [mapLoaded, projectMarkers]);

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
            <div className="bg-gray-900 rounded-lg p-4">
              <div className="mb-4">
                <div className="mb-4">
                  <label htmlFor="postalCode" className="block text-sm font-medium mb-1">POSTNUMMERE</label>
                  <input 
                    type="text" 
                    id="postalCode"
                    placeholder="Søkeverdier..."
                    className="w-full p-2 bg-gray-800 text-white rounded"
                  />
                </div>
                
                <div>
                  <p className="block text-sm font-medium mb-2">VELG OMRÅDER</p>
                  <div className="grid grid-cols-2 gap-2">
                    {['OSLO', 'ASKER', 'SKI', 'DRAMMEN', 'LØRENSKOG', 'BÆRUM', 'SKEDSMO', 'JESSHEIM', 'KOLBOTN'].map((area) => (
                      <div key={area} className="flex items-center">
                        <input 
                          type="checkbox" 
                          id={area} 
                          className="mr-2"
                        />
                        <label htmlFor={area} className="text-sm">{area}</label>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              <div 
                ref={mapContainer} 
                className="w-full h-[400px] rounded-lg overflow-hidden"
              />
              
              <div className="mt-4">
                <div className="relative">
                  <input 
                    type="text" 
                    placeholder="Søkested i Norge" 
                    className="w-full p-2 pl-8 bg-gray-800 text-white rounded"
                  />
                  <svg 
                    className="absolute left-2 top-2.5 w-4 h-4 text-gray-400" 
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 