import { useContext, useEffect } from "react";
// import LogoPrincipalWhite from "/imagenes/LogoPrincipalWhite.png";
// import LogoPrincipalBlack from "/imagenes/LogoPrincipalBlack.png";
// import Foto_Principal from "/imagenes/Foto_Principal.jpg";
// import Innovation from "@/imagenes/Innovation.png";
// import Recruiting from "@/imagenes/Recruiting.png";
// import Vision from "@/imagenes/Vision.png";
// import Contratacion from "@/imagenes/Contratacion.png";


// import LogoPrincipal_Black from "@/public/images/home/LogoPrincipal_1.png";
// import FotoPerfil from "@/public/images/home/FotoPerfil.jpg";

import { AppContext } from "../context/AppContext";

export default function InitImages() {
  const { imagenRef } = useContext(AppContext);

  useEffect(() => {
    if (!imagenRef.current) return;

    if (
      !imagenRef.current.LogoPrincipalWhite &&
      !imagenRef.current.LogoPrincipalBlack &&
      !imagenRef.current.Foto_Principal &&
      !imagenRef.current.Innovation &&
      !imagenRef.current.Recruiting &&
      !imagenRef.current.Vision &&
      !imagenRef.current.Contratacion &&
      !imagenRef.current.Studium &&
      !imagenRef.current.Ausbildung &&
      !imagenRef.current.Praktikum &&
      !imagenRef.current.Arbeit &&
      !imagenRef.current.Steuern &&
      !imagenRef.current.Wohen &&
      !imagenRef.current.Visum &&
      !imagenRef.current.Sprachkompetenzen &&
      !imagenRef.current.Personalauswahl_und_Rekrutierung 
      
    ) {
      imagenRef.current.LogoPrincipalWhite = "/imagenes/LogoPrincipalWhite.png";
      imagenRef.current.LogoPrincipalBlack = "/imagenes/LogoPrincipalBlack.png";
      imagenRef.current.Foto_Principal = "/imagenes/Foto_Principal.jpg";
      imagenRef.current.Innovation = "imagenes/Innovation.png";
      imagenRef.current.Recruiting = "imagenes/Recruiting.png";
      imagenRef.current.Vision = "imagenes/Vision.png";
      imagenRef.current.Contratacion = "imagenes/Contratacion.png";

      imagenRef.current.Studium = "imagenes/studium.jpg";
      imagenRef.current.Ausbildung = "imagenes/Ausbildung.jpg";
      imagenRef.current.Praktikum = "imagenes/Praktikum.jpg";
      imagenRef.current.Arbeit = "imagenes/Arbeit.jpg";
      imagenRef.current.Steuern = "imagenes/Steuern.jpg";
      imagenRef.current.Wohen = "imagenes/Wohen.jpg";
      imagenRef.current.Transportmittel = "";
      imagenRef.current.Visum = "imagenes/visum.jpg";
      imagenRef.current.Sprachkompetenzen = "imagenes/Sprachkompetenzen.jpg";

      imagenRef.current.Personalauswahl_und_Rekrutierung = "imagenes/Personalauswahl_und_Rekrutierung.jpg";
      // imagenRef.current.Sprachkompetenzen = "imagenes/Sprachkompetenzen.jpg";
      // imagenRef.current.Sprachkompetenzen = "imagenes/Sprachkompetenzen.jpg";
      // imagenRef.current.Sprachkompetenzen = "imagenes/Sprachkompetenzen.jpg";
      // imagenRef.current.Sprachkompetenzen = "imagenes/Sprachkompetenzen.jpg";

      
      


      
      // imagenRef.current.FotoPerfil = FotoPerfil;
      // imagenRef.current.Innovation = Innovation;
      // imagenRef.current.Recruiting = Recruiting;
      // imagenRef.current.Vision = Vision;
      // imagenRef.current.Contratacion = Contratacion;
      
    }
  }, []);

  return null;
}

