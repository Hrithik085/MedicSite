import React, { useState } from 'react'
import SideNav from '../components/SideNav'
import Modal from "../components/Modal";




const Endoscopes = () => {
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
    <img className='mt-9' src="https://www.med-geraete.de/thumbnail/25/0e/3f/1659013956/Kategorie-Endoskopie_800x800.jpg?ts=1659013956" alt="" />
  </div>

  <div className="col-lg-5">
    <h5 className='text-black font-bold mt-5'>Flexible Endoskope</h5>
    <p className="text-black">Endoskope werden verwendet, um das Innere von Organismen zu untersuchen, aber auch um Hohlräume in der Technik zu erkunden. Wir liefern hauptsächlich OLYMPUS-Endoskope, und unser Sortiment besteht hauptsächlich aus flexiblen Endoskopen: Bronchoskope, Choledochoskope, Zystoskope, Duodenoskope, Gastroskope, Hysteroskope, Koloskope, Laryngoskope, Ureteroskope und Mikroendoskope. Wir bieten auch Zubehör wie Kaltlichtquellen (Halogen, Xenon), Videoprozessoren, Pigtails, Videokameras, Instrumente für die endoskopische Anwendung, Hilfsgeräte, Monitore, Endoskopie-Türme, Pumpen usw. an.</p>
  </div>
  
  <div className="col-lg-1"></div>
</div>

    <div className="row">
    <div className="col-lg-2"></div>

      <div className="col-lg-2 mt-4">
        <SideNav/>
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
      src="https://www.med-geraete.de/thumbnail/5e/f3/5d/1698159528/1003200a_5ef35ddb545ae64008ae4c3699a90a20_400x400.jpeg?ts=1726041818"
      alt="OLYMPUS JF-V2 Videoduodenoskop"
    />
    <div className="p-4">
      <div className="text-sm text-gray-600">Produktnummer: 1003200</div>
      <h2 className="text-lg font-bold text-gray-900 mt-2">
        OLYMPUS JF-V2 Videoduodenoskop
      </h2>
      <p className="text-sm text-gray-600 mt-1">OLYMPUS JF-V2: Videoduodenoskop Durchmesser: 11 mm Länge: 123,5 cm Gebraucht</p>
      <div className="text-xl font-bold text-gray-900 mt-2">€1,300.00*</div>
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
      className="w-full h-48"
      src="https://www.med-geraete.de/thumbnail/ec/01/cd/1698300252/1004207a_400x400.jpeg?ts=1726042319"
      alt="OLYMPUS CYF-5: Faserzystoskop"
    />
    <div className="p-4">
      <div className="text-sm text-gray-600">Produktnummer: 1004207</div>
      <h2 className="text-lg font-bold text-gray-900 mt-2">
        OLYMPUS CYF-5: Faserzystoskop
      </h2>
      <p className="text-sm text-gray-600 mt-1">OLYMPUS CYF-5: Faserzystoskop Länge: 37 cm, Durchmesser: 5,2 mm</p>
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
      src="https://www.med-geraete.de/thumbnail/a1/c1/f1/1698159266/1002697a_400x400.jpeg?ts=1726041625"
      alt="OLYMPUS TJF-M20 Faserduodenoskop"
    />
    <div className="p-4">
      <div className="text-sm text-gray-600">Produktnummer: 1002697</div>
      <h2 className="text-lg font-bold text-gray-900 mt-2">
        OLYMPUS TJF-M20 Faserduodenoskop
      </h2>
      <p className="text-sm text-gray-600 mt-1">OLYMPUS TJF-M20: Faserduodenoskop Durchmesser: 13 mm Länge: 124 cm Seitlich</p>
      <div className="text-xl font-bold text-gray-900 mt-2">€980.00*</div>
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
      src="https://www.med-geraete.de/thumbnail/d3/25/37/1698300228/1004174a_400x400.jpeg?ts=1726042300"
      alt="OLYMPUS CHF-P20 Pädiatrisches Fasercholedochoskop"
    />
    <div className="p-4">
      <div className="text-sm text-gray-600">Produktnummer: 1004174</div>
      <h2 className="text-lg font-bold text-gray-900 mt-2">
        OLYMPUS CHF-P20 Pädiatrisches Fasercholedochoskop
      </h2>
      <p className="text-sm text-gray-600 mt-1">OLYMPUS CHF-P20: Pädiatrisches Fasercholedochoskop 2 Faser</p>
      <div className="text-xl font-bold text-gray-900 mt-2">€2,400.00*</div>
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
      src="https://www.med-geraete.de/thumbnail/ae/08/41/1698159060/1002240a_ae084144099641add9e613c971eb566c_400x400.jpeg?ts=1726041468"
      alt="Olympus CF-1T20L"
    />
    <div className="p-4">
      <div className="text-sm text-gray-600">Produktnummer: 1001435</div>
      <h2 className="text-lg font-bold text-gray-900 mt-2">
        Olympus CF-1T20L
      </h2>
      <p className="text-sm text-gray-600 mt-1">OLYMPUS CF-Q165I Video-Koloskop L: 133 Durchmesser 12,9 mm Durchmesser von</p>
      <div className="text-xl font-bold text-gray-900 mt-2">€6,800.00*</div>
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

export default Endoscopes