import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';
import { content } from '../data/content';
import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';

export default function SelectedWork() {
  const { language } = useLanguage();
  const { theme } = useTheme();
  const text = content[language].selectedWork;
  const isDark = theme === 'dark';

  return (
    <section id="work" className={`py-20 md:py-28 px-8 border-t ${isDark ? 'border-neutral-800' : 'border-neutral-200'}`}>
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 md:mb-24 max-w-2xl">
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

        <div className="space-y-24 md:space-y-36">
          {text.projects.map((project, index) => {
            // Alternate layout directions for visual rhythm
            const isEven = index % 2 === 0;
            const isFeatured = index === 0; // Make the first one stand out more

            return (
              <motion.div 
                key={project.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-10 lg:gap-16 items-center`}
              >
                {/* Visual */}
                <div className={`w-full ${isFeatured ? 'lg:w-3/5' : 'lg:w-1/2'}`}>
                  <div className={`group relative block overflow-hidden aspect-[4/3] sm:aspect-video lg:aspect-[4/3] ${isDark ? 'bg-neutral-800' : 'bg-neutral-100'}`}>
                    {project.image ? (
                      <img 
                        src={project.image} 
                        alt={project.name}
                        className="absolute inset-0 w-full h-full object-contain transition-transform duration-700 group-hover:scale-105"
                      />
                    ) : (
                      <div className="absolute inset-0 image-placeholder transition-transform duration-700 group-hover:scale-105">
                        <span>{project.name} Visual Placeholder</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Content */}
                <div className={`w-full ${isFeatured ? 'lg:w-2/5' : 'lg:w-1/2'}`}>
                  <div className="flex items-center space-x-4 mb-5">
                    <span className={`text-xs uppercase tracking-widest font-semibold ${isDark ? 'text-neutral-500' : 'text-neutral-500'}`}>
                      {project.type}
                    </span>
                    <div className={`h-px w-12 ${isDark ? 'bg-neutral-700' : 'bg-neutral-300'}`}></div>
                  </div>
                  
                  <h3 className={`text-2xl md:text-3xl font-display mb-3 ${isDark ? 'text-neutral-50' : ''}`}>
                    {project.name}
                  </h3>
                  
                  <p className={`text-sm mb-6 font-medium ${isDark ? 'text-neutral-500' : 'text-neutral-500'}`}>
                    {project.industry}
                  </p>
                  
                  <p className={`text-lg mb-6 leading-snug ${isDark ? 'text-neutral-200' : 'text-neutral-900'}`}>
                    {project.description}
                  </p>

                  <div className="space-y-5 mb-8">
                    <div>
                      <h4 className={`text-xs uppercase tracking-widest font-semibold mb-2 ${isDark ? 'text-neutral-600' : 'text-neutral-400'}`}>Challenge</h4>
                      <p className={`text-sm leading-relaxed ${isDark ? 'text-neutral-400' : 'text-neutral-600'}`}>{project.challenge}</p>
                    </div>
                    <div>
                      <h4 className={`text-xs uppercase tracking-widest font-semibold mb-2 ${isDark ? 'text-neutral-600' : 'text-neutral-400'}`}>Solution</h4>
                      <p className={`text-sm leading-relaxed ${isDark ? 'text-neutral-400' : 'text-neutral-600'}`}>{project.solution}</p>
                    </div>
                    <div>
                      <h4 className={`text-xs uppercase tracking-widest font-semibold mb-2 ${isDark ? 'text-neutral-600' : 'text-neutral-400'}`}>Outcome</h4>
                      <p className={`font-medium text-sm leading-relaxed ${isDark ? 'text-neutral-200' : 'text-neutral-900'}`}>{project.outcome}</p>
                    </div>
                  </div>
                  
                  {project.url && (
                    <a 
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center space-x-2 text-sm font-semibold uppercase tracking-wider transition-colors group ${
                        isDark ? 'text-neutral-100 hover:text-neutral-400' : 'text-neutral-900 hover:text-neutral-600'
                      }`}
                    >
                      <span>{text.viewLive}</span>
                      <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </a>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
