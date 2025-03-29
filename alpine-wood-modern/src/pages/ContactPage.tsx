import React from 'react';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock, FaFacebookF, FaInstagram, FaPinterest } from 'react-icons/fa';
import { Button } from '@/components/ui/button';
import { PageHeader } from '@/components/sections/PageHeader';

export function ContactPage() {
  return (
    <div className="bg-white">
      {/* Page Header */}
      <PageHeader
        title="Contact Us"
        subtitle="We're here to answer any questions about your custom woodworking project"
      />

      {/* Contact section */}
      <div className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold text-alpine-brown-dark mb-6">Get in Touch</h2>
            <p className="text-alpine-gray-dark mb-8">
              Have a question or want to discuss your project? Fill out the form below, and one of our project managers will get back to you as soon as possible.
            </p>

            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-alpine-gray-dark mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 border border-alpine-tan rounded-md focus:outline-none focus:ring-2 focus:ring-alpine-brown"
                    placeholder="John Doe"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-alpine-gray-dark mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 border border-alpine-tan rounded-md focus:outline-none focus:ring-2 focus:ring-alpine-brown"
                    placeholder="john@example.com"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-alpine-gray-dark mb-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="w-full px-4 py-2 border border-alpine-tan rounded-md focus:outline-none focus:ring-2 focus:ring-alpine-brown"
                  placeholder="(555) 123-4567"
                />
              </div>

              <div>
                <label htmlFor="project" className="block text-sm font-medium text-alpine-gray-dark mb-1">
                  Project Type
                </label>
                <select
                  id="project"
                  className="w-full px-4 py-2 border border-alpine-tan rounded-md focus:outline-none focus:ring-2 focus:ring-alpine-brown bg-white"
                >
                  <option value="">Select a project type</option>
                  <option value="kitchen">Kitchen</option>
                  <option value="commercial">Commercial Interior</option>
                  <option value="doors">Architectural Doors</option>
                  <option value="mouldings">Mouldings & Trim</option>
                  <option value="vanities">Vanities & Bath</option>
                  <option value="office">Home Office & Libraries</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-alpine-gray-dark mb-1">
                  Your Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full px-4 py-2 border border-alpine-tan rounded-md focus:outline-none focus:ring-2 focus:ring-alpine-brown"
                  placeholder="Tell us about your project..."
                  required
                ></textarea>
              </div>

              <Button variant="primary" className="w-full py-6" type="submit">
                Submit Message
              </Button>
            </form>
          </motion.div>

          {/* Contact information */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-3xl font-bold text-alpine-brown-dark mb-6">Contact Information</h2>
            <p className="text-alpine-gray-dark mb-8">
              We invite you to visit our showroom in Marionville, Missouri to see our craftsmanship in person. You can also contact us directly using the information below.
            </p>

            <div className="bg-alpine-tan-light rounded-lg p-8 mb-8">
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-alpine-brown rounded-full p-3 text-white mr-4">
                    <FaMapMarkerAlt />
                  </div>
                  <div>
                    <h3 className="font-bold text-alpine-brown-dark">Our Location</h3>
                    <p className="text-alpine-gray-dark">123 Woodworking Lane, Marionville, MO 65705</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-alpine-brown rounded-full p-3 text-white mr-4">
                    <FaPhone />
                  </div>
                  <div>
                    <h3 className="font-bold text-alpine-brown-dark">Phone Number</h3>
                    <p className="text-alpine-gray-dark">(555) 123-4567</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-alpine-brown rounded-full p-3 text-white mr-4">
                    <FaEnvelope />
                  </div>
                  <div>
                    <h3 className="font-bold text-alpine-brown-dark">Email Address</h3>
                    <p className="text-alpine-gray-dark">info@alpinewoodproducts.com</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-alpine-brown rounded-full p-3 text-white mr-4">
                    <FaClock />
                  </div>
                  <div>
                    <h3 className="font-bold text-alpine-brown-dark">Business Hours</h3>
                    <p className="text-alpine-gray-dark">Monday - Friday: 8:00 AM - 5:00 PM</p>
                    <p className="text-alpine-gray-dark">Saturday - Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold text-alpine-brown-dark mb-4">Connect With Us</h3>
              <div className="flex space-x-4">
                <a
                  href="https://facebook.com"
                  className="bg-alpine-brown hover:bg-alpine-tan text-white p-3 rounded-full transition-colors duration-200"
                >
                  <FaFacebookF />
                </a>
                <a
                  href="https://instagram.com"
                  className="bg-alpine-brown hover:bg-alpine-tan text-white p-3 rounded-full transition-colors duration-200"
                >
                  <FaInstagram />
                </a>
                <a
                  href="https://pinterest.com"
                  className="bg-alpine-brown hover:bg-alpine-tan text-white p-3 rounded-full transition-colors duration-200"
                >
                  <FaPinterest />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Map */}
      <div className="h-96 bg-alpine-gray-light">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12765.161215772239!2d-93.65434359370235!3d36.80900787955402!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87cf85d8e14c3231%3A0x81c18d4f69fe84bb!2sMarionville%2C%20MO%2065705!5e0!3m2!1sen!2sus!4v1649887424015!5m2!1sen!2sus"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen={false}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Alpine Wood Products Location"
        ></iframe>
      </div>
    </div>
  );
}
