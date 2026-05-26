import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";

function Speakers() {
  const speakers = [
    {
      name: "Dr. Shantipriya Parida",
      role: "AMD Silo, FinlandA",
      image: "/Dr. Shantipriya Parida.webp",
      link: "https://www.shantipriya.me/",
    },
    {
      name: "Dr. Aloka Fernando",
      role: "University of Moratuwa, Srilanka",
      image: "/Dr. Aloka Fernando.jpg",
      link: "https://www.linkedin.com/in/aloka-fernando-27aa6621/",
    },
    {
      name: "Amulya Ratna Dash",
      role: "Senior Software Engineer, IQVIA RDS, Bangalore",
      image: "/Amulya Ratna Dash.jpg",
      link: "https://www.linkedin.com/in/amulyaratnadash0404/",
    },
    {
      name: "Dr. Naveen Saini",
      role: "IIIT Allahabad",
      image: "/Dr. Naveen Saini.jpg",
      link: "https://sites.google.com/view/nsaini",
    },
    {
      name: "Dr. Sunayana Sitaram",
      role: "Principal Researcher, Microsoft Research India",
      image: "/Dr. Sunayana Sitaram.png",
      link: "https://www.microsoft.com/en-us/research/people/susitara/",
    },
    {
      name: "Dr. Partha Pakray",
      role: "NIT Silchar, India",
      image: "Dr. Partha Pakray.png",
      link: "https://cs.nits.ac.in/faculties/partha",
    },
  ];

  return (
    <section className="py-6 bg-gradient-to-br from-[#0f172a] via-[#312e81] to-[#6b21a8] text-white text-center">
      <div className="max-w-6xl mx-auto px-3">
        {/* Heading */}
        <span className="text-pink-400 text-xs sm:text-sm">OUR SPEAKERS</span>

        <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-6">
          RESOURCE EXPERTS
        </h2>

        {/* Responsive Grid */}
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-3">
          {speakers.map((speaker, index) => (
            <div key={index} className="group flex flex-col items-center">
              {/* Clickable Avatar Only */}
              <a
                href={speaker.link}
                target="_blank"
                rel="noopener noreferrer"
                className="relative w-14 h-14 sm:w-16 sm:h-16 md:w-18 md:h-18 lg:w-20 lg:h-20 block"
              >
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 blur-md opacity-40 group-hover:opacity-70 transition"></div>

                <img
                  src={speaker.image}
                  alt={speaker.name}
                  className="relative w-full h-full rounded-full object-cover border-2 border-white hover:scale-105 transition duration-300"
                />
              </a>

              {/* Name */}
              <p className="mt-2 text-[10px] sm:text-xs md:text-sm lg:text-sm font-medium leading-tight text-center">
                {speaker.name}
              </p>

              {/* Role */}
              <p className="text-[9px] sm:text-[10px] md:text-xs text-pink-300 leading-tight text-center">
                {speaker.role}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Speakers;
