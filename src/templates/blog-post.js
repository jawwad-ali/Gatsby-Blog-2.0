import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import Img from "gatsby-image"
import SEO from "../components/seo"
import "./blog-post.css"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

export const query = graphql`
    query($slug:String!){
        contentfulBlogPost(slug: {eq: $slug}) {
            id
            slug
            title
            publishedDate(formatString: "Do MMMM, YYYY")
            bio{
                raw
            }
            featuredImage {
                fluid(maxWidth: 750) {
                    ...GatsbyContentfulFluid
                }
            }
            excerpt {
                childMarkdownRemark {
                    excerpt(pruneLength: 150)
                }
            }
        }
    }
`

const BlogPost = props => {
    const isSSR = typeof window === "undefined";
    return (
        <Layout>
            <SEO title={props.data.contentfulBlogPost.title} />
            <div className="content">
                <h1>{props.data.contentfulBlogPost.title}</h1>
                <span className="date">
                    Posted on {props.data.contentfulBlogPost.publishedDate}
                </span>

                {props.data.contentfulBlogPost.featuredImage && (
                    <Img
                        className="featured-image"
                        fluid={props.data.contentfulBlogPost.featuredImage.fluid}
                        alt={props.data.contentfulBlogPost.title}
                    />
                )}
                <p className="text">
                    {documentToReactComponents(
                        JSON.parse(props.data.contentfulBlogPost.bio.raw)
                    )}
                </p>
            </div>

        </Layout>
    )
}

export default BlogPost