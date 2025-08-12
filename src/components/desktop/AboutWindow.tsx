import React from 'react';

const AboutWindow = () => {
  return (
    <div className="p-8 text-gray-800 h-full overflow-auto">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">About Me</h2>
        <div className="prose prose-lg">
          <p className="text-lg mb-6">
            I am a passionate and creative web developer with a love for building beautiful and functional websites. 
            I have experience with a variety of technologies, including React, Next.js, and Tailwind CSS.
          </p>
          <p className="text-lg mb-6">
            I am always eager to learn new things and take on new challenges. Whether it&apos;s exploring new frameworks,
            optimizing performance, or creating engaging user experiences, I approach every project with enthusiasm
            and attention to detail.
          </p>
          <div className="bg-gray-100 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4 text-gray-900">Skills & Technologies</h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h4 className="font-medium text-gray-800 mb-2">Frontend</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>React & Next.js</li>
                  <li>TypeScript</li>
                  <li>Tailwind CSS</li>
                  <li>Framer Motion</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium text-gray-800 mb-2">Tools</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>Git & GitHub</li>
                  <li>VS Code</li>
                  <li>npm/yarn</li>
                  <li>Vercel/Netlify</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutWindow;