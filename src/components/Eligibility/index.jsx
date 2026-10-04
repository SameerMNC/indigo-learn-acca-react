const Eligibility = () => {
  const eligibilityItems = [
    {
      title: "Levels",
      value: "Three",
      description: "23 papers",
    },
    {
      title: "Duration",
      value: "6–30 months",
      description: "Flexible learning duration",
    },
    {
      title: "Exams",
      value: "Quarterly",
      description: "Online exams",
    },
    {
      title: "Exemptions",
      value: "Up to 9",
      description: "Papers may be exempted",
    },
  ];

  return (
    <section id="eligibility" className="bg-gray-50 px-6 py-16">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-semibold text-blue-700">ACCA Eligibility</p>

          <h2 className="mt-2 text-3xl font-bold text-gray-900 md:text-4xl">
            Start Your ACCA Journey
          </h2>

          <p className="mt-4 text-gray-600">
            Understand the ACCA structure, duration, exams, and exemptions.
          </p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {eligibilityItems.map((item) => (
            <article
              key={item.title}
              className="rounded-2xl bg-white p-6 text-center shadow-sm"
            >
              <h3 className="text-lg font-semibold text-gray-700">
                {item.title}
              </h3>

              <p className="mt-3 text-2xl font-bold text-blue-700">
                {item.value}
              </p>

              <p className="mt-2 text-sm text-gray-500">{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Eligibility;
