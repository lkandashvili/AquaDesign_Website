'use client';

import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, MessageSquare } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    service: ''
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
    console.log('Contact form submitted:', formData);
    alert('Thank you for your message! We will contact you within 24 hours.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
      service: ''
    });
  };

  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: 'Phone',
      details: ['+995 599 12 34 56', '+995 322 12 34 57'],
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: 'Email',
      details: ['info@aquadesign.ge', 'projects@aquadesign.ge'],
      color: 'from-cyan-500 to-blue-500'
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: 'Location',
      details: ['Main Office: Tbilisi, Georgia', 'Service Area: All Georgia'],
      color: 'from-teal-500 to-cyan-500'
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: 'Hours',
      details: ['Mon-Sat: 9:00 - 20:00', 'Sunday: By Appointment'],
      color: 'from-green-500 to-teal-500'
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
              Get In <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Touch</span>
            </h1>
            <p className="text-xl text-gray-600 mb-10">
              Ready to transform your space with stunning water features? Let's discuss your project.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {contactInfo.map((info, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-white to-gray-50 border border-gray-100 rounded-2xl p-8 text-center hover:shadow-xl transition-all duration-300 group"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${info.color} rounded-2xl flex items-center justify-center text-white mx-auto mb-6 group-hover:scale-110 transition-transform`}>
                  {info.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {info.title}
                </h3>
                <div className="space-y-2">
                  {info.details.map((detail, idx) => (
                    <p key={idx} className="text-gray-600">
                      {detail}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
                <div className="flex items-center gap-3 mb-8">
                  <div className="p-3 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-xl">
                    <MessageSquare className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold text-gray-900">
                      Send Us a Message
                    </h2>
                    <p className="text-gray-600">
                      Fill out the form below and we'll get back to you ASAP
                    </p>
                  </div>
                </div>

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
                  
                  <div className="grid md:grid-cols-2 gap-6">
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
                        Service Interested In
                      </label>
                      <select 
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      >
                        <option value="">Select a service</option>
                        <option value="aquarium">Custom Aquarium</option>
                        <option value="pool">Swimming Pool</option>
                        <option value="lake">Lake/Pond Design</option>
                        <option value="maintenance">Maintenance</option>
                        <option value="consultation">Consultation</option>
                      </select>
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-gray-700 mb-2 font-medium">
                      Subject
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      placeholder="Project inquiry or question"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-gray-700 mb-2 font-medium">
                      Your Message *
                    </label>
                    <textarea
                      name="message"
                      rows="5"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      placeholder="Tell us about your project, location, budget, and any specific requirements..."
                    />
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <input 
                      type="checkbox" 
                      id="newsletter" 
                      className="w-5 h-5 text-blue-600 rounded focus:ring-blue-500"
                    />
                    <label htmlFor="newsletter" className="text-gray-600">
                      Subscribe to our newsletter for tips and updates
                    </label>
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white py-4 rounded-xl font-semibold hover:opacity-90 transition-all duration-300 flex items-center justify-center gap-3 text-lg"
                  >
                    Send Message
                    <Send className="w-5 h-5" />
                  </button>
                  
                  <p className="text-gray-500 text-sm text-center">
                    We typically respond within 2-4 hours during business hours
                  </p>
                </form>
              </div>
            </div>

            {/* Map & FAQ */}
            <div className="space-y-8">
              {/* Map Placeholder */}
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 border border-gray-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Our Location
                </h3>
                <div className="aspect-[4/3] bg-gradient-to-br from-blue-100 to-cyan-100 rounded-xl mb-6 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                    <p className="text-gray-700 font-medium">Tbilisi, Georgia</p>
                    <p className="text-gray-600 text-sm">Serving all regions</p>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-gray-600">
                    <MapPin className="w-5 h-5 text-blue-600" />
                    <span>123 Waterfront Street, Tbilisi</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-600">
                    <Clock className="w-5 h-5 text-blue-600" />
                    <span>Mon-Sat: 9:00 - 20:00</span>
                  </div>
                </div>
              </div>

              {/* FAQ */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Quick Answers
                </h3>
                <div className="space-y-6">
                  {[
                    {
                      q: 'How long does a typical project take?',
                      a: 'Aquariums: 2-4 weeks, Pools: 8-12 weeks, Lakes: 12-16 weeks'
                    },
                    {
                      q: 'Do you provide maintenance services?',
                      a: 'Yes, we offer comprehensive maintenance packages for all our installations.'
                    },
                    {
                      q: 'What regions do you serve?',
                      a: 'We serve all of Georgia including Tbilisi, Batumi, Kutaisi, and rural areas.'
                    },
                    {
                      q: 'Can I see previous projects?',
                      a: 'Yes! Visit our Projects page or schedule a visit to our showroom.'
                    }
                  ].map((faq, index) => (
                    <div key={index} className="pb-4 border-b border-gray-100 last:border-0">
                      <h4 className="font-semibold text-gray-900 mb-2">{faq.q}</h4>
                      <p className="text-gray-600 text-sm">{faq.a}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-cyan-500">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-4xl font-bold mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl mb-10 opacity-90">
              Schedule a free consultation with our design experts today
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:+995599123456" 
                className="bg-white text-blue-600 px-8 py-4 rounded-xl hover:bg-gray-100 transition-all font-semibold text-lg flex items-center justify-center gap-3"
              >
                <Phone className="w-5 h-5" />
                Call Now: +995 599 12 34 56
              </a>
              <a 
                href="mailto:info@aquadesign.ge" 
                className="border-2 border-white text-white px-8 py-4 rounded-xl hover:bg-white/10 transition-all font-semibold text-lg flex items-center justify-center gap-3"
              >
                <Mail className="w-5 h-5" />
                Email Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}