import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaFacebookF, FaInstagram, FaPinterest, FaTwitter, FaMapMarkerAlt, FaPhone, FaEnvelope, FaPlane } from 'react-icons/fa';

const productLinks = [
  { name: 'Kitchens', href: '/products/kitchens' },
  { name: 'Commercial Interiors', href: '/products/commercial' },
  { name: 'Architectural Doors', href: '/products/doors' },
  { name: 'Mouldings & Trim', href: '/products/mouldings' },
  { name: 'Vanities & Bath', href: '/products/vanities' },
  { name: 'Home Office', href: '/products/office' },
];

const companyLinks = [
  { name: 'About Us', href: '/about' },
  { name: 'Our Team', href: '/team' },
  { name: 'Manufacturing', href: '/manufacturing' },
  { name: 'Showroom', href: '/showroom' },
  { name: 'Testimonials', href: '/testimonials' },
  { name: 'Contact', href: '/contact' },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-alpine-brown text-alpine-cream pt-16 pb-8 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 rounded-full bg-alpine-accent opacity-20 -translate-x-1/3 -translate-y-1/3" />
      <div className="absolute bottom-0 right-0 w-64 h-64 rounded-full bg-alpine-accent opacity-10 translate-x-1/3 translate-y-1/3" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <img
              src="https://ext.same-assets.com/3804481554/3043717567.png"
              alt="Alpine Wood Products"
              className="h-16 mb-6"
            />
            <p className="text-alpine-taupe mb-6">
              Specializing in fine Cabinetry and Millwork for Commercial and Residential properties, designed & manufactured by Alpine in Marionville, Missouri.
            </p>
            <div className="flex space-x-3 mt-6">
              <a
                href="https://facebook.com"
                className="bg-alpine-accent hover:bg-alpine-taupe hover:text-alpine-brown text-alpine-cream p-2.5 rounded-full transition-colors duration-200 flex items-center justify-center"
                aria-label="Facebook"
              >
                <FaFacebookF size={18} />
              </a>
              <a
                href="https://twitter.com"
                className="bg-alpine-accent hover:bg-alpine-taupe hover:text-alpine-brown text-alpine-cream p-2.5 rounded-full transition-colors duration-200 flex items-center justify-center"
                aria-label="Twitter"
              >
                <FaTwitter size={18} />
              </a>
              <a
                href="https://instagram.com"
                className="bg-alpine-accent hover:bg-alpine-taupe hover:text-alpine-brown text-alpine-cream p-2.5 rounded-full transition-colors duration-200 flex items-center justify-center"
                aria-label="Instagram"
              >
                <FaInstagram size={18} />
              </a>
              <a
                href="https://pinterest.com"
                className="bg-alpine-accent hover:bg-alpine-taupe hover:text-alpine-brown text-alpine-cream p-2.5 rounded-full transition-colors duration-200 flex items-center justify-center"
                aria-label="Pinterest"
              >
                <FaPinterest size={18} />
              </a>
            </div>
          </motion.div>

          {/* Products */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold mb-6 text-alpine-cream border-b border-alpine-accent/30 pb-2">Products</h3>
            <ul className="space-y-3">
              {productLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-alpine-taupe hover:text-alpine-cream transition-colors duration-200 flex items-center"
                  >
                    <span className="mr-2 text-alpine-cream opacity-50">›</span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Company */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold mb-6 text-alpine-cream border-b border-alpine-accent/30 pb-2">Company</h3>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-alpine-taupe hover:text-alpine-cream transition-colors duration-200 flex items-center"
                  >
                    <span className="mr-2 text-alpine-cream opacity-50">›</span>
                    {link.name}
                  </Link>
                </li>
              ))}
              <li>
                <button
                  className="text-alpine-taupe hover:text-alpine-cream transition-colors duration-200 flex items-center"
                  onClick={() => {
                    // Find and trigger the airport info button in the header
                    const airportInfoButton = document.querySelector('[data-airport-info-button]') as HTMLButtonElement;
                    if (airportInfoButton) {
                      airportInfoButton.click();
                    }
                  }}
                >
                  <span className="mr-2 text-alpine-cream opacity-50">›</span>
                  <span className="flex items-center">
                    <FaPlane className="mr-1.5 animate-float" /> Airport Information
                  </span>
                </button>
              </li>
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold mb-6 text-alpine-cream border-b border-alpine-accent/30 pb-2">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <FaMapMarkerAlt className="text-alpine-taupe mt-1 mr-3" size={18} />
                <span className="text-alpine-taupe">123 Woodworking Lane<br />Marionville, MO 65705</span>
              </li>
              <li className="flex items-center">
                <FaPhone className="text-alpine-taupe mr-3" size={18} />
                <a
                  href="tel:+15551234567"
                  className="text-alpine-taupe hover:text-alpine-cream transition-colors"
                >
                  (555) 123-4567
                </a>
              </li>
              <li className="flex items-center">
                <FaEnvelope className="text-alpine-taupe mr-3" size={18} />
                <a
                  href="mailto:info@alpinewoodproducts.com"
                  className="text-alpine-taupe hover:text-alpine-cream transition-colors"
                >
                  info@alpinewoodproducts.com
                </a>
              </li>
            </ul>

            <div className="mt-6 border border-alpine-accent/50 rounded-lg p-4 bg-alpine-accent/20">
              <h4 className="font-bold text-alpine-cream mb-2">Business Hours</h4>
              <p className="text-alpine-taupe text-sm">Monday - Friday: 8:00 AM - 5:00 PM</p>
              <p className="text-alpine-taupe text-sm">Saturday - Sunday: Closed</p>
            </div>
          </motion.div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-alpine-accent/30 pt-8 mt-8 text-alpine-taupe text-sm">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p>© {currentYear} Alpine Wood Products. All rights reserved.</p>
            <div className="mt-4 md:mt-0 flex space-x-6">
              <Link to="/privacy" className="hover:text-alpine-cream transition-colors">Privacy Policy</Link>
              <Link to="/terms" className="hover:text-alpine-cream transition-colors">Terms of Service</Link>
              <Link to="/sitemap" className="hover:text-alpine-cream transition-colors">Sitemap</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
