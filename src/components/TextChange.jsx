import { useState, useEffect } from "react";

const TextChange = () => {
  const texts = ["Hi, I'm Chehak", "Hi, I'm a Frontend Developer", "Hi, I'm a Tech Writer"];
  const [currentText, setCurrentText] = useState("");
  const [endValue, setEndValue] = useState(0);
  const [isForward, setIsForward] = useState(true);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const fullText = texts[index];
    let timeoutId;

    const intervalId = setInterval(() => {
      setCurrentText(fullText.substring(0, endValue));

      if (isForward) {
        if (endValue < fullText.length) {
          setEndValue((prev) => prev + 1);
        } else {
          clearInterval(intervalId);
          timeoutId = setTimeout(() => setIsForward(false), 1000); // pause after typing
        }
      } else {
        if (endValue > 5) { // delete only up to a few chars (not completely)
          setEndValue((prev) => prev - 1);
        } else {
          clearInterval(intervalId);
          setIsForward(true);
          setIndex((prev) => (prev + 1) % texts.length);
        }
      }
    }, 100);

    return () => {
      clearInterval(intervalId);
      clearTimeout(timeoutId);
    };
  }, [endValue, isForward, index]);

  return <div className="transition ease duration-300">{currentText}</div>;
};

export default TextChange;
