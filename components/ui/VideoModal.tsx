
interface VideoModalProps {
  title: string;
  demoVideo: string;
  onClose: () => void;
}

const VideoModal = ({ title, demoVideo, onClose }: VideoModalProps) => {
  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 grid h-screen w-screen place-items-center bg-black/50 backdrop-blur-sm transition-opacity duration-300"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative m-4 p-4 w-11/12 md:w-4/5 lg:w-3/5 max-w-4xl rounded-lg bg-gray-900/90 backdrop-blur-md border border-neutral-500 shadow-xl"
      >
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-medium text-white">
            {title} - Demo Video
          </h3>
          <button
            onClick={onClose}
            className="text-white hover:text-gray-300 text-2xl font-bold"
          >
            ×
          </button>
        </div>

        <div className="aspect-video w-full mb-4">
          <video
            src={demoVideo}
            controls
            autoPlay
            muted
            className="w-full h-full rounded-lg object-contain bg-black"
          >
            Your browser does not support the video tag.
          </video>
        </div>

        <div className="flex justify-end">
          <button
            onClick={onClose}
            className="rounded-md bg-gray-700 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg hover:bg-gray-600 active:bg-gray-800"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoModal;
