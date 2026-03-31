import { motion } from 'framer-motion';
import { Phone, MapPin, Clock, Facebook, Twitter, Navigation } from 'lucide-react';
import { Button } from '../components/ui/button';

export default function Contact() {
  const businessHours = [
    { day: 'Monday', hours: '12:00 PM – 2:00 AM' },
    { day: 'Tuesday', hours: '12:00 PM – 2:00 AM' },
    { day: 'Wednesday', hours: '12:00 PM – 2:00 AM' },
    { day: 'Thursday', hours: '12:00 PM – 2:00 AM' },
    { day: 'Friday', hours: '12:00 PM – 2:00 AM' },
    { day: 'Saturday', hours: '12:00 PM – 2:00 AM' },
    { day: 'Sunday', hours: '12:00 PM – 2:00 AM' },
  ];

  return (
    <div data-testid="contact-page" className="min-h-screen pt-24">
      {/* Header */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <p className="text-primary font-medium tracking-wide uppercase text-sm mb-3">Get In Touch</p>
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6" style={{ fontFamily: 'Syne, sans-serif' }}>
              Contact <span className="text-primary">Us</span>
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed">
              We'd love to hear from you. Reach out for orders, inquiries, or just to say hello.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info & Map */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Details */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-8" style={{ fontFamily: 'Syne, sans-serif' }}>
                Visit Us
              </h2>

              {/* Phone */}
              <div className="bg-card p-6 mb-4 border border-border hover:shadow-lg transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-1 text-foreground" style={{ fontFamily: 'Syne, sans-serif' }}>Phone</h3>
                    <a
                      href="tel:0321-4967022"
                      className="text-primary text-xl font-semibold hover:underline"
                      data-testid="contact-phone"
                    >
                      0321-4967022
                    </a>
                    <p className="text-muted-foreground text-sm mt-1">Tap to call directly</p>
                  </div>
                </div>
              </div>

              {/* Address */}
              <div className="bg-card p-6 mb-4 border border-border hover:shadow-lg transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-1 text-foreground" style={{ fontFamily: 'Syne, sans-serif' }}>Location</h3>
                    <a
                      href="https://maps.app.goo.gl/o13pHWE2XrSSzdZi8"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground hover:text-primary transition-colors"
                      data-testid="contact-address"
                    >
                      View on Google Maps
                    </a>
                    <p className="text-muted-foreground text-sm mt-1">Free parking available</p>
                  </div>
                </div>
              </div>

              {/* Hours */}
              <div className="bg-card p-6 mb-4 border border-border hover:shadow-lg transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-1 text-foreground" style={{ fontFamily: 'Syne, sans-serif' }}>Hours</h3>
                    <p className="text-foreground font-semibold">Open Daily</p>
                    <p className="text-secondary text-lg font-semibold">12:00 PM – 2:00 AM</p>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="bg-card p-6 border border-border hover:shadow-lg transition-all duration-300">
                <h3 className="text-lg font-medium mb-4 text-foreground" style={{ fontFamily: 'Syne, sans-serif' }}>Follow Us</h3>
                <div className="flex gap-4">
                  <a
                    href="https://www.facebook.com/61558558295303"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-muted rounded-full flex items-center justify-center hover:bg-secondary hover:text-secondary-foreground transition-all duration-300 text-foreground"
                    data-testid="contact-facebook"
                    aria-label="Facebook"
                  >
                    <Facebook className="w-5 h-5" />
                  </a>
                  <a
                    href="https://x.com/share?url=https%3A%2F%2Fshare.google%2FSso0hdieswkptv6GK"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-muted rounded-full flex items-center justify-center hover:bg-secondary hover:text-secondary-foreground transition-all duration-300 text-foreground"
                    data-testid="contact-twitter"
                    aria-label="Twitter"
                  >
                    <Twitter className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Map */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-8" style={{ fontFamily: 'Syne, sans-serif' }}>
                Find Us
              </h2>
              <div className="relative bg-card border border-border overflow-hidden">
                <div className="map-grayscale">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3401.747085456789!2d74.3!3d31.5!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzHCsDMwJzAwLjAiTiA3NMKwMTgnMDAuMCJF!5e0!3m2!1sen!2s!4v1234567890"
                    width="100%"
                    height="400"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Chotu's Cafe Location"
                    data-testid="google-map"
                    className="w-full"
                  ></iframe>
                </div>
                <a
                  href="https://maps.app.goo.gl/o13pHWE2XrSSzdZi8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute bottom-4 right-4"
                  data-testid="map-directions-btn"
                >
                  <Button className="bg-secondary hover:bg-secondary/90 text-white rounded-full px-6 py-3 shadow-lg">
                    <Navigation className="w-4 h-4 mr-2" />
                    Get Directions
                  </Button>
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Business Hours */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <p className="text-secondary font-medium tracking-wide uppercase text-sm mb-3">We're Open</p>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight" style={{ fontFamily: 'Syne, sans-serif' }}>
              Business Hours
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-xl mx-auto"
          >
            <div className="bg-card border border-border overflow-hidden">
              {businessHours.map((item, index) => (
                <div
                  key={item.day}
                  className={`flex justify-between items-center px-6 py-4 ${
                    index !== businessHours.length - 1 ? 'border-b border-border' : ''
                  }`}
                  data-testid={`hours-${item.day.toLowerCase()}`}
                >
                  <span className="font-medium text-foreground">{item.day}</span>
                  <span className="text-secondary font-semibold">{item.hours}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Payment Notice */}
      <section className="py-16 md:py-20 bg-card">
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block bg-secondary/20 border border-secondary/30 rounded-sm px-8 py-4 mb-6">
              <p className="text-secondary font-bold text-xl">CASH ONLY</p>
            </div>
            <h2 className="text-2xl md:text-3xl font-semibold text-white tracking-tight mb-4" style={{ fontFamily: 'Syne, sans-serif' }}>
              Ready to Order?
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto mb-8">
              Give us a call to place your order for delivery, takeout, or to make a reservation for dine-in.
            </p>
            <a href="tel:0321-4967022" data-testid="contact-cta-call">
              <Button className="bg-secondary hover:bg-secondary/90 text-white rounded-full px-8 py-6 text-lg">
                <Phone className="mr-2 w-5 h-5" />
                Call Now: 0321-4967022
              </Button>
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
