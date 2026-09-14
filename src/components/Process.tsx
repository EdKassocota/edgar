import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';
import { content } from '../data/content';
import { motion } from 'motion/react';

export default function Process() {
  const { language } = useLanguage();
  const { theme } = useTheme();
  const text = content[language].process;
  const isDark = theme === 'dark';

  return (
    <section className={`py-20 md:py-28 px-8 border-t ${isDark ? 'border-neutral-800' : 'border-neutral-200'}`}>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
          <div className="lg:col-span-5 xl:col-span-4 lg:pr-8">
            <div className="sticky top-28">
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={`text-3xl md:text-5xl font-display mb-6 ${isDark ? 'text-neutral-50' : ''}`}
              >
                {text.title}
              </motion.h2>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className={`p-5 border-l-2 ${
                  isDark 
                    ? 'bg-neutral-800 border-neutral-100' 
                    : 'bg-neutral-100 border-neutral-900'
                }`}
              >
                <p className={`font-medium text-lg leading-relaxed ${isDark ? 'text-neutral-200' : 'text-neutral-900'}`}>
                  {text.delivery}
                </p>
              </motion.div>
            </div>
          </div>

          <div className="lg:col-span-7 xl:col-span-7 xl:col-start-6">
            <div className="space-y-10">
              {text.steps.map((step, index) => (
                <motion.div 
                  key={step.number}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`relative pl-10 md:pl-14 border-l pb-10 last:pb-0 last:border-transparent ${
                    isDark ? 'border-neutral-800' : 'border-neutral-200'
                  }`}
                >
                  <div className={`absolute top-0 left-[-17px] py-2 ${isDark ? 'bg-neutral-950' : 'bg-neutral-50'}`}>
                    <span className={`flex items-center justify-center w-8 h-8 rounded-full border text-xs font-semibold ${
                      isDark 
                        ? 'border-neutral-700 bg-neutral-900 text-neutral-400' 
                        : 'border-neutral-300 bg-neutral-50 text-neutral-500'
                    }`}>
                      {step.number}
                    </span>
                  </div>
                  
                  <h3 className={`text-xl font-display mb-3 pt-1 ${isDark ? 'text-neutral-50' : ''}`}>{step.name}</h3>
                  <p className={`text-lg leading-relaxed max-w-xl ${isDark ? 'text-neutral-400' : 'text-neutral-600'}`}>
                    {step.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
