import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';
import { content } from '../data/content';

export default function Footer() {
  const { language, toggleLanguage } = useLanguage();
  const { theme } = useTheme();
  const text = content[language].footer;
  const navText = content[language].nav;
  const isDark = theme === 'dark';

  const navLinks = [
    { name: navText.work, href: '#work' },
    { name: navText.capabilities, href: '#capabilities' },
    { name: navText.about, href: '#about' },
    { name: navText.contact, href: '#contact' },
  ];

  return (
    <footer className={`py-10 px-8 border-t ${
      isDark ? 'bg-neutral-950 border-neutral-800' : 'bg-neutral-50 border-neutral-200'
    }`}>
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        
        <div className="text-center md:text-left">
          <p className={`font-display text-xl mb-1 ${isDark ? 'text-neutral-100' : ''}`}>{text.name}</p>
          <p className={`text-sm uppercase tracking-widest ${isDark ? 'text-neutral-500' : 'text-neutral-500'}`}>{text.role}</p>
        </div>

        <nav className={`flex flex-wrap justify-center gap-5 text-sm font-medium ${isDark ? 'text-neutral-400' : 'text-neutral-600'}`}>
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className={`transition-colors ${isDark ? 'hover:text-neutral-100' : 'hover:text-neutral-900'}`}>
              {link.name}
            </a>
          ))}
        </nav>

        <div className="flex flex-col items-center md:items-end gap-3">
          <button 
            onClick={toggleLanguage}
            className={`text-xs uppercase tracking-widest font-semibold transition-colors ${
              isDark ? 'text-neutral-500 hover:text-neutral-100' : 'text-neutral-500 hover:text-neutral-900'
            }`}
          >
            {language === 'en' ? 'PT' : 'EN'}
          </button>
          <p className={`text-xs ${isDark ? 'text-neutral-600' : 'text-neutral-400'}`}>
            {text.copyright}
          </p>
        </div>

      </div>
    </footer>
  );
}
