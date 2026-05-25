import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";

function Speakers() {
  const speakers = [
    {
      name: "Dr. Rishikesh Sahay",
      role: "Digital Forensics and Penetration Expert, University of Illinois Springfield, USA",
      image: "/Dr. Rishikesh Sahay.jpg",
      link: "https://www.uis.edu/directory/rishikesh-sahay",
    },
    {
      name: "Pooja Lakhani",
      role: "Capgemini Aricent Technologies (Holdings) Limited, Australia",
      image: "/Pooja Lakhani.jpg",
      link: "https://www.linkedin.com/in/pooja-lakhan-616489134/",
    },
    {
      name: "Dr. Sumit Kumar Tetarave",
      role: "KIIT Deemed to be University, Bhubaneswar",
      image: "/Dr. Sumit Kumar Tetarave.jpg",
      link: "https://scholar.google.com/citations?user=GmeJ5uoAAAAJ&hl=en",
    },
    {
      name: "Dr. Baisakhi Das",
      role: "Institute of Engineering & Management, Kolkata",
      image: "/Dr. Baisakhi Das.jpg",
      link: "https://faculty.iem.edu.in/faculty/270",
    },
    {
      name: "Dr. Ghanshyam S. Bopche",
      role: "National Institute of Technology (NIT), Tiruchirappalli",
      image: "/Dr. Ghanshyam S. Bopche.jpg",
      link: "https://www.nitt.edu/home/academics/departments/ca/facultymca/ghanshyam/",
    },
    {
      name: "Jyoti Kumari",
      role: "Cybersecurity Expert",
      image: "/Jyoti Kumari.jpg",
      link: "https://www.linkedin.com/in/jyoti-kumari-153a65211/",
    },
    {
      name: "Dr. Ranjeet Kumar Rout",
      role: "NIT, Jalandhar",
      image: "Dr. Ranjeet Kumar Rout.jpeg",
      link: "https://departments.nitj.ac.in/dept/it/Faculty/671a0f9ac9797782308bbd2d",
    },
    {
      name: "Mr. Sidhartha Dash",
      role: "TCS, Bhubaneswar",
      image: "/Mr. Sidhartha Dash.jpg",
      link: "https://www.linkedin.com/in/sidhartha-dash-1276364/",
    },
    {
      name: "Mr. Ajaya Kumar Lenka",
      role: "Director & CEO CVAAT Solutions Pvt. Ltd",
      image: "/Mr. Ajaya Kumar Lenka.png",
      link: "https://www.linkedin.com/in/ajaya-kumar-lenka-44044968/",
    },
    {
      name: "Mr. Suresh Mishra",
      role: "IBM",
      image: "/Mr. Suresh Mishra.jpg",
      link: "https://www.linkedin.com/in/suresh-mishra-751b677/",
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
