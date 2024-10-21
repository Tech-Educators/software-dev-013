import { ThemeProps } from "@/context/ThemeContext"
import { useTheme } from "@/context/ThemeContext"
export default function Settings() {

    const {theme, toggleTheme} = useTheme()

    return (
        <div className="p-6 bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-100">
        <p>The current theme is {theme}.</p>
        <button
          onClick={toggleTheme}
          className="mt-4 px-4 py-2 rounded bg-blue-500 dark:bg-blue-700 text-white"
        >
          Toggle Theme
        </button>
      </div>
    )
}