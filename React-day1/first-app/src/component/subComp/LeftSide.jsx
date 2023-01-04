import "../../style/sub.css/leftSide.css";

export default function LeftSide() {
  return (
    <div className="main">
      <a href="#">Home</a>
      <p>PUBLIC</p>
      <ul>
        <li>
          <img src="#" alt="icon" /> <a href="#">Questions</a>
        </li>
        <li>
          <img src="#" alt="icon" /> <a href="#">Tags</a>
        </li>
        <li>
          <img src="#" alt="icon" /> <a href="#">Users</a>
        </li>
        <li>
          <img src="#" alt="icon" /> <a href="#">Companies</a>
        </li>
      </ul>
      <p>COLLECTIVES</p>
      <ul>
        <li>
          <img src="#" alt="icon" /> <a href="#">Explore Collectives</a>
        </li>
      </ul>

      <p>TEAMS</p>
      <div className="teams">Teams</div>
    </div>
  );
}
