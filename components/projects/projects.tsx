import Image from "next/image";

export const projects = [
  {
    title: "wasaweb.fi",
    description: "A wordpress site for my website business.",
    header: (
      <div className="flex h-full w-full items-center justify-center">
        <Image
          src="/wasaweb/wasaweb1.png"
          alt="Wasaweb Screenshot"
          width={400}
          height={300}
          className="object-cover rounded-lg shadow-lg"
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
      <div className="flex h-full w-full items-center justify-center">
        <Image
          src="/thaihouse/thaihouse.png"
          alt="Thai House Screenshot"
          width={400}
          height={200}
          className="object-cover rounded-lg shadow-lg"
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
    title: "Weather Dashboard",
    description:
      "Real-time weather application integrating multiple APIs, displaying forecasts with interactive maps and location-based alerts.",
    header: (
      <div className="flex h-full w-full items-center justify-center"></div>
    ),
    className: "md:col-span-1",
    link: "https://wasaweb.fi",
  },
  {
    title: "Social Media Analytics",
    description:
      "Data visualization dashboard for social media metrics, built with React and D3.js, featuring custom charts and exportable reports.",
    header: (
      <div className="flex h-full w-full items-center justify-center "></div>
    ),
    className: "md:col-span-1",
    demoVideo: "https://youtube.com/demo-video",
  },
  {
    title: "Blog CMS",
    description:
      "Content management system with markdown support, SEO optimization, and role-based access control for multi-author publishing.",
    header: (
      <div className="flex h-full w-full items-center justify-center"></div>
    ),
    className: "md:col-span-1",
  },
  {
    title: "Fitness Tracker",
    description:
      "Mobile-first fitness application tracking workouts, nutrition, and progress with personalized goal setting and achievement system.",
    header: (
      <div className="flex h-full w-full items-center justify-center"></div>
    ),
    className: "md:col-span-1",
  },
];