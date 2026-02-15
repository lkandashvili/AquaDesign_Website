'use client';

import { useState } from 'react';
import { ZoomIn, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

const projects = [
  { 
    id: 1, 
    category: 'aquarium', 
    title: 'Luxury Hotel Aquarium', 
    location: 'Tbilisi',
    description: '5000L saltwater aquarium in hotel lobby',
    imageColor: 'from-blue-400 to-cyan-300'
  },
  { 
    id: 2, 
    category: 'pool', 
    title: 'Infinity Edge Pool', 
    location: 'Batumi',
    description: 'Modern infinity pool with mountain view',
    imageColor: 'from-teal-400 to-emerald-300'
  },
  { 
    id: 3, 
    category: 'lake', 
    title: 'Private Estate Lake', 
    location: 'Kakheti',
    description: 'Natural 2-acre lake with fishing dock',
    imageColor: 'from-green-400 to-cyan-300'
  },
  { 
    id: 4, 
    category: 'aquarium', 
    title: 'Restaurant Coral Reef', 
    location: 'Tbilisi',
    description: 'Live coral reef aquarium for seafood restaurant',
    imageColor: 'from-purple-400 to-pink-300'
  },
  { 
    id: 5, 
    category: 'pool', 
    title: 'Family Resort Pool', 
    location: 'Gudauri',
    description: 'Heated pool complex with children\'s area',
    imageColor: 'from-cyan-400 to-blue-300'
  },
  { 
    id: 6, 
    category: 'lake', 
    title: 'Park Decorative Pond', 
    location: 'Kutaisi',
    description: 'Landscaped pond with waterfall feature',
    imageColor: 'from-emerald-400 to-teal-300'
  },
];

export default function ProjectGallery() {
  const [activeFilter, setActiveFilter] = useState('all');
  
  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'aquarium', label: 'Aquariums' },
    { id: 'pool', label: 'Swimming Pools' },
    { id: 'lake', label: 'Lakes & Ponds' },
  ];
  
  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our Featured Projects
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Showcasing water design excellence across Georgia's diverse landscapes
          </p>
        </div>
        
        {/* Filter buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-6 py-2 rounded-full transition-all font-medium ${
                activeFilter === filter.id 
                  ? 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-lg' 
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>
        
        {/* Projects grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div 
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 card-hover"
            >
              {/* Project image placeholder */}
              <div className={`aspect-[4/3] bg-gradient-to-br ${project.imageColor} relative overflow-hidden`}>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full z-10">
                  <span className="text-sm font-semibold text-blue-600 capitalize">
                    {project.category}
                  </span>
                </div>
                
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-white/20 backdrop-blur-sm p-4 rounded-full">
                    <ZoomIn className="w-8 h-8 text-white" />
                  </div>
                </div>
              </div>
              
              {/* Project info */}
              <div className="p-6 bg-white">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-gray-500">
                    <MapPin className="w-4 h-4" />
                    <span className="text-sm">{project.location}</span>
                  </div>
                  
                  <button className="text-blue-600 font-medium hover:text-blue-700 text-sm">
                    View Details →
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* View all button */}
        <div className="text-center mt-12">
          <button className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-3 rounded-xl font-semibold transition-all">
            View All Projects
          </button>
        </div>
      </div>
    </section>
  );
}