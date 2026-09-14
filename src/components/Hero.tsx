import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';
import { content } from '../data/content';
import { motion } from 'motion/react';

export default function Hero() {
  const { language } = useLanguage();
  const { theme } = useTheme();
  const text = content[language].hero;
  const isDark = theme === 'dark';

  return (
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        
        {/* Text Content */}
        <div className="lg:col-span-7 xl:col-span-8 z-10">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className={`text-4xl md:text-6xl lg:text-7xl leading-[1.05] mb-6 ${
              isDark ? 'text-neutral-50' : 'text-neutral-900'
            }`}
          >
            {text.headline}
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className={`text-lg md:text-xl max-w-2xl mb-10 leading-relaxed ${
              isDark ? 'text-neutral-400' : 'text-neutral-600'
            }`}
          >
            {text.support}
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-6"
          >
            <a 
              href="#work"
              className={`px-8 py-4 rounded-full font-medium transition-colors w-full sm:w-auto text-center ${
                isDark 
                  ? 'bg-neutral-100 text-neutral-900 hover:bg-neutral-200' 
                  : 'bg-neutral-900 text-neutral-50 hover:bg-neutral-800'
              }`}
            >
              {text.primaryCTA}
            </a>
            <a 
              href="#contact"
              className={`px-8 py-4 rounded-full font-medium transition-colors w-full sm:w-auto text-center ${
                isDark 
                  ? 'text-neutral-100 hover:bg-neutral-800' 
                  : 'text-neutral-900 hover:bg-neutral-200'
              }`}
            >
              {text.secondaryCTA}
            </a>
          </motion.div>
        </div>

        {/* Editorial Portrait */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-5 xl:col-span-4 relative"
        >
          <div className={`w-full overflow-hidden relative ${isDark ? 'bg-neutral-800' : 'bg-neutral-200'}`}>
            <img 
              src="/eu-1.webp" 
              alt="Edgar Kassocota"
              className="w-full h-auto object-contain block grayscale hover:grayscale-0 transition-all duration-700"
            />
          </div>
          {/* Subtle architectural accent line */}
          <div className={`absolute -bottom-6 -left-6 w-24 h-[1px] hidden lg:block ${isDark ? 'bg-neutral-100' : 'bg-neutral-900'}`}></div>
          <div className={`absolute -bottom-6 -left-6 w-[1px] h-24 hidden lg:block ${isDark ? 'bg-neutral-100' : 'bg-neutral-900'}`}></div>
        </motion.div>

      </div>
    </section>
  );
}
