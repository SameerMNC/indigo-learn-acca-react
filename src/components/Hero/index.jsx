import CallbackModal from "../CallbackModal";
import { useState } from "react";

const Hero = () => {
  const [isModelOpen, setModelOpen] = useState(false);
  

  return (
    <>
      <section className="bg-gray-50">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="mb-3 font-semibold text-blue-700">ACCA - Global CA</p>

            <h1 className="text-4xl font-bold leading-tight text-gray-900 md:text-5xl">
              Become ACCA in 18 months
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-gray-600">
              Acquire globally recognized accountancy qualification, ACCA, and
              get placed in top MNCs and Big4. Begin your ACCA preparation with
              IndigoLearn.
            </p>

            <button
              type="button"
              className="mt-8 rounded-lg bg-blue-700 px-6 py-3 font-semibold text-white hover:bg-blue-800"
            >
              Download Brochure
            </button>

            <div className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-4">
              <div>
                <p className="text-2xl font-bold text-gray-900">249K+</p>
                <p className="text-sm text-gray-500">Registered Users</p>
              </div>

              <div>
                <p className="text-2xl font-bold text-gray-900">65K+</p>
                <p className="text-sm text-gray-500">Courses Enrolled</p>
              </div>

              <div>
                <p className="text-2xl font-bold text-gray-900">2B+</p>
                <p className="text-sm text-gray-500">Minutes Watched</p>
              </div>

              <div>
                <p className="text-2xl font-bold text-gray-900">5</p>
                <p className="text-sm text-gray-500">Faculty Experts</p>
              </div>
            </div>
          </div>

          <div className="rounded-2xl bg-blue-100 p-8">
            <h2 className="text-2xl font-bold text-gray-900">
              Aspiring to be an ACCA?
            </h2>

            <p className="mt-2 text-gray-600">Get in touch with us!</p>

            <form
              className="mt-6 space-y-4"
              onSubmit={(e) => {
                e.preventDefault();
                setModelOpen(true);
              }}
            >
              <input
                type="tel"
                placeholder="Phone Number*"
                className="w-full rounded-lg border bg-white px-4 py-3 outline-none focus:border-blue-600"
              />

              <input
                type="email"
                placeholder="Email ID"
                className="w-full rounded-lg border bg-white px-4 py-3 outline-none focus:border-blue-600"
              />

              <select className="w-full rounded-lg border bg-white px-4 py-3 text-gray-500 outline-none focus:border-blue-600">
                <option value="">Current Qualification</option>
                <option value="intermediate">Intermediate</option>
                <option value="graduate">Graduate</option>
                <option value="professional">Working Professional</option>
              </select>

              <select className="w-full rounded-lg border bg-white px-4 py-3 text-gray-500 outline-none focus:border-blue-600">
                <option value="">Interested In</option>
                <option value="acca">ACCA</option>
                <option value="acca-online">ACCA Online Classes</option>
              </select>

              <button
                type="submit"
                className="w-full rounded-lg bg-red-600 px-5 py-3 font-semibold text-white hover:bg-red-700"
              >
                Request Call Back
              </button>
            </form>
            <CallbackModal
              isOpen={isModelOpen}
              onClose={() => setModelOpen(false)}
            />
          </div>
        </div>
      </section>
    </>
  );
};
export default Hero;
