import './App.css'
import Sidebar from './components/Sidebar/Sidebar'

const demoPlaylists = [
  { id: "liked", name: "Gefällt mir", color: "linear-gradient(135deg,#4f46e5,#9333ea)" },
  { id: "p1", name: "Metal Mix", coverUrl: "https://picsum.photos/seed/metal/64" },
  { id: "p2", name: "Chill Vibes", coverUrl: "https://picsum.photos/seed/chill/64" },
  { id: "p3", name: "Gym 🔥", color: "#444" },
  { id: "p4", name: "Coding Focus", coverUrl: "https://picsum.photos/seed/focus/64" },
  { id: "p5", name: "Best of 2024", coverUrl: "https://picsum.photos/seed/2024/64" },
];

export default function App() {
  return (
    <>
    <Sidebar defaultCollapsed={false} playlists={demoPlaylists} />
    </>
  );
}