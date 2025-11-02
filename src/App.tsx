import Header from "./ui/Header";
import Search from "./ui/Search";
import Tab from "./ui/Tab";
import { TabProvider } from "./contexts/TabProvider";
import Heading from "./ui/Heading";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    // Прибираємо фокус з адресного рядка
    window.focus();
    // Встановлюємо фокус на наш контейнер
    document.getElementById("main-container")?.focus();
  }, []);

  return (
    <TabProvider>
      <div className="relative w-full h-full" id="main-container">
        <div className="absolute inset-0 blur-xs app" />
        <div className="relative z-10 flex items-center justify-center flex-col w-full h-full p-4 gap-8 md:p-8 lg:px-32">
          <div className="flex flex-col sm:flex-row w-full lg:gap-10 gap-4">
            <Heading />
            <Search />
          </div>
          <Tab />
          <Header />
        </div>
      </div>
    </TabProvider>
  );
}

export default App;
