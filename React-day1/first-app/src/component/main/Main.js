import "../../style/main.css";

export default function Main() {
  function clickHandler() {
    console.log("Hi"); ///function bichij bolno
  }
  const name = "Legendary Murun";
  const myName = "Murun";
  const word = name.split(" ");
  const customStyle = {
    color: word[0] == "Legendary" ? "#2ecc71" : "red",
    fontSize: word[0] == "Legendary" ? "70px" : "40px", //Ternary operator
  };
  const stylehtwo = {
    color: "Blue",
    fontSize: "80px",
  };
  return (
    <div className="App-header container">
      <h1 style={customStyle}>Great job! {myName}</h1>
      <h2 style={stylehtwo}>Hello {myName}</h2>
      <button onClick={clickHandler}>Click meeeeee</button>
    </div>
  );
}
