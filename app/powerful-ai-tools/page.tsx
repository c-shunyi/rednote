import Footer from '../components/footer';

const Card = ({
  title,
  desc,
  image,
  link,
}: {
  title: string;
  desc: string;
  image: string;
  link: string;
}) => {
  return (
    <div className="max-w-[600px] mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="p-6">
        <h2 className="text-xl font-bold mb-2 text-black">{title}</h2>
        <p className="text-gray-700 mb-4">{desc}</p>
        <div className="relative mb-4">
          <img
            src={image}
            alt="Tool Preview"
            className="w-full h-auto rounded-lg"
          />
        </div>
        <a
          href={link}
          className="inline-block bg-red-500 text-white rounded-lg py-2 px-4 text-center hover:bg-red-600 transition mt-5"
        >
          Try it now
        </a>
      </div>
    </div>
  );
};

const page = () => {
  const data = [
    {
      title: 'AI Notebook',
      desc: 'Help you better organize your notes in rednote.Never take notes again. Get voice transcripts, smart summaries and tailored notes from our Best AI note taking app now.',
      image: '/aiNoteBook.png',
      link: 'https://ainotebook.app/',
    },
    {
      title: 'AI Writer',
      desc: 'Help you create better notes in rednote.The revolutionary new way to create content powered by ChatGPT & GPT-4, GPT-3, and makes writing easier than ever before.',
      image: '/aiwriter.png',
      link: 'https://ai-writer.app/',
    },
  ];
  return (
    <div>
      <div className="container mx-auto px-6 py-12 max-w-[800px]">
        <h1 className="pt-20 pb-14 text-3xl  text-gray-800 md:text-4xl text-center font-bold">
          Recommended Tools for
          <p className="font-bold text-red-600 mt-4 text-content">
            RedNote Content Creation
          </p>
        </h1>
        <p className="mt-4 text-gray-600 leading-relaxed text-xl text-center">
          Welcome to the Recommended Tools for Generating Xiaohongshu Captions
          page! Here, we gather a variety of useful tools to help you easily
          create captivating captions. Whether you&apos;re sharing travel
          experiences, fashion styles, or food recommendations, these tools will
          inspire you and support your content creation. Explore these resources
          to enhance your creative skills and make your posts more engaging,
          showcasing the vibrant life you share with the Xiaohongshu community!
        </p>
      </div>

      <div className="container mx-auto px-6 py-12 max-w-[1200px] grid grid-cols-1 md:grid-cols-2 gap-6">
        {data.map((item) => (
          <Card key={item.title} {...item} />
        ))}
      </div>
      <div className="fixed bottom-0 w-full">
        <Footer />
      </div>
    </div>
  );
};

export default page;
