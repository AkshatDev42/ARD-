import React from "react";
import Card from "../components/Card.jsx"; // Importing the Card component
import sampleImage from "../assets/1.webp"; // Replace with actual images

const phrases = [
  { text: "Hello, How are you?", img: sampleImage },
  { text: "What is your name?", img: sampleImage },
  { text: "What time is it?", img: sampleImage },
  { text: "What is the date?", img: sampleImage },
  { text: "I am fine.", img: sampleImage },
  { text: "I am sorry.", img: sampleImage },
  { text: "Thank you.", img: sampleImage },
  { text: "Yes, sure.", img: sampleImage },
  { text: "I need to order something.", img: sampleImage },
  { text: "I did not understand.", img: sampleImage },
  { text: "Hurry up!", img: sampleImage },
  { text: "Please wait.", img: sampleImage },
  { text: "I am supposed to go.", img: sampleImage },
  { text: "Goodbye!", img: sampleImage },
];

function General1() {
  return (
    <div className="flex flex-col items-center p-4">
      <h2 className="text-2xl font-semibold mb-4">General Instructions [Set-1]</h2>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-2">
        {phrases.map((phrase, index) => (
          <Card key={index} image={phrase.img} text={phrase.text} />
        ))}
      </div>
    </div>
  );
}

export default General1;
