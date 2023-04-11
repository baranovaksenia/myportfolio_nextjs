import { useTheme } from "next-themes";
import { FiMoon, FiSun } from "react-icons/fi";

export default function DarkMode() {
  const { theme, setTheme } = useTheme();

  // toggle of dark or light mode
  const toggle = () => {
    if (theme === "light") setTheme("dark");
    else setTheme("light");
  };
  return (
    <>
      <span
        className="hidden lg:flex ml-2 bg-white w-[40px] h-[40px] rounded-full text-black hover:text-white hover:bg-[#ef4060] cursor-pointer transition-all duration-300 ease-in-out justify-center items-center  "
        onClick={toggle}
      >
        <FiMoon className="dark:hidden text-3xl" />
        <FiSun className="hidden text-2xl dark:block" />
      </span>
    </>
  );
}
