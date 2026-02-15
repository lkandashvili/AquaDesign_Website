import Image from 'next/image';
import { Check, Users, Award, Globe, Clock } from 'lucide-react';

export default function AboutPage() {
  const teamMembers = [
    { name: 'David Kandelaki', role: 'Founder & Lead Designer', experience: '15+ years' },
    { name: 'Sophia Mchedlidze', role: 'Aquatic Biologist', experience: '12+ years' },
    { name: 'George Tsiklauri', role: 'Pool Engineering Specialist', experience: '10+ years' },
    { name: 'Ana Giorgadze', role: 'Landscape Architect', experience: '8+ years' },
  ];

  const values = [
    {
      icon: <Check className="w-8 h-8" />,
      title: 'Excellence',
      description: 'Uncompromising quality in every project, from design to execution.'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Client Focus',
      description: 'Personalized solutions tailored to each client\'s unique vision.'
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: 'Innovation',
      description: 'Latest technology and sustainable practices in water feature design.'
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: 'Sustainability',
      description: 'Eco-friendly solutions that harmonize with Georgia\'s natural beauty.'
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-cyan-50" />
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Story</span>
            </h1>
            <p className="text-xl text-gray-600 mb-10">
              Transforming Georgian landscapes with exquisite water features since 2010
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                From Passion to Profession
              </h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Founded in 2010 by David Kandelaki, AquaDesign began as a small workshop 
                  specializing in custom aquariums. What started as a passion for aquatic 
                  ecosystems quickly evolved into Georgia's premier water feature design company.
                </p>
                <p>
                  Today, we combine artistic vision with engineering excellence to create 
                  breathtaking water features across Georgia. From private residences in Tbilisi 
                  to luxury resorts in Batumi, our work reflects the unique beauty of Georgian 
                  landscapes.
                </p>
                <p>
                  Our team of designers, engineers, and aquatic biologists work together to 
                  bring your vision to life, ensuring each project is both beautiful and 
                  technically perfect.
                </p>
              </div>
              
              <div className="mt-8 grid grid-cols-2 gap-6">
                <div className="bg-blue-50 p-6 rounded-xl">
                  <div className="text-4xl font-bold text-blue-600 mb-2">200+</div>
                  <div className="text-gray-600">Projects Completed</div>
                </div>
                <div className="bg-cyan-50 p-6 rounded-xl">
                  <div className="text-4xl font-bold text-cyan-600 mb-2">50+</div>
                  <div className="text-gray-600">Cities in Georgia</div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-400 to-cyan-300 rounded-2xl aspect-[4/3] shadow-2xl overflow-hidden">
                {/* Placeholder for company image */}
                <div className="absolute inset-0 flex items-center justify-center text-white text-lg">
                  [Company Photo/Showcase]
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl w-64">
                <div className="flex items-center gap-3">
                  <Clock className="w-8 h-8 text-blue-600" />
                  <div>
                    <div className="text-2xl font-bold text-gray-900">12+</div>
                    <div className="text-gray-600">Years Experience</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-gradient-to-b from-white to-blue-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              The principles that guide every project we undertake
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div 
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-xl flex items-center justify-center text-white mb-6">
                  {value.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-600">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Meet Our Experts
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              A team of passionate professionals dedicated to water feature excellence
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div 
                key={index}
                className="bg-gradient-to-b from-white to-blue-50 border border-gray-100 rounded-2xl p-6 text-center hover:shadow-xl transition-all duration-300"
              >
                <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-blue-400 to-cyan-300 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                  {member.name.split(' ').map(n => n[0]).join('')}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {member.name}
                </h3>
                <p className="text-blue-600 font-medium mb-3">
                  {member.role}
                </p>
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-full">
                  <Clock className="w-4 h-4 text-blue-600" />
                  <span className="text-sm text-gray-700">{member.experience}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Process
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              From concept to completion, we ensure perfection at every step
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Consultation', desc: 'Understanding your vision and requirements' },
              { step: '02', title: 'Design', desc: 'Creating custom 3D designs and plans' },
              { step: '03', title: 'Construction', desc: 'Professional installation with precision' },
              { step: '04', title: 'Support', desc: 'Lifetime maintenance and support' },
            ].map((process, index) => (
              <div key={index} className="relative">
                <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                  <div className="text-3xl font-bold text-blue-600 mb-4">{process.step}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{process.title}</h3>
                  <p className="text-gray-600">{process.desc}</p>
                </div>
                {index < 3 && (
                  <div className="hidden md:block absolute top-1/2 right-0 w-8 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-400 -translate-y-1/2 translate-x-1/2"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}