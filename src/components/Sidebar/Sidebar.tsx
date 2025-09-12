// src/components/Sidebar/Sidebar.tsx
import { useState } from "react";
import "./Sidebar.css";
import SidebarItem from "../SidebarItem/SidebarItem";

type Playlist = {
  id: string;
  name: string;
  coverUrl?: string; 
  color?: string; 
};

type SidebarProps = {
  playlists: Playlist[];
  active?: string; 
  onSelect?: (id: string) => void;
  defaultCollapsed?: boolean;
};

export default function Sidebar({ defaultCollapsed = false }: SidebarProps) {
  const [collapsed, setCollapsed] = useState(defaultCollapsed);

  function toggleCollapsed(){
    setCollapsed(!collapsed);
  }

  return (
    <div className="sidebar" data-collapsed={collapsed}>
      <SidebarItem onClick={toggleCollapsed} itemname="Library" />
      <SidebarItem itemname="Lieblingssongs" />
      <SidebarItem itemname="Home" />
      <SidebarItem itemname="Search" />
    </div>
  );
}
