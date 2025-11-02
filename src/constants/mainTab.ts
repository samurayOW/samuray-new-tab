import type { Tab } from "../interfaces/tabInterfaces";
import {
  FaCalendarDay,
  FaGithub,
  FaGoogleDrive,
  FaKeyboard,
  FaYoutube,
} from "react-icons/fa";
import { TbBrandGmail } from "react-icons/tb";
import { AiOutlineOpenAI } from "react-icons/ai";
import { GiSpermWhale } from "react-icons/gi";
import {
  RiGeminiFill,
  RiGraduationCapFill,
  RiPerplexityLine,
  RiSpotifyLine,
} from "react-icons/ri";
import banner1 from "../assets/banner-1.jpg";
import {
  SiGoogleclassroom,
  SiGoogletranslate,
  SiUdemy,
  SiYoutubemusic,
} from "react-icons/si";

export const mainTab: Tab = {
  name: "main",
  color: "#b1dedc",
  image: banner1,
  groups: [
    {
      name: "main",
      bookmarks: [
        {
          id: "1",
          title: "youtube",
          url: "https://www.youtube.com/",
          icon: FaYoutube,
          iconColor: "#c24e6b",
        },
        {
          id: "2",
          title: "gmail",
          url: "https://mail.google.com/mail/u/0/#inbox",
          icon: TbBrandGmail,
          iconColor: "#d4b74e",
        },
        {
          id: "3",
          title: "github",
          url: "https://github.com/samurayOW?tab=repositories",
          icon: FaGithub,
          iconColor: "#8b04d4",
        },
        {
          id: "3a",
          title: "udemy",
          url: "https://ua.udemy.com/organization/home/",
          icon: SiUdemy,
          iconColor: "#a34ed4",
        },
        {
          id: "4",
          title: "monkeytype",
          url: "https://monkeytype.com/",
          icon: FaKeyboard,
          iconColor: "#a18fb3",
        },
        {
          id: "5",
          title: "розклад",
          url: "https://odeskapolitehnica-my.sharepoint.com/:x:/g/personal/10252123_stud_op_edu_ua/EQScQRFS7gBOnvwNwU5FDqwBBEHjeaL7bSvy2vfpq7ejWQ?rtime=4R92Z8mp2kg",
          icon: FaCalendarDay,
          iconColor: "#207519",
        },
        {
          id: "6",
          title: "el.opu",
          url: "https://edu.op.edu.ua/login/index.php",
          icon: RiGraduationCapFill,
          iconColor: "#7f888a",
        },
        {
          id: "7",
          title: "classroom",
          url: "https://classroom.google.com/u/1/?pli=1",
          icon: SiGoogleclassroom,
          iconColor: "#e4ed7e",
        },
        {
          id: "8",
          title: "spotify",
          url: "https://open.spotify.com/",
          icon: RiSpotifyLine,
          iconColor: "#2bd974",
        },
        {
          id: "8a",
          title: "youtube.music",
          url: "https://music.youtube.com/",
          icon: SiYoutubemusic,
          iconColor: "#c24e6b",
        },
        {
          id: "9",
          title: "gd",
          url: "https://drive.google.com/drive/u/0/folders/1TCt8mgyXH2PmBSt4fqYMYye0EE-MSNe5",
          icon: FaGoogleDrive,
          iconColor: "#94f056",
        },
        {
          id: "10",
          title: "gt",
          url: "https://translate.google.com/?hl=ru&sl=en&tl=ru&op=translate",
          icon: SiGoogletranslate,
          iconColor: "#4389d9",
        },
      ],
    },
    {
      name: "ai",
      bookmarks: [
        {
          id: "1",
          title: "gpt",
          url: "https://chatgpt.com/",
          icon: AiOutlineOpenAI,
          iconColor: "#4ed4a5",
        },
        {
          id: "2",
          title: "deepseek",
          url: "https://chat.deepseek.com/",
          icon: GiSpermWhale,
          iconColor: "#4e70d4",
        },
        {
          id: "3",
          title: "perplexity",
          url: "https://www.perplexity.ai/",
          icon: RiPerplexityLine,
          iconColor: "#fff",
        },
        {
          id: "4",
          title: "gemini",
          url: "https://gemini.google.com/app?hl=uk",
          icon: RiGeminiFill,
          iconColor: "#95e8f5",
        },
      ],
    },
  ],
};
