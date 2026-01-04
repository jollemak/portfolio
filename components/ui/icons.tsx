import Image from "next/image";

const Icons = () => {
  return (
    <>
      <div className="mt-8">
        <h3 className="text-2xl font-light text-white mb-6 text-center">
          My Tech Stack
        </h3>
        <div className="grid grid-cols-3 md:grid-cols-5 gap-6">
          <div className="flex flex-col items-center gap-2 group">
            <div className="w-16 h-16 flex items-center justify-center bg-gray-800/50 rounded-lg p-3 transition-all duration-300 group-hover:bg-gray-700/50 group-hover:scale-110">
              <Image
                src="/icons/javascript.svg"
                alt="JavaScript"
                width={40}
                height={40}
                style={{ width: "auto", height: "40px" }}
              />
            </div>
            <span className="text-xs text-neutral-400 text-center">
              JavaScript
            </span>
          </div>

          <div className="flex flex-col items-center gap-2 group">
            <div className="w-16 h-16 flex items-center justify-center bg-gray-800/50 rounded-lg p-3 transition-all duration-300 group-hover:bg-gray-700/50 group-hover:scale-110">
              <Image
                src="/icons/typescript.svg"
                alt="TypeScript"
                width={40}
                height={40}
                style={{ width: "auto", height: "40px" }}
              />
            </div>
            <span className="text-xs text-neutral-400 text-center">
              TypeScript
            </span>
          </div>

          <div className="flex flex-col items-center gap-2 group">
            <div className="w-16 h-16 flex items-center justify-center bg-gray-800/50 rounded-lg p-3 transition-all duration-300 group-hover:bg-gray-700/50 group-hover:scale-110">
              <Image
                src="/icons/go-logo.svg"
                alt="Go"
                width={40}
                height={40}
                style={{ width: "auto", height: "40px" }}
              />
            </div>
            <span className="text-xs text-neutral-400 text-center">Go</span>
          </div>

          <div className="flex flex-col items-center gap-2 group">
            <div className="w-16 h-16 flex items-center justify-center bg-gray-800/50 rounded-lg p-3 transition-all duration-300 group-hover:bg-gray-700/50 group-hover:scale-110">
              <Image
                src="/icons/react-icon.svg"
                alt="React"
                width={40}
                height={40}
                style={{ width: "auto", height: "40px" }}
              />
            </div>
            <span className="text-xs text-neutral-400 text-center">React</span>
          </div>

          <div className="flex flex-col items-center gap-2 group">
            <div className="w-16 h-16 flex items-center justify-center bg-gray-800/50 rounded-lg p-3 transition-all duration-300 group-hover:bg-gray-700/50 group-hover:scale-110">
              <Image
                src="/icons/nextjs-icon.svg"
                alt="Next.js"
                width={40}
                height={40}
                style={{ width: "auto", height: "40px" }}
              />
            </div>
            <span className="text-xs text-neutral-400 text-center">
              Next.js
            </span>
          </div>

          <div className="flex flex-col items-center gap-2 group">
            <div className="w-16 h-16 flex items-center justify-center bg-gray-800/50 rounded-lg p-3 transition-all duration-300 group-hover:bg-gray-700/50 group-hover:scale-110">
              <Image
                src="/icons/tailwind.svg"
                alt="Tailwind CSS"
                width={40}
                height={40}
                style={{ width: "auto", height: "40px" }}
              />
            </div>
            <span className="text-xs text-neutral-400 text-center">
              Tailwind
            </span>
          </div>

          <div className="flex flex-col items-center gap-2 group">
            <div className="w-16 h-16 flex items-center justify-center bg-gray-800/50 rounded-lg p-3 transition-all duration-300 group-hover:bg-gray-700/50 group-hover:scale-110">
              <Image
                src="/icons/mongodb.svg"
                alt="MongoDB"
                width={40}
                height={40}
                style={{ width: "auto", height: "40px" }}
              />
            </div>
            <span className="text-xs text-neutral-400 text-center">
              MongoDB
            </span>
          </div>

          <div className="flex flex-col items-center gap-2 group">
            <div className="w-16 h-16 flex items-center justify-center bg-gray-800/50 rounded-lg p-3 transition-all duration-300 group-hover:bg-gray-700/50 group-hover:scale-110">
              <Image
                src="/icons/postre-logo.svg"
                alt="PostgreSQL"
                width={40}
                height={40}
                style={{ width: "auto", height: "40px" }}
              />
            </div>
            <span className="text-xs text-neutral-400 text-center">
              PostgreSQL
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Icons;
