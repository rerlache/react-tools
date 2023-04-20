import * as AiIcons from 'react-icons/ai/'
import * as BiIcons from "react-icons/bi/";
import * as GiIcons from "react-icons/gi/";
import * as RxIcons from "react-icons/rx/";
import * as TiIcons from 'react-icons/ti/'

export const SidebarData = [
  {
    id: 0,
    title: "Home",
    icon: <BiIcons.BiHome className="menu-item-icon" />,
    link: "/",
  },
  {
    id: 1,
    title: "Todo",
    icon: <BiIcons.BiTask className="menu-item-icon" />,
    link: "/todo",
  },
  {
    id: 2,
    title: "Calculator",
    icon: <BiIcons.BiCalculator className="menu-item-icon" />,
    link: "/calculator",
  },
  {
    id: 3,
    title: "Notes",
    icon: <BiIcons.BiNotepad className="menu-item-icon" />,
    link: "/notes",
  },
  {
    id: 4,
    title: "Timer",
    icon: <RxIcons.RxLapTimer className="menu-item-icon" />,
    link: "/timer",
  },
  {
    id: 5,
    title: "QR Code Generator",
    icon: <AiIcons.AiOutlineQrcode className="menu-item-icon" />,
    link: "/qrcode",
  },
  {
    id: 7,
    title: "Weather",
    icon: <TiIcons.TiWeatherPartlySunny className="menu-item-icon" />,
    link: "/weather",
  },
  {
    id: 6,
    title: "Card Games",
    icon: <GiIcons.GiCardDraw className="menu-item-icon" />,
    link: "/cardgames",
    subitems: [
      {
        id: 100,
        title: "Card-War",
        icon: <GiIcons.GiCardRandom className="submenu-item-icon" />,
        link: "/cardgames/cardwar",
      },
      {
        id: 101,
        title: "Black Jack",
        icon: <GiIcons.GiCardAceHearts className="submenu-item-icon" />,
        link: "/cardgames/blackjack",
      },
    ],
  },
];
