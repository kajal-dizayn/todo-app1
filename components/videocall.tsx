"use client";
import React, { useEffect, useState } from "react";
import { MeetingProvider } from "@videosdk.live/react-sdk";
import MeetingView from "./meetingView";
import JoinScreen from "./joinscreen";
import { authToken, createMeeting } from "./api";

export default function VideoCall() {
  const [meetingId, setMeetingId] = useState<string | null>(null);
  const [name, setName] = useState("");

  // Function to handle name change, for example from an input field
  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const getMeetingAndToken = async (id?: string) => {
    const meetingId =
      id == null ? await createMeeting({ token: authToken }) : id;
    setMeetingId(meetingId);
  };

  const onMeetingLeave = () => {
    setMeetingId(null);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={handleNameChange}
      />
      <br />
      <br />

      {meetingId ? (
        <MeetingProvider
          config={{
            meetingId,
            micEnabled: true,
            webcamEnabled: true,
            name: name,
            debugMode: false,
            mode: "CONFERENCE",
          }}
          token={authToken}
        >
          <MeetingView meetingId={meetingId} onMeetingLeave={onMeetingLeave} />
        </MeetingProvider>
      ) : (
        <JoinScreen getMeetingAndToken={getMeetingAndToken} />
      )}
    </div>
  );
}
