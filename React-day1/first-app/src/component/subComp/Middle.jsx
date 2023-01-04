import "../../style/sub.css/middle.css";

export default function Middle() {
  return (
    <div className="middle">
      <div className="middle-title">
        <h4>Search Result</h4>
        <div className="tips">
          <a href="#">Advanced Search Tips</a>
          <button>Ask question</button>
        </div>
      </div>
      <p>Results for react</p>
      <p>
        Search options <b>not deleted</b>
      </p>
      <div className="results-title">
        <p>500 results</p>
        <div className="buttons-new">
          <button>Relevance</button>
          <button className="middle-button">Newest</button>
          <button>More</button>
        </div>
      </div>
    </div>
  );
}
