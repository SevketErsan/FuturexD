import "./Image.css";

export default function Image({ imageUrls, currentQuestionIndex }) {
  return (
    <div className="image-container">
      <img
        src={imageUrls[currentQuestionIndex]}
        alt={`Bild ${currentQuestionIndex + 1}`}
      />
    </div>
  );
}
