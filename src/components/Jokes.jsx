import { useState } from "react";

const Jokes = () => {
  const [jokesData, setJokesData] = useState(null);

  const handleBtn = () => {
    const feetchJokes = async () => {
      const response = await fetch(
        "https://official-joke-api.appspot.com/jokes/random"
      );
      const data = await response.json();
      setJokesData(data);
    };
    feetchJokes();
  };

  return (
    <div className="container">
      <div className="box">
        <div className="title">
          <h2>Random Jokes</h2>

          <div className="random">
            {jokesData && (
              <div>
                <h2>{jokesData.setup}</h2>
                <h3>{jokesData.punchline}🤣</h3>
              </div>
            )}
          </div>

          <div className="btn">
            <button onClick={handleBtn}>Click me!</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Jokes;
