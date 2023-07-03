import { useState } from "react";

export function Replay({ replay, replays, setReplays }) {
  const [isEditing, setIsEditing] = useState(false);

  function onChangeReplay(preReplay) {
    setReplays(
      replays.map((r) => {
        if (r.id === preReplay.id) {
          return preReplay;
        } else return r;
      })
    );
  }
  function handleDeleteReplay(id) {
    setReplays(replays.filter((el) => el.id !== id));
  }

  let replayContent;

  isEditing
    ? (replayContent = (
        <div class="ui mini input">
          <input
            className="replay-edite"
            value={replay.replay}
            onChange={(e) => {
              onChangeReplay({
                ...replay,
                replay: e.target.value
              });
            }}
          />
        </div>
      ))
    : (replayContent = <span className="form-replay">{replay.replay}</span>);

  return (
    <div className="replay" key={replay.id}>
      <div>
        <span className="avatar">
          <img
            src="https://semantic-ui.com/images/avatar/small/matt.jpg"
            alt="img"
          />
        </span>
        <div className="content">
          <span className="author">Ali</span>
          <div className="metadata">
            <span className="date">{replay.date}</span>
          </div>
          <div className="text">{replayContent}</div>
        </div>
      </div>

      <div>
        <button onClick={() => setIsEditing(!isEditing)}>
          {isEditing ? (
            <i className="fa-solid fa-check" style={{ color: " #1678c2" }}></i>
          ) : (
            <i className="fa-solid fa-pen" style={{ color: " #1678c2" }}></i>
          )}
        </button>
        <button onClick={() => handleDeleteReplay(replay.id)}>
          <i className="fa-solid fa-trash" style={{ color: " #d01919" }}></i>
        </button>
      </div>
    </div>
  );
}
