import React from 'react'
import Layout from '../components/layout';
import Seo from '../components/seo';
import Loader from "../loader"

function BlogList() {

    const BlogList = React.lazy(() => (
        import('../components/Blog/blog')
    ))
    const isSSR = typeof window === "undefined";
    return (
        <>
            <Seo title="Blog" />
            {
                !isSSR && (
                    <React.Suspense fallback={<Loader />}>
                        <Layout>
                            <BlogList />
                        </Layout>
                    </React.Suspense>
                )
            }
        </>
    )
}

export default BlogList
