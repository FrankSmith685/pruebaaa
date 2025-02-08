// import { useEffect } from "react";
// import { useAppState } from "./useAppState";

// const bannerVideoUrl = new URL("/videos/banner.mp4", import.meta.url).href;

// export default function InitVideos() {
//   const { videos, setVideos } = useAppState();

//   useEffect(() => {
//     const videosToLoad = [
//       { name: "banner", src: bannerVideoUrl },
//     ];

//     videosToLoad.forEach(({ name, src }) => {
//       if (!videos[name]) {
//         const video = document.createElement("video");
//         video.src = src;
//         video.preload = "auto";
//         video.load();
//         setVideos({ ...videos, [name]: video });
//       }
//     });
//   }, [Object.values(videos).length]);

//   return null;
// }


// import { useEffect } from "react";
// import { useAppState } from "./useAppState";

// const bannerVideoUrl = "/videos/banner.mp4";

// export default function InitVideos() {
//   const { videos, setVideos } = useAppState();

//   useEffect(() => {
//     const videosToLoad = [{ name: "banner", src: bannerVideoUrl }];

//     videosToLoad.forEach(({ name, src }) => {
//       if (!videos[name]) {
//         const video = document.createElement("video");
//         video.src = src;
//         video.preload = "auto";
//         video.load();
//         setVideos({...videos,[name]:video})
//       }
//     });
//   }, [Object.keys(videos).length]);

//   return null;
// }


import { useEffect, useRef } from "react";
import { useAppState } from "./useAppState";

const bannerVideoUrl = "/videos/banner.mp4";

export default function InitVideos() {
  const { videos, setVideos } = useAppState();
  const isMounted = useRef(false); // Evita múltiples ejecuciones

  useEffect(() => {
    if (isMounted.current) return; // Si ya se ejecutó, salir

    isMounted.current = true; // Marca como ejecutado
    if (!videos.banner) {
      const video = document.createElement("video");
      video.src = bannerVideoUrl;
      video.preload = "auto";
      video.load();
      setVideos({...videos,banner:video})
      // setVideos((prev) => ({ ...prev, banner: video }));
    }
  }, []); // Se ejecuta solo una vez en el montaje

  return null;
}
