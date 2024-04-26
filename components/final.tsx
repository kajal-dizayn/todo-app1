import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  MeetingProvider,
  useMeeting,
  MeetingConsumer,
} from "@videosdk.live/react-sdk";
import io from "socket.io-client";
import { authToken, createMeeting } from "./api";

const socket = io("http://localhost:8888"); // Connect to the WebSocket server

function App() {
  const [token, setToken] = useState(null);
  const [meetingId, setMeetingId] = useState(null);
  const [callerId, setCallerId] = useState("");
  const [calleeId, setCalleeId] = useState("");

  // Listener for incoming calls
  useEffect(() => {
    socket.on("incoming-call", (data) => {
      console.log("Incoming call from:", data.callerId);
      const acceptCall = window.confirm(
        "Accept call from " + data.callerId + "?"
      );
      if (acceptCall) {
        socket.emit("accept-call", {
          calleeId: data.callerId,
          meetingId: data.meetingId,
        });
        setMeetingId(data.meetingId);
      }
    });

    socket.on("call-accepted", (data) => {
      setMeetingId(data.meetingId);
      joinMeeting(data.meetingId, token);
    });

    return () => {
      socket.off("incoming-call");
      socket.off("call-accepted");
    };
  }, [token]);

  const startCall = async () => {
    const { t, roomId } = await createMeeting({ token: authToken });
    console.log(t, roomId, "========");
    setMeetingId(roomId);
    setToken(t);
    socket.emit("initiate-call", { callerId, calleeId });
  };

  const joinMeeting = (meetingId, authToken) => {
    if (!meetingId || !authToken) return;
    // Function to join a meeting
    console.log("Joining Meeting:", meetingId);
    // Additional configuration as per VideoSDK documentation
  };
  console.log(token, "--------");

  return (
    <MeetingProvider
      config={{ meetingId, token, micEnabled: true, webcamEnabled: false }}
    >
      <div>
        <h1>Video Call App</h1>
        <input
          type="text"
          placeholder="Caller ID"
          value={callerId}
          onChange={(e) => setCallerId(e.target.value)}
        />
        <input
          type="text"
          placeholder="Callee ID"
          value={calleeId}
          onChange={(e) => setCalleeId(e.target.value)}
        />
        <button onClick={startCall}>Call User</button>
        {meetingId && <p>Connected to Meeting ID: {meetingId}</p>}
        <MeetingConsumer>
          {({ join }) => {
            // Directly call join here or as needed
            return <button onClick={() => join()}>Join Meeting</button>;
          }}
        </MeetingConsumer>
      </div>
    </MeetingProvider>
  );
}

export default App;
