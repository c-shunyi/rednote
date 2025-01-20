// pages/index.js
import React from 'react';

export default function page() {
  return (
    <div className="bg-white">
      {/* Header Section */}
      <section className="text-center p-8 sm:py-16 sm:px-6">
        <h2 className="text-red-500 text-lg font-bold">User Success Stories</h2>
        <h1 className="text-2xl sm:text-3xl text-gray-900 mt-2 md:text-4xl">
          Trusted by RedNote Creators
        </h1>
        <p className="mt-4 text-gray-600 leading-relaxed max-w-2xl mx-auto text-base sm:text-lg">
          Join thousands of successful creators growing on RedNote using our
          platform.
        </p>
      </section>

      {/* Testimonials Section */}
      <section className="py-2 sm:py-12 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 sm:gap-6 max-w-5xl mx-auto">
          {[
            {
              quote:
                'RedNote AI has transformed my content creation process. The translation from English to Chinese is extremely accurate, and the platform-specific formats save me hours of work!',
              name: 'Sarah M.',
              role: 'Beauty Influencer | 50K+ RedNote Followers',
            },
            {
              quote:
                'The Chinese name generator and content localization tools have helped us build a strong brand presence on RedNote. This is essential for any international brand!',
              name: 'Michael L.',
              role: 'Global Marketing Director',
            },
            {
              quote:
                'From account setup to content creation, RedNote AI has made our journey smooth and successful. The ROI is incredible!',
              name: 'Emma W.',
              role: 'E-commerce Entrepreneur | 200% Growth',
            },
          ].map((testimonial, idx) => (
            <div
              key={idx}
              className="bg-white shadow-md rounded-lg p-6 flex flex-col items-start space-y-4"
            >
              <p className="text-gray-700 text-sm leading-relaxed">
                {`"${testimonial.quote}"`}
              </p>
              <div className="flex items-center space-x-4">
                <div className="text-red-500 text-3xl">👤</div>
                <div>
                  <h3 className="text-gray-900 font-bold">
                    {testimonial.name}
                  </h3>
                  <p className="text-gray-600 text-sm">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
