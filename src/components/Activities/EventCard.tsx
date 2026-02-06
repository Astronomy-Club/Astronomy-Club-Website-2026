import React, { useState } from 'react';

interface EventCardProps {
  title: string;
  image: string;
  desc: string;
  link: string;
}

const EventCard: React.FC<EventCardProps> = ({ title, image, desc, link }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const maxLength = 150;

  const shouldTruncate = desc.length > maxLength;
  const displayText = isExpanded ? desc : desc.slice(0, maxLength);

  return (
    <div className="w-[360px] bg-gradient-to-b from-[#16162a] to-[#0d0d18] rounded-2xl overflow-hidden shadow-2xl hover:shadow-[0_0_50px_rgba(139,92,246,0.25)] transition-all duration-500 group flex flex-col border border-purple-800/20 hover:border-purple-500/40">
      {/* Image Container */}
      <div className="relative overflow-hidden">
        <div className="aspect-[4/3] w-full">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
          />
        </div>
        {/* Bottom Gradient Fade */}
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[#16162a] to-transparent"></div>
        
        {/* Subtle Vignette */}
        <div className="absolute inset-0 shadow-[inset_0_0_30px_rgba(0,0,0,0.5)]"></div>
      </div>

      {/* Content */}
      <div className="p-5 flex-1 flex flex-col">
        <h5 
          className="text-white text-xl font-bold mb-3 tracking-wide group-hover:text-purple-300 transition-colors duration-300"
          style={{ fontFamily: "'Poppins', sans-serif" }}
        >
          {title}
        </h5>
        <p 
          className="text-gray-400 text-sm leading-relaxed flex-1"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          {displayText}
          {shouldTruncate && !isExpanded && '...'}
        </p>
        
        {/* Read More / Read Less Button */}
        {shouldTruncate && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              setIsExpanded(!isExpanded);
            }}
            className="text-purple-400 hover:text-purple-300 text-sm font-medium mt-3 transition-colors duration-200 cursor-pointer self-start flex items-center gap-1 group/btn"
          >
            {isExpanded ? (
              <>
                <span>Read Less</span>
                <span className="text-xs group-hover/btn:-translate-y-0.5 transition-transform">▲</span>
              </>
            ) : (
              <>
                <span>Read More</span>
                <span className="text-xs group-hover/btn:translate-y-0.5 transition-transform">▼</span>
              </>
            )}
          </button>
        )}
      </div>

      {/* Learn More Link */}
      <div className="px-5 pb-5">
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-purple-600/90 to-indigo-600/90 hover:from-purple-500 hover:to-indigo-500 text-white text-sm font-medium rounded-lg transition-all duration-300 shadow-lg hover:shadow-purple-500/25 hover:-translate-y-0.5"
        >
          <span>Explore Event</span>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default EventCard;