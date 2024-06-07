import { Routes, Route } from "react-router-dom";
import Homepage from "./components/video_call/home";
import RoomPage from "./components/video_call/room";
import Form from "./components/form/Form";

function App() {
  return (
    <Routes>
      <Route path="/form/:userId" element={<Form />} />
      <Route path="/video" element={<Homepage />} />
      <Route path="/video/room/:roomId" element={<RoomPage />} />
    </Routes>
  );
}

export default App;
