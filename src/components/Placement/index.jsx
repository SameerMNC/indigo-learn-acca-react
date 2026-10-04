const Placement = () => {
  const placementServices = [
    {
      title: "Resume Building",
      description:
        "3FIN provides professional guidance to help you create an effective resume and make a lasting impression.",
    },
    {
      title: "Career Counselling",
      description:
        "From career counselling to mock interviews and aptitude tests, we assist you at every step and help make you job ready.",
    },
    {
      title: "Jobs",
      description:
        "Our direct corporate affiliations give you an edge over others and help you access relevant placement opportunities.",
    },
  ];

  return (
    <section className="bg-white px-6 py-16">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-semibold text-blue-700">Career Support</p>

          <h2 className="mt-2 text-3xl font-bold text-gray-900 md:text-4xl">
            100% Placement Assistance
          </h2>

          <p className="mt-4 text-gray-600">
            Get the support you need to prepare for your career and placement
            journey.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {placementServices.map((service) => (
            <article
              key={service.title}
              className="rounded-2xl border bg-gray-50 p-6 transition hover:-translate-y-1 hover:shadow-lg"
            >
              <h3 className="text-xl font-bold text-gray-900">
                {service.title}
              </h3>

              <p className="mt-4 leading-7 text-gray-600">
                {service.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Placement;
