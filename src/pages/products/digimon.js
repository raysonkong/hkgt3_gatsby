import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"


import Layout from "../../components/layout"
import Seo from "../../components/seo"
import '.././all_pages.css'

const Template = () => (
  <Layout>
    <Seo title="Product" />
    <h1>"Butter-Fly" Digimon Theme Song</h1>
    <div>
      <a href="https://transactions.sendowl.com/products/78926069/61257A07/view" target="_blank" rel="nofollow"><img src="https://transactions.sendowl.com/assets/external/v2/buy-now.png" /></a><script type="text/javascript" src="https://transactions.sendowl.com/assets/sendowl.js" ></script>
    </div>
    <div>
      <a href="https://transactions.sendowl.com/products/78926069/61257A07/add_to_cart" target="_blank" rel="nofollow"><img src="https://transactions.sendowl.com/assets/external/v2/add-to-cart.png" /></a><script type="text/javascript" src="https://transactions.sendowl.com/assets/sendowl.js" ></script>
    </div>
    <div>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/CZPJbTxfDLk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>




    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default Template;
