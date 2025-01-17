import React, { useState } from "react";
import { Link } from "react-router-dom";
import Defibilortors from "../Shop/Defibilortors";

const SideNav = () => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  const toggleDropdown = (dropdownName) => {
    setOpenDropdown(openDropdown === dropdownName ? null : dropdownName);
  };

  return (
    <>
      <div className="flex flex-col items-start p-2">
        <div className="flex flex-col space-y-2">
          <Link to={"/shop"}>
            <button className="text-black font-bold text-xl">shop</button>
          </Link>
          <Link>
            <button className="text-black font-extralight text-sm">
            Saugpumpen            </button>
          </Link>
          <Link>
            <button className="text-black font-extralight text-sm">
            Autoklaven und Sterilisatoren            </button>
          </Link>
          <Link>
            <button className="text-black font-extralight text-sm">
            Messung des Blutdrucks            </button>
          </Link>
          <Link to={"/shop/Defibrillators"}>
            <button className="text-black font-extralight text-sm">
            Defibrillatoren            </button>
          </Link>
          <Link>
            <button className="text-black font-extralight text-sm"> EKG</button>
          </Link>
          <Link to={"/shop/Flexible-endoscopes"}>
            {" "}
            <button
              onClick={() => toggleDropdown("flexibleEndoscopes")}
              className="text-black font-extralight text-sm"
            >
              Flexible Endoskope            </button>
          </Link>
          {openDropdown === "flexibleEndoscopes" && (
            <div className="ml-4 mt-2 space-y-2">
              <Link
                to={"/shop/Flexible-endoscopes"}
                className="block text-sky-500 font-extralight text-sm"
              >
                Bronchoskope              </Link>
              <Link
                to={"/shop/Flexible-endoscopes"}
                className="block text-sky-500 font-extralight text-sm"
              >
                Choledochoskope              </Link>
              <Link
                to={"/shop/Flexible-endoscopes"}
                className="block text-sky-500 font-extralight text-sm"
              >
                Zystoskope              </Link>
              <Link
                to={"/shop/Flexible-endoscopes"}
                className="block text-sky-500 font-extralight text-sm"
              >
                Duodenoskope              </Link>
              <Link
                to={"/shop/Flexible-endoscopes"}
                className="block text-sky-500 font-extralight text-sm"
              >
                Gastroskope              </Link>
              <Link
                to={"/shop/Flexible-endoscopes"}
                className="block text-sky-500 font-extralight text-sm"
              >
                Hysteroskope              </Link>
              <Link
                to={"/shop/Flexible-endoscopes"}
                className="block text-sky-500 font-extralight text-sm"
              >
                Koloskope              </Link>
            </div>
          )}


          <Link>
            {" "}
            <button
              onClick={() => toggleDropdown("endoscopyColdLightSources")}
              className="text-black font-extralight text-sm"
            >
              Endoskopie-Kaltlichtquellen            </button>
          </Link>
          {openDropdown === "endoscopyColdLightSources" && (
            <div className="ml-4 mt-2 space-y-2">
              <Link className="block text-sky-500 font-extralight text-sm">
              Olymp              </Link>
              <Link className="block text-sky-500 font-extralight text-sm">
              Anderer Hersteller              </Link>
              <Link className="block text-sky-500 font-extralight text-sm">
              Storz              </Link>
            </div>
          )}
          <Link>
            <button
              onClick={() => toggleDropdown("endoscopyfittings")}
              className="text-black font-extralight text-sm"
            >
              Endoskopie-Fittings            </button>
          </Link>
          {openDropdown === "endoscopyfittings" && (
            <div className="ml-4 mt-2 space-y-2">
              <Link className="block text-sky-500 font-extralight text-sm">
              Endoskopie-Türme              </Link>
              <Link className="block text-sky-500 font-extralight text-sm">
                Video
              </Link>
              <Link className="block text-sky-500 font-extralight text-sm">
              weitere Ausstattungen              </Link>
            </div>
          )}
          <Link>
            <button className="text-black font-extralight text-sm">
            Gehäuse und Monitorträger            </button>
          </Link>
          <Link>
            <button className="text-black font-extralight text-sm">
            Aufbewahrungsort            </button>
          </Link>
          <Link>
            <button className="text-black font-extralight text-sm">
            Gynäkologie            </button>
          </Link>
          <Link to={"/shop/HF-Surgery"}>
            <button className="text-black font-extralight text-sm">
            HF-Chirurgie            </button>
          </Link>
          <Link to={"/shop/Infusors-perfusors"}>
            <button className="text-black font-extralight text-sm">
            Infusoren Perfusoren            </button>
          </Link>
          <Link>
            <button className="text-black font-extralight text-sm">
            Inkubatoren            </button>
          </Link>
          <Link>
            <button className="text-black font-extralight text-sm">
            Laborausstattung            </button>
          </Link>
          <Link>
            <button
              onClick={() => toggleDropdown("medicalantiques")}
              className="text-black font-extralight text-sm"
            >
              Medizinische Antiquitäten            </button>
          </Link>
          {openDropdown === "medicalantiques" && (
            <div className="ml-4 mt-2 space-y-2">
              <Link className="block text-sky-500 font-extralight text-sm">
              Lichter              </Link>
              <Link className="block text-sky-500 font-extralight text-sm">
              Anästhesie-Geräte              </Link>
              <Link className="block text-sky-500 font-extralight text-sm">
              andere              </Link>
            </div>
          )}
          <Link>
            <button className="text-black font-extralight text-sm">
            Mikroskop            </button>
          </Link>
          <Link>
            <button className="text-black font-extralight text-sm">
            Möbel            </button>
          </Link>
          <Link>
            <button
              onClick={() => toggleDropdown("monitoring")}
              className="text-black font-extralight text-sm"
            >
              Überwachung            </button>
          </Link>
          {openDropdown === "monitoring" && (



            <div className="ml-4 mt-2 space-y-2">
              <Link className="block text-sky-500 font-extralight text-sm">
                Datex
              </Link>
              <Link className="block text-sky-500 font-extralight text-sm">
              Draeger              </Link>
              <Link className="block text-sky-500 font-extralight text-sm">
              Hellige/Marquette              </Link>
              <Link className="block text-sky-500 font-extralight text-sm">
              Nellcor              </Link>
              <Link className="block text-sky-500 font-extralight text-sm">
              Siemens              </Link>
              <Link className="block text-sky-500 font-extralight text-sm">
              andere              </Link>
              <Link className="block text-sky-500 font-extralight text-sm">
              Zubehör von Monitoren              </Link>
            </div>
          )}
          <Link to={"/shop/Anesthesia-and-ventilation"}>
            <button
              onClick={() => toggleDropdown("ventilation")}
              className="text-black font-extralight text-sm"
            >
              Anästhesie und Beatmung            </button>
          </Link>
          {openDropdown === "ventilation" && (
            <div className="ml-4 mt-2 space-y-2">
              <Link className="block text-sky-500 font-extralight text-sm">
              Lüftungsgeräte              </Link>
              <Link className="block text-sky-500 font-extralight text-xs">
              Druckminderer und zentrale Gasversorgung              </Link>
              <Link className="block text-sky-500 font-extralight text-xs">
              Durchflussmesser              </Link>
              <Link className="block text-sky-500 font-extralight text-xs">
              Gasversorgung und Stromversorgung              </Link>
              <Link className="block text-sky-500 font-extralight text-xs">
              Ausstattung der Ausrüstung              </Link>
              <Link className="block text-sky-500 font-extralight text-xs">
              Kompressoren, Konzentratoren              </Link>
              <Link className="block text-sky-500 font-extralight text-xs">
              Beatmungsschlauch und Armaturen              </Link>
              <Link className="block text-sky-500 font-extralight text-xs">
              Anästhesie-Geräte              </Link>
              <Link className="block text-sky-500 font-extralight text-xs">
              Sauerstoff-Bubbler              </Link>
              <Link className="block text-sky-500 font-extralight text-xs">
              Dämpfe (Anästhesieverdampfer)              </Link>
            </div>
          )}
          <Link>
            <button
              onClick={() => toggleDropdown("investigationlights")}
              className="text-black font-extralight text-sm"
            >
              OP- und Untersuchungsleuchten            </button>
          </Link>
          {openDropdown === "investigationlights" && (
            <div className="ml-4 mt-2 space-y-2">
              <Link className="block text-sky-500 font-extralight text-sm">
              Glühbirnen              </Link>
              <Link className="block text-sky-500 font-extralight text-sm">
              OP-Leuchten              </Link>
              <Link className="block text-sky-500 font-extralight text-sm">
              Transformatoren und USV              </Link>
              <Link className="block text-sky-500 font-extralight text-sm">
              Untersuchungsleuchten              </Link>
            </div>
          )}
          <Link to={'/shop/Operating-tables-and-patient-trolleys'}>
            <button
              onClick={() => toggleDropdown("patienttrolleys")}
              className="text-black font-extralight text-sm"
            >
              Operationstische und Patient            </button>
          </Link>
          {openDropdown === "patienttrolleys" && (
            <div className="ml-4 mt-2 space-y-2">
              <Link className="block text-sky-500 font-extralight text-sm">
              OP-Tische              </Link>
              <Link className="block text-sky-500 font-extralight text-sm">
              Zubehör für OP-Tische              </Link>
              <Link className="block text-sky-500 font-extralight text-sm">
              Patientenwagen              </Link>
            </div>
          )}
          <Link>
            <button
              onClick={() => toggleDropdown("fluoroscopy")}
              className="text-black font-extralight text-sm"
            >
              Röntgen-Durchleuchtung            </button>
          </Link>
          {openDropdown === "fluoroscopy" && (
            <div className="ml-4 mt-2 space-y-2">
              <Link className="block text-sky-500 font-extralight text-sm">
              Mobile C-Bögen              </Link>
              <Link className="block text-sky-500 font-extralight text-sm">
              Zubehör von mobilen C-Bögen              </Link>
              <Link className="block text-sky-500 font-extralight text-sm">
              Röntgengeräte              </Link>
              <Link className="block text-sky-500 font-extralight text-sm">
              Zubehör von Röntgengeräten              </Link>
            </div>
          )}
          <Link>
            <button className="text-black font-extralight text-sm">
            Andere            </button>
          </Link>
          <Link>
            <button
              onClick={() => toggleDropdown("ultrasound")}
              className="text-black font-extralight text-sm"
            >
              Ultraschall-Tongeräte            </button>
          </Link>
          {openDropdown === "ultrasound" && (
            <div className="ml-4 mt-2 space-y-2">
              <Link className="block text-sky-500 font-extralight text-sm">
              Ultraschall-Systeme              </Link>
              <Link className="block text-sky-500 font-extralight text-sm">
              Ultraschall-Vernebler              </Link>
            </div>
          )}
          <Link>
            <button className="text-black font-extralight text-sm">
            Untersuchung            </button>
          </Link>
          <Link>
            <button className="text-black font-extralight text-sm">
            Videodrucker und -recorder            </button>
          </Link>
          <Link>
            <button className="text-black font-extralight text-sm">
            Zahnarztbehandlung            </button>
          </Link>
          <hr />
          <div className=" rounded-md w-64">
            
            <div className="relative">
              
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 rounded leading-tight focus:outline-none focus:shadow-outline"
              >
                
                Preis                <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  
                  <svg
                    className="fill-current h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    
                    <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />{" "}
                  </svg>
                </span>
              </button>
              {isOpen && (
                <div className="mt-2 p-2 border rounded-md">
                  
                  <div className="flex flex-col mb-2">
                    
                    <label className="text-sm mb-1">Minimum</label>{" "}
                    <div className="flex items-center border rounded-md p-2">
                      
                      <input
                        type="number"
                        className="outline-none w-full"
                        placeholder="€"
                        value={minPrice}
                        onChange={(e) => setMinPrice(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="flex flex-col">
                    
                    <label className="text-sm mb-1">Maximum</label>{" "}
                    <div className="flex items-center border rounded-md p-2">
                      
                      <input
                        type="number"
                        className="outline-none w-full"
                        placeholder="€"
                        value={maxPrice}
                        onChange={(e) => setMaxPrice(e.target.value)}
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SideNav;
