import { useMeeting } from "@videosdk.live/react-sdk";

function Controls() {
  const {
    leave,
    toggleMic,
    toggleWebcam,
    enableScreenShare,
    disableScreenShare,
    toggleScreenShare,
  } = useMeeting();

  return (
    <div>
      <button onClick={() => leave()}>Leave</button>
      <br />

      <br />
      <button onClick={() => toggleMic()}>toggleMic</button>
      <br />
      <br />
      <button onClick={() => toggleWebcam()}>toggleWebcam</button>
      <br />
      <br />
      <button onClick={() => toggleScreenShare()}>toggleScreenShare</button>

      <br />
      <br />

      <button onClick={() => enableScreenShare()}>enableScreenShare</button>
      <br />
      <br />
      <button onClick={() => disableScreenShare()}>disableScreenShare</button>

      <br />
    </div>
  );
}

export default Controls;
