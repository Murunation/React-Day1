import "../style/header.css";

export default function Header() {
  return (
    <header>
      <div className="container">
        <img src="./logo.png" alt="logo" />
        <ul>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Products</a>
          </li>
          <li>
            <a href="#">For Teams</a>
          </li>
        </ul>
        <div className="right-side">
          <input type="search" placeholder="Search" />
          <button>Login in</button>
          <button className="sign">Sign up</button>
        </div>
      </div>
    </header>
  );
}
