import HomeIcon from "@mui/icons-material/Home";
import TimerIcon from "@mui/icons-material/Timer";
import ChecklistIcon from "@mui/icons-material/Checklist";
import NoteIcon from "@mui/icons-material/Note";
import CalculateIcon from "@mui/icons-material/Calculate";
import VideogameAssetIcon from '@mui/icons-material/VideogameAsset';

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
  {
    title: "Card Games",
    icon: <VideogameAssetIcon fontSize="large" />,
    link: "/cardgames",
    subitems: [
      {title: "Card-War", icon: null, link: '/cardgames/cardwar'},
      {title: "Black Jack", icon: null, link: '/cardgames/blackjack'},
    ]
  }
];


