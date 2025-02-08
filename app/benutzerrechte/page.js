'use client'
import React, { useEffect, useState } from 'react';
import de from '../languaje/de';
import { useAppState } from '../hooks/useAppState';
import en from '../languaje/en';
import es from '../languaje/es';

const Benutzerrechte = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // const {tipoIdioma} = useAppState();
    // const [data,setData] = useState(de.Benutzerrechte.Impressum);

    // useEffect(()=>{
    //     if(tipoIdioma==='de'){
    //         setData(de.Benutzerrechte.Impressum);
    //     }else if(tipoIdioma==='en'){
    //         setData(en.Benutzerrechte.Impressum);
    //     }else{
    //         setData(es.Benutzerrechte.Impressum);
    //     }
    // },[tipoIdioma]);

    return (
        <div className="bg-white text-gray-800 p-10 rounded-lg shadow-lg mt-32 max-w-3xl mx-auto border border-gray-200">
            <h1 className="text-3xl font-extrabold mb-8 text-center text-violet-900 font-bell uppercase tracking-wide">Benutzerrechte</h1>
            <div className="bg-gradient-to-r from-gray-50 to-gray-100 p-8 rounded-lg shadow-inner">
                <p className="text-lg font-semibold text-gray-900 mb-4">Informationen über den Diensteanbieter</p>
                <p className="text-lg leading-relaxed">Sandra Roggero<br /><span className="font-medium">Sandra Roggero M. Beratung</span><br />Brunnenstraße 84,<br />66280 Sulzbach Neuweiler,<br />Deutschland</p>
                <p className="text-lg mt-4 font-medium"><span className="font-bold">Tel.:</span> <a href="tel:+4915902234045" className="text-blue-600 hover:underline">+49 15902234045</a></p>
                <p className="text-lg font-medium"><span className="font-bold">E-Mail:</span> <a href="mailto:kontakt@roggero-beratung.de" className="text-blue-600 hover:underline">kontakt@roggero-beratung.de</a></p>
                <p className="text-lg mt-4 font-bold">Steuer-Nummer: <span className="font-medium">040/263/01462</span></p>
                <p className="text-lg font-bold">Berufsbezeichnung: <span className="font-medium">Berater und Trainer</span></p>
                <p className="text-lg font-bold">Verleihungsstaat: <span className="font-medium">Deutschland</span></p>
                <p className="text-lg font-medium"><span className="font-bold">Link zur Webseite der Kammer:</span> <a href="https://www.saarland.ihk.de/" target='_blank' className="text-blue-600 hover:underline" >https://www.saarland.ihk.de/</a></p>
                <p className="text-lg font-bold">Name und Anschrift</p>
                <span className="text-lg font-medium">IHK des Saarlandes, Franz-Josef-Röder-Straße 9, 66119 Saarbrücken</span>

                <p className="text-lg mt-4 font-medium"><span className="font-bold">Aufsichtsbehörde:</span><br />Amtsgericht Saarbrücken<br />Franz-Josef-Röder-Straße 13, 66119 Saarbrücken<br /><p className="text-lg font-medium"><span className="font-bold">Webseite:</span> <a href="https://www.ag-sb.saarland.de/" target='_blank' className="text-blue-600 hover:underline" >https://www.ag-sb.saarland.de/</a></p></p>
                <p className="text-lg mt-4 font-medium"><span className="font-bold">Datenschutz Verantwortlicher:</span><br />Sandra Roggero<br /><span className='font-bold'>E-Mail: </span><a href="mailto:kontakt@roggero-beratung.de" className="text-blue-600 hover:underline">kontakt@roggero-beratung.de</a><br /><span className='font-bold'>Tel.: </span><a href="tel:+4915902234045" className="text-blue-600 hover:underline">+49 15902234045</a><p className="text-lg font-medium"><span className="font-bold">Impressum:</span> <a href="https://www.roggero-beratung.de/datenschutzrichtlinie/" className="text-blue-600 hover:underline" >https://www.roggero-beratung.de/impressum/</a></p></p>
                <p className="mt-4 font-bold text-2xl">AGB </p>
                <p className="text-lg">Link: <a href="https://www.roggero-beratung.de/agb/" className="text-blue-600 hover:underline">https://www.roggero-beratung.de/agb/</a></p>
                <p className="mt-4 font-semibold text-2xl">Bildernachweis</p>
                <p className="text-lg">Die Bilder, Fotos und Grafiken auf dieser Webseite sind urheberrechtlich geschützt.</p>
                <p className="text-lg">Die Bilderrechte liegen bei: <span className="font-medium">Sandra Roggero</span></p>
                <p className="text-lg">Alle Texte sind urheberrechtlich geschützt.</p>
            </div>
        </div>

    );
};

export default Benutzerrechte;