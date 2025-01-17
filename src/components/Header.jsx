import React, { useState } from "react";
import { Link } from "react-router-dom";
import SideModal from "./SideModal";

const Header = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [userDropdownOpen, setUserDropdownOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const toggleUserDropdown = () => {
    setUserDropdownOpen(!userDropdownOpen);
  };

  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };

  return (
    <>
      <div className="bg-blue-500 flex justify-between items-center p-2">
        <div className="text-white font-bold">
          <Link to={"/contact"} className="text-white">
            Hilfe & Kontakt
          </Link>
        </div>
        <div className="text-white">
          Hervorragende Qualität zu einem guten Preis
        </div>
        <div className="text-white">
          <Link to={"/warrenty"} className="text-white">
            1 Jahr Gewährleistung
          </Link>
        </div>
      </div>

      <header className="bg-white shadow-md">
        <div className="container mx-auto py-4 px-6">
          <div className="flex flex-wrap items-center -mx-3">
            <div className="w-full lg:w-1/3 px-3">
              <img
                src="https://www.med-geraete.de/media/ec/23/7c/1655115532/dr-mueller-gmbh-logo.png?ts=1655115532"
                alt="Dr. Müller GmbH"
                className="h-16"
              />
            </div>
            <div className="w-full lg:w-2/3 px-3 flex justify-between items-center">
              <div className="flex-1 mx-6">
                <input
                  type="text"
                  placeholder="Suchbegriff eingeben ..."
                  className="w-full border border-gray-300 rounded-md py-2 px-4"
                />
              </div>
              <div className="flex space-x-4 items-center">
                <div className="relative">
                  <button
                    className="text-gray-600 flex items-center focus:outline-none"
                    onClick={toggleUserDropdown}
                  >
                    <svg
                      className="h-6 w-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5.121 17.804A9.003 9.003 0 0112 15c2.21 0 4.21.896 5.879 2.804M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </button>
                  {userDropdownOpen && (
                    <div className="absolute right-0 mt-2 w-48 bg-white border rounded-lg shadow-lg z-10">
                      <ul>
                        <li className="px-4 py-2 hover:bg-gray-100 font-bold">
                          <a href="#">Ihr Kont </a>
                        </li>
                        <hr />
                        <li className="px-4 py-2 hover:bg-gray-100">
                          <Link to={"/auth"}>
                            <button className="bg-blue-700 text-white px-4 py-2 rounded w-full">
                              Anmelden
                            </button>
                          </Link>
                        </li>
                        <li className="px-4 py-2 text-center">
                          oder{" "}
                          <Link to={"/auth"} className="text-blue-300">
                            {" "}
                            registrieren
                          </Link>
                        </li>
                        <hr />
                        <li className="px-4 py-2  hover:bg-gray-100">
                          <a className="text-black" href="#">
                            Übersicht
                          </a>
                        </li>
                        <li className="px-4 py-2  hover:bg-gray-100">
                          <a className="text-black" href="#">
                            Persönliches Profil
                          </a>
                        </li>
                        <li className="px-4 py-2 hover:bg-gray-100">
                          <a className="text-black" href="#">
                            Adressen
                          </a>
                        </li>
                        <li className="px-4 py-2 hover:bg-gray-100">
                          <a className="text-black" href="#">
                            Zahlungsarten
                          </a>
                        </li>
                        <li className="px-4 py-2 hover:bg-gray-100">
                          <a className="text-black" href="#">
                            Bestellungen
                          </a>
                        </li>
                      </ul>
                    </div>
                  )}
                </div>
                <button
                  onClick={toggleModal}
                  className="text-gray-600 flex items-center"
                >
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-1.6 8M17 13l1.6 8M9 21h6"
                    />
                  </svg>
                  <span className="ml-1 text-blue-900">€0.00*</span>
                </button>
                <div className="relative">
                  <button
                    className="text-gray-600 flex items-center focus:outline-none"
                    onClick={toggleDropdown}
                  >
                    <span>Deutsch</span>
                    <svg
                      className="h-4 w-4 ml-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                  {dropdownOpen && (
                    <div className="absolute right-0 mt-2 w-40 bg-white border rounded shadow-lg z-10">
                      <ul>
                        <li className="px-4 py-2 hover:bg-gray-100">
                          <a href="#">Deutsch</a>
                        </li>
                        <li className="px-4 py-2 hover:bg-gray-100">
                          <a href="#">English</a>
                        </li>
                        <li className="px-4 py-2 hover:bg-gray-100">
                          <a href="#">Français</a>
                        </li>
                        <li className="px-4 py-2 hover:bg-gray-100">
                          <a href="#">Italienisch</a>
                        </li>
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
          <nav className="w-full px-3 flex justify-center lg:justify-between flex-wrap space-y-2 lg:space-y-0 space-x-6 lg:space-x-0 mt-4 lg:mt-0">
            <Link to="/" className="text-gray-600 font-semibold">
              Heim
            </Link>
            <Link to="/latest-news" className="text-gray-600">
              Aktuelles
            </Link>
            <Link to="/company" className="text-gray-600">
              Unternehmen
            </Link>
            <Link to="/shop" className="text-gray-600">
              Shop
            </Link>
            <Link to="/sustainability" className="text-gray-600">
              Nachhaltigkeit
            </Link>
            <Link to="/team" className="text-gray-600">
              Team
            </Link>
            <Link to="/references" className="text-gray-600">
              Referenzen
            </Link>
            <Link to="/Downloads" className="text-gray-600">
              Downloads
            </Link>
            <Link to="/contact" className="text-gray-600">
              Kontakt
            </Link>
          </nav>
        </div>
      </header>

      <SideModal isOpen={modalOpen} toggleModal={toggleModal} />
    </>
  );
};

export default Header;
