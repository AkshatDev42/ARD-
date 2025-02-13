import React from "react";
import Card from "../components/Card.jsx"; // Reusable Card Component
import sampleImage from "../assets/1.webp"; // Replace with actual images

const phrases = [
  { text: "Can you repeat again?", img: sampleImage },
  { text: "I did not understand", img: sampleImage },
  { text: "Please read this for me", img: sampleImage },
  { text: "Can I write this?", img: sampleImage },
  { text: "What is the answer?", img: sampleImage },
  { text: "Can you help me in this?", img: sampleImage },
  { text: "Got it", img: sampleImage },
  { text: "Thank you", img: sampleImage },
  { text: "I am sorry", img: sampleImage },
  { text: "What is this?", img: sampleImage },
  { text: "Can I go?", img: sampleImage },
  { text: "This is right", img: sampleImage },
  { text: "This is wrong", img: sampleImage },
  { text: "Save this", img: sampleImage },
];

function Education() {
  return (
    <div className="flex flex-col items-center p-4">
      <h2 className="text-2xl font-semibold mb-4">Educational/Office Environment Instructions</h2>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-2">
        {phrases.map((phrase, index) => (
          <Card key={index} image={phrase.img} text={phrase.text} />
        ))}
      </div>
    </div>
  );
}

export default Education;
