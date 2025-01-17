import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { Toastify } from "toastify";

const Modal = ({ closeModal }) => {
  const [formData, setFormData] = useState({
    name: "",
    emailId: "",
    phoneNumber: "",
    price: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "https://cardealers-cxu7.onrender.com/client/enquiry3",
        formData,
        {
          headers: { "Content-Type": "application/json" },
        }
      );
      console.log("Response:", response.data);
      alert("Anfrage erfolgreich eingereicht!");
      closeModal();
    } catch (error) {
      console.error("Fehler beim Einreichen der Anfrage:", error);
      toast.error(
        "Anfrage konnte nicht eingereicht werden. Bitte versuchen Sie es erneut."
      );
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-1/2">
        <h2 className="text-xl font-bold mb-4">Anfrageformular</h2>
        <form onSubmit={handleSubmit}>
          {["name", "emailId", "phoneNumber", "price", "model"].map((field) => (
            <div className="mb-4" key={field}>
              <label className="block text-sm font-bold mb-2 capitalize">
                {field}
              </label>
              <input
                type={field === "emailId" ? "email" : "text"}
                name={field}
                className="w-full px-3 py-2 border rounded"
                placeholder={`Geben Sie Ihre ${field} ein`}
                value={formData[field]}
                onChange={handleChange}
                required
              />
            </div>
          ))}
          <div className="flex justify-end">
            <button
              type="button"
              className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded mr-2"
              onClick={closeModal}
            >
              Abbrechen
            </button>
            <button
              type="submit"
              className="bg-green-700 hover:bg-green-900 text-white font-bold py-2 px-4 rounded"
            >
              Einreichen
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Modal;
