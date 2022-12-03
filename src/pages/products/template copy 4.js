import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"


import Layout from "../../components/layout"
import Seo from "../../components/seo"
import '.././all_pages.css'

const Template = () => (
  <Layout>
    <Seo title="Product" />
    <h1>You Know My Name</h1>





    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default Template;
