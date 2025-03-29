import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaArrowLeft, FaCheck, FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa';
import { CTA } from '@/components/sections/CTA';

// Define product details type
interface ProductDetail {
  id: string;
  title: string;
  category: string;
  description: string;
  longDescription: string;
  features: string[];
  materials: string[];
  images: string[];
  relatedProducts: RelatedProduct[];
}

interface RelatedProduct {
  id: string;
  title: string;
  image: string;
  link: string;
}

// Mock data - This would be replaced with actual data from an API or CMS
const productDetailsData: Record<string, ProductDetail> = {
  'custom-kitchens': {
    id: 'custom-kitchens',
    title: 'Custom Kitchens',
    category: 'Residential',
    description: 'Elegant, functional kitchens designed to be the heart of your home, with premium craftsmanship in every detail.',
    longDescription: 'Our custom kitchens are meticulously designed to be both beautiful and functional, serving as the heart of your home. We work closely with homeowners, designers, and architects to create spaces that reflect personal style while maximizing utility. From traditional to contemporary designs, we offer a wide range of styles, finishes, and hardware options to make your dream kitchen a reality.',
    features: [
      'Custom cabinet layouts designed for your specific space',
      'Premium hardwood construction throughout',
      'Soft-close doors and drawers standard',
      'Wide range of finish options and techniques',
      'Integrated solutions for appliances and storage',
      'Custom islands, pantries, and specialty cabinetry'
    ],
    materials: [
      'Premium hardwoods (maple, cherry, walnut, oak)',
      'Engineered wood products (plywood, MDF)',
      'High-quality hardware and fixtures',
      'Custom finishes and glazes',
      'Glass, metal, and specialty accent materials'
    ],
    images: [
      'https://ext.same-assets.com/3804481554/384484466.jpeg',
      'https://ext.same-assets.com/3804481554/3702909326.jpeg',
      'https://ext.same-assets.com/3804481554/621626395.jpeg'
    ],
    relatedProducts: [
      {
        id: 'vanities',
        title: 'Custom Vanities',
        image: 'https://ext.same-assets.com/3804481554/2877275378.jpeg',
        link: '/products/vanities'
      },
      {
        id: 'mouldings',
        title: 'Custom Mouldings',
        image: 'https://ext.same-assets.com/3804481554/1466535064.jpeg',
        link: '/products/mouldings'
      }
    ]
  },
  'architectural-doors': {
    id: 'architectural-doors',
    title: 'Architectural Doors',
    category: 'Architectural',
    description: 'Stunning entry ways and doors that make a statement, crafted with old-world techniques and modern precision.',
    longDescription: 'Our architectural doors combine traditional craftsmanship with modern precision to create stunning entryways that make a statement. We specialize in both interior and exterior doors, crafting each piece to exact specifications with attention to both form and function. From grand front entries to elegant pocket doors, our work graces fine homes and distinctive commercial spaces throughout North America.',
    features: [
      'Custom designed to your exact specifications',
      'Solid hardwood construction for durability',
      'Wide range of styles from traditional to contemporary',
      'Precision engineering for perfect operation',
      'Custom hardware options and installation',
      'Matching sidelights and transoms available'
    ],
    materials: [
      'Premium hardwoods (mahogany, walnut, oak, cherry)',
      'Engineered cores for stability',
      'Custom glass and metal accents',
      'High-performance finishes for weather resistance',
      'Premium hardware packages'
    ],
    images: [
      'https://ext.same-assets.com/3804481554/1157441046.jpeg',
      'https://ext.same-assets.com/3804481554/1466535064.jpeg',
      'https://ext.same-assets.com/3804481554/3034254256.jpeg'
    ],
    relatedProducts: [
      {
        id: 'mouldings',
        title: 'Custom Mouldings',
        image: 'https://ext.same-assets.com/3804481554/1466535064.jpeg',
        link: '/products/mouldings'
      },
      {
        id: 'commercial',
        title: 'Commercial Interiors',
        image: 'https://ext.same-assets.com/3804481554/2877275378.jpeg',
        link: '/products/commercial'
      }
    ]
  },
  'commercial-interiors': {
    id: 'commercial-interiors',
    title: 'Commercial Interiors',
    category: 'Commercial',
    description: 'Beautiful and functional commercial spaces that elevate your business and impress your clients and customers.',
    longDescription: 'Our commercial interior solutions combine beauty and functionality to create spaces that elevate your business and impress your clients. We work closely with architects, designers, and business owners to develop custom millwork packages that meet specific commercial requirements while maintaining the highest standards of craftsmanship. From reception desks to complete interior packages, we deliver exceptional quality on time and within budget.',
    features: [
      'Custom reception areas and welcome desks',
      'Conference room tables and built-ins',
      'Office cabinetry and storage solutions',
      'Retail displays and fixtures',
      'Restaurant and hospitality furnishings',
      'ADA compliant designs available'
    ],
    materials: [
      'Commercial-grade hardwoods and veneers',
      'High-pressure laminates and solid surfaces',
      'Metal, glass, and specialty materials',
      'Fire-rated materials where required',
      'Sustainable and eco-friendly options'
    ],
    images: [
      'https://ext.same-assets.com/3804481554/1177313443.jpeg',
      'https://ext.same-assets.com/3804481554/2877275378.jpeg',
      'https://ext.same-assets.com/3804481554/473714098.jpeg'
    ],
    relatedProducts: [
      {
        id: 'office',
        title: 'Office Furnishings',
        image: 'https://ext.same-assets.com/3804481554/1177313443.jpeg',
        link: '/products/office'
      },
      {
        id: 'doors',
        title: 'Architectural Doors',
        image: 'https://ext.same-assets.com/3804481554/1157441046.jpeg',
        link: '/products/doors'
      }
    ]
  }
};

