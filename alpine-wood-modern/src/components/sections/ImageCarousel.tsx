import React from 'react';
import { motion } from 'framer-motion';

interface Image {
  src: string;
  alt: string;
}

interface ImageCarouselProps {
  images: Image[];
  autoPlaySpeed?: number;
}

export function ImageCarousel({ images }: ImageCarouselProps) {
  // Create a duplicate set of images to create the illusion of an infinite loop
  const duplicatedImages = [...images, ...images];

  return (
    <div className="w-full overflow-hidden py-8 bg-alpine-tan-light">
      <h2 className="text-2xl font-bold text-center text-alpine-brown mb-4">Our Gallery Highlights</h2>

      {/* First row - moves left to right */}
      <div className="mb-6 relative">
        <motion.div
          className="flex gap-4 px-4"
          animate={{
            x: [0, -1 * (images.length * 350)],
          }}
          transition={{
            x: {
              repeat: Infinity,
              duration: 40,
              ease: "linear",
            },
          }}
          style={{ width: `${duplicatedImages.length * 350}px` }}
        >
          {duplicatedImages.map((image, index) => (
            <div
              key={`row1-${index}`}
              className="w-[330px] h-64 flex-shrink-0 rounded-lg overflow-hidden shadow-md"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-all hover:scale-105 duration-500"
              />
            </div>
          ))}
        </motion.div>
      </div>

      {/* Second row - moves right to left (opposite direction) */}
      <div className="relative">
        <motion.div
          className="flex gap-4 px-4"
          animate={{
            x: [-1 * (images.length * 350), 0],
          }}
          transition={{
            x: {
              repeat: Infinity,
              duration: 35,
              ease: "linear",
            },
          }}
          style={{ width: `${duplicatedImages.length * 350}px` }}
        >
          {[...duplicatedImages].reverse().map((image, index) => (
            <div
              key={`row2-${index}`}
              className="w-[330px] h-64 flex-shrink-0 rounded-lg overflow-hidden shadow-md"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-all hover:scale-105 duration-500"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
