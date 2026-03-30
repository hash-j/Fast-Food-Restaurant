import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Truck, UtensilsCrossed, ShoppingBag, Shield, Clock, Users, Baby, Car, CreditCard, ArrowRight } from 'lucide-react';
import { Button } from '../components/ui/button';

export default function Services() {
  const mainServices = [
    {
      icon: Truck,
      title: 'Delivery',
      description: 'Get your favorite meals delivered right to your doorstep. Fast, reliable, and convenient delivery service.',
      features: ['Fast delivery times', 'Wide delivery area', 'Hot & fresh food']
    },
    {
      icon: ShoppingBag,
      title: 'Takeout',
      description: 'Order ahead and pick up your food when it\'s ready. Quick and easy for busy schedules.',
      features: ['Call ahead ordering', 'Quick pickup', 'Ready when you arrive']
    },
    {
      icon: UtensilsCrossed,
      title: 'Dine-in',
      description: 'Enjoy our cozy atmosphere with table service. Perfect for families, groups, and solo diners.',
      features: ['Comfortable seating', 'Table service', 'Family-friendly environment']
    },
    {
      icon: Shield,
      title: 'No-Contact Delivery',
      description: 'Safe and hygienic contactless delivery option for your peace of mind.',
      features: ['Contactless handoff', 'Sanitized packaging', 'Safe delivery protocols']
    },
  ];

  const amenities = [
    { icon: Clock, title: 'Late Night Dining', desc: 'Open till 2 AM daily' },
    { icon: Users, title: 'Group Friendly', desc: 'Tables for large parties' },
    { icon: Baby, title: 'Kids Menu', desc: 'Special menu for children' },
    { icon: Car, title: 'Free Parking', desc: 'Lot & street parking' },
    { icon: CreditCard, title: 'Cash Only', desc: 'We accept cash payments' },
    { icon: Shield, title: '100% Halal', desc: 'All food is halal certified' },
  ];

  return (
    <div data-testid="services-page" className="min-h-screen pt-24">
      {/* Header */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <p className="text-primary font-medium tracking-wide uppercase text-sm mb-3">What We Offer</p>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6" style={{ fontFamily: 'Syne, sans-serif' }}>
              Our <span className="text-primary">Services</span>
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed">
              From delivery to dine-in, we offer multiple ways to enjoy our delicious halal cuisine. 
              Choose what works best for you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20 md:py-28 bg-background">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {mainServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-background p-8 md:p-10 border border-border hover:shadow-xl transition-all duration-300"
                data-testid={`service-card-${service.title.toLowerCase().replace(' ', '-')}`}
              >
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-6">
                    <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-semibold mb-4" style={{ fontFamily: 'Syne, sans-serif' }}>
                  {service.title}
                </h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-foreground text-sm">
                        <div className="w-1.5 h-1.5 rounded-full bg-secondary" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Amenities */}
      <section className="py-20 md:py-28 bg-background">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
              <p className="text-primary font-medium tracking-wide uppercase text-sm mb-3">More Amenities</p>
            <h2 className="text-3xl md:text-5xl font-semibold tracking-tight" style={{ fontFamily: 'Syne, sans-serif' }}>
              Everything You Need
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {amenities.map((amenity, index) => (
              <motion.div
                key={amenity.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                  className="bg-background p-6 text-center border border-border hover:border-secondary/30 transition-all duration-300"
                data-testid={`amenity-${index}`}
              >
                <div className="w-12 h-12 mx-auto mb-4 bg-background rounded-full flex items-center justify-center">
                  <amenity.icon className="w-5 h-5 text-primary" />
                </div>
                <h4 className="text-sm font-medium mb-1">{amenity.title}</h4>
                  <p className="text-xs text-muted-foreground">{amenity.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular For */}
      <section className="py-20 md:py-28 bg-card">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-primary font-medium tracking-wide uppercase text-sm mb-3">What We're Known For</p>
              <h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-6" style={{ fontFamily: 'Syne, sans-serif' }}>
                Popular For
              </h2>
              <div className="space-y-6">
                <div className="border-l-2 border-secondary pl-6">
                  <h3 className="text-xl font-medium text-white mb-2" style={{ fontFamily: 'Syne, sans-serif' }}>Solo Dining</h3>
                  <p className="text-gray-400">A welcoming atmosphere for individual diners looking for a quick, satisfying meal.</p>
                </div>
                <div className="border-l-2 border-secondary pl-6">
                  <h3 className="text-xl font-medium text-white mb-2" style={{ fontFamily: 'Syne, sans-serif' }}>Dinner</h3>
                  <p className="text-gray-400">Full dinner service with a wide variety of options for every taste.</p>
                </div>
                <div className="border-l-2 border-secondary pl-6">
                  <h3 className="text-xl font-medium text-white mb-2" style={{ fontFamily: 'Syne, sans-serif' }}>Late-Night Food</h3>
                  <p className="text-gray-400">Open till 2 AM for all your midnight cravings and late-night hunger.</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <img
                src="https://images.unsplash.com/photo-1594266063697-304befca9629?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2MzR8MHwxfHNlYXJjaHw0fHxjaGlja2VuJTIwdGlra2ElMjBrZWJhYiUyMGJicSUyMHBsYXRlfGVufDB8fHx8MTc2OTgwMTcxNnww&ixlib=rb-4.1.0&q=85"
                alt="BBQ platter"
                className="w-full aspect-[4/3] object-cover"
              />
            </motion.div>
          </div>
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
              Ready to Experience<br />Our Services?
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto mb-8">
              Whether you're dining in, taking out, or ordering delivery – we're here to serve you 
              delicious halal food from 12 PM to 2 AM.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/menu" data-testid="services-cta-menu">
                <Button className="bg-primary hover:bg-primary/90 text-white rounded-full px-8 py-4">
                  View Our Menu
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
              <Link to="/contact" data-testid="services-cta-contact">
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