export function ProductDetailPage() {
  const { productId } = useParams<{ productId: string }>();
  const [activeImage, setActiveImage] = useState<string>('');
  const [product, setProduct] = useState<ProductDetail | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    // Simulate API fetch with timeout
    const fetchProduct = () => {
      setLoading(true);
      setTimeout(() => {
        if (productId && productDetailsData[productId]) {
          setProduct(productDetailsData[productId]);
          setActiveImage(productDetailsData[productId].images[0]);
        } else {
          // Handle product not found
          setProduct(null);
        }
        setLoading(false);
      }, 300);
    };

    fetchProduct();
  }, [productId]);

  if (loading) {
    return (
      <div className="container mx-auto py-20 px-4 min-h-[60vh] flex items-center justify-center">
        <div className="animate-pulse flex flex-col items-center">
          <div className="h-10 w-64 bg-alpine-gray-light/30 rounded mb-8"></div>
          <div className="h-80 w-full max-w-3xl bg-alpine-gray-light/30 rounded mb-6"></div>
          <div className="h-6 w-full max-w-2xl bg-alpine-gray-light/30 rounded mb-4"></div>
          <div className="h-6 w-full max-w-xl bg-alpine-gray-light/30 rounded"></div>
        </div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="container mx-auto py-20 px-4 min-h-[60vh] flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold text-alpine-brown-dark mb-4">Product Not Found</h1>
        <p className="text-alpine-gray-dark mb-8">The product you're looking for doesn't exist or has been removed.</p>
        <Link
          to="/products"
          className="inline-flex items-center bg-alpine-brown text-white py-3 px-6 rounded-md hover:bg-alpine-brown-dark transition-colors"
        >
          <FaArrowLeft className="mr-2" /> Return to Products
        </Link>
      </div>
    );
  }

  return (
    <>
      {/* Breadcrumb Navigation */}
      <div className="bg-alpine-tan-light py-4">
        <div className="container mx-auto px-4">
          <nav className="text-sm text-alpine-gray">
            <ol className="flex items-center space-x-2">
              <li>
                <Link to="/" className="hover:text-alpine-brown transition-colors">Home</Link>
              </li>
              <li className="flex items-center">
                <span className="mx-2">/</span>
                <Link to="/products" className="hover:text-alpine-brown transition-colors">Products</Link>
              </li>
              <li className="flex items-center">
                <span className="mx-2">/</span>
                <span className="text-alpine-brown">{product.title}</span>
              </li>
            </ol>
          </nav>
        </div>
      </div>

      {/* Product Overview Section */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Product Gallery */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-4"
            >
              <div className="aspect-video bg-alpine-gray-light/5 rounded-lg overflow-hidden border border-alpine-tan-dark/20">
                <img
                  src={activeImage}
                  alt={product.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="grid grid-cols-3 gap-4">
                {product.images.map((image, index) => (
                  <div
                    key={index}
                    className={`aspect-video rounded-md overflow-hidden cursor-pointer border-2 transition-all ${
                      activeImage === image ? 'border-alpine-brown' : 'border-transparent hover:border-alpine-tan'
                    }`}
                    onClick={() => setActiveImage(image)}
                  >
                    <img
                      src={image}
                      alt={`${product.title} - view ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Product Information */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="text-alpine-tan-dark font-medium mb-2 inline-block">{product.category}</span>
              <h1 className="text-3xl md:text-4xl font-bold text-alpine-brown-dark mb-4">{product.title}</h1>
              <p className="text-lg text-alpine-gray-dark mb-8">{product.description}</p>

              <div className="bg-alpine-tan-light/60 p-6 rounded-lg mb-8">
                <p className="text-alpine-gray-dark">{product.longDescription}</p>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-bold text-alpine-brown-dark mb-4">Key Features</h3>
                <ul className="space-y-2">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <FaCheck className="text-alpine-brown mt-1 mr-3 flex-shrink-0" />
                      <span className="text-alpine-gray-dark">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-bold text-alpine-brown-dark mb-4">Materials</h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {product.materials.map((material, index) => (
                    <li key={index} className="flex items-start">
                      <FaCheck className="text-alpine-brown mt-1 mr-3 flex-shrink-0" />
                      <span className="text-alpine-gray-dark">{material}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-12 space-y-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center w-full md:w-auto bg-alpine-brown text-white py-3 px-8 rounded-md hover:bg-alpine-brown-dark transition-colors text-lg font-medium"
                >
                  Request a Quote
                </Link>
                <div className="flex flex-col md:flex-row md:items-center space-y-4 md:space-y-0 md:space-x-8 mt-6">
                  <div className="flex items-center">
                    <FaMapMarkerAlt className="text-alpine-brown mr-2" />
                    <span className="text-alpine-gray-dark">Visit Our Showroom</span>
                  </div>
                  <div className="flex items-center">
                    <FaPhoneAlt className="text-alpine-brown mr-2" />
                    <a href="tel:+18005551234" className="text-alpine-gray-dark hover:text-alpine-brown">1-800-555-1234</a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Related Products Section */}
      {product.relatedProducts.length > 0 && (
        <section className="py-16 bg-alpine-tan-light/30">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-alpine-brown-dark mb-10 text-center">Related Products</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {product.relatedProducts.map((relatedProduct) => (
                <motion.div
                  key={relatedProduct.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="group relative overflow-hidden rounded-lg shadow-md h-64"
                >
                  <img
                    src={relatedProduct.image}
                    alt={relatedProduct.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-alpine-brown-dark/80 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-300 flex items-end">
                    <div className="p-6 w-full">
                      <h3 className="text-white text-xl font-bold mb-3">{relatedProduct.title}</h3>
                      <Link
                        to={relatedProduct.link}
                        className="inline-flex items-center bg-white/20 hover:bg-white/30 text-white py-2 px-4 rounded-md text-sm transition-colors backdrop-blur-sm"
                      >
                        View Details
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <CTA
        title="Bring Your Vision to Life"
        description="From concept to completion, we're with you every step of the way. Let's create something extraordinary together."
        buttonText="Schedule a Consultation"
        buttonLink="/contact"
        image="https://ext.same-assets.com/3804481554/3034254256.jpeg"
      />
    </>
  );
}
