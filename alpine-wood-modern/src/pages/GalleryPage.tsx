import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaTools } from 'react-icons/fa';
import { PageHeader } from '@/components/sections/PageHeader';

type Category =
  | 'All'
  | 'Bathrooms'
  | 'Cabinetry'
  | 'Ceilings'
  | 'Closets'
  | 'Commercial'
  | 'Doors'
  | 'Fireplaces'
  | 'Home Bars'
  | 'Kitchens'
  | 'Libraries'
  | 'Mouldings'
  | 'Stairways'
  | 'Vanities';

interface Project {
  id: string;
  title: string;
  image: string;
  categories: Category[];
  url: string;
}

const projectData: Project[] = [
  {
    id: 'new-closet',
    title: 'New Closet',
    image: 'https://ext.same-assets.com/3804481554/2371924672.jpeg',
    categories: ['Closets'],
    url: '/gallery/new-closet',
  },
  {
    id: 'columbus-project',
    title: 'Columbus Project',
    image: 'https://ext.same-assets.com/3804481554/1827392156.jpeg',
    categories: ['Kitchens', 'Cabinetry'],
    url: '/gallery/columbus-project',
  },
  {
    id: 'hall-house',
    title: 'Hall House',
    image: 'https://ext.same-assets.com/3804481554/731519731.jpeg',
    categories: ['Ceilings', 'Libraries'],
    url: '/gallery/hall-house',
  },
  {
    id: 'marlin-downtown',
    title: 'Marlin Downtown',
    image: 'https://ext.same-assets.com/3804481554/1931562737.jpeg',
    categories: ['Commercial', 'Cabinetry'],
    url: '/gallery/marlin-downtown',
  },
  {
    id: 'denver-project',
    title: 'Denver Project',
    image: 'https://ext.same-assets.com/3804481554/3566318864.jpeg',
    categories: ['Home Bars', 'Cabinetry'],
    url: '/gallery/denver-project',
  },
  {
    id: 'springfield',
    title: 'Springfield',
    image: 'https://ext.same-assets.com/3804481554/1403591738.jpeg',
    categories: ['Kitchens', 'Cabinetry'],
    url: '/gallery/springfield',
  },
  {
    id: 'magnolia',
    title: 'Magnolia',
    image: 'https://ext.same-assets.com/3804481554/45986874.jpeg',
    categories: ['Kitchens', 'Cabinetry'],
    url: '/gallery/magnolia',
  },
  {
    id: 'joplin',
    title: 'Joplin',
    image: 'https://ext.same-assets.com/3804481554/1628572177.jpeg',
    categories: ['Kitchens', 'Cabinetry'],
    url: '/gallery/joplin',
  },
  {
    id: 'deer-run',
    title: 'Deer Run',
    image: 'https://ext.same-assets.com/3804481554/559838431.jpeg',
    categories: ['Doors', 'Mouldings'],
    url: '/gallery/deer-run',
  },
  {
    id: 'first-oak-bank',
    title: 'First Oak Bank',
    image: 'https://ext.same-assets.com/3804481554/3925815466.jpeg',
    categories: ['Commercial', 'Cabinetry'],
    url: '/gallery/first-oak-bank',
  },
  {
    id: 'chimney-rock',
    title: 'Chimney Rock',
    image: 'https://ext.same-assets.com/3804481554/3054421493.jpeg',
    categories: ['Fireplaces', 'Mouldings'],
    url: '/gallery/chimney-rock',
  },
];

const allCategories: Category[] = [
  'All',
  'Bathrooms',
  'Cabinetry',
  'Ceilings',
  'Closets',
  'Commercial',
  'Doors',
  'Fireplaces',
  'Home Bars',
  'Kitchens',
  'Libraries',
  'Mouldings',
  'Stairways',
  'Vanities'
];

export function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState<Category>('All');

  const filteredProjects = activeCategory === 'All'
    ? projectData
    : projectData.filter(project => project.categories.includes(activeCategory));

  return (
    <div className="bg-white min-h-screen">
      {/* Page Header */}
      <PageHeader
        title="Decades of unprecedented craftsmanship never looked so good."
        subtitle="Browse our Gallery of sample residential and commercial client projects."
      />

      {/* Gallery Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {/* Filter Menu */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {allCategories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-md text-sm transition-colors ${
                  activeCategory === category
                    ? 'bg-alpine-brown text-white'
                    : 'bg-gray-100 text-alpine-gray-dark hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 % 0.5 }}
                className="group"
              >
                <Link to={project.url} className="block">
                  <div className="overflow-hidden rounded-lg shadow-md transition-shadow group-hover:shadow-lg bg-gray-50">
                    <div className="aspect-[4/3] relative overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="text-xl font-bold text-alpine-brown-dark group-hover:text-alpine-brown transition-colors">
                        {project.title}
                      </h3>
                      <div className="mt-2 flex flex-wrap gap-2">
                        {project.categories.map(category => (
                          <span
                            key={category}
                            className="inline-block px-2 py-1 bg-alpine-tan-light text-alpine-brown-dark text-xs rounded-md"
                          >
                            {category}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
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
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
