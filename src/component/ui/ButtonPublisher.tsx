import React from "react";
import { publisherOptions } from "@/app/hooks/publisherOptions";

interface ButtonPublisherProps{
 setSelectedPublisher: React.Dispatch<React.SetStateAction<string | null>>;
 setView:React.Dispatch<React.SetStateAction<"subscriber"|"publisher"|null>>;
}
const ButtonPublisher: React.FC<ButtonPublisherProps> = ({
    setSelectedPublisher, setView,
}) =>{
    return(
                 <div className="grid grid-cols-2 md:grid-cols-3 gap-2 mb-4">
                    {publisherOptions.map((option) => (
                      <button
                        key={option}
                        className="px-4 bg-green-400 text-white rounded hover:bg-green-600"
                        onClick={() => setSelectedPublisher(option)}
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
    )
}
export default ButtonPublisher;



