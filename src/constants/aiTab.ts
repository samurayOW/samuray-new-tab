import type { Tab } from "../interfaces/tabInterfaces";
import { AiOutlineOpenAI } from "react-icons/ai";
import { GiSpermWhale } from "react-icons/gi";
import { RiPerplexityLine } from "react-icons/ri";
import { RiGeminiFill } from "react-icons/ri";
import banner2 from "../assets/banner-2.jpg";
import {
  FaBolt,
  FaCompactDisc,
  FaGrinWink,
  FaTheaterMasks,
} from "react-icons/fa";
import {
  TbCardsFilled,
  TbHexagonLetterGFilled,
  TbHexagonLetterK,
} from "react-icons/tb";
import { PiStudentDuotone } from "react-icons/pi";

export const aiTab: Tab = {
  name: "ai",
  color: "#66d17f",
  image: banner2,
  groups: [
    {
      name: "work/study",
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
        {
          id: "5",
          title: "storm",
          url: "https://storm.genie.stanford.edu/",
          icon: FaBolt,
          iconColor: "#f0ffa3",
        },
        {
          id: "6",
          title: "delve",
          url: "https://delve.a9.io/",
          icon: TbCardsFilled,
          iconColor: "#8c989c",
        },
        {
          id: "7",
          title: "llama",
          url: "https://llamatutor.together.ai/",
          icon: PiStudentDuotone,
          iconColor: "#459ab0",
        },
        {
          id: "8",
          title: "krea",
          url: "https://www.krea.ai/app",
          icon: TbHexagonLetterK,
          iconColor: "#fff",
        },
        {
          id: "9",
          title: "isgen",
          url: "https://isgen.ai/uk",
          icon: TbHexagonLetterGFilled,
          iconColor: "#4b6877",
        },
        {
          id: "10",
          title: "monika",
          url: "https://monica.im/uk/bypass-ai/ai-humanizer",
          icon: FaGrinWink,
          iconColor: "#5526c1",
        },
      ],
    },
    {
      name: "fun",
      bookmarks: [
        {
          id: "1",
          title: "face.swap",
          url: "https://aifaceswap.io/multiple-face-swap-ai/#face-swap-playground",
          icon: FaTheaterMasks,
          iconColor: "#4d2dad",
        },
        {
          id: "2",
          title: "suno",
          url: "https://suno.com/create",
          icon: FaCompactDisc,
          iconColor: "#fc754c",
        },
      ],
    },
  ],
};
