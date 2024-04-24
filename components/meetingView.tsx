import { useMeeting } from "@videosdk.live/react-sdk";
import { useState } from "react";
import Controls from "./Controls";
import { ParticipantView } from "./participantView";

function MeetingView({
  onMeetingLeave,
  meetingId,
}: {
  onMeetingLeave: () => void;
  meetingId: string;
}) {
  const [joined, setJoined] = useState<string | null>(null);
  const { join, participants } = useMeeting({
    //callback for when meeting is joined successfully
    onMeetingJoined: () => {
      setJoined("JOINED");
    },
    //callback for when meeting is left
    onMeetingLeft: () => {
      onMeetingLeave();
    },
  });
  const joinMeeting = () => {
    setJoined("JOINING");
    join();
  };

  return (
    <div className="container">
      <h3>Meeting Id: {meetingId}</h3>
      {joined && joined == "JOINED" ? (
        <div>
          <Controls />
          //For rendering all the participants in the meeting
          {[...participants.keys()].map((participantId) => (
            <ParticipantView
              participantId={participantId}
              key={participantId}
            />
          ))}
        </div>
      ) : joined && joined == "JOINING" ? (
        <p>Joining the meeting...</p>
      ) : (
        <button onClick={joinMeeting}>Join</button>
      )}
    </div>
  );
}

export default MeetingView;
