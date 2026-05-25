import { useState, useEffect } from "react";

function Countdown() {
  const targetDate = new Date("June 06, 2026 09:00:00").getTime();
  const [timeLeft, setTimeLeft] = useState(targetDate - new Date().getTime());

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(targetDate - new Date().getTime());
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  const days = Math.max(0, Math.floor(timeLeft / (1000 * 60 * 60 * 24)));
  const hours = Math.max(0, Math.floor((timeLeft / (1000 * 60 * 60)) % 24));
  const minutes = Math.max(0, Math.floor((timeLeft / (1000 * 60)) % 60));
  const seconds = Math.max(0, Math.floor((timeLeft / 1000) % 60));

  return (
    <section className="py-20 bg-gradient-to-r from-gray-900 to-blue-900 text-white">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 items-center gap-10">
        {/* LEFT SIDE */}
        <div>
          <h3 className="text-blue-400 uppercase tracking-widest mb-4">
            Start Date
          </h3>

          <h2 className="text-4xl font-bold mb-4">June 06, 2026</h2>

          <p className="text-gray-300 text-lg">
            Count Every Second Until the Inception
          </p>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex justify-center md:justify-end gap-3 md:gap-4 flex-nowrap">
          {[
            { label: "Days", value: days },
            { label: "Hours", value: hours },
            { label: "Minutes", value: minutes },
            { label: "Seconds", value: seconds },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-lg border border-white/20 
                         px-5 py-6 md:px-8 md:py-7 rounded-3xl text-center shadow-2xl 
min-w-[80px] md:min-w-[110px]"
            >
              <div className="text-3xl md:text-5xl font-bold">{item.value}</div>
              <div className="text-sm md:text-base text-gray-300 mt-2 tracking-wide">
                {item.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Countdown;
