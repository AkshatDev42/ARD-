import React from "react";
import finger from "../assets/1.webp";

function ModeSelection() {
  const modes = [
    { name: "General Instructions 1" },
    { name: "General Instructions 2" },
    { name: "Travel Mode" },
    { name: "Education Mode" },
    { name: "Medical Mode" },
  ];

  return (
    <div className="flex flex-col items-center p-4">
      <div className="p-4 bg-base-100 rounded-lg shadow-md w-full md:w-3/4">
        <h3 className="text-lg font-bold mb-2">Instructions to Configure Modes</h3>
        <ol className="list-decimal list-inside space-y-1 text-sm md:text-base font-semibold">
          <li>To select a mode, bend your ring finger.</li>
          <li>After that, within 2 seconds, bend the fingers of the respective mode to configure that mode.</li>
        </ol>
      </div>
      {/* Heading */}
      <h2 className="text-2xl font-semibold mb-4">Select a Mode</h2>

      {/* Modes Grid */}
      <div className="grid grid-cols-2 gap-4 md:grid-cols-2">
        {modes.map((mode, index) => (
          <div
            key={index}
            className="flex flex-col justify-center items-center bg-base-200 text-center p-4 rounded-lg shadow-lg w-40 h-52 font-medium hover:bg-base-300 transition relative border border-gray-300"
          >
            {/* Mode Number on Top */}
            <span className="absolute top-2 text-sm font-bold">Mode {index + 1}</span>

            {/* Enlarged Image */}
            <img src={finger} alt="Mode" className="w-24 h-24 rounded-md mb-3" />

            {/* Mode Name */}
            <span>{mode.name}</span>
          </div>
        ))}
      </div>

      {/* Instructions */}
    </div>
  );
}

export default ModeSelection;
