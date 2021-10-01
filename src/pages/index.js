import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Loader from "../loader"

const Homepage = React.lazy(() => (
  import("../components/LandingPage/LandingPage")
))
const isSSR = typeof window === "undefined";

const IndexPage = () => (
  <>
    <Seo title="Home" />
    {
      !isSSR && (
        <React.Suspense fallback={<Loader />}>
          <Layout>
            <Homepage />
          </Layout>
        </React.Suspense>
      )
    }


  </>
)

export default IndexPage