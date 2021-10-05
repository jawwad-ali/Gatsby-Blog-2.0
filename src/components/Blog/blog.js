import React from 'react'
import { graphql, Link, useStaticQuery } from "gatsby"
import "./blog.css"
import Img from "gatsby-image"

function Blog() {

    const result = useStaticQuery(
        graphql` 
            query{ 
                allContentfulBlogPost(sort: {order: DESC, fields: publishedDate}) {
                edges {
                    node {
                        id
                        slug
                        title
                        publishedDate(formatString: "Do MMMM, YYYY")
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
            }
            }   
         `
    )

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 postContainer">
                        <h2 className="ps-3 most-recent">Most Recent</h2>
                        {result.allContentfulBlogPost.edges.map(edge => {
                            return (
                                <div className="post" key={edge.node.id}>
                                    {edge.node.featuredImage && (
                                        <Img
                                            className="featured"
                                            fluid={edge.node.featuredImage.fluid}
                                            alt={edge.node.title}
                                        />
                                    )}
                                    <div className="postDetails">
                                        <h2>
                                            <Link className="postTitle" to={`/blog/${edge.node.slug}/`}>{edge.node.title}</Link>
                                        </h2>
                                        <p className="excerpt">
                                            {edge.node.excerpt.childMarkdownRemark.excerpt}...
                                        </p>

                                        <div className="date">
                                            <div>{edge.node.publishedDate}</div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>

        </>
    )
}
export default Blog
