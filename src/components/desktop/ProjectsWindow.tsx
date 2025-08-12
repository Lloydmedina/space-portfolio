import React from 'react';

const ProjectsWindow = () => {
  const projects = [
    {
      id: 1,
      title: "Project One",
      description: "A modern web application built with React and Next.js featuring responsive design and smooth animations.",
      image: "/api/placeholder/400/300",
      technologies: ["React", "Next.js", "Tailwind CSS"],
      liveUrl: "#",
      sourceUrl: "#"
    },
    {
      id: 2,
      title: "Project Two", 
      description: "An interactive dashboard with data visualization components and real-time updates.",
      image: "/api/placeholder/400/300",
      technologies: ["TypeScript", "React", "Chart.js"],
      liveUrl: "#",
      sourceUrl: "#"
    },
    {
      id: 3,
      title: "Project Three",
      description: "A full-stack application with user authentication and database integration.",
      image: "/api/placeholder/400/300", 
      technologies: ["Node.js", "Express", "MongoDB"],
      liveUrl: "#",
      sourceUrl: "#"
    }
  ];

  return (
    <div className="p-8 text-gray-800 h-full overflow-auto">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-gray-900">My Projects</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map(project => (
            <div key={project.id} className="bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-48 bg-gray-200 flex items-center justify-center">
                <div className="text-gray-500 text-6xl">🚀</div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-900">{project.title}</h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>
                
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map(tech => (
                      <span 
                        key={tech}
                        className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex space-x-3">
                  <a 
                    href={project.liveUrl}
                    className="flex-1 bg-blue-600 text-white text-center py-2 px-4 rounded text-sm hover:bg-blue-700 transition-colors"
                  >
                    View Live
                  </a>
                  <a 
                    href={project.sourceUrl}
                    className="flex-1 border border-gray-300 text-gray-700 text-center py-2 px-4 rounded text-sm hover:bg-gray-50 transition-colors"
                  >
                    Source Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsWindow;