import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/Layout"
import Seo from "../components/Seo"

export default function Post({ data, pageContext }) {
  const post = data.markdownRemark
  const { frontmatter } = post
  const { title, description, tags, date } = frontmatter

  const dataSeo = {
    path: pageContext.postPath,
    title: title,
    description: description,
  }

  return (
    <Layout>
      <Seo data={dataSeo} />
      <article itemScope itemType="http://schema.org/Article" className="px-2">
        <header className="mb-10 break-words">
          <h1 className="text-4xl mb-6">{title}</h1>
          <div className="dark:text-gray-400">
            <p className="my-2">Posted on {date} </p>

            <p>
              {tags.map(tag => {
                return (
                  <Link
                    to={"/tags/" + tag}
                    className="font-bold pb-4 mr-2 dark:hover:text-gray-100"
                    key={tag}
                  >
                    #{tag}
                  </Link>
                )
              })}
            </p>
          </div>
        </header>
        <div className="prose dark:prose-dark max-w-full break-words text-lg text-justify">
          <section
            dangerouslySetInnerHTML={{ __html: post.html }}
            itemProp="articleBody"
          />
        </div>
      </article>
    </Layout>
  )
}

export const pageQuery = graphql`
  query singlePostQuery($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        date(formatString: "DD MMMM YYYY", locale: "en-US")
        description
        tags
      }
    }
  }
`
