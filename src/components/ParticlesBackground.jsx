import Particles from "react-tsparticles";

function ParticlesBackground() {
  return (
    <Particles
      options={{
        particles: {
          number: { value: 60 },
          size: { value: 3 },
          move: { speed: 1 },
          links: { enable: true },
        },
      }}
      className="absolute inset-0"
    />
  );
}

export default ParticlesBackground;
