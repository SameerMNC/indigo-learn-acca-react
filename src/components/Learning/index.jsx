const Learning = () => {
  const levels = [
    {
      title: "Knowledge Level",
      papers: [
        "Business and Technology (BT)",
        "Management Accounting (MA)",
        "Financial Accounting (FA)",
      ],
      count: "3 papers",
    },
    {
      title: "Skill Level",
      papers: [
        "Corporate and Business Law (LW)",
        "Performance Management (PM)",
        "Taxation (TX)",
        "Financial Reporting (FR)",
        "Audit and Assurance (AA)",
        "Financial Management (FM)",
      ],
      count: "6 papers",
    },
    {
      title: "Professional Level",
      compulsory: [
        "SBL - Strategic Business Leader",
        "SBR - Strategic Business Reporting",
      ],
      optional: [
        "Advanced Financial Management (AFM)",
        "Advanced Performance Management (APM)",
        "Advanced Taxation (ATX)",
        "Advanced Audit and Assurance (AAA)",
      ],
      count: "4 papers",
    },
  ];

  return (
    <section id="learning" className="bg-gray-50 px-6 py-16">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-semibold text-blue-700">ACCA Curriculum</p>

          <h2 className="mt-2 text-3xl font-bold text-gray-900 md:text-4xl">
            What will you learn in ACCA?
          </h2>

          <p className="mt-4 text-gray-600">
            Explore the three levels of the ACCA qualification.
          </p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {levels.map((level) => (
            <article
              key={level.title}
              className="rounded-2xl bg-white p-6 shadow-sm"
            >
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold text-gray-900">
                  {level.title}
                </h3>

                <span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-semibold text-blue-700">
                  {level.count}
                </span>
              </div>

              {level.papers && (
                <ul className="mt-6 space-y-3">
                  {level.papers.map((paper) => (
                    <li key={paper} className="text-gray-600">
                      ✓ {paper}
                    </li>
                  ))}
                </ul>
              )}

              {level.compulsory && (
                <>
                  <h4 className="mt-6 font-semibold text-gray-900">
                    Compulsory
                  </h4>

                  <ul className="mt-3 space-y-3">
                    {level.compulsory.map((paper) => (
                      <li key={paper} className="text-gray-600">
                        ✓ {paper}
                      </li>
                    ))}
                  </ul>
                </>
              )}

              {level.optional && (
                <>
                  <h4 className="mt-6 font-semibold text-gray-900">
                    Two out of the following
                  </h4>

                  <ul className="mt-3 space-y-3">
                    {level.optional.map((paper) => (
                      <li key={paper} className="text-gray-600">
                        ○ {paper}
                      </li>
                    ))}
                  </ul>
                </>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Learning;
