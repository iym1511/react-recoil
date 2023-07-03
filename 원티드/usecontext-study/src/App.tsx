import "./App.css";
import NameComponent from "./NameComponent";

function App() {
  return (
    <div className="App">
      <NameComponent>
        <p>children테스트!!</p>
      </NameComponent>
    </div>
  );
}

export default App;
