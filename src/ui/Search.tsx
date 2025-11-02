import { FaSearch } from "react-icons/fa";
import { useState, useRef, useEffect } from "react";
import type { FormEvent } from "react";
import { useTab } from "../contexts/useTab";

export default function Search() {
  const { color } = useTab();
  const [searchQuery, setSearchQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      // Перевіряємо, що не пишемо в інпут або текстове поле
      if (
        document.activeElement?.tagName !== "INPUT" &&
        document.activeElement?.tagName !== "TEXTAREA"
      ) {
        if (
          e.key.toLowerCase() === "s" ||
          e.key.toLocaleLowerCase() === "і" ||
          e.key.toLocaleLowerCase() === "ы"
        ) {
          e.preventDefault();
          inputRef.current?.focus();
        }
      }
    };

    window.addEventListener("keydown", handleKeyPress);

    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, []);

  const handleSearch = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const query = searchQuery.trim();
    let searchUrl = "https://duckduckgo.com/?q=";

    if (query.startsWith("!g ")) {
      searchUrl = "https://www.google.com/search?q=" + query.slice(3);
    } else if (query.startsWith("!y ")) {
      searchUrl =
        "https://www.youtube.com/results?search_query=" + query.slice(3);
    } else if (query.startsWith("!ym ")) {
      searchUrl = "https://music.youtube.com/search?q=" + query.slice(4);
    } else {
      searchUrl += query;
    }

    window.location.href = searchUrl;
  };

  return (
    <form onSubmit={handleSearch} className="relative w-full max-w-[1074px]">
      <input
        ref={inputRef}
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Search...      (!g Google, !y YouTube, !ym YouTube Music)"
        className="bg-neutral-800 w-full h-10 rounded-md text-stone-300 pl-6 pr-4 outline-none border border-neutral-700 hover:border-neutral-600 transition-colors duration-200 placeholder:text-stone-500"
        onFocus={(e) => (e.target.style.borderColor = color)}
        onBlur={(e) => (e.target.style.borderColor = "")}
      />
      <button
        type="submit"
        className="absolute right-3 top-1/2 -translate-y-1/2 text-stone-500 transition-colors duration-200 cursor-pointer"
        style={
          {
            ["--btn-color" as string]: color,
          } as React.CSSProperties
        }
        onMouseEnter={(e) => (e.currentTarget.style.color = color)}
        onMouseLeave={(e) => (e.currentTarget.style.color = "")}
      >
        <FaSearch size={18} />
      </button>
    </form>
  );
}
