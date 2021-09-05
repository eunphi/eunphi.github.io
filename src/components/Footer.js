import React from "react"

export default class Footer extends React.Component {
  constructor(props) {
    super(props)
    this.state = { scrolling: false }
    this.handleScroll = this.handleScroll.bind(this)
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll)
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll)
  }

  handleScroll() {
    if (window.scrollY <= 200 && this.state.scrolling === true) {
      this.setState({ scrolling: false })
    } else if (window.scrollY > 200 && this.state.scrolling !== true) {
      this.setState({ scrolling: true })
    }
  }

  render() {
    function backToTop(e) {
      e.preventDefault()
      window.scroll({
        top: 0,
        behavior: "smooth",
      })
    }

    return (
      <>
        <footer className="footer relative lg:my-10 my-20 mt-0 px-2 text-right">
          Created with {"<3"}
        </footer>

        {/* Back to top */}
        <div
          className={`${
            this.state.scrolling
              ? "translate-y-0 opacity-100"
              : "translate-y-12 opacity-0"
          } fixed z-30 bottom-0 right-0 lg:mr-6 lg:mb-14 mr-4 mb-20 bg-gray-300 dark:bg-gray-800 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 rounded-md bg-opacity-50 dark:bg-opacity-50`}
        >
          <button onClick={backToTop} className="focus:outline-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="h-10 w-10"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 15l7-7 7 7"
              />
            </svg>
          </button>
        </div>
      </>
    )
  }
}
