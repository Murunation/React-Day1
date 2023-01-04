import "../style/main.css";
import LeftSide from "./subComp/LeftSide";
import RightSide from "./subComp/RightSide";
import Middle from "./subComp/Middle";

export default function Main() {
  //   function clickHandler() {
  //     console.log("Hi"); ///function bichij bolno
  //   }
  //   const name = "Legendary Murun";
  //   const myName = "Murun";
  //   const word = name.split(" ");
  //   const customStyle = {
  //     color: word[0] == "Legendary" ? "#2ecc71" : "red",
  //     fontSize: word[0] == "Legendary" ? "70px" : "40px", //Ternary operator
  //   };
  //   const stylehtwo = {
  //     color: "Blue",
  //     fontSize: "80px",
  //   };
  return (
    <div className="App-header container">
      <LeftSide />
      <Middle />
      <RightSide />
    </div>
  );
}

{
  /* <h1 style={customStyle}>Great job! {myName}</h1>
      <h2 style={stylehtwo}>Hello {myName}</h2>
      <button onClick={clickHandler}>Click meeeeee</button> */
}
