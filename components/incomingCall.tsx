// import React, { useEffect } from "react";
// import io from "socket.io-client";

// const socket = io("http://localhost:8888"); // Connect to your server

// const IncomingCallAlert = () => {
//   useEffect(() => {
//     socket.on("incoming_call", ({ meetingId, callerId }) => {
//       const acceptCall = () => {
//         socket.emit("accept_call", { meetingId, callerId });
//         console.log("Joining meeting", meetingId);
//         // additional logic to join the meeting
//       };

//       console.log("Incoming call from", callerId);
//       acceptCall(); // or show UI to accept call
//     });

//     return () => {
//       socket.off("incoming_call");
//     };
//   }, []);

//   return <div>Incoming call...</div>;
// };

// export default IncomingCallAlert;
