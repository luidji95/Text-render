import { useState } from "react";
import "./App.css";

function App() {
  const [number, setNumber] = useState("");
  const [paragraphs, setParagraphs] = useState([]);

  const fetchData = async (num) => {
    try {
      const response = await fetch(
        `https://api.api-ninjas.com/v1/loremipsum?paragraphs=${num}`,
        {
          headers: {
            "X-Api-Key": "FTDDNiNm5qu+cKL1m7VpOA==FePoQYvzyE1DzsdI",
          },
        }
      );
      const data = await response.json();

      setParagraphs(
        data.text.split("\n").map((paragraph, index) => ({
          id: index,
          text: paragraph,
        }))
      );
    } catch (error) {
      console.log("fetch error", error);
    }
  };

  const handleFetching = () => {
    if (number >= 0 && number !== "") {
      fetchData(number);
    } else {
      console.log("Please enter a valid number!");
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleFetching();
    }
  };

  const handleDelete = (id) => {
    setParagraphs(paragraphs.filter((paragraph) => paragraph.id !== id));
  };

  return (
    <div className="app">
      <h3>Text render</h3>
      <input
        className="input"
        type="number"
        min={0}
        value={number}
        onChange={(e) => setNumber(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Enter number of paragraphs"
      />
      <button className="btn-submit" type="button" onClick={handleFetching}>
        Submit
      </button>

      <div className="paragraphs">
        {paragraphs.map((paragraph) => (
          <div key={paragraph.id} className="paragraph-item">
            <p>{paragraph.text}</p>
            <button onClick={() => handleDelete(paragraph.id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
