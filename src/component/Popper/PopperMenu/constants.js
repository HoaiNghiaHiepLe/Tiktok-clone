import { IoLanguage, IoHelpCircleOutline } from "react-icons/io5";
import { RiKeyboardBoxLine } from "react-icons/ri";

const MENU_ITEMS = [
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
export default MENU_ITEMS;
