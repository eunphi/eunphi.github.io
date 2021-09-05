import "./src/styles/global.css"
import "prismjs/themes/prism-tomorrow.css"
import "prismjs/plugins/line-numbers/prism-line-numbers.css"
import "prismjs/plugins/command-line/prism-command-line.css"
import "./src/styles/highlight.css"

const onInitialClientRender = () => {
  const theme = typeof window !== 'undefined' && localStorage.getItem("theme")

  if (theme === "psikopat") {
    document.documentElement.classList.remove("dark")
  } else {
    document.documentElement.classList.add("dark")
  }

  localStorage.setItem("eunphi", "flag{00oohhh_y0u_f0uNd_mE}")
}

export default onInitialClientRender()
