import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";

function Speakers() {
  const speakers = [
    {
      name: "Dr. Shantipriya Parida",
      role: "Sr. Scientist, AMD Silo, Finland",
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
      role: "Associate Director-AI, IQVIA, Bangalore, India",
      image: "/Amulya Ratna Dash.jpg",
      link: "https://www.linkedin.com/in/amulyaratnadash0404/",
    },
    {
      name: "Dr. Naveen Saini",
      role: "Assistant Professor,  IIIT Allahabad, India",
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
      role: "Dean, NIT Silchar, India",
      image: "Dr. Partha Pakray.png",
      link: "https://cs.nits.ac.in/faculties/partha",
    },
    {
      name: "Dr. Shamsuddeen Hassan Muhammad",
      role: "Portugal",
      image: "Dr. Shamsuddeen Hassan Muhammad.webp",
      link: "https://shmuhammadd.github.io/",
    },
    {
      name: "Dr. Sriparna Saha",
      role: "Associate Professor, IIT Patna",
      image: "Dr. Sriparna Saha.jpeg",
      link: "https://www.iitp.ac.in/~sriparna/",
    },
    {
      name: "Dr. Bal Krishna Bal",
      role: "Professor, Kathmandu University, Nepal",
      image: "Dr. Bal Krishna Bal.png",
      link: "https://ku.edu.np/contact-detail/48",
    },
    {
      name: "Dr. Anindita Sahoo",
      role: "Assistant Professor, IIT Madras",
      image: "Dr. Anindita Sahoo.jpg",
      link: "https://hss.iitm.ac.in/anindita-sahoo/",
    },
    {
      name: "Dr. Sandip Modha",
      role: "Assistant Professor, Dhirubhai Ambani University (DAU), India",
      image: "Dr. Sandip Modha.jpg",
      link: "https://www.daiict.ac.in/faculty/sandip-modha",
    },
    {
      name: "Dr. Susmita Das",
      role: "University of Glasgow, UK",
      image: "Dr. Susmita Das.png",
      link: "https://www.linkedin.com/in/susmita-das-a33369140/",
    },
    {
      name: "Dr. Santosh Kumar Nanda",
      role: "Senior Solution Director, HCLTech",
      image: "Dr. Santosh Kumar Nanda.png",
      link: "https://www.linkedin.com/in/dr-santosh-kumar-nanda-b3848499/",
    },
    {
      name: "Dr. Nomi Baruah",
      role: "Associate Professor, Department of Computer Science & Engineering, DUIET, India",
      image: "Dr. Nomi Baruah.jpg",
      link: "https://www.dibru.ac.in/user-profile/nomi-baruah",
    },
    {
      name: "Dr. Asif Ekbal",
      role: "Associate Professor, Department of Computer Science & Engineering, IIT Patna",
      image: "Dr. Asif Ekbal.jpg",
      link: "https://www.iitp.ac.in/~asif/Asif%20Ekbal%20Home%20Page.htm",
    },
  ];

  return (
    <section className="py-6 bg-gradient-to-br from-[#0f172a] via-[#312e81] to-[#6b21a8] text-white text-center">
      <div className="max-w-6xl mx-auto px-3">
        {/* Heading */}
        <span className="text-pink-400 text-xs sm:text-sm">OUR SPEAKERS</span>

        <h2 className="text-lg sm:text-2xl md:text-3xl font-bold mb-6">
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
