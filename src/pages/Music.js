import React, { useState } from "react";
import YouTube from "react-youtube";
import "../styles/Music.css";

const videos = [
  {
    id: "ty1dwBCR6D0",
    caption: "The meaning of the song Sweet Caroline is a heartfelt expression of affection and endearment towards someone special.",
  },
  {
    id: "t_QFzaYrLKU",
    caption: "The song Red Sox Song is an anthem dedicated to the Boston Red Sox baseball team. It represents the passion, loyalty, and pride of Red Sox fans and celebrates the team's victories and spirit.",
  },
  {
    id: "C27NShgTQE4",
    caption: "The song Bye Bye by NSYNC is a pop ballad about saying goodbye to a past relationship or a difficult chapter in one's life. It conveys the emotions of letting go, moving on, and finding closure. The lyrics express the desire to leave the past behind and embrace a fresh start.",
  },
  {
    id: "blYo4WheVgA",
    caption: "The song conveys a sense of freedom, relaxation, and enjoyment of the present moment. The lyrics speak about living life without worries, enjoying the company of friends, and letting worries fade away while one surfs through life.",
  },
  {
    id: "QdCZR9M5EKY",
    caption: "Love Me Two Times by The Doors is a song that speaks about the intensity and passion of a fleeting love. The narrator pleads with their lover to love them two times before they go, knowing that their time together is limited. The song conveys a mixture of desire, urgency, and longing, capturing the intensity of a brief yet significant relationship.",
  },
];

function Music() {
  const [currentVideo, setCurrentVideo] = useState(videos[0]);

  const selectVideo = (video) => {
    setCurrentVideo(video);
  };

  const opts = {
    height: "100%",
    width: "100%",
    playerVars: {
      autoplay: 0,
    },
  };

  return (
    <div className="music">
      {videos.map((video) => (
        <div
          key={video.id}
          className={`videoBox ${
            video === currentVideo ? "selected" : ""
          }`}
          onClick={() => selectVideo(video)}
        >
          <YouTube videoId={video.id} opts={opts} />
          <p>{video.caption}</p>
        </div>
      ))}
    </div>
  );
}

export default Music;
