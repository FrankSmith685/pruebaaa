// import { useContext, useEffect, useState } from "react";
// import { AppContext } from "../context/AppContext";

// export default function InitImages() {
//   const { imagenRef } = useContext(AppContext);
//   const [loaded, setLoaded] = useState(false);

//   useEffect(() => {
//     if (!imagenRef.current) return;

//     const imagePaths = {
//       LogoPrincipalWhite: "/imagenes/1.webp",
//       LogoPrincipalBlack: "/imagenes/2.webp",
//       Foto_Principal: "/imagenes/3.webp",
//       Innovation: "/imagenes/4.webp",
//       Recruiting: "/imagenes/5.webp",
//       Vision: "/imagenes/6.webp",
//       Contratacion: "/imagenes/7.webp",
//       Studium: "/imagenes/8.webp",
//       Ausbildung: "/imagenes/9.webp",
//       Praktikum: "/imagenes/10.webp",
//       Arbeit: "/imagenes/11.webp",
//       Steuern: "/imagenes/12.webp",
//       Wohen: "/imagenes/13.webp",
//       Visum: "/imagenes/14.webp",
//       Transportmittel: "/imagenes/13.webp", //FALTA
//       Sprachkompetenzen: "/imagenes/16.webp",
//       Personalauswahl_und_Rekrutierung: "/imagenes/17.webp",
//       Personalbewertungen: "/imagenes/18.webp",
//       International: "/imagenes/19.webp",
//       Funktionen: "/imagenes/20.webp",
//       Fachspezifische_Suche: "/imagenes/21.webp",
//       Inklusionsaudit: "/imagenes/22.webp",
//       Registrieren_Sie_Ihren_Lebenslauf: "/imagenes/23.webp",
//       Internationales_Karrieremanagement: "/imagenes/24.webp",
//       Wer_Wir_Sind: "/imagenes/25.webp",
//       Unsere_Philosophie: "/imagenes/26.webp",
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
      LogoPrincipalWhite: "/imagenes/1.webp",
      LogoPrincipalBlack: "/imagenes/2.webp",
      Foto_Principal: "/imagenes/3.webp",
      Innovation: "/imagenes/4.webp",
      Recruiting: "/imagenes/5.webp",
      Vision: "/imagenes/6.webp",
      Contratacion: "/imagenes/7.webp",
      Studium: "/imagenes/8.webp",
      Ausbildung: "/imagenes/9.webp",
      Praktikum: "/imagenes/10.webp",
      Arbeit: "/imagenes/11.webp",
      Steuern: "/imagenes/12.webp",
      Wohen: "/imagenes/13.webp",
      Visum: "/imagenes/14.webp",
      Transportmittel: "/imagenes/15.webp", //FALTA
      Sprachkompetenzen: "/imagenes/16.webp",
      Personalauswahl_und_Rekrutierung: "/imagenes/17.webp",
      Personalbewertungen: "/imagenes/18.webp",
      International: "/imagenes/19.webp",
      Funktionen: "/imagenes/20.webp",
      Fachspezifische_Suche: "/imagenes/21.webp",
      Inklusionsaudit: "/imagenes/22.webp",
      Registrieren_Sie_Ihren_Lebenslauf: "/imagenes/23.webp",
      Internationales_Karrieremanagement: "/imagenes/24.webp",
      Wer_Wir_Sind: "/imagenes/25.webp",
      Unsere_Philosophie: "/imagenes/26.webp",
      Kontakt: "/imagenes/27.webp",
      // 
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

