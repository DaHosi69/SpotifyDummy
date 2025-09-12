import "./SidebarItem.css";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';

type SidebarItemProps = {
  itemname: string;
  onClick?: () => void;
};

let content;

export default function SidebarItem({ itemname, onClick }: SidebarItemProps) {
  if (itemname === "Lieblingssongs") {
    content = <FavoriteIcon />;
  } else if (itemname === "Library") {
    content = <LibraryMusicIcon />;
  } else {
    content = itemname;
  }

  return (
    <div className="container" onClick={onClick}>
        {content}
    </div>
  );
}
