import React from "react";
import "./App.css";
import VideoJSPlayer from "./components/VideoJSPlayer";
import ImageKitBasicPlayer from "./components/ImageKitPlayer";
import BasicVideoPlayer from "./components/VideoPlayer";

function App() {
  return (
    <div className="App">
      <VideoJSPlayer />
    </div>
  );
}

export default App;