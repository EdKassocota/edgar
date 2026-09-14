import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';
import { content } from '../data/content';
import { motion } from 'motion/react';

export default function Technology() {
  const { language } = useLanguage();
  const { theme } = useTheme();
  const text = content[language].technology;
  const isDark = theme === 'dark';

  return (
    <section className={`py-16 px-8 border-b ${isDark ? 'border-neutral-800' : 'border-neutral-200'}`}>
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-6">
        <motion.h3 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className={`text-lg font-medium md:w-1/4 ${isDark ? 'text-neutral-100' : 'text-neutral-900'}`}
        >
          {text.title}
        </motion.h3>
        
        <div className="flex flex-wrap items-center gap-x-8 gap-y-3 md:w-3/4 md:justify-end">
          {text.tools.map((tool, index) => (
            <motion.span 
              key={tool}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className={`font-sans tracking-wide uppercase text-sm ${isDark ? 'text-neutral-500' : 'text-neutral-500'}`}
            >
              {tool}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  );
}
