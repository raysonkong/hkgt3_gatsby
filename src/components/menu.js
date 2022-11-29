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
    <li><Link to="/">報名</Link></li>
    <li><Link to="/products">Student Demo</Link></li>
    <li><Link to="/products">Free Tab</Link></li>
    <li><Link to="/about">Buy Tab</Link></li>
    <li><Link to="/about">Enquiry</Link></li>
  
  </ul>

  </div>
)

export default Menu;
