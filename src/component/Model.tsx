import React, { useState } from 'react';

const Model = () => {
  const [open, setOpen] = useState<boolean>(false);

  const handleModel = (): void => {
    setOpen((prevState) => !prevState);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-400">
      <button
        onClick={handleModel}
        className="px-6 py-3 bg-green-600 text-white rounded-full font-medium hover:bg-green-700 transition"
      >
        Open Confirmation Modal
      </button>

      {/* Modal Overlay and Box */}
      {open && (
        <div className="fixed inset-0 bg-black bg-opacity-40 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md text-center space-y-6 animate-fade-in">
            <h2 className="text-2xl font-bold text-gray-800">Are you sure?</h2>
            <p className="text-gray-600">This action cannot be undone.</p>

            <div className="flex justify-center gap-4">
              <button
                onClick={handleModel}
                className="px-5 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
              >
                Delete
              </button>
              <button
                onClick={handleModel}
                className="px-5 py-2 bg-gray-300 text-gray-800 rounded-lg hover:bg-gray-400 transition"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Model;
