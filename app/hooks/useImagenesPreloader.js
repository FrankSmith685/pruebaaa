import { useContext, useEffect, useState } from "react";
import { AppContext } from "../context/AppContext";

export default function InitImages() {
  const { imagenRef } = useContext(AppContext);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (!imagenRef.current) return;

    const imagePaths = {
      LogoPrincipalWhite: "/imagenes/ww.png",
      LogoPrincipalBlack: "/imagenes/LogoPrincipalBlack.png",
      Foto_Principal: "/imagenes/fp.JPG",
      Innovation: "/imagenes/Innovation.png",
      Recruiting: "/imagenes/Recruiting.png",
      Vision: "/imagenes/Vision.png",
      Contratacion: "/imagenes/Contratacion.png",
      Studium: "/imagenes/studium.jpg",
      Ausbildung: "/imagenes/Ausbildung.jpg",
      Praktikum: "/imagenes/Praktikum.jpg",
      Arbeit: "/imagenes/Arbeit.jpg",
      Steuern: "/imagenes/Steuern.jpg",
      Wohen: "/imagenes/Wohen.jpg",
      Visum: "/imagenes/visum.jpg",
      Transportmittel: "/imagenes/Wohen.jpg",
      Sprachkompetenzen: "/imagenes/Sprachkompetenzen.jpg",
      Personalauswahl_und_Rekrutierung: "/imagenes/Personalauswahl_und_Rekrutierung.jpg",
      Personalbewertungen: "/imagenes/Personalbewertungen.jpg",
      International: "/imagenes/International.jpg",
      Funktionen: "/imagenes/Funktionen.jpg",
      Fachspezifische_Suche: "/imagenes/Fachspezifische_Suche.jpg",
      Inklusionsaudit: "/imagenes/Inklusionsaudit.jpg",

      Registrieren_Sie_Ihren_Lebenslauf: "/imagenes/RSI.jpg",
      Internationales_Karrieremanagement: "/imagenes/Internationales_Karrieremanagement.jpg",
      Wer_Wir_Sind: "/imagenes/Wer_Wir_Sind.png",
      Unsere_Philosophie: "/imagenes/Unsere_Philosophie.jpg",
    };

    const loadImageAsBlob = async (key, path) => {
      try {
        const response = await fetch(path);
        if (!response.ok) throw new Error(`Error al cargar ${path}`);
        const blob = await response.blob();
        imagenRef.current[key] = URL.createObjectURL(blob);
      } catch (error) {
        console.error(error);
      }
    };

    const loadImages = async () => {
      await Promise.all(
        Object.entries(imagePaths).map(([key, path]) =>
          !imagenRef.current[key] ? loadImageAsBlob(key, path) : null
        )
      );
      setLoaded(true);
    };

    loadImages();
  }, []);

  if (!loaded) return null;

  return null;
}

