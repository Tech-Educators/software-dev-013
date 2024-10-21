import Settings from "./Settings"
import { ThemeProps } from "@/context/ThemeContext"
import { useTheme } from "@/context/ThemeContext"

export default function NavBar() {

    const {theme, toggleTheme} = useTheme()

    return (
        <nav className="p-4 bg-white dark:bg-gray-800 text-black dark:text-white">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-xl font-bold">My Next.js App</h1>
          <button
            onClick={toggleTheme}
            className="px-4 py-2 rounded bg-emerald-500 dark:bg-emerald-700 text-white"
          >
            Switch to {theme === 'light' ? 'dark' : 'light'} mode
          </button>
          <Settings />
        </div>
      </nav>
    )
}