// Overlay.js
import React from 'react';
import NewEmployee from './NewEmployee';

function Overlay({ showModal, closeModal }) {
  return (
    showModal && (
      <div className="fixed top-0 left-0 flex items-center justify-center w-full h-full bg-gray-800 bg-opacity-75">
        <div className="bg-white rounded shadow-md relative">
          <button className="absolute top-0 right-0 m-2" onClick={closeModal}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-600" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M13.414 6.586a2 2 0 0 1 2.828 2.828L12.828 10l3.414 3.414a2 2 0 1 1-2.828 2.828L10 12.828l-3.414 3.414a2 2 0 1 1-2.828-2.828L7.172 10 3.758 6.586a2 2 0 1 1 2.828-2.828L10 7.172l3.414-3.414a2 2 0 0 1 2.828 2.828L13.414 10z" clipRule="evenodd" />
            </svg>
          </button>

          <NewEmployee />

          {/* Your modal content here */}
          {/* <h2 className="text-lg font-semibold p-4">Add New</h2> */}
          {/* Add any form or content for adding new items */}
          {/* <button className="bg-green-500 text-white px-4 py-2 rounded m-4" onClick={closeModal}>Close</button> */}
        </div>
      </div>
    )
  );
}

export default Overlay;
