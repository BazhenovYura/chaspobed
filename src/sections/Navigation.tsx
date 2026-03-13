import { useState, useEffect } from 'react';
import { Sun, Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'О челлендже', href: '#challenge' },
    { label: 'Практики', href: '#practices' },
    { label: 'Как работает', href: '#how-it-works' },
    { label: 'Сообщество', href: '#community' },
    { label: 'Тарифы', href: '#pricing' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled 
            ? 'bg-white/90 backdrop-blur-md shadow-lg py-3' 
            : 'bg-transparent py-5'
        }`}
      >
        <div className="container-custom">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a 
              href="#"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="flex items-center gap-2"
            >
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors ${
                isScrolled ? 'bg-gradient-to-br from-amber-400 to-amber-500' : 'bg-white/90'
              }`}>
                <Sun className={`w-6 h-6 ${isScrolled ? 'text-white' : 'text-amber-500'}`} />
              </div>
              <span className={`font-bold text-lg transition-colors ${
                isScrolled ? 'text-amber-900' : 'text-amber-900'
              }`}>
                Час побед
              </span>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link, index) => (
                <button
                  key={index}
                  onClick={() => scrollToSection(link.href)}
                  className={`text-sm font-medium transition-colors hover:text-amber-600 ${
                    isScrolled ? 'text-amber-800' : 'text-amber-800'
                  }`}
                >
                  {link.label}
                </button>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden md:block">
              <a 
                href="https://t.me/zaklinatel5am_bot"
                target="_blank"
                rel="noopener noreferrer"
                className={`px-5 py-2.5 rounded-full font-medium text-sm transition-all ${
                  isScrolled 
                    ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-white hover:shadow-lg' 
                    : 'bg-white/90 text-amber-600 hover:bg-white'
                }`}
              >
                Начать
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden w-10 h-10 rounded-xl bg-amber-100 flex items-center justify-center"
            >
              {isMobileMenuOpen ? (
                <X className="w-5 h-5 text-amber-700" />
              ) : (
                <Menu className="w-5 h-5 text-amber-700" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div 
        className={`fixed inset-0 z-40 md:hidden transition-all duration-300 ${
          isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <div 
          className="absolute inset-0 bg-black/20 backdrop-blur-sm"
          onClick={() => setIsMobileMenuOpen(false)}
        />
        <div 
          className={`absolute top-20 left-4 right-4 bg-white rounded-2xl shadow-2xl p-6 transition-all duration-300 ${
            isMobileMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0'
          }`}
        >
          <div className="space-y-4">
            {navLinks.map((link, index) => (
              <button
                key={index}
                onClick={() => scrollToSection(link.href)}
                className="block w-full text-left py-3 px-4 rounded-xl text-amber-800 font-medium hover:bg-amber-50 transition-colors"
              >
                {link.label}
              </button>
            ))}
            <a 
              href="https://t.me/zaklinatel5am_bot"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full py-3 px-4 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 text-white font-medium text-center mt-4"
            >
              Начать трансформацию
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navigation;
