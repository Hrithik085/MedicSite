import React from 'react';

const Downloads = () => {
  return (
    <div className='flex flex-col justify-center items-center'>
      <h4 className='text-sky-600 font-bold mt-3'>Downloads</h4>
      <a href="https://www.med-geraete.de/media/3a/4b/db/1702390687/Auftrag-Reparaturschein-neu.pdf" target="_blank" rel="noopener noreferrer">
        <button className='mt-4 bg-sky-800 text-white py-2 px-4 rounded mb-10'>
          Reparaturschein
        </button>
      </a>
    </div>
  );
}

export default Downloads;
