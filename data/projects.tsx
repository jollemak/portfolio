import Image from "next/image";

export const projects = [
  {
    title: "wasaweb.fi",
    description: "A wordpress site for my website business. Used Elementor",
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
  },
  {
    title: "thaihouse.fi",
    description: "Simple landing page I made for local thai-restaurant.",
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
  },
  {
    title: "Race Track Info Screens",
    description:
      "Real-time weather application integrating multiple APIs, displaying forecasts with interactive maps and location-based alerts.",
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
  },
  {
    title: "Framework Kanban Board",
    description:
      "Project management tool with drag-and-drop functionality, team collaboration features, and real-time updates for agile development.",
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
  },
  {
    title: "Literary Lions Forum",
    description:
      "Member management system for Lions Club with event scheduling, member directory, and volunteer coordination features.",
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
  },
  {
    title: "MatchMe Dating App",
    description:
      "Modern dating application with intelligent matching algorithms, real-time chat, and location-based discovery features.",
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
  },
];
