import { useContext, useEffect, useState } from "react";
import { AppContext } from "../context/AppContext";

export default function InitImages() {
  const { imagenRef } = useContext(AppContext);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (!imagenRef.current) return;

    const imagePaths = [
      "LogoPrincipalWhite.png",
      "LogoPrincipalBlack.png",
      "Foto_Principal.jpg",
      "Innovation.png",
      "Recruiting.png",
      "Vision.png",
      "Contratacion.png",
      "studium.jpg",
      "Ausbildung.jpg",
      "Praktikum.jpg",
      "Arbeit.jpg",
      "Steuern.jpg",
      "Wohen.jpg",
      "visum.jpg",
      "Sprachkompetenzen.jpg",
      "Personalauswahl_und_Rekrutierung.jpg",
    ];

    const loadImageAsBlob = async (imageName) => {
      const path = `/imagenes/${imageName}`;
      try {
        console.log(`Intentando cargar: ${path}`);
        const response = await fetch(path);
        if (!response.ok) throw new Error(`Error al cargar ${path}`);

        const blob = await response.blob();
        console.log(blob)
        imagenRef.current[imageName] = URL.createObjectURL(blob);
      } catch (error) {
        console.warn(`No se pudo cargar: ${path}`, error.message);
      }
    };

    const loadImages = async () => {
      await Promise.all(imagePaths.map(loadImageAsBlob));
      setLoaded(true);
    };

    loadImages();
  }, []);

  if (!loaded) return null; // Evita mostrar imágenes antes de que se carguen

  return null;
}
