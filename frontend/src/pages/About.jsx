import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Clock, Users, Utensils, Coffee, Car, Baby, ArrowRight, Check } from 'lucide-react';
import { Button } from '../components/ui/button';

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

export default function About() {
  const features = [
    { icon: Clock, title: 'Late Night Dining', desc: 'Open till 2 AM every day' },
    { icon: Users, title: 'Group Friendly', desc: 'Perfect for gatherings' },
    { icon: Utensils, title: 'Table Service', desc: 'Comfortable dining experience' },
    { icon: Coffee, title: 'Casual Atmosphere', desc: 'Relaxed & welcoming vibe' },
    { icon: Car, title: 'Free Parking', desc: 'Lot & street parking available' },
    { icon: Baby, title: 'Kids Friendly', desc: 'Special kids menu available' },
  ];

  const values = [
    'Fresh, high-quality ingredients',
    '100% Halal certified food',
    'Family-friendly environment',
    'Affordable prices',
    'Quick & friendly service',
    'Late-night availability',
  ];

  return (
    <div data-testid="about-page" className="min-h-screen pt-24">
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-primary font-medium tracking-wide uppercase text-sm mb-3">Our Story</p>
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6" style={{ fontFamily: 'Syne, sans-serif' }}>
                About<br />
                <span className="text-secondary">Chotu's Cafe</span>
              </h1>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                Chotu's Cafe is a casual, family-friendly café that has become a beloved destination for food lovers 
                seeking authentic halal cuisine. We take pride in serving fresh, flavorful dishes in a warm and 
                welcoming atmosphere.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Whether you're looking for a quick bite, a leisurely dinner, or late-night cravings, we've got you 
                covered. Our menu features a diverse selection of BBQ specialties, burgers, pizzas, shawarma, and 
                much more – all prepared with care using the finest halal ingredients.
              </p>
              <Link to="/menu" data-testid="about-view-menu">
                <Button className="bg-secondary hover:bg-secondary/90 text-white rounded-full px-8 py-4">
                  Explore Our Menu
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <img
                src="https://images.unsplash.com/photo-1767418238663-d79db1fb7f78?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA2MjJ8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBjb3p5JTIwY2FmZSUyMGludGVyaW9yJTIwd2FybSUyMGxpZ2h0aW5nfGVufDB8fHx8MTc2OTgwMTcxNHww&ixlib=rb-4.1.0&q=85"
                alt="Cozy cafe interior"
                className="w-full aspect-square object-cover"
              />
              <div className="absolute -bottom-6 -left-6 bg-card text-white p-6 hidden md:block">
                <p className="text-3xl font-bold text-secondary" style={{ fontFamily: 'Syne, sans-serif' }}>100%</p>
                <p className="text-sm uppercase tracking-wide">Halal Certified</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 md:py-28 bg-background">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <p className="text-secondary font-medium tracking-wide uppercase text-sm mb-3">Why Choose Us</p>
            <h2 className="text-3xl md:text-5xl font-semibold tracking-tight" style={{ fontFamily: 'Syne, sans-serif' }}>
              What Makes Us Special
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-[#18191B] p-8 border border-black/5 hover:shadow-lg transition-all duration-300 group"
                data-testid={`feature-${index}`}
              >
                <div className="w-14 h-14 bg-background rounded-full flex items-center justify-center mb-6 group-hover:bg-secondary transition-colors duration-300">
                  <feature.icon className="w-6 h-6 text-secondary group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-medium mb-2 text-[#E29B22]" style={{ fontFamily: 'Syne, sans-serif' }}>{feature.title}</h3>
                <p className="text-muted-foreground text-sm">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 md:py-28 bg-background">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-primary font-medium tracking-wide uppercase text-sm mb-3">Our Values</p>
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-6" style={{ fontFamily: 'Syne, sans-serif' }}>
                What We Stand For
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                At Chotu's Cafe, we believe in providing more than just food. We create experiences 
                that bring families and friends together over delicious meals.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {values.map((value, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-secondary flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 text-white" />
                    </div>
                    <span className="text-foreground text-sm">{value}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="grid grid-cols-2 gap-4"
            >
              <img
                src="https://images.unsplash.com/photo-1594266063697-304befca9629?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2MzR8MHwxfHNlYXJjaHw0fHxjaGlja2VuJTIwdGlra2ElMjBrZWJhYiUyMGJicSUyMHBsYXRlfGVufDB8fHx8MTc2OTgwMTcxNnww&ixlib=rb-4.1.0&q=85"
                alt="BBQ platter"
                className="w-full aspect-square object-cover"
              />
              <img
                src="https://images.unsplash.com/photo-1618219877704-18411f61719d?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxODl8MHwxfHNlYXJjaHwzfHxnb3VybWV0JTIwYnVyZ2VyJTIwZnJpZXMlMjB3b29kJTIwdGFibGV8ZW58MHx8fHwxNzY5ODAxNzIxfDA&ixlib=rb-4.1.0&q=85"
                alt="Gourmet burger"
                className="w-full aspect-square object-cover mt-8"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Atmosphere Section */}
      <section className="py-20 md:py-28 bg-card">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <p className="text-secondary font-medium tracking-wide uppercase text-sm mb-3">The Experience</p>
            <h2 className="text-3xl md:text-5xl font-semibold text-white tracking-tight mb-6" style={{ fontFamily: 'Syne, sans-serif' }}>
              Casual Dining at Its Best
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              Our café offers a relaxed, welcoming environment perfect for solo diners, families with children, 
              and groups of friends. Whether you're grabbing a quick bite or settling in for a leisurely meal, 
              you'll feel right at home.
            </p>
            <div className="flex flex-wrap justify-center gap-8 text-white">
              <div className="text-center">
                <p className="text-4xl font-bold text-secondary" style={{ fontFamily: 'Syne, sans-serif' }}>14</p>
                <p className="text-sm text-gray-400 uppercase tracking-wide">Hours Open Daily</p>
              </div>
              <div className="text-center">
                <p className="text-4xl font-bold text-secondary" style={{ fontFamily: 'Syne, sans-serif' }}>50+</p>
                <p className="text-sm text-gray-400 uppercase tracking-wide">Menu Items</p>
              </div>
              <div className="text-center">
                <p className="text-4xl font-bold text-secondary" style={{ fontFamily: 'Syne, sans-serif' }}>7</p>
                <p className="text-sm text-gray-400 uppercase tracking-wide">Days a Week</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28 bg-background">
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-6" style={{ fontFamily: 'Syne, sans-serif' }}>
              Ready to Experience<br />Chotu's Cafe?
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto mb-8">
              Visit us today and discover why we're a favorite among food lovers. 
              We're open from 12 PM to 2 AM, every day.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/menu" data-testid="about-cta-menu">
                <Button className="bg-secondary hover:bg-secondary/90 text-white rounded-full px-8 py-4">
                  View Our Menu
                </Button>
              </Link>
              <Link to="/contact" data-testid="about-cta-contact">
                <Button variant="outline" className="border-border hover:bg-card hover:text-white rounded-full px-8 py-4">
                  Contact Us
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
