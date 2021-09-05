import React from "react"
import { Link } from "gatsby"

export default function Header() {
  const sunIcon = "☀️"
  const moonIcon = "🌙"

  function changeTheme(event) {
    const theme = typeof window !== "undefined" && localStorage.getItem("theme")

    if (theme === "psikopat") {
      typeof window !== "undefined" && localStorage.removeItem("theme")
      event.target.textContent = sunIcon
      document.documentElement.classList.add("dark")
    } else {
      event.target.textContent = moonIcon
      typeof window !== "undefined" && localStorage.setItem("theme", "psikopat")
      document.documentElement.classList.remove("dark")
    }
  }

  return (
    <div className="container mx-auto lg:max-w-4xl flex flex-row lg:mb-16 lg:mt-8 text-xl">
      <div className="flex items-center justify-between px-6 lg:px-2 py-4 lg:py-0 font-semibold dark:text-gray-100">
        <Link to="/">
          <div className="flex justify-between space-x-2 items-center">
            <div>
              <div>
                <button
                  type="button"
                  className="focus:outline-none"
                  onClick={changeTheme}
                >
                  {typeof window !== 'undefined' && localStorage.getItem("theme") === "psikopat" ? moonIcon : sunIcon}
                </button>
              </div>
            </div>
            <div>eun𝜋</div>
          </div>
        </Link>
      </div>
      <div
        className="block px-2 flex flex-row justify-end w-full py-4 lg:py-0 text-xl text-gray-800 dark:text-gray-100"
      >
        <div className="flex flex-row">
          <Link
            to="/"
            className="transition duration-200 ease-in-out border-solid border-b-2 border-transparent hover:border-gray-800 dark:hover:border-gray-200 py-1 mx-4 font-medium m-1"
            activeClassName="border-solid border-b-2 border-gray-800 dark:border-gray-200"
          >
            Home
          </Link>
        </div>
      </div>

    </div>
  )
}
