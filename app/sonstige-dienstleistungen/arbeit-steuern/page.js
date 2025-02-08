'use client'
import { useContext, useEffect, useState } from "react";
import de from "../../languaje/de";
import es from "../../languaje/es";
import { useAppState } from "../../hooks/useAppState";
import en from "../../languaje/en";
import { useRouter } from "next/navigation";
import { AppContext } from "@/app/context/AppContext";

const ArbeitSteuern = () => {
    const navigate = useRouter();
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    // const { imagenRef } = useContext(AppContext)

    
    const { imagenRef } = useContext(AppContext);
    const [images, setImages] = useState([imagenRef.current.Arbeit, imagenRef.current.Steuern]);
    const [loading, setLoading] = useState(true); 

        useEffect(() => {
        const checkImage = () => {
            if (imagenRef?.current?.Arbeit && imagenRef.current.Steuern ) {
                setImages([imagenRef.current.Arbeit,imagenRef.current.Steuern]);
                setLoading(false);
            } else {
            console.log("Imagen aún no está disponible.");
            }
        };
        const interval = setInterval(checkImage, 500);
    
        return () => clearInterval(interval);
        }, [imagenRef]);


    useEffect(() => {
        window.scrollTo(0, 0);

        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    const handleClickHome = () => {
        navigate.push("/");
    };

    const handleClickSeleccionReclutamiento = () => {
        navigate.push("/kontakt");
    };

    const handleImageClick = (index) => {
        setCurrentImageIndex(index);
    };

    const [data,setData] = useState(de.MeineDienstleistungen);
    const {tipoIdioma} = useAppState();

    useEffect(()=>{
        if(tipoIdioma==='de'){
            setData(de.MeineDienstleistungen);
        }else if(tipoIdioma==='en'){
            setData(en.MeineDienstleistungen);
        }else{
            setData(es.MeineDienstleistungen);
        }
    },[tipoIdioma]);

    console.log(images[currentImageIndex]);

    return (
        <>
            <div className="w-full h-screen bg-bg_favorite_1 relative">
                {loading && (
                    <div className="flex items-center justify-center w-full h-full">
                    <div className="w-12 h-12 border-4 border-gray-300 border-t-blue-500 rounded-full animate-spin"></div>
                    </div>
                )}
                {!loading && (
                    <img
                    src={images[currentImageIndex]}
                    alt="Imagen cargada"
                    className="absolute top-0 left-0 w-full h-full object-cover z-0"
                    loading="lazy"
                    />
                )}
                
                <div className="bg-bg_favorite_1 flex flex-col justify-center items-center md:items-end h-full z-20 relative space-y-4 p-4 pt-32 sm:pt-48 md:pt-64 sm:p-6 md:p-8">
                    <div className="w-full md:w-3/5 h-auto">
                        <h2 className="text-white font-bold text-2xl sm:text-4xl md:text-5xl font-bell text-center md:text-end px-2">
                        {data.ArbeitSteuern.title}
                        </h2>
                    </div>
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
                    {images.map((_, index) => (
                        <div
                            key={index}
                            className={`w-3 h-3 rounded-full ${index === currentImageIndex ? 'bg-white' : 'bg-gray-400'} cursor-pointer`}
                            onClick={() => handleImageClick(index)}
                        ></div>
                    ))}
                </div>
                </div>
            </div>
            <div className="w-11/12 px-2 sm:px-10 pb-10 mx-auto">
                <p className="text-lg text-gray-400 py-10 font-bell">
                    <span onClick={handleClickHome} className="hover:cursor-pointer text-gray-800 font-medium">
                        Sandra Roggero <span className="text-gray-500 font-medium text-base">Beratung</span>
                    </span>
                    {' > '}
                    {data.ArbeitSteuern.title}
                </p>
                <div className="text-gray-700 text-start w-full">
                    <h2 className="font-medium">{data.ArbeitSteuern.description}</h2>
                    <h2 className="">{data.ArbeitSteuern.description2}</h2>
                    <p className="pb-1">
                    {data.ArbeitSteuern.description3}
                    </p>
                    <h2 className="font-medium">{data.ArbeitSteuern.description4}</h2>
                    <p className="pb-1">
                    {data.ArbeitSteuern.description5}
                    </p>
                </div>
            </div>
            <div className="w-full bg-gray-200 flex flex-col sm:flex-row flex-nowrap">
                <div className="w-full flex justify-center items-center">
                <div className="w-full text-center p-4">
                    <h2 className="font-semibold text-gray-800 my-2 text-2xl md:text-3xl">{data.homeInfo2}</h2>
                    <button
                    className="border-gray-800 border-2 px-4 py-2 sm:px-6 sm:py-3 font-medium bg-gray-800 text-white hover:bg-gray-200 hover:text-gray-800 hover:border-gray-500 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-gray-200 focus:ring-opacity-50"
                    onClick={handleClickSeleccionReclutamiento}
                    >
                    {data.homeInfo3}
                    </button>
                </div>
                </div>
            </div>
        </>
    );
};

export default ArbeitSteuern;
