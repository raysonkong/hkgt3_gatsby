import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"


const Menu = () => (
  <div style={{
    background: '#f4f4f4',
    paddingTop:'10px',
    marginTop: '0'
  }}>

  <ul style={{
    listStyle: 'none',
    display: 'flex',
    justifyContent: 'space-evenly'

  }}>
  
    <li><Link to="/">主頁</Link></li>
    <li><Link to="/apply">報名</Link></li>
    <li><Link to="/student_demo">Student Demo</Link></li>
    <li><Link to="/free_tab">Free Tab</Link></li>
    <li><Link to="/buy_tab">Buy Tab</Link></li>
    <li><Link to="/theory">Music Theory</Link></li>
    <li><Link to="/enquiry">Enquiry</Link></li>
    <li><a target="_blank" href="https://transactions.sendowl.com/cart?merchant_id=247390" rel="nofollow"><img src="https://transactions.sendowl.com/assets/external/v2/view-cart.png"/></a> <script type="text/javascript" src="https://transactions.sendowl.com/assets/sendowl.js" ></script></li>
  
  </ul>

  </div>
)

export default Menu;
