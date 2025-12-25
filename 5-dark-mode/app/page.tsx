"use client";

import { useTheme } from "next-themes";

export default function Home() {
  const cardItems = [
    {
      title: "Card 1",
      icon: "🚀",
    },
    {
      title: "Card 2",
      icon: "💰",
    },
    {
      title: "Card 3",
      icon: "💻",
    },
    {
      title: "Card 4",
      icon: "💻",
    },
  ];

  const {theme, setTheme} = useTheme();

  const handleThemeChange = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  }
// basic way to toggle theme
  // const handleThemeChange = () => {
  //   const currentTheme = document.documentElement.classList.toggle("dark");
  //   localStorage.setItem("test-theme", currentTheme ? "dark" : "light");
  // };

  return (
    <div className="relative h-screen w-full flex items-center justify-center">
      <div className="relative z-10 h-80 w-60 border border-neutral-100 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900 rounded-xl shadow-2xl overflow-hidden">
        <div className="relative mask-l-from-50% mask-r-from-50% mask-t-from-50% mask-b-from-50%">
          <Pattern />
          <div className="flex items-center justify-center gap-4 h-40 p-4 mask-l-from-50% mask-r-from-50% animate-marque">
            {cardItems.map((items, index) => (
              <div
                key={items.title}
                className={
                  "rounded-full bg-neutral-300 dark:bg-neutral-700 flex items-center justify-center size-10"
                }
              >
                {items.icon}
              </div>
            ))}
          </div>
        </div>
        <div className="p-4">
          <h2 className="text-neutral-60 dark:text-white text-[8px] font-bold">
            These LLMs are getting out of hand
          </h2>
          <p className="text-neutral-400 dark:text-neutral-400 text-[8px] mt-2">
            But i swear tutorial so good i you want to get a drink a be frontend
            developer for rest of your life
          </p>
        </div>
        <button onClick={handleThemeChange} className="px-4 py-2 rounded-2xl text-neutral-500 dark:bg-neutral-800 dark:text-white border border-neutral-200 bg-neutral-100 text-sm m-4 cursor-pointer"> dark mode </button>
      </div>
    </div>
  );
}

const Pattern = () => {
  return (
    <div className="absolute inset-0 z-0 rounded-lg m-auto bg-[repeating-linear-gradient(315deg,var(--pattern-fg)_0,var(--pattern-fg)_1px,transparent_0,transparent_50%)] bg-size-[10px_10px] bg-fixed pointer-events-none"></div>
  );
};