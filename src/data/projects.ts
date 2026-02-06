export type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  link?: string;
};

export const projects: Project[] = [
  {
    id: 1,
    title: "Horn Antenna",
    description:
      "Radio astronomy is a major field in observational and computational astronomy. One of the most basic instruments used to observe radio waves is the horn antenna. To encourage advanced astronomy within the institute, the Astronomy Club is developing its own horn antenna to capture radio frequencies and explore the radio observation domain.",
    image: "/assets/projects/horn2.jpg",
  },
  {
    id: 2,
    title: "Planetarium",
    description:
      "A visionary project that immerses individuals in the enchanting darkness of the night sky, fostering a deep appreciation for space exploration. The planetarium attracts people toward amateur astronomy and enables observation of the night sky regardless of weather conditions or time of day.",
    image: "/assets/projects/planetarium2.jpg",
  },
  {
    id: 3,
    title: "Rocket Team",
    description:
      "Each component, from the sturdy body to the nozzle, was built with precision and care. As the rocket soared into the sky, propelled by science and ingenuity, it marked the culmination of dedicated teamwork and engineering excellence.",
    image: "/assets/projects/rocket2.jpg",
    link: "https://rocket-team-iit-varanasi.github.io/website/",
  },
  {
    id: 4,
    title: "Satellite Tracker",
    description:
      "Our team developed a fully functional satellite tracker through technical expertise and dedication, enabling precise alignment and deeper investigation into the mysteries of space.",
    image: "/assets/projects/satelliteTracker.jpg",
  },
  {
    id: 5,
    title: "Satellite Observation",
    description:
      "Students actively track and observe satellites using optical and computational techniques, gaining hands-on experience in orbital mechanics and real-time sky observation.",
    image: "/assets/projects/satellite1.jpg",
  },
];
