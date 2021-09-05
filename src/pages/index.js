import React, { useMemo } from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import Seo from "../components/Seo"
import Search from "../components/Search"
import FotoProfil from "../images/me.jpg"

import Config from "../utils/Config"
import { getSimplifiedPosts } from "../utils/Helpers"

export default function Blog({ data, ...props }) {
  const posts = data.content.posts
  const simplifiedPosts = useMemo(() => getSimplifiedPosts(posts), [posts])

  const dataSeo = {
    title: "Home",
    description: Config.description,
  }

  return (
    <Layout>
      <Seo data={dataSeo} />
      <div className="lg:flex flex-col lg:flex-row justify-between w-full lg:py-0 mb-10 px-2">
        <div className="w-1/6 hidden lg:block lg:mr-10">
          <img
            src={FotoProfil}
            alt="8bit me wkwkw"
            className="object-cover object-center w-full h-30 rounded-lg"
          />
        </div>
        <div className="text-xl lg:w-5/6 text-justify">
          <h1 className="text-4xl mb-8">
            {"/>"} Hello World!{" "}
            <span role="img" aria-label="laptop_icon">
              👋
            </span>
          </h1>
          <p>
            Hello! I'm Rafi from Indonesia. Still in college, majoring in Information Systems. Cyber Security Enthusiast & CTF Player.
            There's a flag <span role="img" aria-label="flag_icon">🚩</span>, can you find it?
          </p>
        </div>
      </div>
      <div className="px-2">
        <h2 className="text-3xl mb-10">Posts</h2>
      </div>
      <Search posts={simplifiedPosts} {...props} />
    </Layout>
  )
}

export const pageQuery = graphql`
  query MyQuery {
    content: allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      posts: nodes {
        id
        frontmatter {
          title
          date(formatString: "DD MMMM YYYY", locale: "en-US")
        }
        fields {
          slug
        }
      }
    }
  }
`
