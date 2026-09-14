import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';
import { content } from '../data/content';
import { motion } from 'motion/react';

export default function About() {
  const { language } = useLanguage();
  const { theme } = useTheme();
  const text = content[language].about;
  const isDark = theme === 'dark';

  return (
    <section id="about" className={`py-20 md:py-28 px-8 overflow-hidden ${
      isDark ? 'bg-neutral-100 text-neutral-900' : 'bg-neutral-900 text-neutral-50'
    }`}>
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
        
        {/* Portrait / Visual */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-5 relative"
        >
          <div className={isDark ? 'w-full bg-neutral-200 text-neutral-500' : 'w-full bg-neutral-800 text-neutral-600'}>
            <img 
              src="/eu-2.webp" 
              alt="Edgar Kassocota"
              className="w-full h-auto object-contain block opacity-90 hover:opacity-100 transition-opacity duration-700"
            />
          </div>
          {/* Accent decoration */}
          <div className={`absolute -top-4 -right-4 w-32 h-32 border-t border-r hidden lg:block ${
            isDark ? 'border-neutral-400' : 'border-neutral-700'
          }`}></div>
        </motion.div>

        {/* Content */}
        <div className="lg:col-span-6 lg:col-start-7">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl font-display mb-8"
          >
            {text.title}
          </motion.h2>
          
          <div className="space-y-5">
            {text.paragraphs.map((p, index) => (
              <motion.p 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 + (index * 0.1) }}
                className={`leading-relaxed ${index === 0 
                  ? `text-2xl md:text-3xl font-light mb-6 ${isDark ? 'text-neutral-700' : 'text-neutral-200'}` 
                  : `text-lg ${isDark ? 'text-neutral-500' : 'text-neutral-400'}`
                }`}
              >
                {p}
              </motion.p>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
