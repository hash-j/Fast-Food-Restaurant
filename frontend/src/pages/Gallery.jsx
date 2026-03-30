import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { Button } from '../components/ui/button';

const galleryImages = [
  {
    url: 'https://images.unsplash.com/photo-1661994215679-cde7c2c5c060?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxOTB8MHwxfHNlYXJjaHwxfHxwYWtpc3RhbmklMjBmb29kJTIwdGFibGUlMjBzcHJlYWR8ZW58MHx8fHwxNzY5ODAxNzM2fDA&ixlib=rb-4.1.0&q=85',
    alt: 'Pakistani food spread',
    category: 'food',
    size: 'large'
  },
  {
    url: 'https://images.unsplash.com/photo-1594266063697-304befca9629?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2MzR8MHwxfHNlYXJjaHw0fHxjaGlja2VuJTIwdGlra2ElMjBrZWJhYiUyMGJicSUyMHBsYXRlfGVufDB8fHx8MTc2OTgwMTcxNnww&ixlib=rb-4.1.0&q=85',
    alt: 'BBQ Platter',
    category: 'food',
    size: 'medium'
  },
  {
    url: 'https://images.unsplash.com/photo-1618219877704-18411f61719d?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxODl8MHwxfHNlYXJjaHwzfHxnb3VybWV0JTIwYnVyZ2VyJTIwZnJpZXMlMjB3b29kJTIwdGFibGV8ZW58MHx8fHwxNzY5ODAxNzIxfDA&ixlib=rb-4.1.0&q=85',
    alt: 'Gourmet Burger',
    category: 'food',
    size: 'medium'
  },
  {
    url: 'https://images.unsplash.com/photo-1677256205303-f52a060eef99?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxODF8MHwxfHNlYXJjaHwzfHxtYXNhbGElMjBjaGFpJTIwY3VwJTIwc3RlYW18ZW58MHx8fHwxNzY5ODAxNzQ4fDA&ixlib=rb-4.1.0&q=85',
    alt: 'Steaming Chai',
    category: 'drinks',
    size: 'small'
  },
  {
    url: 'https://images.unsplash.com/photo-1767418238663-d79db1fb7f78?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA2MjJ8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBjb3p5JTIwY2FmZSUyMGludGVyaW9yJTIwd2FybSUyMGxpZ2h0aW5nfGVufDB8fHx8MTc2OTgwMTcxNHww&ixlib=rb-4.1.0&q=85',
    alt: 'Cafe Interior',
    category: 'interior',
    size: 'large'
  },
  {
    url: 'https://images.unsplash.com/photo-1716535232842-d10da4eb33d5?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1OTN8MHwxfHNlYXJjaHwxfHxrYXJhaGklMjBjaGlja2VuJTIwd29rfGVufDB8fHx8MTc2OTgwMTc0M3ww&ixlib=rb-4.1.0&q=85',
    alt: 'Chicken Karahi',
    category: 'food',
    size: 'medium'
  },
  {
    url: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800',
    alt: 'Pizza',
    category: 'food',
    size: 'medium'
  },
  {
    url: 'https://images.unsplash.com/photo-1529006557810-274b9b2fc783?w=800',
    alt: 'Shawarma',
    category: 'food',
    size: 'small'
  },
  {
    url: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800',
    alt: 'Restaurant Interior',
    category: 'interior',
    size: 'medium'
  },
  {
    url: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800',
    alt: 'Burger Close-up',
    category: 'food',
    size: 'small'
  },
  {
    url: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800',
    alt: 'Cafe Ambiance',
    category: 'interior',
    size: 'medium'
  },
  {
    url: 'https://images.unsplash.com/photo-1603073163308-9654c3fb70b5?w=800',
    alt: 'Grilled Chicken',
    category: 'food',
    size: 'small'
  },
];

const categories = ['all', 'food', 'drinks', 'interior'];

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedImage, setSelectedImage] = useState(null);

  const filteredImages = activeFilter === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeFilter);

  return (
    <div data-testid="gallery-page" className="min-h-screen pt-24 bg-background">
      {/* Header */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <p className="text-primary font-medium tracking-wide uppercase text-sm mb-3">Visual Journey</p>
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6" style={{ fontFamily: 'Syne, sans-serif' }}>
              Our <span className="text-primary">Gallery</span>
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Take a look at our delicious dishes, cozy atmosphere, and the dining experience that awaits you at Chotu's Cafe.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Buttons */}
      <section className="pb-8">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex justify-center gap-3 flex-wrap">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-6 py-2 rounded-full text-sm font-medium capitalize transition-all duration-200 ${
                    activeFilter === cat
                    ? 'bg-primary text-white'
                      : 'bg-background text-foreground hover:bg-background border border-border'
                }`}
                data-testid={`filter-${cat}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid - Bento Style */}
      <section className="py-8 md:py-12">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
            layout
          >
            <AnimatePresence>
              {filteredImages.map((image, index) => (
                <motion.div
                  key={image.url}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className={`relative overflow-hidden cursor-pointer group ${
                    image.size === 'large' ? 'col-span-2 row-span-2' :
                    image.size === 'medium' ? 'col-span-1 row-span-1 md:col-span-1 md:row-span-1' :
                    'col-span-1 row-span-1'
                  }`}
                  onClick={() => setSelectedImage(image)}
                  data-testid={`gallery-image-${index}`}
                >
                  <div className={`w-full ${image.size === 'large' ? 'aspect-square' : 'aspect-square'}`}>
                    <img
                      src={image.url}
                      alt={image.alt}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-end">
                    <p className="text-white p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-sm font-medium">
                      {image.alt}
                    </p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="absolute top-6 right-6 text-white hover:text-secondary transition-colors"
              onClick={() => setSelectedImage(null)}
              data-testid="close-lightbox"
            >
              <X className="w-8 h-8" />
            </button>
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              src={selectedImage.url}
              alt={selectedImage.alt}
              className="max-w-full max-h-[85vh] object-contain"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* CTA Section */}
      <section className="py-20 md:py-28 bg-card">
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-4" style={{ fontFamily: 'Syne, sans-serif' }}>
              Experience It In Person
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto mb-8">
              Pictures don't do justice to the real experience. Visit us today and taste the difference.
            </p>
              <a href="https://maps.app.goo.gl/o13pHWE2XrSSzdZi8" target="_blank" rel="noopener noreferrer" data-testid="gallery-directions">
              <Button className="bg-secondary hover:bg-secondary/90 text-white rounded-full px-8 py-4">
                Get Directions
              </Button>
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
