// import { useContext, useEffect, useState } from "react";
// import { AppContext } from "../context/AppContext";

// export default function InitImages() {
//   const { imagenRef } = useContext(AppContext);
//   const [loaded, setLoaded] = useState(false);

//   useEffect(() => {
//     if (!imagenRef.current) return;

//     const imagePaths = {
//       LogoPrincipalWhite: "/imagenes/1.png",
//       LogoPrincipalBlack: "/imagenes/2.png",
//       Foto_Principal: "/imagenes/3.JPG",
//       Innovation: "/imagenes/4.png",
//       Recruiting: "/imagenes/5.png",
//       Vision: "/imagenes/6.png",
//       Contratacion: "/imagenes/7.png",
//       Studium: "/imagenes/8.jpg",
//       Ausbildung: "/imagenes/9.jpg",
//       Praktikum: "/imagenes/10.jpg",
//       Arbeit: "/imagenes/11.jpg",
//       Steuern: "/imagenes/12.jpg",
//       Wohen: "/imagenes/13.jpg",
//       Visum: "/imagenes/14.jpg",
//       Transportmittel: "/imagenes/13.jpg", //FALTA
//       Sprachkompetenzen: "/imagenes/16.jpg",
//       Personalauswahl_und_Rekrutierung: "/imagenes/17.jpg",
//       Personalbewertungen: "/imagenes/18.jpg",
//       International: "/imagenes/19.jpg",
//       Funktionen: "/imagenes/20.jpg",
//       Fachspezifische_Suche: "/imagenes/21.jpg",
//       Inklusionsaudit: "/imagenes/22.jpg",
//       Registrieren_Sie_Ihren_Lebenslauf: "/imagenes/23.jpg",
//       Internationales_Karrieremanagement: "/imagenes/24.jpg",
//       Wer_Wir_Sind: "/imagenes/25.png",
//       Unsere_Philosophie: "/imagenes/26.jpg",
//     };

//     const loadImageAsBlob = async (key, path) => {
//       try {
//         const response = await fetch(path);
//         if (!response.ok) throw new Error(`Error al cargar ${path}`);
//         const blob = await response.blob();
//         imagenRef.current[key] = URL.createObjectURL(blob);
//       } catch (error) {
//         console.error(error);
//       }
//     };

//     const loadImages = async () => {
//       await Promise.all(
//         Object.entries(imagePaths).map(([key, path]) =>
//           !imagenRef.current[key] ? loadImageAsBlob(key, path) : null
//         )
//       );
//       setLoaded(true);
//     };

//     loadImages();
//   }, []);

//   if (!loaded) return null;

//   return null;
// }

import { useContext, useEffect, useState } from "react";
import { AppContext } from "../context/AppContext";

export default function InitImages() {
  const { imagenRef } = useContext(AppContext);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (!imagenRef.current) imagenRef.current = {}; 

    const imagePaths = {
      LogoPrincipalWhite: "/imagenes/1.png",
      LogoPrincipalBlack: "/imagenes/2.png",
      Foto_Principal: "/imagenes/3.JPG",
      Innovation: "/imagenes/4.png",
      Recruiting: "/imagenes/5.png",
      Vision: "/imagenes/6.png",
      Contratacion: "/imagenes/7.png",
      Studium: "/imagenes/8.jpg",
      Ausbildung: "/imagenes/9.jpg",
      Praktikum: "/imagenes/10.jpg",
      Arbeit: "/imagenes/11.jpg",
      Steuern: "/imagenes/12.jpg",
      Wohen: "/imagenes/13.jpg",
      Visum: "/imagenes/14.jpg",
      Transportmittel: "/imagenes/13.jpg", //FALTA
      Sprachkompetenzen: "/imagenes/16.jpg",
      Personalauswahl_und_Rekrutierung: "/imagenes/17.jpg",
      Personalbewertungen: "/imagenes/18.jpg",
      International: "/imagenes/19.jpg",
      Funktionen: "/imagenes/20.jpg",
      Fachspezifische_Suche: "/imagenes/21.jpg",
      Inklusionsaudit: "/imagenes/22.jpg",
      Registrieren_Sie_Ihren_Lebenslauf: "/imagenes/23.jpg",
      Internationales_Karrieremanagement: "/imagenes/24.jpg",
      Wer_Wir_Sind: "/imagenes/25.png",
      Unsere_Philosophie: "/imagenes/26.jpg",
    };
    const loadImages = async () => {
      const promises = Object.entries(imagePaths).map(async ([key, path]) => {
        if (!imagenRef.current[key]) {  // Evita recargas innecesarias
          try {
            const response = await fetch(path);
            if (!response.ok) throw new Error(`Error al cargar ${path}`);
            const blob = await response.blob();
            imagenRef.current[key] = URL.createObjectURL(blob);
          } catch (error) {
            console.error(error);
          }
        }
      });
    
      await Promise.all(promises);
      setLoaded(true);
    };
    

    loadImages();
  }, []);

  if (!loaded) return null;

  return null;
}

