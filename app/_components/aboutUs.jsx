import React from 'react';

function AboutUs() {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-900">About Us</h2>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          Welcome to Collabio, a collaborative workspace designed to enhance teamwork and productivity. Founded by Sachin Mhetre, our mission is to empower individuals and teams to create, share, and collaborate seamlessly on projects.
        </p>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          At Collabio, we provide a suite of tools that allow you to manage your projects effectively. Our platform combines intuitive design with powerful features to help you stay organized and connected with your team.
        </p>
        <div className="mt-10">
          <h3 className="text-2xl font-semibold text-gray-800">Our Features</h3>
          <ul className="mt-4 space-y-2 text-left max-w-xl mx-auto">
            <li className="flex items-center">
              <span className="text-primary mr-2">✔️</span>
              Real-time collaboration: Work with your team in sync, regardless of location.
            </li>
            <li className="flex items-center">
              <span className="text-primary mr-2">✔️</span>
              User-friendly interface: Navigate easily with our intuitive design.
            </li>
            <li className="flex items-center">
              <span className="text-primary mr-2">✔️</span>
              Custom templates: Quickly start projects with our customizable templates.
            </li>
            <li className="flex items-center">
              <span className="text-primary mr-2">✔️</span>
              Cross-device accessibility: Access your workspace from any device.
            </li>
            <li className="flex items-center">
              <span className="text-primary mr-2">✔️</span>
              Enhanced security: We prioritize your data's security with robust measures.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
