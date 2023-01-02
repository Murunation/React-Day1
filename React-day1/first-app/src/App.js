import logo from "./logo.svg";
import "./App.css";

function App() {
  function clickHandler() {
    console.log("Hi"); ///function bichij bolno
  }

  const name = "Legendary Murun";
  // function welcomeMes() {
  //   return `zaaza ${name}`;
  // }
  const myName = "Murun";
  const word = name.split(" ");
  // function changing(name) {
  //   if (word[0] == "Legendary") {
  //     return;
  //   }
  //   return <h1 style={styleNah}>Nahh ! {myName}</h1>;  //version one
  // }
  const customStyle = {
    color: word[0] == "Legendary" ? "#2ecc71" : "red",
    fontSize: word[0] == "Legendary" ? "70px" : "40px", //Ternary operator
  };

  // function greetingBro(name) {
  //   if (name !== undefined) {
  //     return <h1 style={customStyle}>Hello, {name}</h1>;
  //   }
  //   return <h1 style={customStyle}>Hello, Stranger</h1>; //version one
  // }
  const title = <h1 style={customStyle}>{name}</h1>; //curly
  return (
    <div className="App">
      <header className="App-header">
        <h1 style={customStyle}>Great job! {myName}</h1>
        <button onClick={clickHandler}>Click meeeeee</button>
      </header>
    </div>
  );
}

export default App;

// <div className="App">
//   <header className="App-header">
//     <img src={logo} className="App-logo" alt="logo" />
//     <p>
//       Edit <code>src/App.js</code> and save to reload.
//     </p>
//     <a
//       className="App-link"
//       href="https://reactjs.org"
//       target="_blank"
//       rel="noopener noreferrer"
//     >
//       Learn React
//     </a>
//   </header>
// </div>
