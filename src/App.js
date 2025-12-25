import './App.css';

import logo from "./images/Logo.png";
import gift from "./images/Mancho gift.png";
import work from "./images/Mancho work.png";
import left from "./images/Left branches.png";
import right from "./images/Right branches.png";
import { useState, useEffect, useRef } from 'react';
import confetti from 'canvas-confetti';

function App() {
  const [wish, setWish] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [textColor, setTextColor] = useState("#000000");

 
  const newYear = new Date("2026-01-01T00:00:00").getTime();
  const [timeLeft, setTimeLeft] = useState(newYear - Date.now());

  useEffect(() => {
    const timer = setInterval(() => setTimeLeft(newYear - Date.now()), 1000);
    return () => clearInterval(timer);
  }, [newYear]);

  let days = 0, hours = 0, minutes = 0, seconds = 0;
  if (timeLeft > 0) {
    days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    hours = Math.floor((timeLeft / (1000 * 60 * 60)) % 24);
    minutes = Math.floor((timeLeft / (1000 * 60)) % 60);
    seconds = Math.floor((timeLeft / 1000) % 60);
  }


  useEffect(() => {
    fetch('/wishes.json')
      .then(res => res.json())
      .then(data => setWish(data));
  }, []);

  
  function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

 
  const handleCelebrate = () => {
    confetti({
      particleCount: 300,
      spread: 160,
      origin: { y: 0.6 }
    });
  };

 
  const nextStep = () => {
    if (!wish.length) return;
    setCurrentIndex(i => (i + 1) % wish.length);
    setTextColor(getRandomColor());
    handleCelebrate();
  };

  return (
    <div className="page-wrapper">
      <img src={left} className="left-branches" alt="left" />
      <img src={right} className="right-branches" alt="right" />

      <div className="container">
        <img src={gift} alt="gift" />

        <div className="card">
          <img src={logo} alt="logo" />
          <div className="timer">
            <div><span>{days}</span> day</div>
            <div><span>{hours}</span> hour</div>
            <div><span>{minutes}</span> min</div>
            <div><span>{seconds}</span> sec</div>
          </div>
          <h1 className="wish" style={{ color: textColor }}>
            {wish[currentIndex]?.title}
          </h1>
          <button className="btn-create" onClick={nextStep}>
            Create a new
          </button>
        </div>

        <img src={work} alt="work" />
      </div>

      <p>
        New year — new Tech future with <span>Mancho</span>
      </p>
    </div>
  );
}

export default App;
