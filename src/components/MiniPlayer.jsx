import { useRef, useState } from "react";
import ReactPlayer from "react-player/youtube";
import "./styles/Quiz.css";

export default function MiniPlayer({ title, id }) {
  const buttonRef = useRef();
  const [status, setStatus] = useState(false);
  const videoUrl = `https://www.youtube.com/watch?v=${id}`;

  function toggleMiniPlayer() {
    if (!status) {
      buttonRef.current.classList.remove("floatingBtn");
      setStatus(true);
    } else {
      buttonRef.current.classList.add("floatingBtn");
      setStatus(false);
    }
  }
  return (
    <div
      className={`miniPlayer floatingBtn`}
      ref={buttonRef}
      onClick={toggleMiniPlayer}
    >
      <span className={`material-icons-outlined open`}>
        {" "}
        play_circle_filled{" "}
      </span>
      <span
        className={`material-icons-outlined close`}
        onClick={toggleMiniPlayer}
      >
        {" "}
        close{" "}
      </span>
      <ReactPlayer
        className="player"
        url={videoUrl}
        width="300px"
        height="168px"
        playing={status}
        controls
      />
      <p>{title}</p>
    </div>
  );
}
