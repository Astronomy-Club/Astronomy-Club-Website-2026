import React, { useEffect, useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import eventsData from '../data/eventsData';
import EventCard from '../components/Activities/EventCard';

const Activities: React.FC = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(false);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    setCursorPosition({ x: e.clientX, y: e.clientY });
  }, []);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    if (!isMobile) {
      window.addEventListener('mousemove', handleMouseMove);
    }
    
    return () => {
      window.removeEventListener('resize', checkMobile);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [isMobile, handleMouseMove]);

  return (
    <div className="min-h-screen bg-black cursor-none">
      {/* Custom Star Cursor */}
      {!isMobile && (
        <div
          className="fixed pointer-events-none z-[9999]"
          style={{
            left: cursorPosition.x,
            top: cursorPosition.y,
            transform: 'translate(-50%, -50%)',
          }}
        >
          <img
            src="/star.png"
            alt=""
            className="w-6 h-6"
            draggable={false}
          />
        </div>
      )}

      {/* Page Title */}
      <motion.h1
        className="text-4xl sm:text-5xl font-bold mb-6 text-center text-white pt-24"
        style={{ fontFamily: "'Poppins', sans-serif" }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
      >
        Our Events and Activities
      </motion.h1>

      {/* Events Grid */}
      <div className="container mx-auto px-4 sm:px-8 mt-12 pb-16">
        <div className="flex flex-wrap justify-center items-start gap-8 w-full">
          {eventsData.map((event, index) => (
            <motion.div
              key={event.title}
              className="flex justify-center"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                ease: 'easeOut',
                delay: index * 0.15,
              }}
              viewport={{ once: true }}
            >
              <EventCard
                title={event.title}
                image={event.img}
                desc={event.desc}
                link={event.link}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Activities;