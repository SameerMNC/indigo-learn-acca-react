const Journey = () => {
  return (
    <section className="bg-blue-700 px-6 py-16 text-white" id="journey">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="font-semibold text-blue-200">Start Learning Today</p>

            <h2 className="mt-2 text-3xl font-bold md:text-4xl">
              Kick off your ACCA Prep journey with IndigoLearn
            </h2>

            <p className="mt-5 max-w-xl text-lg leading-8 text-blue-100">
              Sign-in and get instant access to our FREE Courses.
            </p>

            <button
              type="button"
              className="mt-8 rounded-lg bg-white px-6 py-3 font-semibold text-blue-700 hover:bg-gray-100"
            >
              Get Started
            </button>
          </div>

          <div className="flex min-h-48 items-center justify-center rounded-2xl bg-white/10 p-8">
            <div className="rounded-full bg-red-600 px-6 py-3 text-center font-bold shadow-lg">
              ACCA Learning Partner
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Journey;
