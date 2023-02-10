import Verb from "./components/Verb";
import React from "react";
import { nanoid } from "nanoid";
import Input from "./components/Input";
import Row from "./components/Row";
import Navigation from "./components/Navigation";

function App(props) {
  const [mode, setMode] = React.useState("overview"); // overview - testAll - random10 - favorite
  const isTesting = mode !== "overview" ? true : false;

  const [favorites, setFavorites] = React.useState(() => {
    if (window.localStorage.getItem("irwy") === null) {
      window.localStorage.setItem("irwy", JSON.stringify([]));
    }
    const listOfFavorites = JSON.parse(window.localStorage.getItem("irwy"));
    return listOfFavorites;
  });

  React.useEffect(() => {
    const newStorageContent = [...favorites];
    window.localStorage.setItem("irwy", JSON.stringify(newStorageContent));
  }, [favorites]);

  const originalList = props.data.map((verb) => [
    verb.translate.uk,
    ...verb.forms,
  ]);

  function createWorkingList() {
    if (mode === "random10") {
      return originalList.sort(() => 0.5 - Math.random()).slice(0, 10);
    }
    if (mode === "favorite") {
      return originalList.filter((verb) => favorites.includes(verb[0]));
    }
    return originalList;
  }

  const content = createWorkingList().map((verb) => {
    return (
      <Row
        values={verb}
        isTesting={isTesting}
        key={nanoid()}
        setFavorites={setFavorites}
      />
    );
  });

  function toggleMode(event) {
    if (event.target.id === "overview") {
      setMode("overview");
    }
    if (event.target.id === "testAll") {
      setMode("testAll");
    }
    if (event.target.id === "random10") {
      setMode("random10");
    }
    if (event.target.id === "favorite") {
      setMode("favorite");
    }
  }

  return (
    <div className="App">
      <h1 className="header">Irregular verbs</h1>
      <Navigation toggleMode={toggleMode} />
      <div className="main">{content}</div>
    </div>
  );
}

export default App;
