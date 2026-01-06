declare module 'cloudinary-video-player' {
  interface PlayerConfig {
    cloud_name?: string;
    secure?: boolean;
    controls?: boolean;
    [key: string]: any;
  }

  interface SourceConfig {
    [key: string]: any;
  }

  interface VideoPlayer {
    source(publicId: string, config?: SourceConfig): void;
    play(): void;
    pause(): void;
    destroy(): void;
    [key: string]: any;
  }

  interface Cloudinary {
    videoPlayer(element: HTMLElement | null, config: PlayerConfig): VideoPlayer;
    [key: string]: any;
  }

  const cloudinary: Cloudinary;
  export default cloudinary;
}