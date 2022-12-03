import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"


const IndexPage = () => (
  <Layout>
      <div >
      <h1 class='left'>HKGuitarTutor.com by Rayson Kong </h1>
       <a href="http://www.youtube.com/raysonkong" target="_blank">-Youtube 影片示範</a>
       <div><a href="https://docs.google.com/forms/d/e/1FAIpQLSfCl6o9hyV6TEhE2ldyUErumM0AlRkyt14Rkooui419s741UQ/viewform" target="_blank">-報名按這 Click here for Online Application</a>
       <p>-Email : hongkongguitartutor@gmail.com</p>

       </div> 
            <h1 class='left'>Rayson at Musicians Institute </h1>

        <div>
          <StaticImage
          src="../images/rayson_mi.jpg"
          width={300}
          quality={95}
          formats={["auto", "webp", "avif"]}
          alt="A Gatsby astronaut"
          style={{ marginBottom: `1.45rem` }}
          />
        </div>
        <h1 class='left'>RockSchool Praised and Shared Rayson's Work TWICE! </h1>

        <div>
          <StaticImage
          src="../images/rs_comment_1.jpg"
          width={800}
          quality={95}
          formats={["auto", "webp", "avif"]}
          alt="A Gatsby astronaut"
          style={{ marginBottom: `1.45rem` }}
          />
        </div>
        <h1 class='left'>RockSchool Praised and Shared Rayson's Work TWICE! </h1>

        <div>
          <StaticImage
          src="../images/rs_comment_2.jpg"
          width={800}
          quality={95}
          formats={["auto", "webp", "avif"]}
          alt="A Gatsby astronaut"
          style={{ marginBottom: `1.45rem` }}
          />
        </div>

   

        
        <p>流行電結他／Fingerstyle結他課程 - By Rayson Kong</p>
        
        <p>email: hongkongguitartutor@gmail.com</p>
        <br/>
        <p>-美國Musicians Institute Encore畢業生私人任教</p>
        <p>-Berklee Professional Certificate in Jazz Guitar</p>
        <p>-RockSchool Guitar Grade 8 (Distinction)</p>
        <p>-曾為美國UC Davis古典結他四重奏成員</p>
        <p>-私人教授電結他和古典結他</p>
      





      </div>
  </Layout>
)

export default IndexPage
