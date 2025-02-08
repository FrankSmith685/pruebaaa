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
        <div className="bg-white text-gray-800 p-10 rounded-lg shadow-2xl mt-32 max-w-3xl mx-auto border border-gray-200">
            <h1 className="text-3xl font-extrabold mb-8 text-center text-violet-900 font-bell uppercase tracking-wide">Allgemeine Geschäftsbedingungen</h1>
            <div className="bg-gradient-to-r from-gray-50 to-gray-100 p-8 rounded-lg shadow-inner">
                <p className="text-lg font-semibold text-gray-900 mb-4">für Sandra Roggero Beratungsleistungen</p>
                <p className="text-lg font-bold">(1) Geltungsbereich</p>
                <p className="text-lg">Die nachstehenden allgemeinen Geschäftsbedingungen gelten für alle Rechtsgeschäfte der Dienstleistung Sandra Roggero Beratung – nachstehend Dienstleister genannt – mit seinem Vertragspartner – nachstehend Auftraggeber – genannt. Soweit einzelvertragliche Regelungen bestehen, welche von den Bestimmungen dieser AGB abweichen oder ihnen widersprechen, gehen die einzelvertraglichen Regelungen vor. </p>
                
                <p className="text-lg font-bold mt-4">(2) Vertragsgegenstand</p>
                <p className="text-lg">(2.1) Die Vertragsparteien vereinbaren die Zusammenarbeit gemäß der spezifischen, individualvertraglichen Vereinbarung. Ein Arbeitsvertrag ist von den Parteien nicht gewollt und wird nicht begründet.</p>
                <p className="text-lg mt-4">(2.2) Für die Abgaben der Sozialversicherung oder steuerliche Belange trägt der Dienstleister selbst Sorge und stellt den Auftraggeber von eventuellen Verpflichtungen frei.</p>
                <p className="text-lg mt-4">(2.3) Es steht dem Dienstleister frei, auch für andere Auftraggeber tätig zu werden.</p>

                <p className="text-lg font-bold mt-4">(3) Zustandekommen des Vertrages</p>
                <p className="text-lg">(3.1) Das Vertragsverhältnis für die Dienstleistungen kommt durch Erteilung eines Kundenauftrags durch den Auftraggeber (Angebot) und dessen Annahme durch den Dienstleister zustande. Der Auftraggeber ist an die Erteilung des Kundenauftrages (Angebot) zwei Wochen gebunden.</p>
                <p className="text-lg mt-4">(3.2) Der Gegenstand des Vertrages bzw. die genaue Aufgabenbezeichnung ist im schriftlichen Auftrag beschrieben.</p>
                
                <p className="text-lg font-bold mt-4">(4) Vertragsdauer und Kündigung</p>
                <p className="text-lg mt-4">(4.1) Der Vertrag beginnt und endet am individuell vereinbarten Zeitpunkt.</p>
                <p className="text-lg mt-4">(4.2) Der Vertrag kann ordentlich gekündigt werden. Diesbezüglich wird eine Frist von 2 Wochen zum Monatsende vereinbart.</p>
                <p className="text-lg mt-4">(4.3) Eine fristlose Kündigung aus wichtigem Grunde ist möglich. Ein wichtiger Grund liegt beispielsweise vor, wenn der Auftraggeber mit zwei fälligen, aufeinander folgenden Zahlungen im Verzug ist und nach Ablauf einer angemessenen Nachfrist nicht leistet der Auftraggeber nach Abschluss des Vertrages in Vermögensverfall gerät (Zahlungsunfähigkeit, Insolvenz), es sei denn, es wurde bereits ein Antrag auf Eröffnung eines Insolvenzverfahrens gestellt.</p>
                
                <p className="text-lg font-bold mt-4">(5) Leistungsumfang, Pflichten der Vertragspartner</p>
                <p className="text-lg mt-4">(5.1) Die vom Dienstleister zu erbringenden Leistungen umfassen in der Regel die detailliert aufgelisteten Aufgaben, gemäß dem vom Auftraggeber erteilten Auftrag.</p>
                <p className="text-lg mt-4">(5.2) Der Dienstleister wird den Auftraggeber in periodischen Abständen über das Ergebnis seiner Tätigkeit in Kenntnis setzen. Die Vertragspartner können im Vertrag einen Zeitplan für die Leistungserbringung und einen geplanten Endtermin für die Beendigung von Dienstleistungen vereinbaren.</p>
                <p className="text-lg mt-4">(5.3) Ist dem Dienstleister die vertraglich geschuldete Erbringung eines Auftrags tatsächlich nicht möglich, so hat er den Auftraggeber unverzüglich darüber in Kenntnis zu setzen.</p>
                
                <p className="text-lg mt-4 font-bold">(6) Preise und Zahlungsbedingungen</p>
                <p className="text-lg mt-4">(6.1) Dienstleistungen werden zu dem im individuellen Vertrag aufgeführten Festpreis nach Beendigung oder bei Vereinbarung der Vergütung auf Zeit- und Materialbasis monatlich fällig und berechnet, soweit nicht im Vertrag eine andere Rechnungsstellung vereinbart ist.</p>
                <p className="text-lg mt-4">(6.2) Angegebene Schätzpreise für Dienstleistungen auf Zeit- und Materialbasis, insbesondere in Kostenvoranschlägen sind unverbindlich. Die einer Schätzung zugrundeliegenden Mengenansätze beruhen auf einer nach bestem Wissen durchgeführten Bewertung des Leistungsumfangs.</p>
                <p className="text-lg mt-4">(6.3) Die Umsatzsteuer wird mit dem zur Zeit der Leistung geltenden Umsatzsteuersatz in Rechnung gestellt.</p>
                <p className="text-lg mt-4">(6.4) Rechnungen sind bei Erhalt ohne Abzug zahlbar. Ist der Rechnungsbetrag nicht innerhalb von 30 Tagen nach dem Rechnungsdatum eingegangen, ist der Dienstleister berechtigt Verzugszinsen geltend zu machen. Die Verzugszinsen betragen 3 % p.a. über dem zur Zeit der Berechnung geltenden Basiszinssatz.</p>
                
                <p className="text-lg font-bold mt-4">(7) Haftung</p>
                <p className="text-lg">(7.1) Der Dienstleister haftet in Fällen des Vorsatzes oder der groben Fahrlässigkeit nach den gesetzlichen Bestimmungen. Die Haftung für Garantien erfolgt verschuldensunabhängig. Für leichte Fahrlässigkeit haftet der Dienstleister ausschließlich nach den Vorschriften des Produkthaftungsgesetzes, wegen der Verletzung des Lebens, des Körpers oder der Gesundheit oder wegen der Verletzung wesentlicher Vertragspflichten. Der Schadensersatzanspruch für die leicht fahrlässige Verletzung wesentlicher Vertragspflichten ist jedoch auf den vertragstypischen, vorhersehbaren Schaden begrenzt, soweit nicht wegen der Verletzung des Lebens, des Körpers oder der Gesundheit gehaftet wird. Für das Verschulden von Erfüllungsgehilfen und Vertretern haftet der Dienstleister in demselben Umfang.</p>
                
                <p className="text-lg font-bold mt-4">(8) Gerichtsstand</p>
                <p className="text-lg">Für die Geschäftsverbindung zwischen den Parteien gilt ausschließlich deutsches Recht. Hat der Auftraggeber keinen allgemeinen Gerichtsstand in Deutschland oder in einem anderen EU-Mitgliedstaat, ist ausschließlich Gerichtsstand für sämtliche Streitigkeiten aus diesem Vertrag unser Geschäftssitz.</p>
                
                <p className="text-lg font-medium mt-6 text-gray-600">Sulzbach, 08.02.2025</p>
            </div>
        </div>
    );
};

export default Benutzerrechte;