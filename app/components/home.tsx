import Header from '../components/header';
export default function Home() {
  return (
    <>
      <Header />
      {/* Hero section */}
      <section className="pt-24 text-center py-12 px-6  max-w-[800px] mx-auto">
        <h1 className="pt-10 sm:pt-20 pb-14 text-3xl text-gray-800 md:text-4xl">
          Your good helper for
          <p className="text-red-600 mt-4">RedNote Content Creation</p>
        </h1>
        <p className="sm:mt-4 text-gray-600 text-lg sm:text-xl">
          Transform your unique style into engaging RedNote (Xiaohongshu)
          content using our AI platform, perfect for international creators and
          brands looking to succeed on China&nbsp;s leading lifestyle platform.
        </p>

        {/* Images */}
        {/* <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <img
              src="/image1.png"
              alt="Feature 1"
              className="w-full h-48 object-cover"
            />
          </div>
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <img
              src="/image2.png"
              alt="Feature 2"
              className="w-full h-48 object-cover"
            />
          </div>
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <img
              src="/image3.png"
              alt="Feature 3"
              className="w-full h-48 object-cover"
            />
          </div>
        </div> */}
      </section>

      {/* Features */}
      <section className="p-4 sm:py-12 sm:px-6 sm:mt-12">
        <div className="grid grid-cols-1 md:grid-cols-2 sm:gap-10 ">
          {[
            {
              title: 'Content Style',
              desc: 'Transform your English content into unique and beautiful RedNote posts',
              link: '/tools/rednote-content',
              icon: '✨',
            },
            {
              title: 'Translation',
              link: '/tools/translate-rednote',
              desc: 'English to Mandarin RedNote translations',
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
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-white shadow-md rounded-lg p-6 text-center hover:-translate-y-1 hover:shadow-lg transition-transform"
            >
              <div className="text-red-600 text-3xl mb-4">{item.icon}</div>
              <h3 className="text-lg font-bold text-gray-800">{item.title}</h3>
              <p className="text-gray-600 mt-2">{item.desc}</p>
              <a
                href={item.link}
                className="mt-4 inline-block text-red-600 font-medium hover:underline"
              >
                Explore Features →
              </a>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
