import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [number, setNumber] = useState(0);

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
      console.log(data);
    } catch (error) {
      console.log("fetch error", error);
    }
  };

  const handleFetching = () => {
    if (number >= 0) {
      fetchData(number);
    } else {
      console.log("Please enter a valid number!");
    }
  };

  return (
    <>
      <h3>Text render</h3>
      <input
        className="input"
        type="number"
        min={0}
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <button className="btn-submit" type="button" onClick={handleFetching}>
        Submit
      </button>
    </>
  );
}

export default App;
