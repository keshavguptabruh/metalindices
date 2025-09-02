import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center">
          <p className="text-gray-400">
            © {currentYear} Groundwater Research Team. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;