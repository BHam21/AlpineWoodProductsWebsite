import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaMapMarkerAlt, FaEnvelope, FaArrowRight, FaCalendarAlt } from 'react-icons/fa';
import { Button } from '@/components/ui/button';
import { PageHeader } from '@/components/sections/PageHeader';

const showroomImages = [
  {
    src: 'https://ext.same-assets.com/3804481554/1864951841.jpeg',
    alt: 'Showroom main view'
  },
  {
    src: 'https://ext.same-assets.com/3804481554/541040550.jpeg',
    alt: 'Showroom display'
  },
  {
    src: 'https://ext.same-assets.com/3804481554/1788972551.jpeg',
    alt: 'Showroom interior'
  },
  {
    src: 'https://ext.same-assets.com/3804481554/3692985823.jpeg',
    alt: 'Showroom woodwork'
  },
  {
    src: 'https://ext.same-assets.com/3804481554/1533474908.jpeg',
    alt: 'Showroom cabinetry'
  },
  {
    src: 'https://ext.same-assets.com/3804481554/3802162610.jpeg',
    alt: 'Showroom detail'
  },
  {
    src: 'https://ext.same-assets.com/3804481554/765420838.jpeg',
    alt: 'Showroom craftsmanship'
  },
  {
    src: 'https://ext.same-assets.com/3804481554/318623005.jpeg',
    alt: 'Showroom entrance'
  },
  {
    src: 'https://ext.same-assets.com/3804481554/2730697007.jpeg',
    alt: 'Showroom display detail'
  },
  {
    src: 'https://ext.same-assets.com/3804481554/1152791144.jpeg',
    alt: 'Custom cabinetry'
  },
  {
    src: 'https://ext.same-assets.com/3804481554/3238241075.jpeg',
    alt: 'Showroom furniture'
  },
  {
    src: 'https://ext.same-assets.com/3804481554/3760528760.jpeg',
    alt: 'Showroom detail work'
  },
];

export function ShowroomPage() {
  return (
    <div className="bg-white">
      {/* Page Header */}
      <PageHeader
        title="Stir your imagination in Grand style."
        subtitle="Take a photo tour of the Alpine Wood Products company headquarters Grand Showroom. For over 35 years, Alpine's design and detailed manufacturing of high-end custom cabinetry, doors, mouldings and more is unparalleled in the USA and Canada."
      />

      {/* Photo Gallery Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {showroomImages.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 % 0.5 }}
                className="group overflow-hidden rounded-lg shadow-md"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-alpine-brown-dark/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-4">
                      <h3 className="text-white text-lg font-medium">{image.alt}</h3>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="primary" className="mx-auto">
              Schedule a Visit <FaCalendarAlt className="ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-alpine-tan-light relative">
        <div className="absolute inset-0 opacity-30 bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%2220%22 height=%2220%22 viewBox=%220 0 20 20%22%3E%3Cpath d=%22M0 0h10v10H0zm10 10h10v10H10z%22 fill=%22%23fff%22 fill-opacity=%22.1%22/%3E%3C/svg%3E')]"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-alpine-brown-dark mb-4">The sky is the limit.</h2>
              <p className="text-lg text-alpine-gray-dark mb-8">
                Have a custom project idea in mind for your dream home or commercial project?
                Alpine is capable of producing a wide variety of selections from a design sketch through to our
                on-premises complete manufacturing facility. For anything related to home interior appointments,
                there is virtually nothing we can't produce for you.
              </p>

              <Link
                to="/team"
                className="inline-flex items-center bg-alpine-brown text-white py-3 px-6 rounded-md hover:bg-alpine-brown-dark transition-colors"
              >
                Talk to an Alpine Team Project Manager
                <FaArrowRight className="ml-2" size={14} />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Schedule Visit Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto bg-alpine-brown-dark rounded-lg overflow-hidden shadow-xl">
            <div className="p-8 md:p-12 text-white text-center">
              <h3 className="text-2xl font-bold mb-4">Schedule Your Showroom Visit</h3>
              <p className="text-alpine-tan-light mb-6">
                Experience the quality and craftsmanship of Alpine Wood Products in person.
                Contact us today to schedule a visit to our showroom in Marionville, Missouri.
              </p>

              <div className="flex flex-col md:flex-row justify-center gap-6 mt-8">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center bg-white text-alpine-brown py-3 px-6 rounded-md hover:bg-alpine-tan transition-colors"
                >
                  Contact Us
                  <FaArrowRight className="ml-2" size={14} />
                </Link>

                <Link
                  to="/contact#airport"
                  className="inline-flex items-center justify-center border border-white text-white py-3 px-6 rounded-md hover:bg-white/10 transition-colors"
                >
                  <FaMapMarkerAlt className="mr-2" />
                  Airport Information
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
