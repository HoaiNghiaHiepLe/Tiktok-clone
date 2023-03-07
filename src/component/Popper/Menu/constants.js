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
        {
          type: "language",
          code: "ar",
          title: "العربية",
        },
        {
          type: "language",
          code: "Pi",
          title: "Cebuano (Pilipinas)",
        },
        {
          type: "language",
          code: "Ce",
          title: "Čeština (Česká republika)",
        },
        {
          type: "language",
          code: "De",
          title: "Deutsch",
        },
        {
          type: "language",
          code: "Eλ",
          title: "Ελληνικά (Ελλάδα)",
        },
        {
          type: "language",
          code: "Es",
          title: "Español",
        },
        {
          type: "language",
          code: "Su",
          title: "Suomi (Suomi)",
        },
        {
          type: "language",
          code: "Fi",
          title: "Filipino (Pilipinas)",
        },
        {
          type: "language",
          code: "Fr",
          title: "Français",
        },
        {
          type: "language",
          code: "אל",
          title: "עברית (ישראל)",
        },
        {
          type: "language",
          code: "हिं",
          title: "हिंदी",
        },
        {
          type: "language",
          code: "Ma",
          title: "Magyar (Magyarország)",
        },
        {
          type: "language",
          code: "Ba",
          title: "Bahasa Indonesia (Indonesia)",
        },
        {
          type: "language",
          code: "It",
          title: "Italiano (Italia)",
        },
        {
          type: "language",
          code: "日本",
          title: "日本語（日本",
        },
        {
          type: "language",
          code: "Ba",
          title: "Basa Jawa (Indonesia)",
        },
        {
          type: "language",
          code: "ខ្មែរ",
          title: "ខ្មែរ (កម្ពុជា)",
        },
        {
          type: "language",
          code: "한국어",
          title: "한국어 (대한민국)",
        },
        {
          type: "language",
          code: "Bm",
          title: "Bahasa Melayu (Malaysia)",
        },
        {
          type: "language",
          code: "မြန်မာ",
          title: "မြန်မာ (မြန်မာ)",
        },
        {
          type: "language",
          code: "Ne",
          title: "Nederlands (Nederland)",
        },
        {
          type: "language",
          code: "Po",
          title: "Polski (Polska)",
        },
        {
          type: "language",
          code: "Por",
          title: "Português (Brasil)",
        },
        {
          type: "language",
          code: "Ro",
          title: "Română (Romania)",
        },
        {
          type: "language",
          code: "Рос",
          title: "Русский (Россия)",
        },
        {
          type: "language",
          code: "Sv",
          title: "Svenska (Sverige)",
        },
        {
          type: "language",
          code: "ไท",
          title: "ไทย (ไทย)",
        },
        {
          type: "language",
          code: "Tür",
          title: "Türkçe (Türkiye)",
        },
        {
          type: "language",
          code: "Ук",
          title: "Українська (Україна)",
        },
        {
          type: "language",
          code: "اردو",
          title: "اردو",
        },
        {
          type: "language",
          code: "简体",
          title: "简体中文",
        },
        {
          type: "language",
          code: "繁體",
          title: "繁體中文",
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
