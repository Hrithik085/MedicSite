import React, { useState } from 'react'
import SideNav from '../components/SideNav'
import Modal from "../components/Modal";




const OpertingTable = () => {
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
          src="https://www.med-geraete.de/thumbnail/b2/41/9e/1698300754/1004656a_400x400.jpeg?ts=1726042702"
          alt="SCHMITZ 101.601 Uro-Adapter zur Verlängerung des Sitzteils, voll"
        />
        <div className="p-4">
          <div className="text-sm text-gray-600">Produktnummer: 1004656</div>
          <h2 className="text-lg font-bold text-gray-900 mt-2">
            SCHMITZ 101.601 Uro-Adapter zur Verlängerung des Sitzteils, voll
          </h2>
          <p className="text-sm text-gray-600 mt-1">SCHMITZ 101.601 Uro-Adapter zur Verlängerung des Sitzteils, voll</p>
          <div className="text-xl font-bold text-gray-900 mt-2">€780.00*</div>
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
          src="https://www.med-geraete.de/thumbnail/d2/4d/12/1698300938/1004775a_d24d128dd7ec0620d44bda4507965221_400x400.jpeg?ts=1726042830"
          alt="MAQUET 4748 Transmobil, Patienten-Transporter mit seitlichem Patient"
        />
        <div className="p-4">
          <div className="text-sm text-gray-600">Produktnummer: 1004775</div>
          <h2 className="text-lg font-bold text-gray-900 mt-2">
            MAQUET 4748 Transmobil, Patienten-Transporter mit seitlichem Patient
          </h2>
          <p className="text-sm text-gray-600 mt-1">MAQUET 4748 Transmobil, Patienten-Transporter mit seitlichem Patientenschutz</p>
          <div className="text-xl font-bold text-gray-900 mt-2">€2,690.00*</div>
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
          src="https://www.med-geraete.de/thumbnail/27/06/4c/1703011523/1005263_400x400.jpeg?ts=1733912355"
          alt="MAQUET 1150 Alphamaquet Plus"
        />
        <div className="p-4">
          <div className="text-sm text-gray-600">Produktnummer: 1005263</div>
          <h2 className="text-lg font-bold text-gray-900 mt-2">
            MAQUET 1150 Alphamaquet Plus
          </h2>
          <p className="text-sm text-gray-600 mt-1">MAQUET 1150 Alphamaquet Plus (1150 02 D0) Transportabler Operations</p>
          <div className="text-xl font-bold text-gray-900 mt-2">€11,900.00*</div>
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

export default OpertingTable