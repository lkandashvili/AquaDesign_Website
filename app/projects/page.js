'use client';

import { useState } from 'react';
import { 
  ZoomIn, MapPin, Calendar, Maximize2, Play, 
  Filter, Grid, List, Video, Image as ImageIcon 
} from 'lucide-react';

// Helper function to convert Google Drive links for images
const getGoogleDriveDirectLink = (url) => {
  if (!url) return '';
  const fileIdMatch = url.match(/\/d\/(.+?)\/|id=(.+?)(&|$)/);
  if (fileIdMatch) {
    const fileId = fileIdMatch[1] || fileIdMatch[2];
    return `https://drive.google.com/uc?export=view&id=${fileId}`;
  }
  return url;
};

// Helper function to convert Google Drive links for video embed
const getGoogleDriveEmbedLink = (url) => {
  if (!url) return '';
  const fileIdMatch = url.match(/\/d\/(.+?)\/|id=(.+?)(&|$)/);
  if (fileIdMatch) {
    const fileId = fileIdMatch[1] || fileIdMatch[2];
    return `https://drive.google.com/file/d/${fileId}/preview`;
  }
  return url;
};

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [viewMode, setViewMode] = useState('grid');
  const [selectedProject, setSelectedProject] = useState(null);

  const filters = [
    { id: 'all', label: 'All Projects', count: 24 },
    { id: 'aquariums', label: 'Aquariums', count: 8 },
    { id: 'pools', label: 'Swimming Pools', count: 10 },
    { id: 'lakes', label: 'Lakes & Ponds', count: 6 },
  ];

  // Sample projects data - replace with your actual projects
  const projects = [
    {
      id: 1,
      title: 'Luxury Hotel Aquarium',
      category: 'aquariums',
      location: 'Tbilisi, Vake',
      date: '2023',
      description: '5000L saltwater aquarium in luxury hotel lobby with live coral reef system',
      features: ['Saltwater System', 'Live Corals', 'Automated Control', 'LED Lighting'],
      images: [
        '/projects/aquariums/lisi3.png',
        '/projects/aquariums/lisi1_daumtavrebeli.JPG',
        '/projects/aquariums/lisi2_daumtavrebeli.JPG',
      ],
      video: 'https://drive.google.com/file/d/1wAT1BVsULYqHzJp-sRgcPTMkBpHyWNNi/preview',
      size: '5000 Liters',
      budget: 'Premium',
      status: 'Completed'
    },
    {
      id: 2,
      title: 'Infinity Edge Pool',
      category: 'pools',
      location: 'Batumi, Seaside',
      date: '2024',
      description: 'Modern infinity pool with mountain view and integrated spa area',
      features: ['Infinity Edge', 'Heated Pool', 'Spa Area', 'Smart Control'],
      images: [
        '/projects/pools/pool1.jpg',
      ],
      video: 'https://drive.google.com/file/d/1Fh70j0pUOCClLYyyOyXxEzNmBA3Nlv0C/preview',
      size: '12m × 6m',
      budget: 'Luxury',
      status: 'Completed'
    },
    {
      id: 3,
      title: 'Private Estate Lake',
      category: 'lakes',
      location: 'Kakheti, Telavi',
      date: '2022',
      description: 'Natural 2-acre lake with fishing dock and waterfall feature',
      features: ['Natural Filtration', 'Fish Habitat', 'Waterfall', 'Lighting'],
      images: [
        '/projects/lakes/lake1.jpg',
      ],
      size: '2 Acres',
      budget: 'Premium',
      status: 'Completed'
    },
    {
      id: 4,
      title: 'Restaurant Coral Reef',
      category: 'aquariums',
      location: 'Tbilisi, Old Town',
      date: '2023',
      description: 'Live coral reef aquarium for premium seafood restaurant',
      features: ['Coral Reef', 'Exotic Fish', 'Night Mode', 'Auto-feeding'],
      images: [
        '/projects/aquariums/kingdavid_patara1.jpg',
      ],
      video: 'https://drive.google.com/file/d/1tdLNhGRwGjNtLZ4KFJ_UGeJDOjCVOaS_/preview',
      size: '3000 Liters',
      budget: 'Commercial',
      status: 'Completed'
    },
    {
      id: 5,
      title: 'Family Resort Pool Complex',
      category: 'pools',
      location: 'Gudauri',
      date: '2023',
      description: 'Heated pool complex with children area and water features',
      features: ['Heated System', 'Kids Pool', 'Waterfall', 'Jacuzzi'],
      images: [
        '/projects/pool-2.jpg',
      ],
      size: '15m × 8m',
      budget: 'Luxury',
      status: 'Completed'
    },
    {
      id: 6,
      title: 'Park Decorative Pond',
      category: 'lakes',
      location: 'Kutaisi, Central Park',
      date: '2021',
      description: 'Landscaped pond with waterfall and koi fish habitat',
      features: ['Koi Pond', 'Waterfall', 'Plants', 'Lighting'],
      images: [
        '/projects/lake-2.jpg',
      ],
      size: '500 sq.m',
      budget: 'Public',
      status: 'Completed'
    },
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const openProjectModal = (project) => {
    setSelectedProject(project);
  };

  const closeProjectModal = () => {
    setSelectedProject(null);
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-cyan-50" />
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Portfolio</span>
            </h1>
            <p className="text-xl text-gray-600 mb-10">
              Browse our collection of stunning water feature projects across Georgia
            </p>
          </div>
        </div>
      </section>

      {/* Filter & Controls Section */}
      <section className="py-10 bg-white border-b border-gray-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
            {/* Filter Buttons */}
            <div className="flex flex-wrap gap-3">
              {filters.map((filter) => (
                <button
                  key={filter.id}
                  onClick={() => setActiveFilter(filter.id)}
                  className={`px-6 py-3 rounded-xl transition-all font-medium flex items-center gap-2 ${
                    activeFilter === filter.id 
                      ? 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-lg' 
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {filter.label}
                  <span className={`px-2 py-1 rounded-full text-xs ${
                    activeFilter === filter.id 
                      ? 'bg-white/20' 
                      : 'bg-gray-200'
                  }`}>
                    {filter.count}
                  </span>
                </button>
              ))}
            </div>

            {/* View Mode & Filter Icon */}
            <div className="flex items-center gap-4">
              <div className="hidden sm:flex items-center bg-gray-100 rounded-xl p-1">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded-lg ${viewMode === 'grid' ? 'bg-white shadow' : ''}`}
                >
                  <Grid className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded-lg ${viewMode === 'list' ? 'bg-white shadow' : ''}`}
                >
                  <List className="w-5 h-5" />
                </button>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <Filter className="w-5 h-5" />
                <span className="font-medium">{filteredProjects.length} Projects</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {viewMode === 'grid' ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project) => (
                <ProjectCard 
                  key={project.id} 
                  project={project} 
                  viewMode={viewMode}
                  onClick={() => openProjectModal(project)}
                />
              ))}
            </div>
          ) : (
            <div className="space-y-6 max-w-6xl mx-auto">
              {filteredProjects.map((project) => (
                <ProjectCard 
                  key={project.id} 
                  project={project} 
                  viewMode={viewMode}
                  onClick={() => openProjectModal(project)}
                />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Project Modal */}
      {selectedProject && (
        <ProjectModal project={selectedProject} onClose={closeProjectModal} />
      )}

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-cyan-500">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-4xl font-bold mb-6">
              Want Your Project Featured Here?
            </h2>
            <p className="text-xl mb-10 opacity-90">
              Let's create something amazing together
            </p>
            <a 
              href="/contact" 
              className="inline-block bg-white text-blue-600 px-8 py-4 rounded-xl hover:bg-gray-100 transition-all font-semibold text-lg"
            >
              Start Your Project →
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

// Project Card Component
function ProjectCard({ project, viewMode, onClick }) {
  const categoryColors = {
    aquariums: 'from-blue-500 to-cyan-400',
    pools: 'from-teal-500 to-emerald-400',
    lakes: 'from-green-500 to-cyan-400'
  };

  return (
    <div 
      onClick={onClick}
      className={`bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer group ${
        viewMode === 'list' ? 'flex flex-col md:flex-row' : ''
      }`}
    >
      {/* Project Media */}
      <div className={`relative overflow-hidden ${
        viewMode === 'list' ? 'md:w-1/3 aspect-[4/3]' : 'aspect-[4/3]'
      }`}>
        {/* Show actual image if available */}
        {project.images && project.images[0] ? (
          <img 
            src={getGoogleDriveDirectLink(project.images[0])}
            alt={project.title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            onError={(e) => {
              e.target.onerror = null;
              e.target.style.display = 'none';
              // Show fallback gradient
              const parent = e.target.parentElement;
              const fallbackDiv = document.createElement('div');
              fallbackDiv.className = `absolute inset-0 bg-gradient-to-br ${categoryColors[project.category]} flex items-center justify-center`;
              fallbackDiv.innerHTML = `
                <div class="text-center text-white p-8">
                  <div class="text-5xl font-bold mb-4">${project.id}</div>
                  <div class="text-lg font-medium">${project.title}</div>
                </div>
              `;
              parent.appendChild(fallbackDiv);
            }}
          />
        ) : (
          // Fallback gradient if no image
          <div className={`absolute inset-0 bg-gradient-to-br ${categoryColors[project.category]} flex items-center justify-center`}>
            <div className="text-center text-white p-8">
              <div className="text-5xl font-bold mb-4">{project.id}</div>
              <div className="text-lg font-medium">{project.title}</div>
            </div>
          </div>
        )}
        
        {/* Media Type Indicator */}
        <div className="absolute top-4 right-4 flex items-center gap-2">
          {project.video ? (
            <div className="bg-black/50 backdrop-blur-sm text-white px-3 py-1 rounded-full flex items-center gap-2 text-sm">
              <Play className="w-4 h-4" />
              Video
            </div>
          ) : project.images && project.images.length > 1 ? (
            <div className="bg-black/50 backdrop-blur-sm text-white px-3 py-1 rounded-full flex items-center gap-2 text-sm">
              <ImageIcon className="w-4 h-4" />
              Gallery ({project.images.length})
            </div>
          ) : project.images && project.images.length === 1 ? (
            <div className="bg-black/50 backdrop-blur-sm text-white px-3 py-1 rounded-full flex items-center gap-2 text-sm">
              <ImageIcon className="w-4 h-4" />
              Photo
            </div>
          ) : null}
        </div>
        
        {/* Category Badge */}
        <div className="absolute top-4 left-4">
          <span className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold capitalize">
            {project.category}
          </span>
        </div>
        
        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-white/20 backdrop-blur-sm p-4 rounded-full">
              <Maximize2 className="w-8 h-8 text-white" />
            </div>
          </div>
        </div>
      </div>
      
      {/* Project Info */}
      <div className={`p-6 ${viewMode === 'list' ? 'md:w-2/3' : ''}`}>
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
            <div className="flex items-center gap-4 text-gray-600 text-sm">
              <div className="flex items-center gap-1">
                <MapPin className="w-4 h-4" />
                {project.location}
              </div>
              <div className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                {project.date}
              </div>
            </div>
          </div>
          <div className="text-right">
            <div className="text-sm text-gray-500">Size</div>
            <div className="font-semibold text-blue-600">{project.size}</div>
          </div>
        </div>
        
        <p className="text-gray-600 mb-6">{project.description}</p>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {project.features.map((feature, index) => (
            <span 
              key={index} 
              className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm"
            >
              {feature}
            </span>
          ))}
        </div>
        
        <div className="flex justify-between items-center pt-4 border-t border-gray-100">
          <div>
            <div className="text-sm text-gray-500">Budget</div>
            <div className="font-semibold text-gray-900">{project.budget}</div>
          </div>
          <div>
            <div className="text-sm text-gray-500">Status</div>
            <div className="font-semibold text-green-600">{project.status}</div>
          </div>
          <button className="text-blue-600 font-medium hover:text-blue-700 flex items-center gap-2">
            View Details
            <ZoomIn className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}

// Project Modal Component
function ProjectModal({ project, onClose }) {
  const categoryColors = {
    aquariums: 'bg-gradient-to-r from-blue-600 to-cyan-500',
    pools: 'bg-gradient-to-r from-teal-600 to-emerald-500',
    lakes: 'bg-gradient-to-r from-green-600 to-cyan-500'
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black/70" onClick={onClose} />
      
      {/* Modal */}
      <div className="relative min-h-screen flex items-center justify-center p-4">
        <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-6xl max-h-[90vh] overflow-hidden">
          {/* Modal Header */}
          <div className={`${categoryColors[project.category]} text-white p-8`}>
            <div className="flex justify-between items-start">
              <div>
                <h2 className="text-3xl font-bold mb-2">{project.title}</h2>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-5 h-5" />
                    {project.location}
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-5 h-5" />
                    Completed: {project.date}
                  </div>
                </div>
              </div>
              <button 
                onClick={onClose}
                className="text-white hover:text-gray-200 text-2xl"
              >
                ✕
              </button>
            </div>
          </div>
          
          {/* Modal Content */}
          <div className="p-8 overflow-y-auto max-h-[60vh]">
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Media Gallery */}
              <div>
                {/* Main Media Display */}
                <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl aspect-[4/3] overflow-hidden relative">
                  {project.video ? (
                    <iframe
                      src={getGoogleDriveEmbedLink(project.video)}
                      className="w-full h-full"
                      allow="autoplay"
                      allowFullScreen
                    />
                  ) : project.images && project.images[0] ? (
                    <img 
                      src={getGoogleDriveDirectLink(project.images[0])}
                      alt={project.title}
                      className="w-full h-full object-contain"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <ImageIcon className="w-16 h-16 text-blue-600 mx-auto mb-4" />
                        <p className="text-gray-700 font-medium">No Media Available</p>
                      </div>
                    </div>
                  )}
                </div>
                
                {/* Thumbnail Gallery */}
                {project.images && project.images.length > 1 && (
                  <div className="grid grid-cols-3 gap-4 mt-4">
                    {project.images.slice(0, 3).map((image, index) => (
                      <div 
                        key={index}
                        className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg aspect-square overflow-hidden cursor-pointer hover:opacity-75 transition-opacity"
                      >
                        <img 
                          src={getGoogleDriveDirectLink(image)}
                          alt={`${project.title} - ${index + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ))}
                  </div>
                )}
              </div>
              
              {/* Project Details */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Project Details</h3>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Description</h4>
                    <p className="text-gray-600">{project.description}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Features</h4>
                    <ul className="grid grid-cols-2 gap-2">
                      {project.features.map((feature, index) => (
                        <li key={index} className="flex items-center gap-2 text-gray-600">
                          <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Project Size</h4>
                      <p className="text-gray-600">{project.size}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Budget Range</h4>
                      <p className="text-gray-600">{project.budget}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Category</h4>
                      <span className="capitalize px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">
                        {project.category}
                      </span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Status</h4>
                      <span className="px-3 py-1 bg-green-100 text-green-600 rounded-full text-sm">
                        {project.status}
                      </span>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Client Testimonial</h4>
                    <div className="bg-gray-50 rounded-xl p-4 italic text-gray-600">
                      "AquaDesign transformed our space beyond expectations. Professional team, excellent craftsmanship."
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Modal Footer */}
          <div className="border-t border-gray-100 p-6">
            <div className="flex justify-between items-center">
              <button className="text-gray-600 hover:text-gray-900">
                ← Previous Project
              </button>
              <div className="flex gap-4">
                <a 
                  href="/contact" 
                  className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium"
                >
                  Start Similar Project
                </a>
                <button 
                  onClick={onClose}
                  className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 font-medium"
                >
                  Close
                </button>
              </div>
              <button className="text-gray-600 hover:text-gray-900">
                Next Project →
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}