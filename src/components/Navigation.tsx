import { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';
import { content } from '../data/content';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Sun, Moon } from 'lucide-react';

export default function Navigation() {
  const { language, toggleLanguage } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const isDark = theme === 'dark';
  const text = content[language].nav;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: text.work, href: '#work' },
    { name: text.capabilities, href: '#capabilities' },
    { name: text.about, href: '#about' },
    { name: text.contact, href: '#contact' },
  ];

  return (
    <header 
      className={`fixed z-50 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
        isScrolled 
          ? 'top-4 left-1/2 -translate-x-1/2 w-auto max-w-[90vw]'
          : 'top-0 left-0 right-0 w-full'
      }`}
    >
      <div className={`transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] flex items-center justify-between ${
        isScrolled
          ? isDark
            ? 'bg-neutral-900/80 backdrop-blur-xl py-2.5 px-6 rounded-full border border-neutral-800 shadow-lg shadow-black/20'
            : 'bg-white/80 backdrop-blur-xl py-2.5 px-6 rounded-full border border-neutral-200/60 shadow-lg shadow-black/5'
          : 'bg-transparent py-5 px-8 max-w-7xl mx-auto'
      }`}>
        <a href="#" className="z-50 flex items-center">
          <img 
            src="/logo.webp" 
            alt="Edgar Kassocota Logo" 
            className={`w-auto object-contain transition-all duration-500 ${
              isScrolled ? 'h-8' : 'h-12'
            } ${isDark ? 'brightness-0 invert' : ''}`} 
          />
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8 text-sm font-medium">
          <nav className="flex space-x-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className={`transition-colors ${
                  isDark 
                    ? 'text-neutral-400 hover:text-neutral-100' 
                    : 'text-neutral-600 hover:text-neutral-900'
                }`}
              >
                {link.name}
              </a>
            ))}
          </nav>
          
          <div className={`flex items-center space-x-4 border-l pl-6 ${
            isDark ? 'border-neutral-700' : 'border-neutral-300'
          }`}>
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="theme-toggle-btn"
              aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              <AnimatePresence mode="wait" initial={false}>
                {isDark ? (
                  <motion.div
                    key="sun"
                    initial={{ rotate: -90, scale: 0, opacity: 0 }}
                    animate={{ rotate: 0, scale: 1, opacity: 1 }}
                    exit={{ rotate: 90, scale: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <Sun size={16} className="text-amber-400" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="moon"
                    initial={{ rotate: 90, scale: 0, opacity: 0 }}
                    animate={{ rotate: 0, scale: 1, opacity: 1 }}
                    exit={{ rotate: -90, scale: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <Moon size={16} className={isDark ? 'text-neutral-300' : 'text-neutral-600'} />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>

            <button 
              onClick={toggleLanguage}
              className={`transition-colors uppercase tracking-wider font-semibold text-xs ${
                isDark 
                  ? 'text-neutral-400 hover:text-neutral-100' 
                  : 'text-neutral-600 hover:text-neutral-900'
              }`}
            >
              {language === 'en' ? 'PT' : 'EN'}
            </button>
            <a 
              href="#contact"
              className={`px-5 py-2 rounded-full transition-colors ${
                isDark 
                  ? 'bg-neutral-100 text-neutral-900 hover:bg-neutral-200' 
                  : 'bg-neutral-900 text-neutral-50 hover:bg-neutral-800'
              }`}
            >
              Start a project
            </a>
          </div>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden z-50 flex items-center space-x-3">
          {/* Mobile Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="theme-toggle-btn"
            aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {isDark ? (
              <Sun size={16} className="text-amber-400" />
            ) : (
              <Moon size={16} className="text-neutral-600" />
            )}
          </button>
          
          <button 
            className={isDark ? 'text-neutral-100' : 'text-neutral-900'}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className={`fixed inset-0 z-40 pt-24 px-8 flex flex-col ${
              isDark ? 'bg-neutral-950' : 'bg-neutral-50'
            }`}
          >
            <nav className="flex flex-col space-y-6 text-2xl font-display mb-12">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={isDark ? 'text-neutral-100' : 'text-neutral-900'}
                >
                  {link.name}
                </a>
              ))}
            </nav>
            
            <div className={`flex items-center space-x-6 mt-auto mb-12 pb-6 border-b ${
              isDark ? 'border-neutral-800' : 'border-neutral-200'
            }`}>
              <span className={`text-sm uppercase tracking-widest ${isDark ? 'text-neutral-500' : 'text-neutral-500'}`}>Language</span>
              <button 
                onClick={toggleLanguage}
                className={`font-medium uppercase tracking-wider text-sm ${isDark ? 'text-neutral-100' : 'text-neutral-900'}`}
              >
                {language === 'en' ? 'Switch to Portuguese' : 'Switch to English'}
              </button>
            </div>
            
            <a 
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className={`px-6 py-4 rounded-full text-center font-medium mb-12 ${
                isDark 
                  ? 'bg-neutral-100 text-neutral-900' 
                  : 'bg-neutral-900 text-neutral-50'
              }`}
            >
              Start a project
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
