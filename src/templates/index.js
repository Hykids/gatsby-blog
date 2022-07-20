import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Pagination from '../components/Pagination'

export default class BlogList extends React.Component {
  render() {
    const { data } = this.props
    const posts = data.allMarkdownRemark.nodes
    const { totalPage, currentPage } = this.props.pageContext
    return (
      <Layout>
        {posts.map(({ node }) => {
          const title = node.frontmatter.title || node.fields.slug
          return <div key={node.fields.slug}>{title}</div>
        })}
        <Pagination
          currentPage={currentPage}
          totalPage={totalPage}
          prefix={'/blog/'}
        />
      </Layout>
    )
  }
}

export const pageQuery = graphql`
  query ($skip: Int!, $limit: Int!) {
    site {
      siteMetadata {
        title
        description
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          excerpt(truncate: true)
          fields {
            slug
          }
          frontmatter {
            year: date(formatString: "YYYY")
            date(formatString: "MM-DD")
            title
          }
        }
      }
    }
  }
`
