import { FaFirefoxBrowser, FaRegClock } from "react-icons/fa";
import { IoMdCloudOutline } from "react-icons/io";
import { useTab } from "../contexts/useTab";
import { useState, useEffect } from "react";
import { location } from "../constants/weather";

export default function Header() {
  const { color, tabs, currentTab, setCurrentTab, setColor, setHeading } =
    useTab();
  const [currentTime, setCurrentTime] = useState("");
  const [weather, setWeather] = useState<number | null>(null);

  // Функція для отримання погоди
  const fetchWeather = async () => {
    try {
      const appId = "50a34e070dd5c09a99554b57ab7ea7e2";
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${encodeURI(
          location
        )}&units=metric&appid=${appId}`
      );
      const data = await response.json();
      setWeather(Math.round(data.main.temp));
    } catch (error) {
      console.error("Error fetching weather:", error);
    }
  };

  // Оновлення часу
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setCurrentTime(
        now.toLocaleTimeString("uk-UA", {
          hour: "2-digit",
          minute: "2-digit",
        })
      );
    };

    // Оновлюємо час кожну секунду
    updateTime();
    const interval = setInterval(updateTime, 1000);

    // Отримуємо погоду при монтуванні компонента
    fetchWeather();
    // Оновлюємо погоду кожні 5 хвилин
    const weatherInterval = setInterval(fetchWeather, 300000);

    return () => {
      clearInterval(interval);
      clearInterval(weatherInterval);
    };
  }, []);

  const handleTabClick = (index: number) => {
    const selectedTab = tabs[index];
    setCurrentTab(selectedTab.name);
    setColor(selectedTab.color);
    setHeading(selectedTab.name);
  };

  return (
    <header className="flex items-center justify-center w-full bg-neutral-800 rounded-md p-2">
      <a
        href="https://addons.mozilla.org/firefox/extensions/"
        className="bg-neutral-700 p-1 rounded-md justify-start cursor-pointer"
      >
        <FaFirefoxBrowser color={color} />
      </a>
      <ul className="flex ml-4 gap-2">
        {tabs.map((tab, index) => (
          <li
            key={tab.name}
            className={`w-5 flex justify-center cursor-pointer transition-colors duration-200 ${
              currentTab === tab.name ? "border-b-3" : ""
            }`}
            style={{
              borderBottomColor:
                currentTab === tab.name ? color : "transparent",
              color: currentTab === tab.name ? color : "#94a3b8",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = color)}
            onMouseLeave={(e) =>
              (e.currentTarget.style.color =
                currentTab === tab.name ? color : "#94a3b8")
            }
            onClick={() => handleTabClick(index)}
          >
            {index + 1}
          </li>
        ))}
      </ul>
      <div className="flex ml-auto gap-2 items-center">
        <div className="flex gap-1 items-center">
          <FaRegClock color="#ff0f6f" />
          <p className="text-stone-200">{currentTime}</p>
        </div>
        <div className="h-6 w-0.5 bg-stone-500"></div>
        <div className="flex gap-1 items-center">
          <IoMdCloudOutline color="cyan" />
          <p className="text-stone-200">
            {weather !== null ? `${weather}°C` : "Loading..."}
          </p>
        </div>
      </div>
    </header>
  );
}
