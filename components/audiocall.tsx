import React, { useState } from "react";
import { MeetingProvider, useMeeting } from "@videosdk.live/react-sdk";
import { authToken, createMeeting } from "./api";
import { Participant } from "@videosdk.live/react-sdk/dist/types/participant";

const AudioCall = () => {
  const [meetingId, setMeetingId] = useState<string | null>(null);

  const startCall = async () => {
    const meetingId = await createMeeting({ token: authToken });
    setMeetingId(meetingId);
  };

  return (
    <div>
      <button onClick={startCall}>Start Audio Call</button>
      {meetingId && (
        <MeetingProvider
          config={{
            meetingId,
            micEnabled: true,
            webcamEnabled: false, // Disable webcam for audio call
            name: "User",
            debugMode: false,
          }}
          token={authToken}
        >
          <MeetingRoom />
        </MeetingProvider>
      )}
    </div>
  );
};

const MeetingRoom = () => {
  const { leave, localParticipant } = useMeeting();

  return (
    <div>
      <h2>Audio Call</h2>
      <div>
        {(localParticipant as Participant)?.micEnabled ? "Mic On" : "Mic Off"}
      </div>
      <button onClick={() => leave()}>Hang Up</button>
    </div>
  );
};

export default AudioCall;
