function Coordinator() {
  return (
    <section className="py-8 bg-gradient-to-r from-gray-900 to-blue-900 text-white">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-8">Coordinated By</h2>

        <div
          className="bg-white/10 backdrop-blur-xl border border-white/20 
                     rounded-3xl p-10 shadow-2xl"
        >
          <div className="flex flex-col md:flex-row items-center gap-10">
            <div className="flex-shrink-0 group relative">
              {/* Back Accent Card */}
              <div
                className="absolute -top-4 -left-4 w-64 h-72 
                  bg-gradient-to-br from-blue-600 to-indigo-700 
                  rounded-xl opacity-70 
                  group-hover:-translate-y-1 group-hover:-translate-x-1
                  transition duration-500"
              ></div>

              {/* Main Image */}
              <img
                src="/satya sir.png"
                alt="Dr. Satya Ranjan Dash"
                className="relative w-64 h-72 object-cover rounded-xl 
               shadow-2xl border border-white/20
               group-hover:translate-y-1 group-hover:translate-x-1
               transition duration-500"
              />
            </div>

            <div className="text-left">
              <h3 className="text-2xl font-semibold text-blue-400 mb-2">
                Dr. Satya Ranjan Dash
              </h3>

              <p className="text-lg text-gray-200 mb-4">
                Professor & Dean <br />
                School of Computer Applications <br />
                KIIT Deemed to be University <br />
                Bhubaneswar, India
              </p>

              <p className="text-gray-300">
                Email: sdashfca@kiit.ac.in <br />
                Phone: +91 9861093702
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Coordinator;
