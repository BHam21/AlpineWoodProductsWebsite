import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaSearch } from 'react-icons/fa';
import { PageHeader } from '@/components/sections/PageHeader';

interface ProductCategory {
  id: string;
  title: string;
  description: string;
  image: string;
  link: string;
  tags: string[];
}

const productCategories: ProductCategory[] = [
  {
    id: 'kitchens',
    title: 'Kitchens',
    description: 'The kitchen is the heart of a home. Alpine delivers world-class custom kitchens with top-of-the-line materials and lifetime warranty hardware.',
    image: 'https://ext.same-assets.com/3804481554/3702909326.jpeg',
    link: '/products/kitchens',
    tags: ['kitchen', 'cabinets', 'countertops', 'islands', 'residential']
  },
  {
    id: 'commercial',
    title: 'Commercial Interiors',
    description: 'Classic, custom styling for commercial spaces including counters, ceilings, doors, furniture, and acoustic panels for any business setting.',
    image: 'https://ext.same-assets.com/3804481554/2877275378.jpeg',
    link: '/products/commercial',
    tags: ['commercial', 'office', 'retail', 'business', 'hospitality']
  },
  {
    id: 'doors',
    title: 'Architectural Doors',
    description: 'Stunning entry ways and interior doors that replicate old-world craftsmanship, available in various heights, thicknesses, and finishes.',
    image: 'https://ext.same-assets.com/3804481554/1466535064.jpeg',
    link: '/products/doors',
    tags: ['doors', 'entry', 'interior', 'exterior', 'custom']
  },
  {
    id: 'mouldings',
    title: 'Mouldings & Trim',
    description: 'Straight and radius mouldings in any design, from standard trim to custom profiles matching historic and antique details.',
    image: 'https://ext.same-assets.com/3804481554/1177313443.jpeg',
    link: '/products/mouldings',
    tags: ['trim', 'crown', 'baseboards', 'casings', 'mouldings']
  },
  {
    id: 'vanities',
    title: 'Vanities & Bath',
    description: 'Transform your bathroom with elegant vanities, cabinetry, and custom details that combine beauty and functionality.',
    image: 'https://ext.same-assets.com/3804481554/2856564484.jpeg',
    link: '/products/vanities',
    tags: ['bathroom', 'vanity', 'bath', 'residential', 'cabinetry']
  },
  {
    id: 'office',
    title: 'Home Office & Libraries',
    description: 'Create a sophisticated work environment with custom bookshelves, desks, and cabinetry designed for productivity and style.',
    image: 'https://ext.same-assets.com/3804481554/3225838293.jpeg',
    link: '/products/office',
    tags: ['office', 'bookshelves', 'desk', 'library', 'residential']
  },
];

// Available filter options
const filterOptions = [
  { value: 'all', label: 'All Products' },
  { value: 'residential', label: 'Residential' },
  { value: 'commercial', label: 'Commercial' },
  { value: 'custom', label: 'Custom' },
];

export function ProductsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeFilter, setActiveFilter] = useState('all');
  const [filteredProducts, setFilteredProducts] = useState(productCategories);

  // Apply search and filter
  useEffect(() => {
    let result = productCategories;

    // Apply category filter first
    if (activeFilter !== 'all') {
      result = result.filter(product =>
        product.tags.includes(activeFilter)
      );
    }

    // Then apply search term
    if (searchTerm) {
      const searchLower = searchTerm.toLowerCase();
      result = result.filter(product =>
        product.title.toLowerCase().includes(searchLower) ||
        product.description.toLowerCase().includes(searchLower) ||
        product.tags.some(tag => tag.toLowerCase().includes(searchLower))
      );
    }

    setFilteredProducts(result);
  }, [searchTerm, activeFilter]);

  // Handle search input change
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  // Handle filter change
  const handleFilterChange = (filter: string) => {
    setActiveFilter(filter);
  };

  return (
    <div className="bg-white">
      {/* Page Header */}
      <PageHeader
        title="Our Product Selections"
        subtitle="Everything designed and manufactured under one roof in Marionville."
      />

      {/* Search and filter section */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
          {/* Search input */}
          <div className="relative w-full md:w-96">
            <input
              type="text"
              placeholder="Search products..."
              value={searchTerm}
              onChange={handleSearchChange}
              className="w-full pl-10 pr-4 py-2 border border-alpine-gray-light rounded-lg focus:outline-none focus:ring-2 focus:ring-alpine-brown"
            />
            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-alpine-gray" />
          </div>

          {/* Filter buttons */}
          <div className="flex flex-wrap gap-2">
            {filterOptions.map((option) => (
              <button
                key={option.value}
                onClick={() => handleFilterChange(option.value)}
                className={`px-4 py-2 rounded-lg transition-colors ${
                  activeFilter === option.value
                    ? 'bg-alpine-brown text-white'
                    : 'bg-alpine-tan-light text-alpine-brown-dark hover:bg-alpine-tan'
                }`}
              >
                {option.label}
              </button>
            ))}
          </div>
        </div>

        {/* Results count */}
        <div className="mb-6">
          <p className="text-alpine-gray-dark">
            Showing {filteredProducts.length} of {productCategories.length} products
          </p>
        </div>
      </div>

      {/* Products grid */}
      <div className="container mx-auto px-4 pb-20">
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {filteredProducts.map((category, index) => (
              <ProductCategoryCard
                key={category.id}
                category={category}
                index={index}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <h3 className="text-2xl font-semibold text-alpine-brown-dark mb-4">No products found</h3>
            <p className="text-alpine-gray-dark mb-6">Try adjusting your search or filter criteria.</p>
            <button
              onClick={() => {
                setSearchTerm('');
                setActiveFilter('all');
              }}
              className="px-6 py-2 bg-alpine-brown text-white rounded-lg hover:bg-alpine-brown-dark transition-colors"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>

      {/* Custom quote section */}
      <div className="bg-alpine-tan-light py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-alpine-brown-dark mb-4">
            The Sky Is The Limit
          </h2>
          <p className="text-lg text-alpine-gray-dark max-w-3xl mx-auto mb-8">
            Have a custom project idea in mind? From a design sketch to complete manufacturing,
            we can produce virtually anything for your dream home or commercial project.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center bg-alpine-brown text-white px-6 py-3 rounded hover:bg-alpine-brown-dark transition-colors"
          >
            Talk to a Project Manager <FaArrowRight className="ml-2" />
          </Link>
        </div>
      </div>
    </div>
  );
}

function ProductCategoryCard({
  category,
  index
}: {
  category: ProductCategory;
  index: number;
}) {
  return (
    <motion.div
      className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className="h-64 overflow-hidden">
        <img
          src={category.image}
          alt={category.title}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-bold text-alpine-brown-dark mb-2">{category.title}</h3>
        <p className="text-alpine-gray-dark mb-4">{category.description}</p>
        <div className="mb-4 flex flex-wrap gap-2">
          {category.tags.slice(0, 3).map(tag => (
            <span key={tag} className="px-2 py-1 text-xs bg-alpine-tan-light text-alpine-brown-dark rounded-full">
              {tag}
            </span>
          ))}
        </div>
        <Link
          to={category.link}
          className="inline-flex items-center text-alpine-brown font-medium hover:text-alpine-brown-dark transition-colors"
        >
          View Details <FaArrowRight className="ml-2" size={14} />
        </Link>
      </div>
    </motion.div>
  );
}
