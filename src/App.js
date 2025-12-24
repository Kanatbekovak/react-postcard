import './App.css';
import logo from "../src/images/Logo.png";
import gift from "../src/images/Mancho gift.png";
import work from "../src/images/Mancho work.png";
import left from "../src/images/Left branches.png";
import right from "../src/images/Right branches.png";



function App() {
  const [wish, setWish] = UseState([]);
  return (
    <div className="page-wrapper">
      <img src={left} className="left-branches" alt="left"/>
      <img src={right} className="right-branches" alt="right"/>
      <div className="container">
        <img src={gift} alt="gift"/>
        <div className='card'>
          <img src={logo} alt="gift" />
          <h1>Happy New Year!</h1>
          <button>Create a new</button>
        </div>
        <img src={work} alt="work"/>
      </div>
      <p>New year — new Tech future with<span>Mancho</span></p>
    </div>
  );
}

export default App;
