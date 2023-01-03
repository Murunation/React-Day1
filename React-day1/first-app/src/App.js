import logo from "./logo.svg";
import "./App.css";
import Header from "./component/Header";
import Footer from "./component/Footer";
import Main from "./component/main/Main";
function App() {
  // function clickHandler() {
  //   console.log("Hi"); ///function bichij bolno
  // }

  // function welcomeMes() {
  //   return `zaaza ${name}`;
  // }
  // function changing(name) {
  //   if (word[0] == "Legendary") {
  //     return;
  //   }
  //   return <h1 style={styleNah}>Nahh ! {myName}</h1>;  //version one
  // }

  // function greetingBro(name) {
  //   if (name !== undefined) {
  //     return <h1 style={customStyle}>Hello, {name}</h1>;
  //   }
  //   return <h1 style={customStyle}>Hello, Stranger</h1>; //version one
  // }
  // const title = <h1 style={customStyle}>{name}</h1>; //curly
  return (
    <div className="App">
      <Header />
      <Main />
      <Footer />
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
