import { Facebook, Instagram, Mail, MapPin, Phone } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info with Larger Logo and Text */}
          <div>
            <div className="flex items-center gap-4 mb-6">
              {/* Larger Logo */}
              <div className="relative w-40 h-40">
                <Image
                  src="/logo.png"
                  alt="AquaDesign Georgia Logo"
                  fill
                  className="object-contain"
                />
              </div>
              {/* Footer Text Logo */}
              <div className="flex flex-col">
                <div className="text-2xl font-bold text-white">
                  AquaDesign
                </div>
                <div className="text-xs text-cyan-400 font-semibold tracking-wider uppercase mt-1">
                  Exotic Life
                </div>
              </div>
            </div>
            <p className="text-gray-400 mb-6">
              Creating breathtaking water features across Georgia since 2010.
              Excellence in aquarium, pool, and landscape design.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="mailto:info@aquadesign.ge" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Rest of footer remains the same */}
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3 text-gray-400">
              <li><Link href="/services" className="hover:text-cyan-400 transition-colors">Our Services</Link></li>
              <li><Link href="/projects" className="hover:text-cyan-400 transition-colors">Portfolio</Link></li>
              <li><Link href="/about" className="hover:text-cyan-400 transition-colors">About Us</Link></li>
              <li><Link href="/contact" className="hover:text-cyan-400 transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Services</h4>
            <ul className="space-y-3 text-gray-400">
              <li><Link href="/services#aquariums" className="hover:text-cyan-400 transition-colors">Custom Aquariums</Link></li>
              <li><Link href="/services#pools" className="hover:text-cyan-400 transition-colors">Swimming Pools</Link></li>
              <li><Link href="/services#lakes" className="hover:text-cyan-400 transition-colors">Lakes & Ponds</Link></li>
              <li><Link href="/services#maintenance" className="hover:text-cyan-400 transition-colors">Maintenance</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Us</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-cyan-400 mt-1" />
                <div>
                  <p className="text-gray-400">Phone</p>
                  <p className="font-medium">+995 XXX XX XX XX</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-cyan-400 mt-1" />
                <div>
                  <p className="text-gray-400">Email</p>
                  <p className="font-medium">info@aquadesign.ge</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-cyan-400 mt-1" />
                <div>
                  <p className="text-gray-400">Location</p>
                  <p className="font-medium">Tbilisi, Georgia</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-500">
            © {currentYear} AquaDesign.ge. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;