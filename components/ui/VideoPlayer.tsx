import { useEffect, useRef } from "react";
import cloudinary from "cloudinary-video-player";

interface VideoPlayerProps {
  id?: string;
  publicId: string;
  playerConfig?: {
    cloud_name?: string;
    secure?: boolean;
    controls?: boolean;
    [key: string]: any;
  };
  sourceConfig?: {
    [key: string]: any;
  };
  [key: string]: any;
}

const VideoPlayer = ({
  id,
  publicId,
  playerConfig = {},
  sourceConfig = {},
  ...props
}: VideoPlayerProps) => {
  const cloudinaryRef = useRef<typeof cloudinary | null>(null);
  const playerRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (cloudinaryRef.current) return;

    cloudinaryRef.current = cloudinary;

    const player = cloudinaryRef.current.videoPlayer(playerRef.current, {
      cloud_name: "demo",
      secure: true,
      controls: true,
      ...playerConfig,
    });
    player.source(publicId, sourceConfig);
  }, [publicId, playerConfig, sourceConfig]);

  return (
    <video
      ref={playerRef}
      id={id}
      className="cld-video-player cld-fluid"
      {...props}
    />
  );
};

export default VideoPlayer;
