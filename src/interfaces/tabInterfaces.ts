import type { IconType } from "react-icons";

export interface Bookmark {
  id: string;
  title: string;
  url: string;
  icon?: IconType;
  iconColor?: string;
}

export interface Group {
  name: string;
  bookmarks: Bookmark[];
}

export interface Tab {
  name: string;
  color: string;
  image: string;
  groups: Group[];
}

export interface TabContextType {
  color: string;
  setColor: (color: string) => void;
  tabs: Tab[];
  setTabs: (tabs: Tab[]) => void;
  currentTab: string;
  setCurrentTab: (tabId: string) => void;
  heading: string;
  setHeading: (tabId: string) => void;
}
