import { IoLanguage, IoHelpCircleOutline } from "react-icons/io5";
import { RiKeyboardBoxLine, RiLiveLine } from "react-icons/ri";
import { BsCoin } from "react-icons/bs";
import { AiOutlineUser } from "react-icons/ai";
import { FiSettings } from "react-icons/fi";
import { MdOutlineLogout } from "react-icons/md";
import {
  GetCoin,
  HelpCircleIcon,
  KeyboardIcon,
  LanguageIcon,
  LiveIcon,
  LogoutIcon,
  SettingIcon,
  UserIcon,
} from "~/component/Icons";

export const MENU_ITEMS = [
  {
    icon: <LanguageIcon />,
    title: "English",
    children: {
      title: "Language",
      data: [
        {
          type: "language",
          code: "en",
          title: "English",
        },
        {
          type: "language",
          code: "vi",
          title: "Tiếng Việt",
        },
      ],
    },
  },
  {
    icon: <HelpCircleIcon />,
    title: "Feedback and help",
    to: "/feedback",
  },
  {
    icon: <KeyboardIcon />,
    title: "Keyboard shortcuts",
  },
];

export const userMenu = [
  {
    icon: <UserIcon />,
    title: "View profile",
    to: "/user/profile",
  },
  {
    icon: <GetCoin />,
    title: "Get coins",
    to: "/coins",
  },
  {
    icon: <LiveIcon />,
    title: "LIVE studio",
    to: "/live/studio",
  },
  {
    icon: <SettingIcon />,
    title: "Setting",
    to: "/settings",
  },
  ...MENU_ITEMS,
  {
    icon: <LogoutIcon />,
    title: "Logout",
    to: "/logout",
    separate: true,
  },
];
