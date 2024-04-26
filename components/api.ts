//This is the Auth token, you will use it to generate a meeting and connect to it
export const authToken: string =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcGlrZXkiOiJjNjIzYWJiYi1mZWFiLTRhOWYtOTczMy00Njc3MzczN2JlMmMiLCJwZXJtaXNzaW9ucyI6WyJhbGxvd19qb2luIl0sImlhdCI6MTcxNDEwNzM4NCwiZXhwIjoxNzE0MTE0NTg0fQ._6cv9Dt8ANjFxWM8yOivHavuz1m1mqBj3WtIdS90gNA";

// API call to create a meeting
export const createMeeting = async ({ token }: { token: string }) => {
  const res = await fetch(`https://api.videosdk.live/v2/rooms`, {
    method: "POST",
    headers: {
      authorization: `${authToken}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({}),
  });
  //Destructuring the roomId from the response
  const { roomId }: { roomId: string } = await res.json();
  const t = authToken;
  return roomId;
};
