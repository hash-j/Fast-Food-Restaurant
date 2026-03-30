import { Link } from 'react-router-dom';
import { Phone, MapPin, Clock, Facebook, Twitter } from 'lucide-react';

export const Footer = () => {
  return (
    <footer data-testid="footer" className="bg-card text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <img 
              src="/logo.png" 
              alt="Chotu's Cafe Logo" 
              className="h-16 w-auto object-contain mb-2"
            />
            <p className="text-gray-400 text-sm leading-relaxed">
              A casual, family-friendly café offering halal food, coffee, quick bites, and late-night dining.
            </p>
            <div className="flex items-center gap-4 pt-2">
              <a
                href="https://www.facebook.com/61558558295303"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors duration-300"
                data-testid="footer-facebook"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://x.com/share?url=https%3A%2F%2Fshare.google%2FSso0hdieswkptv6GK"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors duration-300"
                data-testid="footer-twitter"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold" style={{ fontFamily: 'Syne, sans-serif' }}>Quick Links</h4>
            <nav className="flex flex-col gap-3">
              {[
                { name: 'Home', path: '/' },
                { name: 'About Us', path: '/about' },
                { name: 'Our Menu', path: '/menu' },
                { name: 'Services', path: '/services' },
                { name: 'Gallery', path: '/gallery' },
                { name: 'Contact', path: '/contact' },
              ].map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="text-gray-400 hover:text-primary transition-colors duration-200 text-sm"
                  data-testid={`footer-link-${link.name.toLowerCase().replace(' ', '-')}`}
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold" style={{ fontFamily: 'Syne, sans-serif' }}>Contact</h4>
            <div className="space-y-4">
              <a
                href="tel:0321-4967022"
                className="flex items-start gap-3 text-gray-400 hover:text-primary transition-colors duration-200"
                data-testid="footer-phone"
              >
                <Phone className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <span className="text-sm">0321-4967022</span>
              </a>
              <a
                href="https://maps.app.goo.gl/o13pHWE2XrSSzdZi8"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 text-gray-400 hover:text-primary transition-colors duration-200"
                data-testid="footer-address"
              >
                <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <span className="text-sm">View on Google Maps</span>
              </a>
              <div className="flex items-start gap-3 text-gray-400">
                <Clock className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <div className="text-sm">
                  <p>Open Daily</p>
                  <p>12:00 PM – 2:00 AM</p>
                </div>
              </div>
            </div>
          </div>

          {/* Payment Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold" style={{ fontFamily: 'Syne, sans-serif' }}>Payment</h4>
            <div className="bg-primary/20 border border-primary/30 rounded-sm p-4">
              <p className="text-primary font-semibold text-sm">CASH ONLY</p>
              <p className="text-gray-400 text-xs mt-1">We currently accept cash payments only</p>
            </div>
            <div className="space-y-2 text-sm text-gray-400">
              <p>✓ Free Parking Available</p>
              <p>✓ Free Street Parking</p>
              <p>✓ Kids Menu Available</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Chotu's Cafe. All rights reserved.
          </p>
          <p className="text-gray-500 text-sm">
            100% Halal Food
          </p>
        </div>
      </div>
    </footer>
  );
};
