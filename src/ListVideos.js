import { useContext } from "react";
import { VideoContext } from "./VideioContext";
import Video from "./Video";

export default function ListVideo(){
    const db = useContext(VideoContext);

    return(
    <div>
        <h1>Total de {db.length} Videos</h1>
        {db.map((video) => <Video video={video}/>)}
    </div>)
}