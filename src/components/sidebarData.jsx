import HomeIcon from "@mui/icons-material/Home";
import TimerIcon from "@mui/icons-material/Timer";
import ChecklistIcon from "@mui/icons-material/Checklist";
import NoteIcon from "@mui/icons-material/Note";
import CalculateIcon from "@mui/icons-material/Calculate";

export const SidebarData = [
  {
    title: "Home",
    icon: <HomeIcon fontSize="large" />,
    link: "/",
  },
  {
    title: "Todo",
    icon: <ChecklistIcon fontSize="large" />,
    link: "/todo",
  },
  {
    title: "Calculator",
    icon: <CalculateIcon fontSize="large" />,
    link: "/calculator",
  },
  {
    title: "Notes",
    icon: <NoteIcon fontSize="large" />,
    link: "/notes",
  },
  {
    title: "Timer",
    icon: <TimerIcon fontSize="large" />,
    link: "/timer",
  },
];


