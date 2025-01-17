import React, { useState } from 'react';
import ContactModal from '../components/ContactModal'; // Adjust the path as necessary

const Contact = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
     <div>
  <img
    src="https://www.med-geraete.de/thumbnail/ef/89/50/1659078342/Header_Kontakt_1920x1920.jpg?ts=1659078343"
    alt=""
  />

  <h1 className="mt-4 text-center font-bold text-3xl text-sky-600">Kontakt</h1>
  <br /><br />
  <h1 className="mt-4 text-center font-bold text-2xl text-sky-600">Servicetelefon: +49-(0)8206 9624-0</h1>

  <div className="mt-8 mx-auto max-w-xl">
    <form className="bg-white p-8 shadow-md rounded">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
        <div>
          <label className="block text-gray-700 font-bold mb-2 text-sm">Anrede*</label>
          <select className="w-full border border-gray-300 rounded py-2 px-3">
            <option>Herr</option>
            <option>Frau</option>
            <option>Dr.</option>
          </select>
        </div>
        <div>
          <label className="block text-gray-700 font-bold mb-2 text-sm">Vorname*</label>
          <input type="text" className="w-full border border-gray-300 rounded py-2 px-3" />
        </div>
        <div>
          <label className="block text-gray-700 font-bold mb-2 text-sm">Nachname*</label>
          <input type="text" className="w-full border border-gray-300 rounded py-2 px-3" />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div>
          <label className="block text-gray-700 font-bold mb-2 text-sm">Ihre E-Mail-Adresse*</label>
          <input type="email" className="w-full border border-gray-300 rounded py-2 px-3" />
        </div>
        <div>
          <label className="block text-gray-700 font-bold mb-2 text-sm">Telefon*</label>
          <input type="tel" className="w-full border border-gray-300 rounded py-2 px-3" />
        </div>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2 text-sm">Betreff*</label>
        <input type="text" className="w-full border border-gray-300 rounded py-2 px-3" />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2 text-sm">Kommentar*</label>
        <textarea className="w-full border border-gray-300 rounded py-2 px-3" rows="4"></textarea>
      </div>
      <p className="text-xs text-gray-500">Die mit einem Sternchen (*) markierten Felder sind Pflichtfelder.</p>
      <div className="mb-4"><br />
        <label className="inline-flex items-center">
          <input type="checkbox" className="form-checkbox" required />
          <span className="ml-2 text-xs text-gray-500">Indem Sie auf weiter klicken, bestätigen Sie, dass Sie unsere <a className="underline text-blue-500" href="#" onClick={openModal}>Datenschutzhinweise</a> gelesen und akzeptiert haben.</span>
        </label>
      </div>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4" type="submit">Absenden</button>
    </form>
  </div>
</div>

<ContactModal isOpen={isModalOpen} onClose={closeModal} />

    </>
  );
};

export default Contact;
