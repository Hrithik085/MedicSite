import React from "react";

const SideModal = ({ isOpen, toggleModal }) => {
  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 flex justify-end z-50">
          <div
            className="fixed inset-0 bg-black opacity-50"
            onClick={toggleModal}
          ></div>
          <div className="bg-white w-1/3 h-full shadow-lg z-10 p-4">
            <button onClick={toggleModal} className="text-gray-600">
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
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <h2 className="text-xl font-bold mb-4">Ihr Einkaufswagen</h2>
            <p>Ihr Einkaufswagen ist leer.</p>
            {/* Fügen Sie hier Ihre Warenkorbelemente hinzu */}
          </div>
        </div>
      )}
    </>
  );
};

export default SideModal;
