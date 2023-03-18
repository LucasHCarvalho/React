import Video from "./Video";
import Header from "./Header";
import Buscar from "./Buscar";
import { videos } from "./data/Videos";
import { VideoContext } from "./VideioContext";
import ListVideo from "./ListVideos";

function App() {
  return (
    <div className="container">
      <VideoContext.Provider value={videos}>
        <Header></Header>
        <Buscar></Buscar>
        <ListVideo></ListVideo>
      </VideoContext.Provider>
    </div>
  );
}

export default App;
