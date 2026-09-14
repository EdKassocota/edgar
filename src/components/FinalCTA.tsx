import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';
import { content } from '../data/content';
import { motion } from 'motion/react';
import { Mail, Phone } from 'lucide-react';

export default function FinalCTA() {
  const { language } = useLanguage();
  const { theme } = useTheme();
  const text = content[language].contact;
  const isDark = theme === 'dark';

  return (
    <section id="contact" className="py-20 md:py-32 px-8">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className={`text-4xl md:text-6xl font-display mb-6 ${isDark ? 'text-neutral-50' : ''}`}
        >
          {text.primaryHeadline}
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className={`text-xl md:text-2xl font-light leading-relaxed mb-10 max-w-2xl mx-auto ${
            isDark ? 'text-neutral-400' : 'text-neutral-600'
          }`}
        >
          {text.primarySupport}
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-5 mb-16"
        >
          <a 
            href={`mailto:${text.email}`}
            className={`px-8 py-4 rounded-full font-medium transition-colors w-full sm:w-auto flex items-center justify-center space-x-2 ${
              isDark 
                ? 'bg-neutral-100 text-neutral-900 hover:bg-neutral-200' 
                : 'bg-neutral-900 text-neutral-50 hover:bg-neutral-800'
            }`}
          >
            <Mail size={18} />
            <span>{text.primaryCTA}</span>
          </a>
        </motion.div>

        <div className={`pt-12 border-t ${isDark ? 'border-neutral-800' : 'border-neutral-200'}`}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
            <div>
              <p className={`text-lg font-medium mb-2 ${isDark ? 'text-neutral-100' : 'text-neutral-900'}`}>{text.secondaryHeadline}</p>
              <p className={isDark ? 'text-neutral-400' : 'text-neutral-600'}>{text.secondarySupport}</p>
            </div>
            <div className="flex flex-col space-y-3 md:items-end md:justify-center">
              <a href={`mailto:${text.email}`} className={`flex items-center space-x-3 transition-colors group ${isDark ? 'text-neutral-400 hover:text-neutral-100' : 'text-neutral-600 hover:text-neutral-900'}`}>
                <span className="font-medium">{text.email}</span>
                <Mail size={16} className={`transition-colors ${isDark ? 'text-neutral-600 group-hover:text-neutral-100' : 'text-neutral-400 group-hover:text-neutral-900'}`} />
              </a>
              <a href={`tel:${text.phone}`} className={`flex items-center space-x-3 transition-colors group ${isDark ? 'text-neutral-400 hover:text-neutral-100' : 'text-neutral-600 hover:text-neutral-900'}`}>
                <span className="font-medium">{text.phone}</span>
                <Phone size={16} className={`transition-colors ${isDark ? 'text-neutral-600 group-hover:text-neutral-100' : 'text-neutral-400 group-hover:text-neutral-900'}`} />
              </a>
              <a href={text.instagram} target="_blank" rel="noopener noreferrer" className={`flex items-center space-x-3 transition-colors group ${isDark ? 'text-neutral-400 hover:text-neutral-100' : 'text-neutral-600 hover:text-neutral-900'}`}>
                <span className="font-medium">Instagram</span>
              </a>
              <a href={text.linkedin} target="_blank" rel="noopener noreferrer" className={`flex items-center space-x-3 transition-colors group ${isDark ? 'text-neutral-400 hover:text-neutral-100' : 'text-neutral-600 hover:text-neutral-900'}`}>
                <span className="font-medium">LinkedIn</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
