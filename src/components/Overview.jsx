import { Link } from "react-scroll";

function Overview() {
  return (
    <section className="py-12 bg-gradient-to-br from-[#0f172a] via-[#312e81] to-[#6b21a8] text-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Title */}
        <div className="text-center mb-8">
          <span className="text-pink-400 underline decoration-gray-400 underline-offset-4">
            OVERVIEW
          </span>
          <h2 className="text-4xl font-bold mt-4">OVERVIEW OF THE WORKSHOP</h2>
        </div>

        {/* Glass Container */}
        <div
          className="bg-white/10 backdrop-blur-xl border border-white/20 
                        p-10 rounded-3xl shadow-2xl"
        >
          {/* Two Column Layout */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* LEFT SIDE - TEXT */}
            <div className="text-left max-w-xl space-y-5">
              <p className="text-gray-200 leading-relaxed text-lg text-justify">
                The 5-day Online Workshop on{" "}
                <span className="text-pink-300 font-semibold">
                  Low-Resource NLP: Techniques and Applications with LLMs
                </span>
                is designed to introduce participants to the fundamentals and
                recent advances in NLP for low-resource languages, scheduled
                from 6th June 2026 to 10th June 2026 (Online Mode).
              </p>

              <p className="text-gray-200 leading-relaxed text-lg text-justify">
                The workshop will cover corpus development, multilingual
                language models, transfer learning, and the application of Large
                Language Models (LLMs) for language technology development.
                Through expert lectures and hands-on sessions, participants will
                gain practical experience in building NLP applications such as
                machine translation, text classification, and conversational AI
                systems. The program is particularly relevant for students,
                researchers, and professionals interested in NLP, Generative AI,
                and language technologies.
              </p>

              {/* CTA Button */}
              <div className="pt-4">
                <Link
                  to="registration"
                  smooth={true}
                  duration={800}
                  className="inline-block px-10 py-3 
                 bg-gradient-to-r from-pink-500 to-purple-600 
                 rounded-full font-semibold text-lg 
                 shadow-xl hover:scale-110 
                 hover:shadow-pink-500/40 
                 transition duration-300 cursor-pointer"
                >
                  Interested
                </Link>
              </div>
            </div>

            {/* RIGHT SIDE - IMAGE */}
            <div className="flex justify-center">
              <img
                src="/scam.jpg"
                alt="Workshop Image"
                className="w-full max-w-md h-[200px] md:h-[300px] lg:h-[500px] rounded-3xl shadow-2xl 
                           border border-white/20 
                           hover:scale-105 transition duration-500"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Overview;
