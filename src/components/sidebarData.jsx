import * as BiIcons from "react-icons/bi/";
import * as RxIcons from "react-icons/rx/";
import * as GiIcons from "react-icons/gi/";

export const SidebarData = [
  {
    title: "Home",
    icon: <BiIcons.BiHome className="menu-item-icon" />,
    link: "/",
  },
  {
    title: "Todo",
    icon: <BiIcons.BiTask className="menu-item-icon" />,
    link: "/todo",
  },
  {
    title: "Calculator",
    icon: <BiIcons.BiCalculator className="menu-item-icon" />,
    link: "/calculator",
  },
  {
    title: "Notes",
    icon: <BiIcons.BiNotepad className="menu-item-icon" />,
    link: "/notes",
  },
  {
    title: "Timer",
    icon: <RxIcons.RxLapTimer className="menu-item-icon" />,
    link: "/timer",
  },
  {
    title: "Card Games",
    icon: <GiIcons.GiCardDraw className="menu-item-icon" />,
    link: "/cardgames",
    subitems: [
      {
        title: "Card-War",
        icon: <GiIcons.GiCardRandom className="submenu-item-icon" />,
        link: "/cardgames/cardwar",
      },
      {
        title: "Black Jack",
        icon: <GiIcons.GiCardAceHearts className="submenu-item-icon" />,
        link: "/cardgames/blackjack",
      },
    ],
  },
];
