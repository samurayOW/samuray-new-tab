import type { Tab } from "../interfaces/tabInterfaces";
import banner3 from "../assets/banner-3.jpg";
import {
  FaDragon,
  FaHorseHead,
  FaPinterest,
  FaTwitch,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { GiFlatStar, GiKnockedOutStars, GiMeepleCircle } from "react-icons/gi";
import {
  TbCircleLetterTFilled,
  TbSquareLetterFFilled,
  TbSquareRoundedNumber9Filled,
} from "react-icons/tb";
import { IoFootball } from "react-icons/io5";
import { LuSwords } from "react-icons/lu";

export const chillTab: Tab = {
  name: "chill",
  color: "#DFB2F4",
  image: banner3,
  groups: [
    {
      name: "watch",
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
          title: "twitch",
          url: "https://www.twitch.tv/",
          icon: FaTwitch,
          iconColor: "#733e96",
        },
        {
          id: "3",
          title: "amanogawa",
          url: "https://amanogawa.space/",
          icon: GiKnockedOutStars,
          iconColor: "#3992d6",
        },
        {
          id: "4",
          title: "filmix",
          url: "https://filmix.my/",
          icon: TbSquareLetterFFilled,
          iconColor: "#f09f65",
        },
        {
          id: "5",
          title: "mikai.me",
          url: "https://mikai.me/",
          icon: GiFlatStar,
          iconColor: "#9f2bd9",
        },
        {
          id: "6",
          title: "9anime",
          url: "https://9animetv.to",
          icon: TbSquareRoundedNumber9Filled,
          iconColor: "#c781eb",
        },
        {
          id: "7",
          title: "roja",
          url: "http://www.rojadirecta.eu/",
          icon: IoFootball,
          iconColor: "#e03476",
        },
      ],
    },
    {
      name: "others",
      bookmarks: [
        {
          id: "1",
          title: "terrikon",
          url: "https://terrikon.com/football/",
          icon: TbCircleLetterTFilled,
          iconColor: "#00b324",
        },
        {
          id: "2",
          title: "liquipedia",
          url: "https://liquipedia.net/overwatch/Main_Page",
          icon: FaHorseHead,
          iconColor: "#2341b8",
        },
        {
          id: "3",
          title: "pinterest",
          url: "https://ru.pinterest.com/",
          icon: FaPinterest,
          iconColor: "#962745",
        },
        {
          id: "3a",
          title: "cosmos",
          url: "https://www.cosmos.so/home",
          icon: GiMeepleCircle,
          iconColor: "#fff",
        },
        {
          id: "4",
          title: "twitter",
          url: "https://x.com/home",
          icon: FaTwitter,
          iconColor: "#5dbffc",
        },
        {
          id: "5",
          title: "bakugan",
          url: "https://www.numuki.com/game/bakugan-the-final-brawl/",
          icon: FaDragon,
          iconColor: "#ff0f6f",
        },
        {
          id: "6",
          title: "yu-gi-oh",
          url: "https://duelingnexus.com/home",
          icon: LuSwords,
          iconColor: "#a749f4",
        },
      ],
    },
  ],
};
