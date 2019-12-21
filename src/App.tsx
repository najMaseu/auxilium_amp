import React from "react";
import anime from "animejs";

const App: React.FC = () => {
  return (
    <div className="App">
      <header
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh"
        }}
        className="App-header"
      >
        <div
          className="dupa"
          style={{
            height: 100,
            width: 100
          }}
          onClick={() => {
            anime({
              targets: ".dupa",
              translateX: 250,
              backgroundColor: ["white", "hsl(200, 50%, 50%)"],
              duration: 1000
            });
          }}
        ></div>
      </header>
    </div>
  );
};

export default App;
