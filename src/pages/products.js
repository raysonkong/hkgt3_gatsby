import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const Products = () => (
  <Layout>
    <Seo title="products" />

    <h2>Payment Method</h2>
    <ul>
      <li>Visa/Mastercard/EPS/Cash</li>
    </ul>

    <div>
      <h1>Products</h1>
      <ul>
        <li><Link to="/products/ballon">Ballons</Link></li>
        <li><Link to="/products/abalone">Abalone</Link></li>
        <li><Link to="/products/fins">Fins</Link></li>
        <li><Link to="/products/nest">Nest</Link></li>  
        <li><Link to="/products/ginseng">Ginseng</Link></li>
        <li><Link to="/products/ginseng">Cucumber</Link></li>
        <li><Link to="/products/cordyceps">Cordyceps</Link></li>

      </ul>
    </div>


    <div>
    <h1>Special Services</h1>
      <ul>  
        <li><Link to="/products/basket">Baskets for Wedding/Special Occasion</Link></li>
        <li><Link to="/products/cucumber">Watered Sea Cucumber</Link></li>
      </ul>
    </div>

   

    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default Products;