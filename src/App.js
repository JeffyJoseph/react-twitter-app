import React from "react";
import TweetWrapper from "./containers/TwitterWrapper";
import "./App.css";

function App() {
  return (
    <>
      <div className="ui container ">
        <h2 className="ui dividing header"> Tweet Saver</h2>
        <TweetWrapper />
      </div>
    </>
  );
}

export default App;
