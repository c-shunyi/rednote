import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

interface MdContentProps {
  markdown: string;
}

const MdContent: React.FC<MdContentProps> = ({ markdown }) => {
  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      components={{
        strong: ({ children }) => (
          <strong className="text-red-500 text-lg py-2">{children}</strong>
        ),
        p: ({ children }) => (
          <p className="text-gray-600 text-center">{children}</p>
        ),
      }}
    >
      {markdown}
    </ReactMarkdown>
  );
};

export default MdContent;
