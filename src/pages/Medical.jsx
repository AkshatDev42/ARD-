import React from "react";
import Card from "../components/Card.jsx"; // Reusable Card Component
import sampleImage from "../assets/1.webp"; // Replace with actual images

const phrases = [
  { text: "I need help", img: sampleImage },
  { text: "Please check me", img: sampleImage },
  { text: "Please help me", img: sampleImage },
  { text: "Hurry up", img: sampleImage },
  { text: "I am fine", img: sampleImage },
  { text: "I am not fine", img: sampleImage },
  { text: "Please go slow", img: sampleImage },
  { text: "Thank you", img: sampleImage },
  { text: "There is a problem in my eye", img: sampleImage },
  { text: "Where am I?", img: sampleImage },
  { text: "Please check temperature", img: sampleImage },
  { text: "Please call someone", img: sampleImage },
  { text: "Please call Papa", img: sampleImage },
  { text: "I need my things", img: sampleImage },
];

function Medical() {
  return (
    <div className="flex flex-col items-center p-4">
      <h2 className="text-2xl font-semibold mb-4">Medical Instructions</h2>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-2">
        {phrases.map((phrase, index) => (
          <Card key={index} image={phrase.img} text={phrase.text} />
        ))}
      </div>
    </div>
  );
}

export default Medical;
