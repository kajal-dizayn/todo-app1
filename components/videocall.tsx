"use client";
import React, { useState } from "react";
import { MeetingProvider } from "@videosdk.live/react-sdk";
import MeetingView from "./meetingView";
import JoinScreen from "./joinscreen";

export default function VideoCall() {
  const authToken =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcGlrZXkiOiJjNjIzYWJiYi1mZWFiLTRhOWYtOTczMy00Njc3MzczN2JlMmMiLCJwZXJtaXNzaW9ucyI6WyJhbGxvd19qb2luIl0sImlhdCI6MTcxMzk0MDYwMiwiZXhwIjoxNzEzOTQ3ODAyfQ.H6vBpgTcCcvGfTnfASa_4q5oLHaPuaDYxXIVaDmMQyI";
  const [meetingId, setMeetingId] = useState<string | null>(null);

  //Getting the meeting id by calling the api we just wrote
  const getMeetingAndToken = async (id?: string) => {
    const meetingId = "d2r9-o0w8-4g9u";
    setMeetingId(meetingId);
  };

  const onMeetingLeave = () => {
    setMeetingId(null);
  };

  return authToken && meetingId ? (
    <MeetingProvider
      config={{
        meetingId,
        micEnabled: true,
        webcamEnabled: true,
        name: "John Doe",
        debugMode: false,
      }}
      token={authToken}
    >
      <MeetingView meetingId={meetingId} onMeetingLeave={onMeetingLeave} />
    </MeetingProvider>
  ) : (
    <JoinScreen getMeetingAndToken={getMeetingAndToken} />
  );
}
