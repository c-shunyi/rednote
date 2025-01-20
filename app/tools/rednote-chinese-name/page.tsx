import Builder from '../components/builder';
import React from 'react';
import Top from '../components/top';
import Footer from '../../components/footer';
import MoreTools from '../components/moreTools';
const page = () => {
  const topData = {
    title: 'RedNote - Chinese Name',
    desc: 'Generate Chinese names for your RedNote account.',
  };
  const features = [
    {
      title: 'Content Style',
      desc: 'Transform your English content into unique and beautiful RedNote posts',
      link: '/tools/rednote-content',
      icon: '✨',
    },
    {
      title: 'Translation',
      link: '/tools/translate-rednote',
      desc: 'English to RedNote and Mandarin to English translations',
      icon: '📚',
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
      <Builder type="rednote-chinese-name" />
      <MoreTools features={features} />
      <Footer />
    </div>
  );
};
export const metadata = () => {
  return {
    title: 'RedNote - Chinese Name',
    description: 'Generate Chinese names for your RedNote account.',
    openGraph: {
      title: 'RedNote - Chinese Name',
      description: 'Generate Chinese names for your RedNote account.',
    },
    twitter: {
      title: 'RedNote - Chinese Name',
      description: 'Generate Chinese names for your RedNote account.',
    },
    alternate: {
      canonical: 'https://ainotebook.app/blog',
    },
  };
};

export default page;
