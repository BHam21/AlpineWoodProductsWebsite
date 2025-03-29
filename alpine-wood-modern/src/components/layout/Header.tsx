import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaPhone, FaMapMarkerAlt, FaPlane, FaChevronDown } from 'react-icons/fa';
import { Button } from '@/components/ui/button';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'Products', href: '/products',
    subItems: [
      { name: 'Kitchens', href: '/products/kitchens' },
      { name: 'Commercial', href: '/products/commercial' },
      { name: 'Doors', href: '/products/doors' },
      { name: 'Mouldings', href: '/products/mouldings' },
      { name: 'Vanities', href: '/products/vanities' },
      { name: 'Home Office', href: '/products/office' },
    ]
  },
  { name: 'Showroom', href: '/showroom' },
  { name: 'Gallery', href: '/gallery' },
  { name: 'Manufacturing', href: '/manufacturing' },
  { name: 'Our Team', href: '/team' },
  { name: 'Testimonials', href: '/testimonials' },
];

// Airport information data
const airportInfo = [
  {
    name: 'Springfield-Branson National Airport (SGF)',
    distance: 'Approximately 35 miles from Marionville',
    description: 'Offering flights to major hubs including Chicago, Dallas, Atlanta, and Charlotte',
    website: 'https://www.flyspringfield.com/'
  },
  {
    name: 'Northwest Arkansas National Airport (XNA)',
    distance: 'Approximately 70 miles from Marionville',
    description: 'Offering flights to many major cities including Los Angeles, New York, Chicago, and Dallas',
    website: 'https://www.flyxna.com/'
  },
  {
    name: 'Joplin Regional Airport (JLN)',
    distance: 'Approximately 58 miles from Marionville',
    description: 'Providing commercial service to Chicago O\'Hare',
    website: 'https://www.joplinmo.org/889/Joplin-Regional-Airport'
  },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isAirportModalOpen, setIsAirportModalOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const location = useLocation();

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
    setActiveDropdown(null);
    setIsAirportModalOpen(false);
  }, [location]);

  // Add scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleDropdown = (name: string) => {
    if (activeDropdown === name) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(name);
    }
  };

  return (
    <header
      className={`w-full sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-alpine-cream/95 backdrop-blur-sm shadow-md py-2'
          : 'bg-alpine-cream shadow-sm py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo with enhanced animation */}
        <Link to="/" className="flex items-center relative">
          <motion.img
            src="https://ext.same-assets.com/3804481554/13654787.png"
            alt="Alpine Wood Products"
            className="h-14 md:h-16"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            whileHover={{
              scale: 1.05,
              transition: { duration: 0.2, type: "spring", stiffness: 400 }
            }}
          />
          <motion.div
            className="absolute -bottom-1 left-1/2 -translate-x-1/2 h-0.5 w-0 bg-alpine-accent"
            whileHover={{ width: '80%' }}
            transition={{ duration: 0.3 }}
          />
        </Link>

        {/* Desktop Navigation with enhanced hover effects */}
        <nav className="hidden lg:flex items-center">
          <ul className="flex space-x-1">
            {navLinks.map((link) => (
              <li
                key={link.name}
                className="relative group"
                onMouseEnter={() => setHoveredItem(link.name)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                <div className="relative px-1">
                  <Link
                    to={link.href}
                    onClick={() => link.subItems && toggleDropdown(link.name)}
                    className={`text-alpine-brown py-2 px-3 rounded-md font-medium text-sm inline-flex items-center transition-colors duration-200
                      hover:bg-alpine-cream-dark/50 ${location.pathname === link.href ? 'text-alpine-accent font-semibold' : ''}`}
                  >
                    {link.name}
                    {link.subItems && (
                      <motion.span
                        animate={{
                          rotate: activeDropdown === link.name ? 180 : 0,
                          scale: hoveredItem === link.name ? 1.2 : 1
                        }}
                        transition={{ duration: 0.3 }}
                        className="ml-1 inline-flex items-center"
                      >
                        <FaChevronDown className="text-xs" />
                      </motion.span>
                    )}
                  </Link>

                  {/* Animated underline indicator with enhanced effect */}
                  <motion.div
                    className={`absolute bottom-0 left-0 h-0.5 bg-alpine-accent rounded-full`}
                    initial={false}
                    animate={{
                      width: location.pathname === link.href
                        ? '100%'
                        : hoveredItem === link.name
                          ? '80%'
                          : '0%',
                      opacity: location.pathname === link.href
                        ? 1
                        : hoveredItem === link.name
                          ? 0.7
                          : 0
                    }}
                    transition={{
                      duration: 0.3,
                      type: "spring",
                      stiffness: 200
                    }}
                  />

                  {/* Hover background effect */}
                  <motion.div
                    className="absolute inset-0 rounded-md bg-alpine-cream-dark/0 -z-10"
                    animate={{
                      backgroundColor: hoveredItem === link.name
                        ? 'rgba(217, 213, 194, 0.5)'
                        : 'rgba(217, 213, 194, 0)'
                    }}
                    transition={{ duration: 0.3 }}
                  />
                </div>

                {/* Dropdown menu with enhanced animations */}
                {link.subItems && (
                  <AnimatePresence>
                    {activeDropdown === link.name && (
                      <motion.ul
                        initial={{ opacity: 0, y: -5, scale: 0.95 }}
                        animate={{
                          opacity: 1,
                          y: 0,
                          scale: 1,
                          transition: {
                            duration: 0.3,
                            type: "spring",
                            stiffness: 500,
                            damping: 30
                          }
                        }}
                        exit={{
                          opacity: 0,
                          y: -5,
                          scale: 0.95,
                          transition: { duration: 0.2 }
                        }}
                        className="absolute left-0 mt-1 w-48 py-2 bg-white rounded-md shadow-lg border border-alpine-taupe/20"
                        style={{
                          boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)"
                        }}
                      >
                        {link.subItems.map((subItem, idx) => (
                          <motion.li
                            key={subItem.name}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{
                              opacity: 1,
                              x: 0,
                              transition: { delay: idx * 0.05, duration: 0.2 }
                            }}
                          >
                            <Link
                              to={subItem.href}
                              className="group block px-4 py-2 text-sm text-alpine-brown hover:bg-alpine-cream/30 hover:text-alpine-accent transition-colors relative overflow-hidden"
                            >
                              <span className="relative z-10">{subItem.name}</span>
                              <motion.div
                                className="absolute inset-0 bg-alpine-cream/0"
                                initial={false}
                                whileHover={{
                                  backgroundColor: "rgba(232, 228, 209, 0.3)"
                                }}
                                transition={{ duration: 0.2 }}
                              />
                            </Link>
                          </motion.li>
                        ))}
                      </motion.ul>
                    )}
                  </AnimatePresence>
                )}
              </li>
            ))}
          </ul>

          {/* Airport Information Button with hover effects */}
          <motion.button
            onClick={() => setIsAirportModalOpen(true)}
            className="ml-3 flex items-center text-alpine-brown py-2 px-3 rounded-md font-medium text-sm
              hover:bg-alpine-cream-dark/30 transition-colors duration-200 relative overflow-hidden"
            whileHover={{
              scale: 1.05,
              backgroundColor: "rgba(217, 213, 194, 0.3)"
            }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
            data-airport-info-button
          >
            <motion.span
              animate={{ y: [0, -3, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="inline-block mr-1.5"
            >
              <FaPlane />
            </motion.span>
            <span>Airport Info</span>
            <motion.div
              className="absolute bottom-0 left-0 h-0.5 w-0 bg-alpine-cream-dark"
              whileHover={{ width: "100%" }}
              transition={{ duration: 0.3 }}
            />
          </motion.button>

          {/* Contact Button with enhanced hover effect */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
            className="ml-4"
          >
            <Link to="/contact">
              <Button
                variant="accent"
                size="sm"
                className="flex items-center relative overflow-hidden group text-alpine-cream"
              >
                <FaPhone className="mr-2" />
                <span>Contact Us</span>
              </Button>
            </Link>
          </motion.div>
        </nav>

        {/* Mobile menu button with enhanced animations */}
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-alpine-brown p-2 rounded-md hover:bg-alpine-cream-dark/30"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          <div className="w-6 flex flex-col items-end">
            <motion.span
              animate={{
                width: isOpen ? "24px" : "24px",
                rotate: isOpen ? 45 : 0,
                translateY: isOpen ? 6 : 0
              }}
              className={`block h-0.5 bg-alpine-brown rounded-full transition-all duration-300`}
            ></motion.span>
            <motion.span
              animate={{
                width: isOpen ? "0" : "16px",
                opacity: isOpen ? 0 : 1
              }}
              className={`block h-0.5 bg-alpine-brown rounded-full transition-all duration-300 my-1`}
            ></motion.span>
            <motion.span
              animate={{
                width: isOpen ? "24px" : "20px",
                rotate: isOpen ? -45 : 0,
                translateY: isOpen ? -6 : 0
              }}
              className={`block h-0.5 bg-alpine-brown rounded-full transition-all duration-300`}
            ></motion.span>
          </div>
        </motion.button>
      </div>

      {/* Mobile Navigation with enhanced animations */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{
              duration: 0.4,
              ease: [0.04, 0.62, 0.23, 0.98]
            }}
            className="lg:hidden bg-white border-t border-alpine-taupe/20 overflow-hidden"
          >
            <div className="container mx-auto px-4 py-4 flex flex-col">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.name}
                  className="border-b border-alpine-taupe/20"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05, duration: 0.3 }}
                >
                  <div className="flex justify-between items-center">
                    <Link
                      to={link.href}
                      onClick={() => !link.subItems && setIsOpen(false)}
                      className="py-3 font-medium text-alpine-brown hover:text-alpine-accent"
                    >
                      {link.name}
                    </Link>
                    {link.subItems && (
                      <motion.button
                        onClick={() => toggleDropdown(link.name)}
                        className="p-2 text-alpine-brown"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <motion.div
                          animate={{ rotate: activeDropdown === link.name ? 180 : 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <FaChevronDown />
                        </motion.div>
                      </motion.button>
                    )}
                  </div>

                  {/* Mobile submenu with enhanced animations */}
                  {link.subItems && (
                    <AnimatePresence>
                      {activeDropdown === link.name && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{
                            opacity: 1,
                            height: 'auto',
                            transition: {
                              height: { duration: 0.3 },
                              opacity: { duration: 0.3, delay: 0.1 }
                            }
                          }}
                          exit={{
                            opacity: 0,
                            height: 0,
                            transition: {
                              height: { duration: 0.3 },
                              opacity: { duration: 0.2 }
                            }
                          }}
                          className="pl-4 pb-2"
                        >
                          {link.subItems.map((subItem, idx) => (
                            <motion.div
                              key={subItem.name}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: idx * 0.05, duration: 0.2 }}
                            >
                              <Link
                                to={subItem.href}
                                onClick={() => setIsOpen(false)}
                                className="block py-2 text-sm text-alpine-brown hover:text-alpine-cream-dark transition-colors"
                              >
                                {subItem.name}
                              </Link>
                            </motion.div>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  )}
                </motion.div>
              ))}

              {/* Mobile Airport Info Button */}
              <motion.button
                onClick={() => {
                  setIsAirportModalOpen(true);
                  setIsOpen(false);
                }}
                className="py-3 flex items-center text-alpine-brown font-medium border-b border-alpine-taupe/20"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navLinks.length * 0.05, duration: 0.3 }}
                whileTap={{ scale: 0.95 }}
                data-airport-info-button
              >
                <motion.span
                  animate={{ y: [0, -3, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="mr-2"
                >
                  <FaPlane />
                </motion.span>
                Airport Information
              </motion.button>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: (navLinks.length + 1) * 0.05, duration: 0.3 }}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="mt-4"
              >
                <Link to="/contact">
                  <Button
                    variant="accent"
                    className="w-full text-alpine-cream"
                    onClick={() => setIsOpen(false)}
                  >
                    <FaPhone className="mr-2" /> Contact Us
                  </Button>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Airport Information Modal with enhanced animations */}
      <AnimatePresence>
        {isAirportModalOpen && (
          <motion.div
            className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsAirportModalOpen(false)}
          >
            <motion.div
              className="bg-white rounded-lg shadow-xl w-full max-w-2xl overflow-hidden"
              initial={{ scale: 0.9, y: 20, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.9, y: 20, opacity: 0 }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 30
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-6 bg-alpine-accent text-white">
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <motion.div
                      animate={{
                        y: [0, -5, 0],
                        rotate: [0, 15, 0]
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        repeatType: "reverse"
                      }}
                      className="mr-3"
                    >
                      <FaPlane className="text-xl" />
                    </motion.div>
                    <h2 className="text-xl font-semibold">Airport Information</h2>
                  </div>
                  <motion.button
                    onClick={() => setIsAirportModalOpen(false)}
                    className="text-white hover:text-alpine-cream transition-colors p-1"
                    whileHover={{ scale: 1.1, rotate: 90 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </motion.button>
                </div>
                <p className="mt-2 text-alpine-cream">
                  Planning a visit to Alpine Wood Products in Marionville, Missouri? Here are the nearest airports:
                </p>
              </div>
              <div className="p-6 max-h-[70vh] overflow-y-auto">
                {airportInfo.map((airport, index) => (
                  <motion.div
                    key={index}
                    className="mb-6 border-b border-alpine-taupe/20 pb-6 last:border-b-0 last:pb-0"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.4 }}
                  >
                    <div className="flex items-start">
                      <motion.div
                        className="bg-alpine-accent rounded-full p-2 text-white mr-4 mt-1"
                        whileHover={{
                          scale: 1.1,
                          boxShadow: "0 0 10px rgba(87, 66, 44, 0.5)"
                        }}
                      >
                        <FaMapMarkerAlt />
                      </motion.div>
                      <div>
                        <h3 className="font-bold text-alpine-brown">{airport.name}</h3>
                        <p className="text-alpine-taupe-dark text-sm mb-1">{airport.distance}</p>
                        <p className="text-alpine-taupe mb-3">{airport.description}</p>
                        <motion.a
                          href={airport.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-alpine-accent hover:text-alpine-cream-dark inline-flex items-center text-sm font-medium relative"
                          whileHover={{ x: 3 }}
                        >
                          Visit Website
                          <svg className="ml-1.5 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                          <motion.div
                            className="absolute -bottom-1 left-0 h-0.5 w-0 bg-alpine-cream-dark"
                            whileHover={{ width: "100%" }}
                            transition={{ duration: 0.3 }}
                          />
                        </motion.a>
                      </div>
                    </div>
                  </motion.div>
                ))}
                <motion.div
                  className="mt-4 bg-alpine-cream/30 p-4 rounded-md"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.4 }}
                >
                  <p className="text-alpine-taupe-dark text-sm">
                    <strong>Note:</strong> For specific directions or transportation arrangements from these airports to our Marionville facility,
                    please <Link to="/contact" className="text-alpine-accent font-medium relative inline-block">
                      contact us
                      <motion.div
                        className="absolute -bottom-0.5 left-0 h-0.5 w-0 bg-alpine-accent"
                        whileHover={{ width: "100%" }}
                        transition={{ duration: 0.3 }}
                      />
                    </Link> and our team will be happy to assist you.
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
