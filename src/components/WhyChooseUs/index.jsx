const WhyChooseUs = () => {
  const benefits = [
    {
      title: "Expert Faculty",
      description:
        "Our faculty are subject matter experts with practical experience. They believe in the #StudentFirst principle.",
    },
    {
      title: "Complete Success Package",
      description:
        "Get access to video classes, live sessions, notes, MCQs, practice tests, webinars, and exam preparation support.",
    },
    {
      title: "Placements",
      description:
        "Training workshops, mock interviews, and placement drives help you prepare for opportunities with top employers.",
    },
  ];

  return (
    <>
      <section id="why-us" className="bg-white px-6 py-16">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-2xl text-center">
            <p className="font-semibold text-blue-700">Why IndigoLearn?</p>

            <h2 className="mt-2 text-3xl font-bold text-gray-900 md:text-4xl">
              Why Choose Us?
            </h2>

            <p className="mt-4 text-gray-600">
              Everything you need to prepare for your ACCA journey and build
              your career.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {benefits.map((benefit) => (
              <article
                key={benefit.title}
                className="rounded-2xl border bg-gray-50 p-6 transition hover:-translate-y-1 hover:shadow-lg"
              >
                <h3 className="text-xl font-bold text-gray-900">
                  {benefit.title}
                </h3>

                <p className="mt-4 leading-7 text-gray-600">
                  {benefit.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default WhyChooseUs;
