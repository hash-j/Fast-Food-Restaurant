import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Phone, MapPin, Clock, Truck, UtensilsCrossed, Coffee, Users, ArrowRight } from 'lucide-react';
import { Button } from '../components/ui/button';

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function Home() {
  const services = [
    { icon: Truck, title: 'Delivery', desc: 'Fast delivery to your doorstep' },
    { icon: UtensilsCrossed, title: 'Dine-in', desc: 'Enjoy our cozy atmosphere' },
    { icon: Coffee, title: 'Takeout', desc: 'Quick pickup available' },
    { icon: Users, title: 'Groups', desc: 'Perfect for gatherings' },
  ];

  const highlights = [
    {
      url: 'https://images.unsplash.com/photo-1594266063697-304befca9629?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2MzR8MHwxfHNlYXJjaHw0fHxjaGlja2VuJTIwdGlra2ElMjBrZWJhYiUyMGJicSUyMHBsYXRlfGVufDB8fHx8MTc2OTgwMTcxNnww&ixlib=rb-4.1.0&q=85',
      title: 'Special BBQ',
      subtitle: 'Grilled to perfection'
    },
    {
      url: 'https://images.unsplash.com/photo-1618219877704-18411f61719d?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxODl8MHwxfHNlYXJjaHwzfHxnb3VybWV0JTIwYnVyZ2VyJTIwZnJpZXMlMjB3b29kJTIwdGFibGV8ZW58MHx8fHwxNzY5ODAxNzIxfDA&ixlib=rb-4.1.0&q=85',
      title: 'Gourmet Burgers',
      subtitle: 'Juicy & flavorful'
    },
    {
      url: 'https://images.unsplash.com/photo-1677256205303-f52a060eef99?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxODF8MHwxfHNlYXJjaHwzfHxtYXNhbGElMjBjaGFpJTIwY3VwJTIwc3RlYW18ZW58MHx8fHwxNzY5ODAxNzQ4fDA&ixlib=rb-4.1.0&q=85',
      title: 'Fresh Drinks',
      subtitle: 'Refreshing beverages'
    },
  ];

  return (
    <div data-testid="home-page" className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center">
        <div className="absolute inset-0 z-0">
          <img
            src="/hero-bg.png"
            alt="Cafe hero banner"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 py-32 md:py-40">
          <motion.div
            className="max-w-2xl"
            initial="initial"
            animate="animate"
            variants={stagger}
          >
            <motion.p
              variants={fadeInUp}
              className="text-primary font-medium tracking-wide uppercase text-sm mb-4"
            >
              Welcome to
            </motion.p>
            <motion.h1
              variants={fadeInUp}
              className="text-5xl md:text-7xl font-bold text-white tracking-tight leading-tight mb-6"
              style={{ fontFamily: 'Syne, sans-serif' }}
            >
              Chotu's<br />
              <span className="text-secondary">Cafe</span>
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              className="text-lg md:text-xl text-gray-300 leading-relaxed mb-8 max-w-lg"
            >
              Experience the finest halal cuisine in a casual, family-friendly atmosphere. 
              Open late for your midnight cravings.
            </motion.p>

            <motion.div variants={fadeInUp} className="flex flex-wrap gap-4 mb-8">
              <Link to="/menu" data-testid="hero-view-menu">
                <Button className="bg-primary hover:bg-primary/90 text-white rounded-full px-8 py-6 text-lg transition-all duration-300 hover:scale-105">
                  View Menu
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <a href="tel:0321-4967022" data-testid="hero-call-now">
                <Button variant="outline" className="border-white text-white hover:bg-white hover:text-[#FBAC23] rounded-full px-8 py-6 text-lg transition-all duration-300">
                  <Phone className="mr-2 w-5 h-5" />
                  Call Now
                </Button>
              </a>
            </motion.div>

            <motion.div variants={fadeInUp} className="flex flex-wrap items-center gap-6 text-white/80">
                <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-primary" />
                <span className="text-sm">12 PM - 2 AM</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-primary" />
                <a
                  href="https://maps.app.goo.gl/o13pHWE2XrSSzdZi8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm hover:text-primary transition-colors"
                  data-testid="hero-directions"
                >
                  Get Directions
                </a>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Menu Highlights */}
      <section className="py-20 md:py-28 bg-background">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12"
          >
            <div>
              <p className="text-primary font-medium tracking-wide uppercase text-sm mb-3">Taste the Best</p>
              <h2 className="text-3xl md:text-5xl font-semibold tracking-tight" style={{ fontFamily: 'Syne, sans-serif' }}>
                Explore Menu
              </h2>
            </div>
            <Link to="/menu" className="mt-4 md:mt-0" data-testid="view-full-menu">
                <Button variant="outline" className="rounded-full border-border hover:bg-card hover:text-white">
                View Full Menu
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative overflow-hidden"
                data-testid={`highlight-${index}`}
              >
                <div className="aspect-[4/5] overflow-hidden">
                  <img
                    src={item.url}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="absolute inset-0 bg-black/40" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#FBAC23]/80 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-2xl font-semibold text-[#0E0F10] mb-1" style={{ fontFamily: 'Syne, sans-serif' }}>
                    {item.title}
                  </h3>
                  <p className="text-[#0E0F10]/80 text-sm">{item.subtitle}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-20 md:py-28 bg-background">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <img
                src="https://images.unsplash.com/photo-1767418238663-d79db1fb7f78?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA2MjJ8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBjb3p5JTIwY2FmZSUyMGludGVyaW9yJTIwd2FybSUyMGxpZ2h0aW5nfGVufDB8fHx8MTc2OTgwMTcxNHww&ixlib=rb-4.1.0&q=85"
                alt="Cafe interior"
                className="w-full aspect-[4/3] object-cover"
              />
              <div className="absolute -bottom-6 -right-6 bg-primary text-white p-6 hidden md:block">
                <p className="text-4xl font-bold" style={{ fontFamily: 'Syne, sans-serif' }}>100%</p>
                <p className="text-sm uppercase tracking-wide">Halal Food</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-primary font-medium tracking-wide uppercase text-sm mb-3">About Us</p>
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-6" style={{ fontFamily: 'Syne, sans-serif' }}>
                A Place Where<br />Flavor Meets Family
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Chotu's Cafe is a casual, family-friendly café offering halal food, coffee, quick bites, and late-night dining. 
                It's a great place for solo diners, groups, and families with kids, offering a relaxed atmosphere and affordable dining.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-background p-4 border-l-4 border-primary">
                  <p className="text-primary text-2xl font-bold" style={{ fontFamily: 'Syne, sans-serif' }}>Late Night</p>
                  <p className="text-sm text-muted-foreground">Open till 2 AM</p>
                </div>
                <div className="bg-background p-4 border-l-4 border-primary">
                  <p className="text-primary text-2xl font-bold" style={{ fontFamily: 'Syne, sans-serif' }}>Family</p>
                  <p className="text-sm text-muted-foreground">Kids menu available</p>
                </div>
              </div>
              <Link to="/about" data-testid="learn-more-btn">
                <Button className="bg-primary hover:bg-primary/90 text-white rounded-full px-8 py-4">
                  Learn More About Us
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 md:py-28 bg-background">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <p className="text-primary font-medium tracking-wide uppercase text-sm mb-3">What We Offer</p>
            <h2 className="text-3xl md:text-5xl font-semibold tracking-tight" style={{ fontFamily: 'Syne, sans-serif' }}>
              Our Services
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-[#18191B] p-8 text-center border border-black/5 hover:shadow-lg transition-all duration-300 group"
                data-testid={`service-${service.title.toLowerCase()}`}
              >
                <div className="w-16 h-16 mx-auto mb-6 bg-background rounded-full flex items-center justify-center group-hover:bg-primary transition-colors duration-300">
                  <service.icon className="w-7 h-7 text-primary group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-medium mb-2 text-[#FBAC23]" style={{ fontFamily: 'Syne, sans-serif' }}>{service.title}</h3>
                <p className="text-muted-foreground text-sm">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28 bg-card">
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-primary font-medium tracking-wide uppercase text-sm mb-3">Ready to Order?</p>
            <h2 className="text-3xl md:text-5xl font-semibold text-white tracking-tight mb-6" style={{ fontFamily: 'Syne, sans-serif' }}>
              Visit Us Today
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto mb-8 text-lg">
              Experience our delicious halal cuisine. We're open from 12 PM to 2 AM, every day.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="tel:0321-4967022" data-testid="cta-call">
                <Button className="bg-primary hover:bg-primary/90 text-white rounded-full px-8 py-6 text-lg">
                  <Phone className="mr-2 w-5 h-5" />
                  0321-4967022
                </Button>
              </a>
              <a
                href="https://maps.app.goo.gl/o13pHWE2XrSSzdZi8"
                target="_blank"
                rel="noopener noreferrer"
                data-testid="cta-directions"
              >
                <Button variant="outline" className="border-white text-white hover:bg-white hover:text-[#FBAC23] rounded-full px-8 py-6 text-lg">
                  <MapPin className="mr-2 w-5 h-5" />
                  Get Directions
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
