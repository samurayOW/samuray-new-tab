// TabProvider.tsx
import { useState, useEffect } from "react";
import type { ReactNode } from "react";
import { TabContext } from "./TabContext";
import { myTabs } from "../constants/tabs";

export function TabProvider({ children }: { children: ReactNode }) {
  const [color, setColor] = useState(myTabs[0].color);
  const [tabs, setTabs] = useState(myTabs);
  const [currentTab, setCurrentTab] = useState(myTabs[0].name);
  const [heading, setHeading] = useState(myTabs[0].name);

  const switchTab = (direction: "next" | "prev") => {
    const currentIndex = tabs.findIndex((tab) => tab.name === currentTab);
    let newIndex: number;

    if (direction === "next") {
      newIndex = currentIndex + 1 >= tabs.length ? 0 : currentIndex + 1;
    } else {
      newIndex = currentIndex - 1 < 0 ? tabs.length - 1 : currentIndex - 1;
    }

    const selectedTab = tabs[newIndex];
    setCurrentTab(selectedTab.name);
    setColor(selectedTab.color);
    setHeading(selectedTab.name);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Перевіряємо, що не пишемо в інпут або текстове поле
      if (
        document.activeElement?.tagName !== "INPUT" &&
        document.activeElement?.tagName !== "TEXTAREA"
      ) {
        if (e.key === "ArrowRight") {
          e.preventDefault();
          switchTab("next");
        } else if (e.key === "ArrowLeft") {
          e.preventDefault();
          switchTab("prev");
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentTab, tabs]); // Додаємо залежності

  return (
    <TabContext.Provider
      value={{
        color,
        setColor,
        tabs,
        setTabs,
        currentTab,
        setCurrentTab,
        heading,
        setHeading,
      }}
    >
      {children}
    </TabContext.Provider>
  );
}
