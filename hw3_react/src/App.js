import "./App.css";
import {
  CoordMouseMoveClass,
  CoordMouseMoveFunc,
} from "./CoordMouseMove/CoordMouseMove.jsx";
import {Figure} from "./Figure/Figure";

function App() {
  return (
    <div className="App">
      <div className="containCoord">
        <CoordMouseMoveClass />
        <CoordMouseMoveFunc />
      </div>
      <Figure />
    </div>
  );
}

export default App;
