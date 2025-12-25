import './App.css';

import logo from "./images/Logo.png";
import gift from "./images/Mancho gift.png";
import work from "./images/Mancho work.png";
import left from "./images/Left branches.png";
import right from "./images/Right branches.png";

import { useState, useEffect } from 'react';

function App() {
  const [wish, setWish] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    fetch('/wishes.json')
      .then(res => res.json())
      .then(data => setWish(data));
  }, []);

  function nextStep() {
    setCurrentIndex((index) => {
      if (index === wish.length - 1) {
        return 0;
      }
      return index + 1;
    });
  }

  return (
    <div className="page-wrapper">
      <img src={left} className="left-branches" alt="left" />
      <img src={right} className="right-branches" alt="right" />

      <div className="container">
        <img src={gift} alt="gift" />

        <div className="card">
          <img src={logo} alt="logo" />
          <h1 className="wish">
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
