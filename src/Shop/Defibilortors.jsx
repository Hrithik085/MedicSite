import React, { useState } from 'react'
import SideNav from '../components/SideNav'
import Modal from "../components/Modal";


const Defibilortors = () => {
   const [isOpen, setIsOpen] = useState(false);
      const [selectedOption, setSelectedOption] = useState("Sorting");
      const [isModalOpen, setIsModalOpen] = useState(false);
    
      const handleChange = (event) => {
        setSelectedOption(event.target.value);
        setIsOpen(false); // Close the dropdown after selecting an option
      };
    
      const openModal = () => {
        setIsModalOpen(true);
      };
    
      const closeModal = () => {
        setIsModalOpen(false);
      };
  return (
    <>
     <div className='row'>
  <div className="col-lg-1"></div>

  <div className="col-lg-5">
    <img className='mt-9' src="https://www.med-geraete.de/thumbnail/c4/c4/e2/1659013956/Kategorie-Defibrillatoren_800x800.jpg?ts=1659013956" alt="" />
  </div>
  <div className="col-lg-5">
    <h5 className='text-black font-bold mt-5'>
    Defibrillatoren
    </h5>
    <p className="text-black">Defibrillatoren werden verwendet, um Herzrhythmusstörungen durch gezielte Stromstöße zu beheben (Defibrillation, AEDs, Notfallmedizin, Herzschrittmacher, Medizintechnik, Kardioverter, Kardioversion, Wiederbelebung). Hier finden Sie die folgenden Gerätekategorien: monophasische und biphasische Geräte, Geräte mit oder ohne zusätzliche Funktionen (EKG, SpO2, NIBP, DRUCK, CO2, Herzschrittmacher), mit und ohne Drucker, manuelle Geräte, halbautomatische und vollautomatische Geräte.</p>
  </div>
  <div className="col-lg-1"></div>
</div>

<div className="row">
  <div className="col-lg-2"></div>

  <div className="col-lg-2 mt-4">
    <SideNav />
  </div>
  <div className="col-lg-7 mt-4">
    <div className="row">
      <div className="col-lg-3"></div>
      <div className="col-lg-3 ms-10">
        <div className="relative inline-block w-64">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 rounded leading-tight focus:outline-none focus:shadow-outline"
          >
            {selectedOption}
            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg
                className="fill-current h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
              </svg>
            </span>
          </button>
          {isOpen && (
            <div className="absolute mt-2 w-full rounded-md shadow-lg bg-white z-10">
              <ul className="py-1 text-gray-700">
                <li>
                  <button
                    onClick={() => handleChange({ target: { value: "Sortierung" } })}
                    className="block px-4 py-2 text-sm w-full text-left hover:bg-gray-100"
                  >
                    Sortierung
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleChange({ target: { value: "Name A-Z" } })}
                    className="block px-4 py-2 text-sm w-full text-left hover:bg-gray-100"
                  >
                    Name A-Z
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleChange({ target: { value: "Name Z-A" } })}
                    className="block px-4 py-2 text-sm w-full text-left hover:bg-gray-100"
                  >
                    Name Z-A
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleChange({ target: { value: "Preis aufsteigend" } })}
                    className="block px-4 py-2 text-sm w-full text-left hover:bg-gray-100"
                  >
                    Preis aufsteigend
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleChange({ target: { value: "Preis absteigend" } })}
                    className="block px-4 py-2 text-sm w-full text-left hover:bg-gray-100"
                  >
                    Preis absteigend
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleChange({ target: { value: "Bestseller" } })}
                    className="block px-4 py-2 text-sm w-full text-left hover:bg-gray-100"
                  >
                    Bestseller
                  </button>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>

    <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <div className="max-w-xs bg-white rounded-lg shadow-md overflow-hidden">
        <img
          className="w-full h-48 object-cover"
          src="https://www.med-geraete.de/thumbnail/ee/a8/e6/1698159159/1002401a_400x400.jpeg?ts=1726041530"
          alt="PHYSIO CONTROL Lifepak 20 Defibrillator"
        />
        <div className="p-4">
          <div className="text-sm text-gray-600">Product number: 1002401</div>
          <h2 className="text-lg font-bold text-gray-900 mt-2">
          PHYSIO CONTROL Lifepak 20 Defibrillator
          </h2>
          <p className="text-sm text-gray-600 mt-1">PHYSIO CONTROL Lifepak 20 Leichter und kompakter Defibrillator mit biphasischem Wellenform.</p>
          <div className="text-xl font-bold text-gray-900 mt-2">€2,890.00*</div>
          <button
            className="mt-4 w-full bg-green-700 hover:bg-green-900 text-white font-bold py-2 px-4 rounded"
            onClick={openModal}
          >
            Jetzt anfragen
          </button>
        </div>
      </div>

      <div className="max-w-xs bg-white rounded-lg shadow-md overflow-hidden">
        <img
          className="w-full h-48 object-cover"
          src="https://www.med-geraete.de/thumbnail/17/g0/39/1698301231/1004941a_400x400.jpeg?ts=1726126136"
          alt="PHILIPS Heartstart MRx Defibrillator"
        />
        <div className="p-4">
          <div className="text-sm text-gray-600">Product number: 1004941</div>
          <h2 className="text-lg font-bold text-gray-900 mt-2">
          PHILIPS Heartstart MRx Defibrillator
          </h2>
          <p className="text-sm text-gray-600 mt-1">PHILIPS Heartstart MRx Tragbarer biphasischer Defibrillator inkl. Akku.</p>
          <div className="text-xl font-bold text-gray-900 mt-2">€2,890.00*</div>
          <button
            className="mt-4 w-full bg-green-700 hover:bg-green-900 text-white font-bold py-2 px-4 rounded"
            onClick={openModal}
          >
            Jetzt anfragen
          </button>
        </div>
      </div>
    </div>
  </div>
</div>

{isModalOpen && <Modal closeModal={closeModal} />}

      
    </>
  )
}

export default Defibilortors