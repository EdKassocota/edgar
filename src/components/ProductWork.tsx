import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';
import { content } from '../data/content';
import { motion } from 'motion/react';

export default function ProductWork() {
  const { language } = useLanguage();
  const { theme } = useTheme();
  const text = content[language].productWork;
  const isDark = theme === 'dark';

  return (
    <section className={`py-20 md:py-28 px-8 ${isDark ? 'bg-neutral-900' : 'bg-neutral-100'}`}>
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 max-w-2xl">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={`text-3xl md:text-5xl font-display mb-5 ${isDark ? 'text-neutral-50' : ''}`}
          >
            {text.title}
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className={`text-lg leading-relaxed ${isDark ? 'text-neutral-400' : 'text-neutral-600'}`}
          >
            {text.support}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14">
          {text.projects.map((project, index) => (
            <motion.div 
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`p-7 md:p-10 border flex flex-col h-full ${
                isDark 
                  ? 'bg-neutral-800 border-neutral-700' 
                  : 'bg-neutral-50 border-neutral-200'
              }`}
            >
              <div className="mb-8">
                <div className="flex items-center justify-between mb-3">
                  <h3 className={`text-2xl font-display ${isDark ? 'text-neutral-50' : ''}`}>{project.name}</h3>
                  <span className={`text-xs uppercase tracking-widest font-semibold px-3 py-1 rounded-full ${
                    isDark 
                      ? 'bg-neutral-100 text-neutral-900' 
                      : 'bg-neutral-900 text-neutral-50'
                  }`}>
                    {project.status.includes('APK') ? 'Android' : 'Desktop'}
                  </span>
                </div>
                <p className={`text-sm font-medium uppercase tracking-wide mb-5 ${isDark ? 'text-neutral-500' : 'text-neutral-500'}`}>
                  {project.subtitle}
                </p>
                <p className={`text-lg leading-relaxed mb-6 ${isDark ? 'text-neutral-200' : 'text-neutral-900'}`}>
                  {project.description}
                </p>
                
                {project.problem && (
                  <div className="mb-5">
                    <p className={`text-sm leading-relaxed mb-2 ${isDark ? 'text-neutral-400' : 'text-neutral-600'}`}>
                      <span className={`font-semibold block mb-1 ${isDark ? 'text-neutral-200' : 'text-neutral-900'}`}>Problem:</span> {project.problem}
                    </p>
                    <p className={`text-sm leading-relaxed ${isDark ? 'text-neutral-400' : 'text-neutral-600'}`}>
                      <span className={`font-semibold block mb-1 ${isDark ? 'text-neutral-200' : 'text-neutral-900'}`}>Solution:</span> {project.solution}
                    </p>
                  </div>
                )}
              </div>

              <div className={`mt-auto pt-6 border-t ${isDark ? 'border-neutral-700' : 'border-neutral-200'}`}>
                <div className="mb-5">
                  <h4 className={`text-xs uppercase tracking-widest font-semibold mb-2 ${isDark ? 'text-neutral-500' : 'text-neutral-400'}`}>Core Capabilities</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.capabilities.map(cap => (
                      <span key={cap} className={`text-xs px-3 py-1 rounded-full ${
                        isDark 
                          ? 'bg-neutral-700 text-neutral-300' 
                          : 'bg-neutral-200 text-neutral-700'
                      }`}>
                        {cap}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4 text-sm">
                  {project.users && (
                    <div>
                      <span className={`block text-xs uppercase tracking-widest mb-1 ${isDark ? 'text-neutral-500' : 'text-neutral-400'}`}>Users</span>
                      <span className={isDark ? 'text-neutral-200' : 'text-neutral-900'}>{project.users}</span>
                    </div>
                  )}
                  {project.architecture && (
                    <div className={!project.users ? 'col-span-2' : ''}>
                      <span className={`block text-xs uppercase tracking-widest mb-1 ${isDark ? 'text-neutral-500' : 'text-neutral-400'}`}>Architecture</span>
                      <span className={isDark ? 'text-neutral-200' : 'text-neutral-900'}>{project.architecture}</span>
                    </div>
                  )}
                  {project.platform && (
                    <div>
                      <span className={`block text-xs uppercase tracking-widest mb-1 ${isDark ? 'text-neutral-500' : 'text-neutral-400'}`}>Platform</span>
                      <span className={isDark ? 'text-neutral-200' : 'text-neutral-900'}>{project.platform}</span>
                    </div>
                  )}
                </div>
                
                <div className={`mt-6 pt-5 border-t ${isDark ? 'border-neutral-700' : 'border-neutral-200'}`}>
                  <span className={`text-xs font-medium flex items-center ${isDark ? 'text-neutral-500' : 'text-neutral-500'}`}>
                    <span className={`w-2 h-2 rounded-full mr-2 ${isDark ? 'bg-neutral-500' : 'bg-neutral-400'}`}></span>
                    {project.status}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
