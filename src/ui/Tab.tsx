import { useTab } from "../contexts/useTab";
import type { Bookmark, Group } from "../interfaces/tabInterfaces";

type BookmarkItemProps = {
  bookmark: Bookmark;
  primaryColor: string;
};

const BookmarkItem = ({ bookmark, primaryColor }: BookmarkItemProps) => (
  <li className="bg-neutral-700 shadow-lg shadow-black rounded-sm hover:translate-y-[3px] hover:shadow-none transition-all duration-200">
    <a
      href={bookmark.url}
      className="flex gap-2 items-center text-stone-300 py-2 px-4 transition-colors duration-200"
      onMouseEnter={(e) => (e.currentTarget.style.color = primaryColor)}
      onMouseLeave={(e) => (e.currentTarget.style.color = "")}
    >
      {bookmark.icon && (
        <bookmark.icon size={32} color={bookmark.iconColor || primaryColor} />
      )}
      <p className="mb-1 text-xl font-bold">{bookmark.title}</p>
    </a>
  </li>
);

type GroupSectionProps = {
  group: Group;
  primaryColor: string;
};

const GroupSection = ({ group, primaryColor }: GroupSectionProps) => (
  <div>
    <h2 className="text-stone-400 lg:text-2xl">{group.name}</h2>
    <ul className="mt-2 flex flex-wrap gap-3 pb-4 lg:pb-8">
      {group.bookmarks.map((bookmark: Bookmark) => (
        <BookmarkItem
          key={bookmark.id}
          bookmark={bookmark}
          primaryColor={primaryColor}
        />
      ))}
    </ul>
  </div>
);

export default function Tab() {
  const { color, tabs, currentTab } = useTab();

  // Знаходимо активну вкладку
  const activeTab = tabs.find((tab) => tab.name === currentTab) || tabs[0];

  return (
    <div className="flex rounded-md w-full">
      <img
        src={activeTab.image}
        className="w-[200px] rounded-l-md"
        alt={`${activeTab.name} tab`}
      />
      <div
        className="w-full bg-neutral-800 p-4 border-r-3 lg:px-12"
        style={{ borderRightColor: color }}
      >
        {activeTab.groups.map((group) => (
          <GroupSection key={group.name} group={group} primaryColor={color} />
        ))}
      </div>
    </div>
  );
}
