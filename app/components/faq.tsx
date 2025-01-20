// pages/index.js
'use client';
import React, { useState } from 'react';

const faqData = [
  {
    question: 'What exactly is RedNote AI, and is it safe to use?',
    answer:
      'RedNote AI is a secure artificial intelligence platform designed to help international users create and manage content for Xiaohongshu (RedNote). We fully comply with data privacy regulations and employ enterprise-level security measures to protect your information.',
  },
  {
    question: 'How does RedNote AI assist with account creation?',
    answer:
      'We provide step-by-step guidance for creating a RedNote account, including phone verification support, profile optimization, and resolving common verification issues.',
  },
  {
    question: 'Can I create content in English and have it translated?',
    answer:
      'Our platform supports translating English content into Chinese while maintaining the original tone and style.',
  },
  {
    question: 'What is special about the Chinese name generator?',
    answer:
      'Our Chinese name generator provides precise and professional name suggestions based on brand positioning and target audience.',
  },
  {
    question: 'How soon can I start creating content?',
    answer:
      'Once registration is complete, you can immediately start using our tools to create content.',
  },
  {
    question: 'What kind of support do you offer?',
    answer:
      'We provide 24/7 customer support to answer your questions at any time.',
  },
  {
    question: 'How accurate is the Chinese translation?',
    answer:
      'Our translation tool is based on advanced natural language processing technology, ensuring high-quality and accurate translations.',
  },
  {
    question: 'Can I change my RedNote profile name after creation?',
    answer: 'Yes, you can change your profile name at any time.',
  },
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<null | number>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div id="faq" className="bg-white">
      {/* Header Section */}
      <section className="text-center p-8 sm:py-16 sm:px-6">
        <h2 className="text-red-500 text-lg font-bold">
          Frequently Asked Questions
        </h2>
        <h1 className="text-2xl sm:text-3xl text-gray-900 mt-2 md:text-4xl">
          Everything You Need to Know About RedNote AI
        </h1>
        <p className="mt-4 text-gray-600 leading-relaxed max-w-2xl mx-auto  text-base sm:text-lg">
          Find answers to common questions about our platform and content
          creation on RedNote.
        </p>
      </section>

      {/* FAQ Section */}
      <section className="p-4 sm:py-12 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {faqData.map((faq, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg p-2 sm:p-6"
            >
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => toggleFAQ(index)}
              >
                <h3 className="text-gray-900">{faq.question}</h3>
                <span className="text-red-500 text-xl">
                  {openIndex === index ? '−' : '+'}
                </span>
              </div>
              {openIndex === index && (
                <p className="mt-4 text-gray-600 leading-relaxed">
                  {faq.answer}
                </p>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
