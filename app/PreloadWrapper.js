// 'use client'
// import { useState, useEffect, useContext } from "react";
// // import InitImages from "./hooks/useImagenesPreloader";
// // import InitVideos from "./hooks/useVideosPreLoader";
// // import HeaderNav from "./assets/HeaderNav";
// import { FaSpinner } from "react-icons/fa";
// import { AppContext } from "./context/AppContext";
// import { useAppState } from "./hooks/useAppState";
// import HeaderNav from "./assets/HeaderNav";
// import InitVideos from "./hooks/useVideosPreLoader";
// import InitImages from "./hooks/useImagenesPreloader";
// import Footer from "./assets/Footer";

// export default function PreloadWrapper({ children }) {
//   const [loading, setLoading] = useState(true);
//   const { imagenRef } = useContext(AppContext);
//   const {videos,setVideos} = useAppState();
//   const imagePaths = {
//     LogoPrincipalWhite: "/imagenes/1.png",
//     LogoPrincipalBlack: "/imagenes/2.png",
//     Foto_Principal: "/imagenes/3.JPG",
//     Innovation: "/imagenes/4.png",
//     Recruiting: "/imagenes/5.png",
//     Vision: "/imagenes/6.png",
//     Contratacion: "/imagenes/7.png",
//     Studium: "/imagenes/8.jpg",
//     Ausbildung: "/imagenes/9.jpg",
//     Praktikum: "/imagenes/10.jpg",
//     Arbeit: "/imagenes/11.jpg",
//     Steuern: "/imagenes/12.jpg",
//     Wohen: "/imagenes/13.jpg",
//     Visum: "/imagenes/14.jpg",
//     Transportmittel: "/imagenes/13.jpg", //FALTA
//     Sprachkompetenzen: "/imagenes/16.jpg",
//     Personalauswahl_und_Rekrutierung: "/imagenes/17.jpg",
//     Personalbewertungen: "/imagenes/18.jpg",
//     International: "/imagenes/19.jpg",
//     Funktionen: "/imagenes/20.jpg",
//     Fachspezifische_Suche: "/imagenes/21.jpg",
//     Inklusionsaudit: "/imagenes/22.jpg",
//     Registrieren_Sie_Ihren_Lebenslauf: "/imagenes/23.jpg",
//     Internationales_Karrieremanagement: "/imagenes/24.jpg",
//     Wer_Wir_Sind: "/imagenes/25.png",
//     Unsere_Philosophie: "/imagenes/26.jpg",
//   };
//   useEffect(() => {
//     const checkResourcesLoaded = () => {
//       const allImagesLoaded =
//         Object.keys(imagenRef.current || {}).length === Object.keys(imagePaths).length;
//         console.log("",videos.banner?.readyState)
//       return allImagesLoaded && videos.banner?.readyState >= 3;
//     };

//     console.log(checkResourcesLoaded());
  
//     if (checkResourcesLoaded()) {
//       setLoading(false);
//     } else {
//       const interval = setInterval(() => {
//         if (checkResourcesLoaded()) {
//           setLoading(false);
//           clearInterval(interval);
//         }
//       }, 100);
  
//       return () => clearInterval(interval);
//     }
//   }, [imagenRef,videos]); // Se ejecuta solo una vez en el montaje
  

//   console.log(loading);

//   if (loading) {
//     return (
//       <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900">
//         <FaSpinner className="text-6xl text-white animate-spin" />
//         <InitImages />
//         <InitVideos />
//       </div>
//     );
//   }

//   return (
//     <>
//         <HeaderNav />
//         {children}
//         <Footer/>
//     </>
//   );
// }


'use client'
import { useState, useEffect, useContext } from "react";
import { FaSpinner } from "react-icons/fa";
import { AppContext } from "./context/AppContext";
import { useAppState } from "./hooks/useAppState";
import HeaderNav from "./assets/HeaderNav";
import InitVideos from "./hooks/useVideosPreLoader";
import InitImages from "./hooks/useImagenesPreloader";
import Footer from "./assets/Footer";

export default function PreloadWrapper({ children }) {
  const [loading, setLoading] = useState(true);
  const { imagenRef } = useContext(AppContext);
  const { videos } = useAppState();

  useEffect(() => {
    const checkResourcesLoaded = () => {
      const logoWhiteLoaded = imagenRef.current?.LogoPrincipalWhite;
      const logoBlackLoaded = imagenRef.current?.LogoPrincipalBlack;
      return logoWhiteLoaded && logoBlackLoaded ;
    };
    

    if (checkResourcesLoaded()) {
      setLoading(false);
    } else {
      const interval = setInterval(() => {
        if (checkResourcesLoaded()) {
          setLoading(false);
          clearInterval(interval);
        }
      }, 100);

      return () => clearInterval(interval);
    }
  }, []);

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900">
        <FaSpinner className="text-6xl text-white animate-spin" />
        <InitImages />
        <InitVideos />
      </div>
    );
  }

  return (
    <>
      <HeaderNav />
      {children}
      <Footer />
    </>
  );
}
