import waldo from "./waldo.jpg";
import NavigationBar from "./components/NavigationBar";
import "./App.css";

function App() {
  function findCoors(e) {
    const x = e.clientX;
    const y = e.clientY;

    const xScroll = window.scrollX;
    const yScroll = window.scrollY;

    const xOff = document.querySelector(".waldo-pic").offsetLeft;
    const yOff = document.querySelector(".waldo-pic").offsetTop;

    console.log(yOff)
    console.log(xOff)

    console.log(x + xScroll - xOff + ", " + (y + yScroll - yOff));
  }

  return (
    <div className="App">
      <NavigationBar />
      <div className="box">
        <img
          className="waldo-pic"
          onClick={findCoors}
          src={waldo}
          alt="busy waldo"
        />
      </div>
    </div>
  );
}

export default App;
