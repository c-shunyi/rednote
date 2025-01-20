// pages/index.js
import React from 'react';

export default function Home() {
  return (
    <div id="features" className="bg-white">
      {/* Hero Section */}
      <section className="text-center p-8 sm:py-16 sm:px-6">
        <h2 className="text-red-500 text-lg font-bold">Core Features</h2>
        <h1 className="text-2xl sm:text-3xl text-gray-900 mt-2 md:text-4xl">
          Everything You Need for RedNote Success
        </h1>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-base sm:text-lg">
          Our comprehensive suite of tools helps you easily create, translate,
          and optimize your RedNote content.
        </p>
      </section>

      {/* Features Section */}
      <section className="py-2 sm:py-12 px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 sm:gap-6 max-w-4xl mx-auto">
          {[
            {
              icon: '✨',
              title: 'AI Content Creation',
              desc: 'Transform English ideas into perfect RedNote posts',
            },
            {
              icon: '🔒',
              title: 'Account Management',
              desc: 'Secure setup and verification support',
            },
            {
              icon: '👤',
              title: 'Chinese Name Generator',
              desc: 'Create authentic brand names for RedNote',
            },
            {
              icon: '📖',
              title: 'Success Guides',
              desc: 'Expert tips for growing on RedNote',
            },
          ].map((feature, idx) => (
            <div
              key={idx}
              className="bg-white shadow-md rounded-lg p-6 flex items-start space-x-4"
            >
              <div className="text-red-500 text-3xl">{feature.icon}</div>
              <div>
                <h3 className="text-lg font-bold text-gray-900">
                  {feature.title}
                </h3>
                <p className="text-gray-600 mt-2">{feature.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
