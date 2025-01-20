const Card = ({
  feature,
}: {
  feature: { icon: string; title: string; desc: string; link: string };
}) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 text-center hover:-translate-y-1 hover:shadow-lg transition-transform">
      <div className="text-red-600 text-3xl mb-4">{feature.icon}</div>
      <h3 className="text-lg font-bold text-gray-800">{feature.title}</h3>
      <p className="text-gray-600 mt-2">{feature.desc}</p>
      <a
        href={feature.link}
        className="mt-4 inline-block text-red-600 font-medium hover:underline"
      >
        Explore Features →
      </a>
    </div>
  );
};

const page = ({
  features,
}: {
  features: { icon: string; title: string; desc: string; link: string }[];
}) => {
  return (
    <>
      <div className="bg-white">
        {/* Header Section */}
        <section className="text-center p-8 sm:py-16 sm:px-6">
          <h2 className="text-red-500 text-lg font-bold">More Tools</h2>
          <h1 className="text-3xl text-gray-900 mt-2 md:text-4xl">
            Explore more useful tools
          </h1>
          <p className="mt-4 text-gray-600 leading-relaxed max-w-2xl mx-auto">
            Discover more tools to help you create, translate, and optimize your
            RedNote content.
          </p>
        </section>

        {/* Testimonials Section */}
        <section className="p-4 sm:py-12 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {features.map((feature, idx) => (
              <Card key={idx} feature={feature} />
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default page;
