import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"


import Layout from "../../components/layout"
import Seo from "../../components/seo"
import '.././all_pages.css'

const Template = () => (
  <Layout>
    <Seo title="At the Place Where You Call" />
    <h1>At The Place Where You Call (Tab and Backings)</h1>
    <div>
      <a href="https://transactions.sendowl.com/products/78940256/1382A805/purchase" rel="nofollow"><img src="https://transactions.sendowl.com/assets/external/v2/buy-now.png" /></a><script type="text/javascript" src="https://transactions.sendowl.com/assets/sendowl.js" ></script>
    </div>
    <div>
      <a href="https://transactions.sendowl.com/products/78940256/1382A805/add_to_cart" rel="nofollow"><img src="https://transactions.sendowl.com/assets/external/v2/add-to-cart.png" /></a><script type="text/javascript" src="https://transactions.sendowl.com/assets/sendowl.js" ></script>
    </div>
    <div>
    <iframe width="560" height="315" src="https://www.youtube.com/embed/vFXZb2jUQwY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>




    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default Template;
