import React from 'react';
import Image from 'next/image';

const TechStack = () => {
  const technologies = [
    {
      name: 'React',
      icon: '/icons/react.svg',
      color: '#61DAFB',
      className: 'fill-[#61DAFB] group-hover:fill-[#61DAFB]/80'
    },
    {
      name: 'Next.js',
      icon: '/icons/nextjs.svg',
      color: '#FFFFFF',
      className: 'fill-neutral-200 group-hover:fill-white'
    },
    {
      name: 'TypeScript',
      icon: '/icons/typescript.svg',
      color: '#3178C6',
      className: 'fill-[#3178C6] group-hover:fill-[#3178C6]/80'
    },
    {
      name: 'Supabase',
      icon: '/icons/supabase.svg',
      color: '#3ECF8E',
      className: 'fill-[#3ECF8E] group-hover:fill-[#3ECF8E]/80'
    },
    {
      name: 'PostgreSQL',
      icon: '/icons/postgresql.svg',
      color: '#336791',
      className: 'fill-[#336791] group-hover:fill-[#336791]/80'
    },
    {
      name: 'Figma',
      icon: '/icons/figma.svg',
      color: '#F24E1E',
      className: 'fill-[#F24E1E] group-hover:fill-[#F24E1E]/80'
    },
    {
      name: 'Tailwind CSS',
      icon: '/icons/tailwind.svg',
      color: '#38B2AC',
      className: 'fill-[#38B2AC] group-hover:fill-[#38B2AC]/80'
    },
    {
      name: 'Node.js',
      icon: '/icons/nodejs.svg',
      color: '#339933',
      className: 'fill-[#339933] group-hover:fill-[#339933]/80'
    }
  ];

  return (
    <div className="flex flex-wrap gap-3">
      {technologies.map((tech) => (
        <div
          key={tech.name}
          className="group flex items-center gap-2 bg-neutral-900/50 hover:bg-neutral-800/50 px-3 py-2 rounded-full transition-all duration-200"
        >
          <div className="relative w-4 h-4">
            <Image
              src={tech.icon}
              alt={tech.name}
              width={16}
              height={16}
              className={tech.className}
            />
          </div>
          <span className="text-sm text-neutral-400 group-hover:text-neutral-200 transition-colors">
            {tech.name}
          </span>
        </div>
      ))}
    </div>
  );
};

export default TechStack;
