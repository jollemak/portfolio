"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import VideoModal from "./VideoModal";

interface ModalProps {
  title: string;
  description?: string;
  children?: React.ReactNode;
  link?: string;
  demoVideo?: string;
  images?: string[];
}

const Modal = ({
  title,
  description,
  children,
  link,
  demoVideo,
  images,
}: ModalProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    if (isOpen || isVideoOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen, isVideoOpen]);

  const nextImage = () => {
    if (images && images.length > 0) {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }
  };

  const prevImage = () => {
    if (images && images.length > 0) {
      setCurrentImageIndex(
        (prev) => (prev - 1 + images.length) % images.length
      );
    }
  };

  return (
    <>
      <div onClick={() => setIsOpen(true)} className="cursor-pointer h-full">
        {children}
      </div>
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 z-50 grid h-screen w-screen place-items-center bg-black/30 backdrop-blur-sm transition-opacity duration-300"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative m-4 p-4 w-11/12 md:w-4/5 lg:w-3/5 max-w-4xl rounded-lg bg-gray-900 backdrop-blur-md border border-neutral-500 shadow-xl"
          >
            <div className="flex shrink-0 items-center pb-4 text-xl font-medium text-white">
              {title}
            </div>

            {images && images.length > 0 && (
              <div className="relative w-full h-56 sm:h-64 md:h-80 lg:h-96 overflow-hidden rounded-lg mb-4">
                <div className="relative h-full w-full">
                  {images.map((image, index) => (
                    <div
                      key={index}
                      className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                        index === currentImageIndex
                          ? "opacity-100"
                          : "opacity-0"
                      }`}
                    >
                      <Image
                        src={image}
                        alt={`${title} - Image ${index + 1}`}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 600px"
                      />
                    </div>
                  ))}
                </div>

                {/* Previous button */}
                <button
                  onClick={prevImage}
                  className="absolute top-1/2 left-3 -translate-y-1/2 z-10 bg-gray-800/50 hover:bg-gray-800/80 text-white p-2 rounded-full transition-all"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                </button>

                {/* Next button */}
                <button
                  onClick={nextImage}
                  className="absolute top-1/2 right-3 -translate-y-1/2 z-10 bg-gray-800/50 hover:bg-gray-800/80 text-white p-2 rounded-full transition-all"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>

                {/* Indicators */}
                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                  {images.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`w-2 h-2 rounded-full transition-all ${
                        index === currentImageIndex
                          ? "bg-white w-8"
                          : "bg-white/50 hover:bg-white/80"
                      }`}
                    />
                  ))}
                </div>
              </div>
            )}

            <div className="relative border-t border-neutral-700 py-4 leading-normal text-neutral-300 font-light">
              {description || "Project details"}
            </div>
            <div className="flex shrink-0 flex-wrap items-center gap-2 pt-4 justify-end">
              {link && (
                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-md bg-orange-500 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg hover:bg-orange-600 active:bg-orange-700"
                >
                  Visit Link
                </a>
              )}
              {demoVideo && (
                <button
                  onClick={() => setIsVideoOpen(true)}
                  className="rounded-md bg-orange-500 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg hover:bg-orange-600 active:bg-orange-700"
                  type="button"
                >
                  Demo Video
                </button>
              )}
              <button
                onClick={() => setIsOpen(false)}
                className="rounded-md bg-gray-700 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg hover:bg-gray-600 active:bg-gray-800"
                type="button"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Video Modal */}
      {isVideoOpen && demoVideo && (
        <VideoModal
          title={title}
          demoVideo={demoVideo}
          onClose={() => setIsVideoOpen(false)}
        />
      )}
    </>
  );
};

export default Modal;
