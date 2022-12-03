import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"


import Layout from "../components/layout"
import Seo from "../components/seo"

const Products = () => (
  <Layout>
           <h1>About Page </h1>
           <h2>Email</h2>
           <p>hongkongguitartutor@gmail.com</p>

           <Link to="/">Home</Link> <br />

  </Layout>
)

export default Products;
