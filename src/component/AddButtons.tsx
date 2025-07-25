// import React from "react";

import React from "react";

interface AddButtonsProps {
  setView: React.Dispatch<React.SetStateAction<"subscriber" | "publisher" | null>>;
}

const AddButtons: React.FC<AddButtonsProps> = ({ setView }) => {
  return (
    <div className="space-x-4 mb-4">
      <button
        className="px-4 py-2 bg-blue-400 text-white rounded hover:bg-green-500"
        onClick={() => setView("subscriber")}
      >
        Add Subscriber
      </button>
      <button
        className="px-4 py-2 bg-blue-400 text-white rounded hover:bg-green-500"
        onClick={() => setView("publisher")}
      >
        Add Publisher
      </button>
    </div>
  );
};
export default AddButtons;
