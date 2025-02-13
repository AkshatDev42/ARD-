import React from "react";
import Card from "../components/Card.jsx"; // Reusable Card Component
import sampleImage from "../assets/1.webp"; // Replace with actual images

const phrases = [
  { text: "Where am I?", img: sampleImage },
  { text: "Can you help me?", img: sampleImage },
  { text: "What is the time?", img: sampleImage },
  { text: "Come together", img: sampleImage },
  { text: "I cannot hear you", img: sampleImage },
  { text: "Where is the exit?", img: sampleImage },
  { text: "Can you tell me the way?", img: sampleImage },
  { text: "Thank you", img: sampleImage },
  { text: "Can you repeat again?", img: sampleImage },
  { text: "There is an emergency", img: sampleImage },
  { text: "Call this number: 0123456789", img: sampleImage },
  { text: "I am ready", img: sampleImage },
];

function Travel() {
  return (
    <div className="flex flex-col items-center p-4">
      <h2 className="text-2xl font-semibold mb-4">Travelling/Crowd Instructions</h2>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-2">
        {phrases.map((phrase, index) => (
          <Card key={index} image={phrase.img} text={phrase.text} />
        ))}
      </div>
    </div>
  );
}

export default Travel;
