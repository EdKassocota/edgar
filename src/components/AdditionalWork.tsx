import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';
import { content } from '../data/content';
import { motion } from 'motion/react';

export default function AdditionalWork() {
  const { language } = useLanguage();
  const { theme } = useTheme();
  const text = content[language].additionalWork;
  const isDark = theme === 'dark';

  // We'll create a few representative conceptual placeholders for this section
  // to show the breadth of the 20+ projects mentioned.
  const additionalProjects = [
    { name: 'Concept A', type: 'Prototype', year: '2023' },
    { name: 'Experiment B', type: 'Unpublished', year: '2023' },
    { name: 'Commercial Project C', type: 'Archive', year: '2022' },
    { name: 'Concept D', type: 'Prototype', year: '2022' }
  ];

  return (
    <section className={`py-16 px-8 border-t ${isDark ? 'border-neutral-800' : 'border-neutral-200'}`}>
      <div className="max-w-7xl mx-auto">
        <div className="mb-10">
          <motion.h3 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={`text-2xl font-display mb-2 ${isDark ? 'text-neutral-50' : ''}`}
          >
            {text.title}
          </motion.h3>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className={isDark ? 'text-neutral-400' : 'text-neutral-500'}
          >
            {text.support} <span className={`text-sm ml-2 ${isDark ? 'text-neutral-500' : 'text-neutral-400'}`}>({text.note})</span>
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {additionalProjects.map((project, index) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`group cursor-default border-t pt-4 ${isDark ? 'border-neutral-800' : 'border-neutral-200'}`}
            >
              <p className={`text-sm font-medium mb-1 ${isDark ? 'text-neutral-200' : 'text-neutral-900'}`}>{project.name}</p>
              <div className={`flex items-center justify-between text-xs uppercase tracking-widest ${isDark ? 'text-neutral-500' : 'text-neutral-500'}`}>
                <span>{project.type}</span>
                <span>{project.year}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
