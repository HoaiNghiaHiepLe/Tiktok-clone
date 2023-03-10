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
          regular: true,
        },
        {
          type: "language",
          code: "vi",
          title: "Tiếng Việt",
          regular: true,
        },
        {
          type: "language",
          code: "ar",
          title: "العربية",
          regular: true,
        },
        {
          type: "language",
          code: "Pi",
          title: "Cebuano (Pilipinas)",
          regular: true,
        },
        {
          type: "language",
          code: "Ce",
          title: "Čeština (Česká republika)",
          regular: true,
        },
        {
          type: "language",
          code: "De",
          title: "Deutsch",
          regular: true,
        },
        {
          type: "language",
          code: "Eλ",
          title: "Ελληνικά (Ελλάδα)",
          regular: true,
        },
        {
          type: "language",
          code: "Es",
          title: "Español",
          regular: true,
        },
        {
          type: "language",
          code: "Su",
          title: "Suomi (Suomi)",
          regular: true,
        },
        {
          type: "language",
          code: "Fi",
          title: "Filipino (Pilipinas)",
          regular: true,
        },
        {
          type: "language",
          code: "Fr",
          title: "Français",
          regular: true,
        },
        {
          type: "language",
          code: "אל",
          title: "עברית (ישראל)",
          regular: true,
        },
        {
          type: "language",
          code: "हिं",
          title: "हिंदी",
          regular: true,
        },
        {
          type: "language",
          code: "Ma",
          title: "Magyar (Magyarország)",
          regular: true,
        },
        {
          type: "language",
          code: "Ba",
          title: "Bahasa Indonesia (Indonesia)",
          regular: true,
        },
        {
          type: "language",
          code: "It",
          title: "Italiano (Italia)",
          regular: true,
        },
        {
          type: "language",
          code: "日本",
          title: "日本語（日本",
          regular: true,
        },
        {
          type: "language",
          code: "Ba",
          title: "Basa Jawa (Indonesia)",
          regular: true,
        },
        {
          type: "language",
          code: "ខ្មែរ",
          title: "ខ្មែរ (កម្ពុជា)",
          regular: true,
        },
        {
          type: "language",
          code: "한국어",
          title: "한국어 (대한민국)",
          regular: true,
        },
        {
          type: "language",
          code: "Bm",
          title: "Bahasa Melayu (Malaysia)",
          regular: true,
        },
        {
          type: "language",
          code: "မြန်မာ",
          title: "မြန်မာ (မြန်မာ)",
          regular: true,
        },
        {
          type: "language",
          code: "Ne",
          title: "Nederlands (Nederland)",
          regular: true,
        },
        {
          type: "language",
          code: "Po",
          title: "Polski (Polska)",
          regular: true,
        },
        {
          type: "language",
          code: "Por",
          title: "Português (Brasil)",
          regular: true,
        },
        {
          type: "language",
          code: "Ro",
          title: "Română (Romania)",
          regular: true,
        },
        {
          type: "language",
          code: "Рос",
          title: "Русский (Россия)",
          regular: true,
        },
        {
          type: "language",
          code: "Sv",
          title: "Svenska (Sverige)",
          regular: true,
        },
        {
          type: "language",
          code: "ไท",
          title: "ไทย (ไทย)",
          regular: true,
        },
        {
          type: "language",
          code: "Tür",
          title: "Türkçe (Türkiye)",
          regular: true,
        },
        {
          type: "language",
          code: "Ук",
          title: "Українська (Україна)",
          regular: true,
        },
        {
          type: "language",
          code: "اردو",
          title: "اردو",
          regular: true,
        },
        {
          type: "language",
          code: "简体",
          title: "简体中文",
          regular: true,
        },
        {
          type: "language",
          code: "繁體",
          title: "繁體中文",
          regular: true,
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
