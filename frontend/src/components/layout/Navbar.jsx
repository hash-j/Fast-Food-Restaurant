import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import { Button } from '../ui/button';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Menu', path: '/menu' },
    { name: 'Services', path: '/services' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path) => location.pathname === path;

  const isMenuPage = location.pathname === '/menu';

  return (
    <nav
      data-testid="navbar"
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isMenuPage
          ? 'bg-[#1C1C1C] py-3'
          : 'bg-[rgba(0,0,0,0.7)] py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2" data-testid="logo-link">
            <img 
              src="/logo.png" 
              alt="Chotu's Cafe Logo" 
              className="h-12 md:h-14 w-auto object-contain transition-transform duration-300 hover:scale-105"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                data-testid={`nav-${link.name.toLowerCase()}`}
                className={`text-sm font-semibold transition-colors duration-200 ${
                  isActive(link.path)
                    ? 'text-secondary'
                    : 'text-white hover:text-secondary'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-4">
            <a href="tel:0321-4967022" data-testid="nav-call-btn">
              <Button variant="outline" className="rounded-full border-primary text-primary hover:bg-primary hover:text-white">
                <Phone className="w-4 h-4 mr-2" />
                Call Now
              </Button>
            </a>
            <Link to="/menu" data-testid="nav-order-btn">
              <Button className="rounded-full bg-secondary hover:bg-secondary/90 text-white">
                View Menu
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            data-testid="mobile-menu-btn"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className={`w-6 h-6 ${isMenuPage ? 'text-white' : isScrolled ? 'text-foreground' : 'text-white'}`} />
            ) : (
              <Menu className={`w-6 h-6 ${isMenuPage ? 'text-white' : isScrolled ? 'text-foreground' : 'text-white'}`} />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div
            className={`lg:hidden absolute top-full left-0 w-full ${isMenuPage ? 'bg-[#1C1C1C] text-white' : 'bg-white'} shadow-lg py-6 px-6 animate-fade-in`}
            data-testid="mobile-menu"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  data-testid={`mobile-nav-${link.name.toLowerCase()}`}
                  className={`text-lg font-semibold py-2 ${
                    isActive(link.path)
                      ? 'text-secondary'
                      : isMenuPage
                      ? 'text-white'
                      : 'text-foreground'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <div className="flex flex-col gap-3 pt-4 border-t border-border">
                <a href="tel:0321-4967022" className="w-full" data-testid="mobile-call-btn">
                  <Button variant="outline" className="w-full rounded-full border-primary text-primary">
                    <Phone className="w-4 h-4 mr-2" />
                    Call Now
                  </Button>
                </a>
                <Link to="/menu" className="w-full" data-testid="mobile-order-btn">
                  <Button className="w-full rounded-full bg-secondary hover:bg-secondary/90 text-white">
                    View Menu
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
