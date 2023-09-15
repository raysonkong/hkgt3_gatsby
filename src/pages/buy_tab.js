import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"


import Layout from "../components/layout"
import Seo from "../components/seo"

const Products = () => (
  <Layout>
  <h2>Buy Tabs!</h2>

    <table class="GeneratedTable"  class="last">
      <thead>
        <tr>
          <th>Song Arrangements with Tabs and Backings!!</th>
          <th>Tab Link</th>
        </tr>
      </thead>
      <tbody>

        {/*Product List starts here*/}

        <tr>
          <td><a href="/products/you_know_my_name" target="_blank">You Know My Name </a></td>
          <td><a href="https://sowl.co/s/UeTgR" target="_blank">Buy Now</a></td>
        </tr>


        <tr>
          <td><a href="/products/digimon" target="_blank">Butter-Fly Digimon Theme Song</a></td>
          <td><a href="https://sowl.co/s/hUBwZ" target="_blank">Buy Now</a></td>
        </tr>


        <tr>
          <td><a href="/products/at_the_place_where_you_call" target="_blank">At The Place Where You Call</a></td>
          <td><a href="https://sowl.co/s/bsX32R" target="_blank">Buy Now</a></td>
        </tr>


      </tbody>
    </table>



    <table class="GeneratedTable"  class="last">
      <thead>
        <tr>
          <th>Rockschool Sample Solo (Tabs only)</th>
          <th>Tab Link</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><a href="" target="_blank">Meet Darth Ear 4 Sample-Solo Package </a></td>
          <td><td><a href="https://sowl.co/s/bmTTk7" target="_blank">Buy Now</a></td></td>
        </tr>
        <tr>
          <td>LeadSheet 4 Sample-Solo Package</td>
          <td><td><a href="https://sowl.co/s/r7tov" target="_blank">Buy Now</a></td></td>
        </tr>
        <tr>
          <td>FreightShaker 4 Sample-Solo Package  </td>
          <td><td><a href="https://sowl.co/s/C6vyW" target="_blank">Buy Now</a></td></td>
        </tr>
        <tr>
          <td>Mind The Gaps 4 Sample-Solo Package  </td>
          <td><td><a href="https://sowl.co/s/gJZqD" target="_blank">Buy Now</a></td></td>
        </tr>
        <tr>
          <td>Nosso Samba 1 Sample Solo   </td>
          <td><td><a href="https://sowl.co/s/RXDp4" target="_blank">Buy Now</a></td></td>
        </tr>

        <tr>
          <td>Dark Matter 1 Sample Solo  </td>
          <td><a href="https://sowl.co/s/75iHW" target="_blank">Buy Now</a></td>
        </tr>
        <tr>
          <td>Buy All RockSchool Grade 8 Solos 18 Sample Solos </td>
          <td><td><a href="https://sowl.co/s/U2hjW" target="_blank">Buy Now</a></td></td>
        </tr>
      </tbody>
    </table>

  </Layout>
)

export default Products;
