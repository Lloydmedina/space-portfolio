"use client";
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Project One',
    description: 'A brief description of your first project.',
    imageUrl: 'https://placehold.co/600x400/333333/FFFFFF/png?text=Project+One',
    liveUrl: '#',
    sourceUrl: '#',
  },
  {
    title: 'Project Two',
    description: 'A brief description of your second project.',
    imageUrl: 'https://placehold.co/600x400/333333/FFFFFF/png?text=Project+Two',
    liveUrl: '#',
    sourceUrl: '#',
  },
  {
    title: 'Project Three',
    description: 'A brief description of your third project.',
    imageUrl: 'https://placehold.co/600x400/333333/FFFFFF/png?text=Project+Three',
    liveUrl: '#',
    sourceUrl: '#',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-black">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-white text-center mb-12">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-gray-800 rounded-lg overflow-hidden"
            >
              <img src={project.imageUrl} alt={project.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex justify-between">
                  <a href={project.liveUrl} className="text-blue-400 hover:text-blue-300 transition-colors duration-300">View Live</a>
                  <a href={project.sourceUrl} className="text-gray-400 hover:text-white transition-colors duration-300">Source Code</a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
