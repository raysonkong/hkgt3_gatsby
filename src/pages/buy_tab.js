import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"


import Layout from "../components/layout"
import Seo from "../components/seo"

const Products = () => (
  <Layout>
  <h2>Buy Tabs</h2>
            <table class="GeneratedTable"  class="last">
              <thead>
                <tr>
                  <th>Song</th>
                  <th>Tab Link</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><a href="/products/you_know_my_name" target="_blank">You Know My Name </a></td>
                  <td>Add to Cart</td>
                </tr>
                <tr>
                  <td>Another Awesome song </td>
                  <td>Add to Cart </td>
                </tr>

              </tbody>
            </table>

  </Layout>
)

export default Products;
