import React from 'react';

function Contact() {
  return (
    <footer id="contact" className="bg-purple-600 text-white py-6">
      <div className="container mx-auto flex justify-center items-center">
        <div className="flex flex-col md:flex-row md:space-x-8 text-center md:text-left">
          <div className="flex items-center mb-2 md:mb-0">
            <span className="mr-2">📧</span>
            <a 
              href="mailto:sachinmhetre678@gmail.com" 
              className="hover:underline"
            >
              sachinmhetre678@gmail.com
            </a>
          </div>
          <div className="flex items-center mb-2 md:mb-0">
            <span className="mr-2">👤</span>
            <a 
              href="https://github.com/SachinMhetre678" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:underline"
            >
              GitHub: SachinMhetre678
            </a>
          </div>
          <div className="flex items-center">
            <span className="mr-2">🌐</span>
            <a 
              href="https://sachinmhetre.vercel.app" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:underline"
            >
              Website: sachinmhetre.vercel.app
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Contact;
