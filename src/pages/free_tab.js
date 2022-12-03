import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"


import Layout from "../components/layout"
import Seo from "../components/seo"

const Products = () => (
  <Layout>
    <h1>Free Downloads </h1>

    <div>
        <h2>Beginner Bending Lick</h2>
        <div><a href="/free_download/beginner_bending/beginner-bending-lick.pdf" target="_blank">Beginner Bending Tab</a></div>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/OajZ5-80mmQ" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>

    <div>
        <h2>Eruption (Tapping only)</h2>
        <div><a href="/free_download/eruption/eruption.pdf" target="_blank">Eruption Tab</a></div>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/kux61haCV4Q" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>

    <div>
        <h2>Picking Exercise</h2>
        <div><a href="/free_download/picking_Exe/Picking-Exercise.pdf" target="_blank">Picking Exercise Tab</a></div>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/6nZtkIXmpHc" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>

    <div>
        <h2>Joe Satriani (Satch) Legato Exercise</h2>
        <div><a href="/free_download/satchlegato/Joe-Satriani-Legato-Exercise.pdf" target="_blank">Satch Legato Tab</a></div>
        <div><a href="/free_download/satchlegato/Satch-Legato-Backing-Track-100bpm.mp3" target="_blank">Backing Track 100bpm</a></div>
        <div><a href="/free_download/satchlegato/Satch-Legato-Backing-Track-144bpm.mp3" target="_blank">Backing Track 144bpm</a></div>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/a-eb-Zx0ytg" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>

    <div>
        <h2>Malmsteen Long Picking Lick</h2>
        <div><a href="/free_download/yjm_long_picking/yjm_long.pdf" target="_blank">Malmsteen Long Picking</a></div>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/lZ1-R969lBA" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>

    <div>
        <h2>Eruption (Tapping only)</h2>
        <div><a href="/free_download/yjmshort/yjm_short.pdf" target="_blank">Malmsteen Short Picking</a></div>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/LiHlnctfUU4" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>


    <Link to="/">Home</Link> <br />

  </Layout>
)

export default Products;
