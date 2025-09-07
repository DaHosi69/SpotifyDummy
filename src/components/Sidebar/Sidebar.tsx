// src/components/Sidebar/Sidebar.tsx
import { useState } from "react";
import "./Sidebar.css";

type Playlist = {
  id: string;
  name: string;
  coverUrl?: string; // optionales Bild
  color?: string; // fallback Farbkachel
};

type SidebarProps = {
  playlists: Playlist[];
  active?: string; // id der aktiven Route/Playlist
  onSelect?: (id: string) => void;
  defaultCollapsed?: boolean;
};

export default function Sidebar({ defaultCollapsed = false }: SidebarProps) {
  const [collapsed, setCollapsed] = useState(defaultCollapsed);

  return (
    <div className="sidebar" data-collapsed={collapsed}>
      <button onClick={() => setCollapsed(!collapsed)}>
        {collapsed ? "Expand" : "Collapse"}
      </button>
    </div>
  );
}
