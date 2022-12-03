import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"


import Layout from "../components/layout"
import Seo from "../components/seo"

const Products = () => (
  <Layout>
            <h1>常規課程</h1>
            
            <h2>1．電結他課程(一星期一堂)</h2>
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSfCl6o9hyV6TEhE2ldyUErumM0AlRkyt14Rkooui419s741UQ/viewform" target="_blank">-報名按這 Click here for Online Application</a>
            <p>-對象: 任何對電結他有興趣的人士</p>
            <p>-RockSchool １至８級</p>
            <p>-各風格的伴奏（Rhythm Guitar，如Rock, Metal, Funk, Jazz風格）</p>
            <p>-獨奏(Solo Guitar，如Paul Gilbert, Steve Vai, Joe Satriani 等結他大師)</p>
            <p>-技巧訓練：雙手協調，音色和速度的控制 4. 琴頸上的音樂理論，琴頸反應和讀譜</p>
            <p>-片段：Rockschool Grade 8 (2012-2016) Meet Darth Ear (Recommend by Rockschool)</p>
            <p class="last">- 一對一, 每期四課, 一星期一堂 1 on 1, 4 Lessons as one Block, One Lesson per week</p>

            <h2>2. Fingerstyle 結他課程(一星期一堂)</h2>
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSfCl6o9hyV6TEhE2ldyUErumM0AlRkyt14Rkooui419s741UQ/viewform" target="_blank">-報名按這 Click here for Online Application</a>
            <p>對象 八歲以上人士教授級別 皇家音樂學院(ABRSM) 一至八級</p>
            <p>古結他正確坐姿，左右手正確姿勢</p>
            <p class="last">Fingerstyle Guitar (Tommy Emmanuel, SungHa Jung, Chet Atkins, Jerry Reed</p>
            

            <h1>學費 Tuition</h1>

            <table class="GeneratedTable"  class="last">
              <thead>
                <tr>
                  <th>上課形式</th>
                  <th>學費 Tuition (每四課為一期計算/4 Lessons per payment)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>每課45分鐘/45min per lesson</td>
                  <td>$1200 for 4 Lessons</td>
                </tr>
                <tr>
                  <td>每課60分鐘/60min per Lesson </td>
                  <td>$1400 for 4 Lessons</td>
                </tr>

              </tbody>
            </table>

            <p>Fee Effective from Jan 2021 恕不另行通知任何更改</p>
            <p>Weekly Lessons Pay-per-lesson not accecpted</p>

  </Layout>
)

export default Products;
