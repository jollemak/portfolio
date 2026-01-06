import { cn } from "@/lib/utils";
import Modal from "./modal";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "mx-auto grid max-w-5xl grid-cols-1 gap-x-3 gap-y-15 md:grid-rows-[repeat(auto-fit,16rem)] md:grid-cols-3",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
  link,
  demoVideo,
  images,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
  link?: string;
  demoVideo?: string;
  images?: string[];
}) => {
  const content = (
    <div
      className={cn(
        "group/bento shadow-input row-span-1 h-70 flex flex-col justify-between space-y-3 rounded-xl border border-neutral-500 bg-gray-900 p-3 transition duration-200 hover:shadow-2xl hover:shadow-white/30 dark:border-white/[0.2] dark:bg-black dark:shadow-none dark:hover:shadow-2xl dark:hover:shadow-white/30",
        className
      )}
    >
      {header}
      <div className="transition duration-200 group-hover/bento:translate-x-2">
        {icon}
        <div className="mt-1 mb-1 font-sans font-bold text-s text-neutral-200 dark:text-neutral-200">
          {title}
        </div>
        <div className="font-sans text-sm font-normal leading-tight text-neutral-200 dark:text-neutral-300 overflow-hidden text-ellipsis line-clamp-3">
          {description}
        </div>
      </div>
    </div>
  );

  return (
    <Modal
      title={typeof title === "string" ? title : "Project Details"}
      description={typeof description === "string" ? description : ""}
      link={link}
      demoVideo={demoVideo}
      images={images}
    >
      {content}
    </Modal>
  );
};
