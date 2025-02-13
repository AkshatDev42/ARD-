import React from "react";
import Card from "../components/Card.jsx"; // Reusable Card Component
import sampleImage from "../assets/1.webp"; // Replace with actual images

const phrases = [
  { text: "Turn on the lights", img: sampleImage },
  { text: "Turn off the lights", img: sampleImage },
  { text: "Good to see you", img: sampleImage },
  { text: "I am not sure", img: sampleImage },
  { text: "I am 19 years old", img: sampleImage },
  { text: "Nice try", img: sampleImage },
  { text: "Please open the doors", img: sampleImage },
  { text: "Please help me", img: sampleImage },
  { text: "I am not well", img: sampleImage },
  { text: "What are you doing?", img: sampleImage },
  { text: "Yes, I see", img: sampleImage },
  { text: "I need time", img: sampleImage },
  { text: "I am not sure", img: sampleImage },
  { text: "Stop", img: sampleImage },
];

function General2() {
  return (
    <div className="flex flex-col items-center p-4">
      <h2 className="text-2xl font-semibold mb-4">General Instructions [Set-2]</h2>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-2">
        {phrases.map((phrase, index) => (
          <Card key={index} image={phrase.img} text={phrase.text} />
        ))}
      </div>
    </div>
  );
}

export default General2;
