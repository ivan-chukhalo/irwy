import react from "react";

export default function Navigation(props) {
  return (
    <nav className="nav">
      <button className="nav__btn" id="overview" onClick={props.toggleMode}>
        Overview
      </button>
      <button className="nav__btn" id="testAll" onClick={props.toggleMode}>
        Test all
      </button>
      <button className="nav__btn" id="random10" onClick={props.toggleMode}>
        Random 10
      </button>
    </nav>
  );
}
