// pages/index.js

import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>RedNote - Share Your Life Experiences</title>
        <meta
          name="description"
          content="Xiaohongshu is a lifestyle platform that inspires people to discover and connect with a range of diverse lifestyles, where over 300 million users every month share their life experiences."
        />
        <meta
          name="keywords"
          content="lifestyle, social media, life experiences, Xiaohongshu, RedNote, sharing platform, diverse lifestyles, community, inspiration"
        />
        <link rel="icon" type="image/png" href="/redbook.webp" />
      </Head>

      <div className="bg-white hero bg-gradient-to-r from-red-500 to-red-400 text-white text-center py-10 sm:py-20 pt-20 sm:pt-40 px-8 sm:px-0">
        <div className="container mx-auto">
          <img
            src="/redbook.webp"
            alt="RedNote Logo"
            className="hero-logo mx-auto mb-5 w-24 h-24 rounded-2xl shadow-lg"
          />
          <h1 className="text-3xl sm:text-5xl mb-5">RedNote</h1>
          <p className="text-lg sm:text-xl max-w-2xl mx-auto">
            Join over 300 million users sharing their life experiences
          </p>

          <div className="flex justify-center gap-2 sm:gap-5 mt-10">
            <a href="https://apps.apple.com/us/app/%E5%B0%8F%E7%BA%A2%E4%B9%A6/id741292507">
              <img
                src="/download/badge-download-on-the-app-store.svg"
                alt="Download on App Store"
                className="h-12 sm:h-14"
              />
            </a>
            <a href="https://play.google.com/store/apps/details?id=com.xingin.xhs&hl=en_US">
              <img
                src="/download/GetItOnGooglePlay_Badge_Web_color_English.png"
                alt="Get it on Google Play"
                className="h-12 sm:h-14"
              />
            </a>
          </div>
        </div>
      </div>

      <div className="bg-white container mx-auto py-4 sm:py-20">
        <div className="features text-center">
          <h2 className="text-2xl sm:text-3xl text-black font-bold">
            Rednote Post Generator
          </h2>
          <p className="text-sm sm:text-base max-w-2xl mx-auto my-5 text-gray-700">
            Create Posts with AI and Translate Effortlessly to Chinese
          </p>

          <div className="max-w-xl mx-auto bg-white p-5 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <a
              href="/tools"
              className="text-red-400 text-lg sm:text-2xl text-center block cursor-pointer"
            >
              Let&apos;s start generating rednote post
            </a>
          </div>
        </div>

        <div className="features mt-10 sm:mt-20 px-4 sm:px-0">
          <h2 className="text-2xl sm:text-3xl text-center text-black font-bold">
            About RedNote
          </h2>
          <p className="text-base max-w-2xl mx-auto my-5 text-gray-700 text-center">
            Xiaohongshu is a lifestyle platform that inspires people to discover
            and connect with a range of diverse lifestyles, where over 300
            million users every month share their life experiences.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-10 max-w-[1200px] mx-auto">
            {[
              {
                title: '🌟 Interesting Lifestyles',
                description:
                  'Uncover lifestyle trends and diverse interests popular among young people - from stove-boiled tea and wild camping to frisbee, fashion styles, cooking, reading, painting, sports and fitness. Connect with like-minded people who share your passions.',
              },
              {
                title: '📺 Authentic Livestreams',
                description:
                  'Experience pressure-free livestreams featuring renowned hosts like Dong Jie, Teresa Cheung, and Jingchu Zhang. Discover unique fashion, beauty finds, home decor, and healthy living tips - where learning is just as valuable as shopping.',
              },
              {
                title: '🌟 Celebrity Lifestyle',
                description:
                  "Get an authentic glimpse into celebrities' lives - from Li Xian's Dali travels to Angelababy's snowboarding adventures and Lang Lang's life beyond music. See their real experiences in camping, horseback-riding, cooking, and more.",
              },
              {
                title: '🔥 Popular Picks',
                description:
                  'Explore the best of RedNote content, updated daily. Find inspiration in everyday moments, stay updated with trending topics, and discover the warmth of our community.',
              },
              {
                title: '🗺️ Local Life Guide',
                description:
                  'Access practical, local insights on apartment-hunting, job-searching, wedding planning, and weekend activities. Get authentic tips and reviews from knowledgeable locals on everything from education to travel.',
              },
              {
                title: '✨ Content Creation Tools',
                description:
                  'Create engaging content with our professional templates for food, fashion, pets, travel, outdoors, and daily life. Make your posts stand out using the same tools as popular influencers.',
              },
            ].map((feature) => (
              <div
                key={feature.title}
                className="bg-white p-5 sm:p-10 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <h3 className="text-red-400 text-xl sm:3xl mb-2 text-center">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-center text-sm">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="flex gap-5 mt-10 overflow-x-auto px-4 sm:px-0 sm:py-10 lg:justify-center">
          {[
            'screenshots1.webp',
            'screenshots2.webp',
            'screenshots3.webp',
            'screenshots4.webp',
          ].map((screenshot) => (
            <img
              key={screenshot}
              src={`/screenshots/${screenshot}`}
              alt={`RedNote Screenshot`}
              className="w-52 h-auto rounded-lg shadow-md transition-transform transform hover:scale-105"
            />
          ))}
        </div>

        <div className="features mt-20">
          <h2 className="text-3xl text-center text-black font-bold">
            Key Features
          </h2>
          <ul className="list-disc list-inside max-w-2xl mx-auto mt-5 text-left flex flex-col gap-5 items-center p-4">
            <div>
              {[
                'Discover trending lifestyle content and hobbies',
                'Connect with a community of over 300 million users',
                'Share your experiences through photos and videos',
                'Find local recommendations and tips',
                'Create engaging content with built-in templates',
              ].map((feature, index) => (
                <li
                  key={index}
                  className="mb-2 text-gray-600 text-base list-none text-center"
                >
                  {feature}
                </li>
              ))}
            </div>
          </ul>
        </div>
      </div>

      <footer className="bg-gray-100 py-10 mt-20 p-4 sm:p-10">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <h3 className="text-red-400 text-xl mb-3">Company</h3>
            <ul className="grid grid-cols-2 gap-2 sm:grid-cols-1">
              <li>
                <a href="#" className="text-gray-600 hover:text-red-400">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-red-400">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-red-400">
                  Press
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-red-400">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-red-400 text-xl mb-3">Support</h3>
            <ul className="grid grid-cols-2 gap-2 sm:grid-cols-1">
              <li>
                <a href="#" className="text-gray-600 hover:text-red-400">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-red-400">
                  Community Guidelines
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-red-400">
                  Safety Center
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-red-400">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-red-400 text-xl mb-3">Follow Us</h3>
            <ul className="grid grid-cols-2 gap-2 sm:grid-cols-1">
              <li>
                <a href="#" className="text-gray-600 hover:text-red-400">
                  Instagram
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-red-400">
                  Twitter
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-red-400">
                  Facebook
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-red-400">
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="text-center mt-10 text-gray-500 text-sm sm:text-base">
          <p>&copy; 2025 RedNote. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}
