import Link from 'next/link';
const page = () => {
  return (
    <>
      <header className=" bg-white fixed top-0 left-0 right-0 flex justify-between items-center px-6 py-4 shadow-md sm:px-40">
        <Link href="/">
          <div className="flex items-center space-x-2 text-red-600 font-bold text-xl">
            <span>✏️</span>
            <span>RedNote</span>
          </div>
        </Link>
        <nav className="hidden md:flex space-x-6">
          <a
            href="/tools#features"
            className="text-gray-700 hover:text-red-600"
          >
            Features
          </a>
          <a href="/tools#faq" className="text-gray-700 hover:text-red-600">
            Frequently Asked Questions
          </a>
        </nav>
        <div className="text-gray-700 hover:text-red-600 cursor-pointer"></div>
      </header>
    </>
  );
};

export default page;
