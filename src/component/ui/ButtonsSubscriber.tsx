import { subscriberOptions } from "@/app/hooks/subscriberOptions";
import React from "react";

interface ButtonSubscriberProps {
  setSelectedSubscriber: React.Dispatch<React.SetStateAction<string | null>>; 
  setView: React.Dispatch<React.SetStateAction<"subscriber"|"publisher"|null>>;
}

const ButtonSubscriber: React.FC<ButtonSubscriberProps> = ({
  setSelectedSubscriber, setView,
}) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-2 mb-4">
      {subscriberOptions.map((option) => (
        <button
          key={option}
          className="px-4 bg-green-400 text-white rounded hover:bg-green-600"
          onClick={() => setSelectedSubscriber(option)}
        >
          {option}
        </button>
      ))}
      <button
        className="px-4 py-2 border border-gray-400 hover:border-gray-200 col-span-full"
        onClick={() => setView(null)}
      >
        Kembali
      </button>
    </div>
  );
};
export default ButtonSubscriber;
