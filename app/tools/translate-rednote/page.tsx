import Builder from '../components/builder';
import React from 'react';
import Top from '../components/top';
import Footer from '../../components/footer';
import MoreTools from '../components/moreTools';
const page = () => {
  const topData = {
    title: 'RedNote - Translate your rednote',
    desc: 'Translate your rednote to various languages.',
  };
  const features = [
    {
      title: 'Content Style',
      desc: 'Transform your English content into unique and beautiful RedNote posts',
      link: '/tools/rednote-content',
      icon: '✨',
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
      <Builder type="translate-rednote" />
      <MoreTools features={features} />
      <Footer />
    </div>
  );
};
export const metadata = () => {
  return {
    title: 'RedNote - Translate your rednote',
    description: 'Translate your rednote to various languages.',
    openGraph: {
      title: 'RedNote - Translate your rednote',
      description: 'Translate your rednote to various languages.',
    },
    twitter: {
      title: 'RedNote - Translate your rednote',
      description: 'Translate your rednote to various languages.',
    },
    alternate: {
      canonical: 'https://ainotebook.app/blog',
    },
  };
};

export default page;
