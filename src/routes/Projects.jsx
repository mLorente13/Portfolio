import ProjectCard from "../components/ProjectCard";
import HTML from "../components/icons/HTML";
import CSS from "../components/icons/CSS";
import JavaScript from "../components/icons/JavaScript";
import TailwindCSS from "../components/icons/TailwindCSS";
import PWA from "../components/icons/PWA";
import Spring from "../components/icons/Spring";
import ReactIcon from "../components/icons/React";

export default function Projects() {
  const tags = {
    javascript: {
      name: "JavaScript",
      class: "bg-yellow-500/50",
      icon: JavaScript,
    },
    html: {
      name: "HTML",
      class: "bg-orange-500/50",
      icon: HTML,
    },
    css: {
      name: "CSS",
      class: "bg-blue-500/50",
      icon: CSS,
    },
    tailwindcss: {
      name: "Tailwind CSS",
      class: "bg-[#06B6D4]/50",
      icon: TailwindCSS,
    },
    pwa: {
      name: "PWA",
      class: "bg-zinc-950",
      icon: PWA,
    },
    ai: {
      name: "AI",
      class: "bg-[#FF4081]",
      icon: "",
    },
    spring: {
      name: "Spring Boot",
      class: "bg-green-900",
      icon: Spring,
    },
    rest: {
      name: "REST API",
      class: "bg-[#FF5733]",
      icon: "",
    },
    react: {
      name: "React",
      class: "bg-[#53C1DE]/20",
      icon: ReactIcon,
    },
  };

  const projects = [
    {
      title: "Speedtrack",
      description:
        "Speedtrack is a web application for booking karting sessions and keep track of your performance.",
      id: "speedtrack",
      links: [null, "https://speed-track.es/"],
      image: "/speedtrack.webp",
      tags: [tags.react, tags.tailwindcss, tags.spring],
    },
    {
      title: "Calculator",
      description: "Simple calculator built with HTML, CSS, and JavaScript.",
      id: "calculator",
      links: [
        "https://github.com/mLorente13/Calculator",
        "https://calculator-mlt.netlify.app",
      ],
      image: "/calculator.webp",
      tags: [tags.html, tags.tailwindcss, tags.javascript, tags.pwa],
    },
    {
      title: "Gallery",
      description:
        "Gallery App built with HTML, CSS, and JavaScript using the unsplash API.",
      id: "gallery",
      links: [
        "https://github.com/mLorente13/LlenguatgesMarques23/tree/main/Fetch",
        "https://llenguatge-marques.netlify.app/fetch/",
      ],
      image: "/gallery.webp",
      tags: [tags.html, tags.css, tags.javascript],
    },
    {
      title: "Weather App",
      description:
        "Weather App built with HTML, CSS, and JavaScript using the open weather API.",
      id: "weather",
      links: [
        "https://github.com/mLorente13/Weather-App",
        "https://mlt-weather-app.netlify.app/",
      ],
      image: "/weather-app.webp",
      tags: [tags.html, tags.css, tags.javascript],
    },
    {
      title: "Memory Game",
      description: "Memory game built with HTML, CSS and JavaScript.",
      id: "memory",
      links: [
        "https://github.com/mLorente13/Practica_Memory_Game",
        "https://mlt-memory-game.netlify.app/",
      ],
      image: "/memory-game.webp",
      tags: [tags.html, tags.css, tags.javascript, tags.pwa],
    },
    {
      title: "Restaurant Page",
      description:
        "Restaurant Page built with HTML, TailwindCSS, and JavaScript.",
      id: "restaurant",
      links: [
        "https://github.com/mLorente13/mlt-web-restaurante",
        "https://tajerdoro.netlify.app/",
      ],
      image: "/restaurant.webp",
      tags: [tags.html, tags.tailwindcss, tags.javascript],
    },
    {
      title: "Maze Game",
      description:
        "Maze game with both front-end and back-end built with HTML, CSS, JavaScript, and Spring Boot.",
      id: "maze",
      links: [
        "https://github.com/mLorente13/DES-Practica_Maze",
        "https://maze-game-d8e9.onrender.com",
      ],
      image: "/maze.webp",
      tags: [tags.html, tags.css, tags.javascript, tags.spring],
    },
    {
      title: "Forum App",
      description: "Forum app backend built with Sping Boot using a REST API.",
      id: "forum",
      links: [
        "https://github.com/mLorente13/DES-practica-forum",
        "https://mlt-forum-app.netlify.app/",
      ],
      image: "/forum-app.webp",
      tags: [tags.spring],
    },
  ];

  return (
    <main className=" w-11/12 lg:w-2/3 2xl:w-1/2 mx-auto flex flex-col flex-wrap pt-15 pb-30 md:py-22 min-h-screen">
      <h1 className="text-5xl font-bold">
        Projects<span className="text-orange-400">.</span>
      </h1>
      <section className="w-full flex flex-wrap gap-10 mt-8">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} delay={index * 100} />
        ))}
      </section>
    </main>
  );
}
