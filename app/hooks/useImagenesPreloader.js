import { useContext, useEffect } from "react";
import { AppContext } from "../context/AppContext";

export default function InitImages() {
  const { imagenRef } = useContext(AppContext);

  useEffect(() => {
    if (!imagenRef.current) return;

    const imagePaths = {
      LogoPrincipalWhite: "/imagenes/LogoPrincipalWhite.png",
      LogoPrincipalBlack: "/imagenes/LogoPrincipalBlack.png",
      Foto_Principal: "/imagenes/Foto_Principal.jpg",
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
      Sprachkompetenzen: "/imagenes/Sprachkompetenzen.jpg",
      Personalauswahl_und_Rekrutierung: "/imagenes/Personalauswahl_und_Rekrutierung.jpg",
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

    Object.entries(imagePaths).forEach(([key, path]) => {
      if (!imagenRef.current[key]) {
        loadImageAsBlob(key, path);
      }
    });
  }, []);

  return null;
}
