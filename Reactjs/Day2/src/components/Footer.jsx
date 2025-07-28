import React from 'react';

function Footer() {
  return (
    <footer className="bg-purple-100 py-4 px-6 shadow-inner">
      <div className="flex justify-around">
        <div className="text-center">
          <h2 className="text-base font-semibold text-gray-800">Sneha Sanjay Gaikwad</h2>
          <p className="text-sm">
            Email: <a href="mailto:sneha@example.com" className="text-indigo-600 hover:underline">sneha@example.com</a>
          </p>
          <div className="mt-2 flex justify-around gap-4 text-sm text-gray-600">
            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-800">GitHub</a>
            <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-800">LinkedIn</a>
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-800">Resume</a>
          </div>
          <p className="text-xs text-gray-400 mt-2">
            © {2025} Sneha Gaikwad. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
