import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaEnvelope, FaPhone } from 'react-icons/fa';
import { PageHeader } from '@/components/sections/PageHeader';

interface TeamMember {
  id: string;
  name: string;
  title: string;
  image: string;
  bio: string;
  email?: string;
  phone?: string;
}

const teamMembers: TeamMember[] = [
  {
    id: 'john-boyd',
    name: 'John Boyd',
    title: 'Owner, Residential Project Manager, Designer',
    image: 'https://ext.same-assets.com/3804481554/2259519089.jpeg',
    bio: 'John Boyd has been with Alpine Wood Products for over 25 years, starting as a designer and working his way up to ownership. His eye for detail and commitment to quality has helped establish Alpine as a leader in custom woodworking.',
    email: 'john@alpinewoodproducts.com',
    phone: '555-123-4567'
  },
  {
    id: 'dan-boyd',
    name: 'Dan Boyd',
    title: 'Assistant General Manager, Commercial Project Manager',
    image: 'https://ext.same-assets.com/3804481554/1519673550.jpeg',
    bio: 'Dan Boyd oversees all commercial projects at Alpine, managing client relationships and ensuring that each commercial installation meets the highest standards of craftsmanship and functionality.',
    email: 'dan@alpinewoodproducts.com',
    phone: '555-123-4568'
  },
  {
    id: 'regina-payne',
    name: 'Regina Payne',
    title: 'Showroom Coordinator',
    image: 'https://ext.same-assets.com/3804481554/2259519089.jpeg',
    bio: 'Regina manages our showroom and is often the first point of contact for new customers. She schedules all showroom visits and factory tours, helping clients explore our capabilities firsthand.',
    email: 'regina@alpinewoodproducts.com',
    phone: '555-123-4569'
  },
  {
    id: 'steve-ruble',
    name: 'Steve Ruble',
    title: 'Commercial Project Estimator',
    image: 'https://ext.same-assets.com/3804481554/313319228.jpeg',
    bio: 'Steve works closely with commercial clients to develop accurate project estimates. His detailed approach ensures that each project stays within budget while meeting all specifications.',
    email: 'steve@alpinewoodproducts.com',
    phone: '555-123-4570'
  },
  {
    id: 'carl-flygare',
    name: 'Carl Flygare',
    title: 'Mouldings & Trim Supervisor, Sales',
    image: 'https://ext.same-assets.com/3804481554/2350816219.jpeg',
    bio: 'Carl is our resident expert on mouldings and trim, with decades of experience in crafting custom profiles and finishes. His knowledge of historic and contemporary designs is unmatched.',
    email: 'carl@alpinewoodproducts.com',
    phone: '555-123-4571'
  }
];

export function TeamPage() {
  return (
    <div className="bg-white">
      {/* Page Header */}
      <PageHeader
        title="Meet Our Team"
        subtitle="Our team of dedicated professionals brings decades of experience and passion to every custom woodworking project. Get to know the people who will bring your vision to life."
      />

      {/* Team Members Section */}
      <section className="py-20 bg-alpine-cream-light/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 % 0.5 }}
                className="flex flex-col items-center text-center"
              >
                {/* Circular image with border and shadow */}
                <div className="relative mb-6 group">
                  <div className="absolute inset-0 rounded-full bg-alpine-accent/20 blur-md transform group-hover:scale-110 transition-transform duration-300"></div>
                  <div className="relative w-40 h-40 mx-auto mb-4 overflow-hidden rounded-full border-4 border-white shadow-lg transform group-hover:scale-105 transition-transform duration-300">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover object-center"
                    />
                  </div>
                </div>

                <div className="p-6 bg-white rounded-lg shadow-md w-full">
                  <h3 className="text-xl font-bold text-alpine-accent mb-1">{member.name}</h3>
                  <p className="text-alpine-brown text-sm font-medium mb-4">{member.title}</p>
                  <p className="text-alpine-brown/80 mb-5">{member.bio}</p>

                  <div className="space-y-2 mt-4">
                    {member.email && (
                      <div className="flex items-center justify-center text-alpine-brown/60">
                        <FaEnvelope className="mr-2 text-alpine-accent" />
                        <a
                          href={`mailto:${member.email}`}
                          className="hover:text-alpine-accent transition-colors"
                        >
                          {member.email}
                        </a>
                      </div>
                    )}

                    {member.phone && (
                      <div className="flex items-center justify-center text-alpine-brown/60">
                        <FaPhone className="mr-2 text-alpine-accent" />
                        <a
                          href={`tel:${member.phone}`}
                          className="hover:text-alpine-accent transition-colors"
                        >
                          {member.phone}
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white border-t border-alpine-taupe/20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-alpine-brown mb-6">Ready to Discuss Your Project?</h2>
            <p className="text-lg text-alpine-brown/70 mb-8">
              Our team of experts is ready to help bring your vision to life. Contact us today
              to schedule a consultation or visit our showroom to see our craftsmanship firsthand.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-gradient-to-b from-alpine-accent to-alpine-accent-dark text-alpine-cream py-3 px-8 rounded-md font-medium shadow-[0_4px_0_0_rgba(67,49,33,0.6),0_0_10px_rgba(0,0,0,0.1)] hover:shadow-[0_6px_0_0_rgba(67,49,33,0.6),0_0_15px_rgba(0,0,0,0.15)] active:shadow-[0_2px_0_0_rgba(67,49,33,0.6),0_0_5px_rgba(0,0,0,0.1)] transition-all duration-200 transform hover:-translate-y-1 active:translate-y-1 border border-alpine-taupe/20"
            >
              Contact Us Today
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
