import { IoLanguage, IoHelpCircleOutline } from "react-icons/io5";
import { RiKeyboardBoxLine } from "react-icons/ri";

const MENU_ITEMS = [
  {
    icon: <IoLanguage />,
    title: "English",
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
export default MENU_ITEMS;
