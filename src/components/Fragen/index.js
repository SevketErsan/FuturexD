import "./Fragen.css";
import { useState } from "react";
import Image from "../Image/index";

import image00 from "../../Images/00.png";
import image0 from "../../Images/0.png";
import image1 from "../../Images/1.png";
import image2 from "../../Images/2.png";
import image3 from "../../Images/3.png";
import image4 from "../../Images/4.png";
import image5 from "../../Images/5.png";
import image6 from "../../Images/6.png";
import image7 from "../../Images/7.png";
import image8 from "../../Images/8.png";
import image9 from "../../Images/9.png";
import image10 from "../../Images/10.png";

const questions = [
  "Bitte bestimmen Sie die gewünschte Position für die Kamera.",
  "Wird der Bodenbelag verändert?",
  "Wird die Farbe der Decke verändert?",
  "Wird die Farbe der Unterzüge verändert?",
  "Soll der Sockelbereich an Wänden und Stützen in individuellen Farben gestaltet werden?",
  "Wird die Farbe der Stützen verändert?",
  "Wird die Wandfarbe geändert?",
  "Sollen die Parktaschen in individuellen Farben gestaltet werden?",
  "Sollen die Parktaschen markiert und nummeriert werden?",
  "Sollen die TGA Elemente in individuellen Farben gestaltet werden?",
  "Soll das Farbkonzept 3D-Figuren einschließen?",
];
const images = [
  image00,
  image0,
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
  image8,
  image9,
  image10,
];

export default function ShowQuestion() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [selectedColor, setSelectedColor] = useState("#ff0000");
  const [displayColorInput, setDisplayColorInput] = useState(false);
  const [uploadedImage, setUploadedImage] = useState(null);

  const prevQuestion = () => {
    setCurrentQuestionIndex((prevIndex) => prevIndex - 1);
  };

  const nextQuestion = () => {
    setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
    setDisplayColorInput(false);
  };

  const answerQuestion = (isYes) => {
    if (isYes && currentQuestionIndex <=9) {
      setDisplayColorInput(true);
    } else {
      setUserAnswers((prevAnswers) => [...prevAnswers, null]);
      nextQuestion();
    }
  };

  const selectColor = () => {
    setUserAnswers((prevAnswers) => [...prevAnswers, selectedColor]);
    nextQuestion();
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    setUploadedImage(file);
    nextQuestion();
  };

  return (
    <div className="container">
      <div className="question-section">
        {currentQuestionIndex >= 1 && currentQuestionIndex <= 10 && (
          <h2>
            Frage {currentQuestionIndex}: {questions[currentQuestionIndex]}
          </h2>
        )}

        {currentQuestionIndex === 11 && (
          <h2>Farbkonzept nach den eingetragenen Wünschen: </h2>
        )}

        {currentQuestionIndex === 0 && !uploadedImage && (
          <>
            <h2>Bitte bestimmen Sie die gewünschte Position für die Kamera.</h2>
            <div>
              <label htmlFor="imageUpload">
                Bitte laden Sie ein Bilddatei (png,jpeg) hoch:{" "}
              </label>
              <input
                type="file"
                id="imageUpload"
                accept="image/*"
                onChange={handleImageUpload}
              />
            </div>
          </>
        )}

        {currentQuestionIndex >= 1 && currentQuestionIndex <= 10 && (
          <div className="buttons">
            {currentQuestionIndex > 0 && (
              <button onClick={prevQuestion}>◀︎</button>
            )}
            <button onClick={() => answerQuestion(true)}>Ja</button>
            <button onClick={() => answerQuestion(false)}>Nein</button>
            {currentQuestionIndex < questions.length - 1 && (
              <button onClick={nextQuestion}>►</button>
            )}
          </div>
        )}

        <div id="navigator">{`${currentQuestionIndex}/${questions.length}`}</div>

        {displayColorInput && (
          <div id="color-input">
            <label htmlFor="color">
              Geben Sie bitte eine Präferenz für Farbe oder Material an:{" "}
            </label>
            <input
              type="color"
              id="color"
              name="color"
              value={selectedColor}
              onChange={(e) => setSelectedColor(e.target.value)}
            />
            <button onClick={selectColor}>Auswählen</button>
          </div>
        )}
        {currentQuestionIndex >= 1 && (
          <div id="comment-section">
            <label htmlFor="comment">Anmerkungen (optional): </label>
            <input
              type="text"
              id="comment"
              name="comment"
              // value={xx}
              // onChange={xx}
            />
          </div>
        )}
      </div>
      <Image imageUrls={images} currentQuestionIndex={currentQuestionIndex} />
    </div>
  );
}
