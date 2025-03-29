import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';

interface Product {
  id: string;
  title: string;
  description: string;
  image: string;
  link: string;
}

interface FeaturedProductsProps {
  title: string;
  subtitle?: string;
  products: Product[];
}

export function FeaturedProducts({ title, subtitle, products }: FeaturedProductsProps) {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-alpine-brown-dark mb-4">{title}</h2>
          {subtitle && (
            <p className="text-lg text-alpine-gray max-w-3xl mx-auto">{subtitle}</p>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProductCard({ product, index }: { product: Product; index: number }) {
  return (
    <motion.div
      className="group bg-white border border-alpine-tan-light rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
    >
      <div className="h-64 overflow-hidden">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
        />
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold text-alpine-brown-dark mb-2">{product.title}</h3>
        <p className="text-alpine-gray mb-4">{product.description}</p>

        <Link
          to={product.link}
          className="inline-flex items-center text-alpine-brown font-medium hover:text-alpine-brown-dark transition-colors"
        >
          Learn More <FaArrowRight className="ml-2" size={14} />
        </Link>
      </div>
    </motion.div>
  );
}
