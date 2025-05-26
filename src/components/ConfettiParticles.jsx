import { useCallback } from "react";
import { loadFull } from "tsparticles";
import Particles from "react-tsparticles";

function ConfettiParticles() {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: {
          enable: true,
          zIndex: 9999,
        },
        particles: {
          color: { value: ["#FFD700", "#FF69B4", "#87CEFA", "#FFFFFF"] },
          move: {
            direction: "bottom",
            enable: true,
            speed: { min: 1, max: 3 },
            outModes: { default: "out" },
          },
          number: {
            value: 400,
            density: { enable: true, area: 800 },
          },
          opacity: { value: 1 },
          shape: { type: ["circle", "square", "triangle", "polygon"] },
          size: { value: { min: 2, max: 4 } },
          rotate: {
            value: { min: 0, max: 360 },
            direction: "random",
            animation: { enable: true, speed: 10 },
          },
          tilt: {
            enable: true,
            direction: "random",
            value: { min: 0, max: 360 },
            animation: { enable: true, speed: 15 },
          },
          roll: {
            enable: true,
            speed: { min: 5, max: 15 },
            darken: { enable: true, value: 30 },
          },
          wobble: {
            enable: true,
            distance: 20,
            speed: { min: -10, max: 10 },
          },
        },
        detectRetina: true,
      }}
    />
  );
}

export default ConfettiParticles;
