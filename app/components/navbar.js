'use client';

import { useState } from 'react';
import { Menu, X, Phone, Droplets } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'Projects', href: '/projects' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  const serviceLinks = [
    { name: 'Aquariums', href: '/services#aquariums' },
    { name: 'Swimming Pools', href: '/services#pools' },
    { name: 'Lakes & Ponds', href: '/services#lakes' },
  ];

  return (
    <nav className="fixed w-full bg-white/90 backdrop-blur-sm z-50 shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo with larger image and text */}
          <Link href="/" className="flex items-center gap-4">
            {/* Logo Image - Larger size */}
            <div className="relative w-40 h-40">
              <Image
                src="/logo.png"  // Your logo file
                alt="AquaDesign Georgia Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
            
            {/* Text Logo */}
            <div className="hidden sm:block">
              <div className="flex flex-col">
                <div className="text-2xl font-bold text-gray-900 tracking-tight">
                  AquaDesign
                </div>
                <div className="text-xs text-blue-600 font-semibold tracking-wider uppercase mt-1">
                  Exotic Life
                </div>
              </div>
            </div>
            
            {/* Mobile text logo */}
            <div className="sm:hidden flex flex-col">
              <div className="text-xl font-bold text-gray-900">AquaDesign</div>
              <div className="text-xs text-blue-600 font-semibold">Exotic Life</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
              >
                {link.name}
              </Link>
            ))}
            
            {/* Services Dropdown */}
            <div className="relative group">
              <button className="text-gray-700 hover:text-blue-600 font-medium flex items-center gap-1">
                Services
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute left-0 mt-2 w-56 bg-white rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                {serviceLinks.map((service) => (
                  <Link
                    key={service.name}
                    href={service.href}
                    className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                  >
                    {service.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* Contact Button */}
            <Link
              href="/contact"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-all font-semibold flex items-center gap-2"
            >
              <Phone className="w-4 h-4" />
              Contact Us
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-4 py-3 space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="block py-2 text-gray-700 hover:text-blue-600"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-2 border-t">
                <div className="font-semibold text-gray-900 mb-2">Services</div>
                {serviceLinks.map((service) => (
                  <Link
                    key={service.name}
                    href={service.href}
                    className="block py-2 text-gray-600 hover:text-blue-600 pl-4"
                    onClick={() => setIsOpen(false)}
                  >
                    {service.name}
                  </Link>
                ))}
              </div>
              <Link
                href="/contact"
                className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-all font-semibold inline-flex items-center gap-2 mt-4"
                onClick={() => setIsOpen(false)}
              >
                <Phone className="w-4 h-4" />
                Contact Us
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;