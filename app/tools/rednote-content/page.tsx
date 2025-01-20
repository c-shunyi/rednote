import Builder from '../components/builder';
import React from 'react';
import Top from '../components/top';
import Footer from '../../components/footer';
import MoreTools from '../components/moreTools';
const page = () => {
  const topData = {
    title: 'Rednote Content',
    desc: 'Create and share your notes with the world.',
  };
  const features = [
    {
      title: 'Translation',
      link: '/tools/translate-rednote',
      desc: 'English to RedNote and Mandarin to English translations',
      icon: '📚',
    },
    {
      title: 'Chinese Name',
      link: '/tools/rednote-chinese-name',
      desc: 'Generate beautiful Chinese names for your RedNote',
      icon: '👤',
    },
    {
      title: 'Content Tools',
      link: '/powerful-ai-tools',
      desc: 'Powerful AI tools for creating professional RedNote content',
      icon: '📖',
    },
  ];
  return (
    <div className="bg-white min-h-screen">
      <Top {...topData} />
      <Builder type="rednote-content" />
      <MoreTools features={features} />
      <Footer />
    </div>
  );
};

export const metadata = () => {
  return {
    title: 'RedNote - Rednote Content',
    description: 'Create and share your notes with the world.',
    openGraph: {
      title: 'RedNote - Rednote Content',
      description: 'Create and share your notes with the world.',
    },
    twitter: {
      title: 'RedNote - Rednote Content',
      description: 'Create and share your notes with the world.',
    },
    alternate: {
      canonical: 'https://ainotebook.app/blog',
    },
  };
};

export default page;
