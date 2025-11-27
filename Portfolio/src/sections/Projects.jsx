import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionWrapper from '../components/SectionWrapper';
import Card from '../components/Card';
import Button from '../components/Button';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const renderLogo = (project, size = 'large') => {
    const baseClasses =
      size === 'large'
        ? 'flex items-center justify-center mb-4'
        : 'flex items-center justify-center mb-6';
    if (project.logo?.type === 'image') {
      return (
        <div className={`${baseClasses}`}>
          <img
            src={project.logo.src}
            alt={project.logo.alt || project.title}
            className={`object-contain ${size === 'large' ? 'h-20' : 'h-32'}`}
          />
        </div>
      );
    }
    const emoji = project.logo?.value || '🚀';
    return (
      <div className={`${baseClasses} text-6xl`}>
        <span>{emoji}</span>
      </div>
    );
  };

  const projects = [
    {
      id: 1,
      title: 'Growix',
      description:
        'Online dance-workshop marketplace that lets organizers publish sessions, dancers book, like, and save workshops, and everyone stay synced in real time.',
      tech: ['React', 'Node.js', 'Express', 'MongoDB'],
      logo: { type: 'image', src: '/Logo.Growix.png', alt: 'Growix logo' },
      color: 'neon-pink',
      link: 'https://www.growix.lt/',
      github: 'https://github.com/ImTreisis/Growix',
    },
    {
      id: 2,
      title: 'WingSearch',
      description:
        'Full-stack flight tracking and fare finder that surfaces the cheapest routes, tracks favourites, and talks to cloud APIs for live data.',
      tech: ['React', 'Node.js', 'Express', 'MongoDB'],
      logo: { type: 'emoji', value: '✈️' },
      color: 'neon-blue',
      link: 'https://wingsearch.vercel.app/',
      github: 'https://github.com/ImTreisis/WingSearch',
    },
    {
      id: 3,
      title: 'Portfolio',
      description:
        'This cyberpunk portfolio you are browsing—built with neon aesthetics, Framer Motion transitions, and an Express backend.',
      tech: ['React', 'Node.js', 'Express', 'TailwindCSS'],
      logo: { type: 'image', src: '/Treisis.jpeg', alt: 'Treisis Gakas' },
      color: 'neon-purple',
      link: null,
      github: 'https://github.com/ImTreisis/Portfolio',
    },
    {
      id: 4,
      title: 'HungryAI (Upcoming)',
      description:
        'Swipe-to-like ingredient app that will generate recipe ideas, meal plans, and nutritional breakdowns powered by AI.',
      tech: ['React', 'Node.js', 'Express'],
      logo: { type: 'emoji', value: '🍱' },
      color: 'neon-cyan',
      link: null,
      github: null,
      isUpcoming: true,
    },
  ];

  return (
    <SectionWrapper id="projects">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          <span className="text-neon-purple">My</span>
          <span className="text-neon-cyan"> Projects</span>
        </h2>
        <div className="w-24 h-1 bg-neon-pink mx-auto mb-12 shadow-neon-pink" />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
                <Card
                  className="h-full cursor-pointer group"
                  onClick={() => setSelectedProject(project)}
                >
                  {project.isUpcoming && (
                    <span className="inline-block px-3 py-1 mb-3 text-xs font-semibold text-neon-pink border border-neon-pink rounded-full tracking-widest">
                      Upcoming
                    </span>
                  )}
                  {renderLogo(project)}
                <h3 className="text-xl font-bold text-neon-cyan mb-2 group-hover:text-neon-pink transition-colors">
                  {project.title}
                </h3>
                  <p className="body-text text-gray-100/90 text-sm mb-4 line-clamp-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 text-xs bg-cyber-dark border border-neon-purple text-neon-purple rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-2 flex-wrap">
                  <Button
                    variant="purple"
                    className={`flex-1 text-sm py-2 ${
                      !project.link ? 'opacity-50 cursor-not-allowed' : ''
                    }`}
                    onClick={(e) => {
                      e.stopPropagation();
                      if (project.link) {
                        window.open(project.link, '_blank');
                      }
                    }}
                    disabled={!project.link}
                  >
                    {project.link ? 'Live Demo' : project.isUpcoming ? 'In Progress' : 'Live Soon'}
                  </Button>
                  <Button
                    variant="cyan"
                    className={`flex-1 text-sm py-2 ${
                      !project.github ? 'opacity-50 cursor-not-allowed' : ''
                    }`}
                    onClick={(e) => {
                      e.stopPropagation();
                      if (project.github) {
                        window.open(project.github, '_blank');
                      }
                    }}
                    disabled={!project.github}
                  >
                    {project.github ? 'GitHub' : 'Private Repo'}
                  </Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Project Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-cyber-card border-2 border-neon-purple rounded-lg p-6 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-3xl font-bold text-neon-cyan">
                    {selectedProject.title}
                  </h3>
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="text-neon-pink hover:text-neon-cyan text-2xl"
                  >
                    ×
                  </button>
                </div>
                {renderLogo(selectedProject, 'modal')}
                <p className="body-text text-gray-100/90 mb-6">{selectedProject.description}</p>
                <div className="mb-6">
                  <h4 className="text-neon-purple font-semibold mb-2">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-cyber-dark border border-neon-purple text-neon-purple rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex gap-4 flex-wrap">
                  <Button
                    variant="purple"
                    onClick={() => selectedProject.link && window.open(selectedProject.link, '_blank')}
                    disabled={!selectedProject.link}
                    className={!selectedProject.link ? 'opacity-50 cursor-not-allowed' : ''}
                  >
                    {selectedProject.link ? 'View Live' : 'Coming Soon'}
                  </Button>
                  <Button
                    variant="cyan"
                    onClick={() =>
                      selectedProject.github && window.open(selectedProject.github, '_blank')
                    }
                    disabled={!selectedProject.github}
                    className={!selectedProject.github ? 'opacity-50 cursor-not-allowed' : ''}
                  >
                    {selectedProject.github ? 'View Code' : 'Private Repo'}
                  </Button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </SectionWrapper>
  );
};

export default Projects;


