import React, { useState } from 'react';

interface BlogProps {
  title: string;
  desc: string;
  img: string;    
  link: string;
  dateCreated: string;
}

export const BlogCard: React.FC<BlogProps> = ({ title, desc, link, img, dateCreated}) => {

  return (
    <div className="group relative overflow-hidden rounded-2xl bg-black backdrop-blur-xl border border-purple-500/50 hover:border-purple-400/80 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-70 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          backgroundImage: `url(${img})`
        }}
      >
      </div>

      <div className="relative p-8 h-96 flex flex-col justify-end">
        <div className="flex items-center space-x-3 mb-4 opacity-90">

          <div className="w-30 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-xl flex items-center justify-center text-sm font-bold shadow-lg">
            {dateCreated}
          </div>
        </div>
        <h3 className="text-2xl  text-gray-300 font-bold mb-4 leading-tight drop-shadow-lg">
          {title}
        </h3>
        <div className="flex items-center space-x-4 text-sm opacity-80">
          <span className="text-yellow-400">Dive in..</span>
          <div >
            <a
              href={link}
              className="p-4 text-xl w-8 h-8 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full flex items-center justify-center rotate-45 group-hover:rotate-0 transition-transform"
            >➜
            </a>

          </div>
        </div>
      </div>
    </div>
  );
};
