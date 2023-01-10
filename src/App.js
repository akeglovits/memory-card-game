import "./styles/App.css";
import Header from "./components/Header";
import Gameboard from "./components/Gameboard";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Gameboard />
    </div>
  );
};

export default App;
