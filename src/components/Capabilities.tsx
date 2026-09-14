import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';
import { content } from '../data/content';
import { motion } from 'motion/react';

export default function Capabilities() {
  const { language } = useLanguage();
  const { theme } = useTheme();
  const text = content[language].capabilities;
  const isDark = theme === 'dark';

  return (
    <section id="capabilities" className={`py-20 md:py-28 px-8 ${
      isDark ? 'bg-neutral-100 text-neutral-900' : 'bg-neutral-900 text-neutral-50'
    }`}>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 mb-16">
          <div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-5xl font-display mb-6"
            >
              {text.title}
            </motion.h2>
          </div>
          <div>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className={`text-2xl md:text-3xl font-light leading-snug mb-5 ${
                isDark ? 'text-neutral-700' : 'text-neutral-200'
              }`}
            >
              {text.support}
            </motion.p>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className={`text-lg leading-relaxed ${isDark ? 'text-neutral-500' : 'text-neutral-400'}`}
            >
              {text.description}
            </motion.p>
          </div>
        </div>

        <div className={`grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-14 border-t pt-14 ${
          isDark ? 'border-neutral-300' : 'border-neutral-800'
        }`}>
          {text.items.map((item, index) => (
            <motion.div 
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 + (index * 0.1) }}
            >
              <h3 className="text-xl font-medium mb-3">{item.title}</h3>
              <p className={`mb-5 leading-relaxed ${isDark ? 'text-neutral-500' : 'text-neutral-400'}`}>
                {item.description}
              </p>
              <div className={`text-sm leading-relaxed ${isDark ? 'text-neutral-400' : 'text-neutral-500'}`}>
                <span className={`block text-xs uppercase tracking-widest mb-2 ${isDark ? 'text-neutral-500' : 'text-neutral-600'}`}>Examples</span>
                {item.examples}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
