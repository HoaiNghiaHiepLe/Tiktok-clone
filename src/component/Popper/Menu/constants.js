import { IoLanguage, IoHelpCircleOutline } from "react-icons/io5";
import { RiKeyboardBoxLine, RiLiveLine } from "react-icons/ri";
import { BsCoin } from "react-icons/bs";
import { AiOutlineUser } from "react-icons/ai";
import { FiSettings } from "react-icons/fi";
import { MdOutlineLogout } from "react-icons/md";

export const MENU_ITEMS = [
  {
    icon: <IoLanguage />,
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
    icon: <IoHelpCircleOutline />,
    title: "Feedback and help",
    to: "/feedback",
  },
  {
    icon: <RiKeyboardBoxLine />,
    title: "Keyboard shortcuts",
  },
];

export const userMenu = [
  {
    icon: <AiOutlineUser />,
    title: "View profile",
    to: "/user/profile",
  },
  {
    icon: <BsCoin />,
    title: "Get coins",
    to: "/coins",
  },
  {
    icon: <RiLiveLine />,
    title: "LIVE studio",
    to: "/live/studio",
  },
  {
    icon: <FiSettings />,
    title: "Setting",
    to: "/settings",
  },
  ...MENU_ITEMS,
  {
    icon: <MdOutlineLogout />,
    title: "Logout",
    to: "/logout",
    separate: true,
  },
];
