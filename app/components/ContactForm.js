'use client';

import { useState } from 'react';
import { Send, Phone, Mail, MapPin, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Here you would typically send the data to your backend
    alert('Thank you for your inquiry! We will contact you soon.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      projectType: '',
      message: '',
    });
  };

  return (
    <section className="py-20 bg-gradient-to-b from-blue-50 to-white" id="contact">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Start Your Water Feature Project
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Get a free consultation and quote for your custom aquarium, pool, or lake project
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <div className="bg-white rounded-2xl p-8 shadow-lg h-full">
              <h3 className="text-2xl font-bold text-gray-900 mb-8">
                Contact Information
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-gray-500 text-sm">Phone Number</p>
                    <p className="text-lg font-semibold">+995 XXX XX XX XX</p>
                    <p className="text-gray-600 text-sm">Monday - Saturday, 9AM - 8PM</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-gray-500 text-sm">Email Address</p>
                    <p className="text-lg font-semibold">info@aquadesign.ge</p>
                    <p className="text-gray-600 text-sm">Response within 24 hours</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-gray-500 text-sm">Our Location</p>
                    <p className="text-lg font-semibold">Tbilisi, Georgia</p>
                    <p className="text-gray-600 text-sm">Serving all regions of Georgia</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-gray-500 text-sm">Business Hours</p>
                    <p className="text-lg font-semibold">Mon - Sat: 9:00 - 20:00</p>
                    <p className="text-gray-600 text-sm">Sunday: By appointment only</p>
                  </div>
                </div>
              </div>
              
              {/* Social Media Links */}
              <div className="mt-10 pt-8 border-t border-gray-100">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Follow Us</h4>
                <div className="flex gap-4">
                  <a href="#" className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center hover:bg-blue-200 transition-colors">
                    <span className="font-semibold text-blue-600">Fb</span>
                  </a>
                  <a href="#" className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center hover:bg-blue-200 transition-colors">
                    <span className="font-semibold text-blue-600">Ig</span>
                  </a>
                  <a href="#" className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center hover:bg-blue-200 transition-colors">
                    <span className="font-semibold text-blue-600">Yt</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl p-8 shadow-xl"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Get Your Free Quote
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 mb-2 font-medium">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="John Smith"
                  />
                </div>
                
                <div>
                  <label className="block text-gray-700 mb-2 font-medium">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="+995 5XX XX XX XX"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-gray-700 mb-2 font-medium">
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  placeholder="your@email.com"
                />
              </div>
              
              <div>
                <label className="block text-gray-700 mb-2 font-medium">
                  Project Type
                </label>
                <select 
                  name="projectType"
                  value={formData.projectType}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                >
                  <option value="">Select project type</option>
                  <option value="aquarium">Aquarium Design</option>
                  <option value="pool">Swimming Pool</option>
                  <option value="lake">Lake/Pond Design</option>
                  <option value="maintenance">Maintenance Service</option>
                  <option value="consultation">Just Consultation</option>
                </select>
              </div>
              
              <div>
                <label className="block text-gray-700 mb-2 font-medium">
                  Project Details
                </label>
                <textarea
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  placeholder="Tell us about your project, location, budget, and any specific requirements..."
                ></textarea>
              </div>
              
              <div className="flex items-center gap-2">
                <input 
                  type="checkbox" 
                  id="newsletter" 
                  className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
                />
                <label htmlFor="newsletter" className="text-gray-600 text-sm">
                  I'd like to receive updates and tips about water feature maintenance
                </label>
              </div>
              
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white py-4 rounded-xl font-semibold hover:opacity-90 transition-all duration-300 flex items-center justify-center gap-2 text-lg"
              >
                Send Request
                <Send className="w-5 h-5" />
              </button>
              
              <p className="text-gray-500 text-sm text-center">
                We'll contact you within 24 hours to discuss your project
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}