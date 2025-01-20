// components/ContentComponent.js
import React from 'react';

const ContentComponent = ({ title, desc }: { title: string; desc: string }) => {
  return (
    <div className="text-center py-16 px-6 pt-32">
      <h1 className="text-5xl font-extrabold text-red-500">{title}</h1>
      <p className="mt-4 text-gray-600 leading-relaxed max-w-2xl mx-auto">
        {desc}
      </p>
    </div>
  );
};

export default ContentComponent;
