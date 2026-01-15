import Image from "next/image";

type Tags = {
  wordpress: string;
  elementor: string;
  html: string;
  css: string;
  javascript: string;
  react: string;
  mongodb: string;
  postreSQL: string;
  next: string;
  typescript: string;
  socketio: string;
  rest: string;
  go: string;
  docker: string;
};

export const tags: Tags = {
  wordpress: "WordPress",
  elementor: "Elementor",
  html: "HTML",
  css: "CSS",
  javascript: "JavaScript",
  react: "React",
  mongodb: "MongoDB",
  postreSQL: "PostgreSQL",
  next: "Next.js",
  typescript: "TypeScript",
  socketio: "Socket.IO",
  rest: "REST API",
  go: "Go",
  docker: "Docker",
};

export const projects = [
  {
    title: "thaihouse.fi",
    description:
      "A modern and responsive website for a Thai restaurant built using HTML, CSS, and JavaScript.",
    header: (
      <div className="flex h-40 w-full items-center justify-center overflow-hidden">
        <Image
          src="/thaihouse/thaihouse.png"
          alt="Thai House Screenshot"
          width={400}
          height={225}
          className="w-full h-full object-cover rounded-lg shadow-lg"
        />
      </div>
    ),
    className: "md:col-span-1",
    link: "https://thaihouse.fi",
    images: [
      "/thaihouse/thaihouse.png",
      "/thaihouse/thaihouse2.png",
      "/thaihouse/thaihouse3.png",
    ],
    tags: [tags.javascript, tags.html, tags.css],
  },
  {
    title: "Bombastic Multiplayer",
    description: `This was a fun group project where we developed an online multiplayer game inspired by Bomberman, 
    featuring power-ups and a single-player mode with AI-controlled opponents.
    My primary responsibilities included implementing real-time connectivity between
     local and remote clients using Socket.IO, as well as deploying the game to the web using Fly.io.`,
    header: (
      <div className="flex h-40 w-full items-center justify-center overflow-hidden">
        <Image
          src="/bombastic/kuva1.png"
          alt="Bombastic Screenshot"
          width={400}
          height={225}
          className="w-full h-full object-cover rounded-lg shadow-lg"
        />
      </div>
    ),
    className: "md:col-span-1",
    link: "https://bombastic.fly.dev/",
    images: [
      "/bombastic/kuva1.png",
      "/bombastic/kuva2.png",
      "/bombastic/kuva3.png",
    ],
    tags: [tags.javascript, tags.socketio, tags.html, tags.css, "Fly.io"],
  },

  {
    title: "Race Track Info Screens",
    description: `This project was about learning real-time data communication using Socket.IO.
       Created an info screen system for a race track that displays real- time race data such as lap times,
       positions, and race status updates.
       This was a school project done in a team of three.`,
    header: (
      <div className="flex h-40 w-full items-center justify-center overflow-hidden">
        <Image
          src="/racetrack/racetrack1.png"
          alt="Race Track Screenshot"
          width={400}
          height={225}
          className="w-full h-full object-cover rounded-lg shadow-lg"
        />
      </div>
    ),
    className: "md:col-span-1",
    demoVideo: "/racetrack/racetrack.mp4",
    images: [
      "/racetrack/racetrack1.png",
      "/racetrack/racetrack2.png",
      "/racetrack/racetrack3.png",
    ],
    tags: [tags.react, tags.javascript, tags.socketio, tags.mongodb],
  },

  {
    title: "wasaweb.fi",
    description: `WordPress website for my freelancing agency. 
    Built using WordPress and Elementor for easy content management and customization.
    Features a modern and responsive design.`,
    header: (
      <div className="flex h-40 w-full items-center justify-center overflow-hidden">
        <Image
          src="/wasaweb/wasaweb1.png"
          alt="Wasaweb Screenshot"
          width={400}
          height={225}
          priority
          className="w-full h-full object-cover rounded-lg shadow-lg"
        />
      </div>
    ),
    className: "md:col-span-1",
    link: "https://wasaweb.fi",
    images: ["/wasaweb/wasaweb1.png", "/wasaweb/wasaweb2.png"],
    tags: [tags.wordpress, tags.elementor],
  },
  {
    title: "Frontend Framework",
    description: `This group project involved creating a lightweight
      frontend framework from scratch using vanilla JavaScript, HTML, and CSS.
      The framework includes components for building responsive layouts,
      handling user interactions, and managing state. The Kanban board is built using this framework.`,
    header: (
      <div className="flex h-40 w-full items-center justify-center overflow-hidden">
        <Image
          src="/framework/kanban.png"
          alt="Framework Kanban Screenshot"
          width={400}
          height={225}
          className="w-full h-full object-cover rounded-lg shadow-lg"
        />
      </div>
    ),
    className: "md:col-span-1",
    demoVideo: "/framework/kanban.mp4",
    images: ["/framework/kanban.png"],
    tags: [tags.javascript, tags.html, tags.css],
  },
  {
    title: "Literary Lions Forum",
    description: `A community forum website for book enthusiasts to discuss and share literary works. 
      Features include user authentication, post creation, commenting, and liking posts.
      Built with Go for the backend and HTML/CSS for the frontend.
      Docker was used to deploy.`,
    header: (
      <div className="flex h-40 w-full items-center justify-center overflow-hidden">
        <Image
          src="/lions/lions1.png"
          alt="Lions Club Screenshot"
          width={400}
          height={225}
          className="w-full h-full object-cover rounded-lg shadow-lg"
        />
      </div>
    ),
    className: "md:col-span-1",
    demoVideo: "/lions/lions.mp4",
    images: ["/lions/lions1.png", "/lions/lions2.png", "/lions/lions3.png"],
    tags: [tags.go, tags.html, tags.css, tags.rest, tags.docker],
  },
  {
    title: "Matching App",
    description: `Matching app that connects users based on shared interests and preferences. 
      Features real-time chat, profile creation, and match suggestions.
      Built with Next.js and TypeScript for the frontend, and Go for the backend.
      Utilizes WebSockets for real-time communication.
      My main responsibilitie was settin up the PostreSQL database.
      Group project done in a team of three.`,
    header: (
      <div className="flex h-40 w-full items-center justify-center overflow-hidden">
        <Image
          src="/matchme/match-me1.png"
          alt="MatchMe App Screenshot"
          width={400}
          height={225}
          className="w-full h-full object-cover rounded-lg shadow-lg"
        />
      </div>
    ),
    className: "md:col-span-1",
    demoVideo: "/matchme/match-me.mp4",
    images: [
      "/matchme/match-me1.png",
      "/matchme/match-me2.png",
      "/matchme/match-me3.png",
    ],
    tags: [
      tags.next,
      tags.postreSQL,
      tags.socketio,
      tags.rest,
      tags.typescript,
      tags.go,
    ],
  },
  {
    title: "Trains Pathfinding Simulator",
    description: `The stations project simulates a train system where trains move between stations using the shortest available routes. It ensures that no two trains use the same station or connection simultaneously, except for the starting and ending stations. The system is designed to support concurrent train movements for improved performance.`,
    header: (
      <div className="flex h-40 w-full items-center justify-center overflow-hidden">
        <Image
          src="/trains/trains1.png"
          alt="Train Booking Screenshot"
          width={400}
          height={225}
          className="w-full h-full object-cover rounded-lg shadow-lg"
        />
      </div>
    ),
    className: "md:col-span-1",
    demoVideo: "/trains/trains.mp4",
    images: [
      "/trains/trains1.png",
      "/trains/trains2.png",
      "/trains/trains3.png",
    ],
    tags: [tags.go, tags.html, tags.css, tags.rest],
  },
  {
    title: "ASCII Art Decoder/Encoder",
    description: `ASCII Art Decoder/Encoder is a Go-based web server application that encodes and decodes text-based art using custom functions. It provides an HTTP server for handling encoding and decoding requests.`,
    header: (
      <div className="flex h-40 w-full items-center justify-center overflow-hidden">
        <Image
          src="/art/art1.png"
          alt="Art Gallery Screenshot"
          width={400}
          height={225}
          className="w-full h-full object-cover rounded-lg shadow-lg"
        />
      </div>
    ),
    className: "md:col-span-1",
    demoVideo: "/art/art.mp4",
    images: ["/art/art1.png", "/art/art2.png"],
    tags: [tags.go, tags.html, tags.css, tags.rest],
  },
  {
    title: "Car Viewer",
    description: `Cars Viewer is a web application that displays car data fetched from a JSON API. Users can search for cars by name and filter results by category, manufacturer, and year.`,
    header: (
      <div className="flex h-40 w-full items-center justify-center overflow-hidden">
        <Image
          src="/cars/cars1.png"
          alt="Car Dealership Screenshot"
          width={400}
          height={225}
          className="w-full h-full object-cover rounded-lg shadow-lg"
        />
      </div>
    ),
    className: "md:col-span-1",
    demoVideo: "/cars/cars.mp4",
    images: ["/cars/cars1.png", "/cars/cars2.png"],
    tags: [tags.go, tags.html, tags.css, tags.rest],
  },
];
