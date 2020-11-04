import React from "react"
import Layout from "../components/layout"
import Metadata from "../components/metadata"
import aboutStyles from "./about.module.scss"

const About = () => {
  return (
    <Layout>
      <Metadata title="About" description="Get to know me" />
      <div className={aboutStyles.aboutGrid}>
        <h2> 4 + Years of Experience </h2>
        <h2> Main Skills </h2>
        <div className={aboutStyles.columns}>
          <ul>
            <li>
              Frontend Development, <br /> UX / UI design
            </li>
            <li>
              JavaScript, CSS, HTML <br /> React, Vue, SASS
            </li>
            <li>
              Adobe XD, <br /> Illustrator
            </li>
            <li>
            Creativity, <br /> Think Different
            </li>
            <li>
            Responsive Design, <br /> Version Control
            </li>
            <li>
            Testing , <br /> Problem Solving
            </li>
          </ul>
        </div>
        <h2>
          Tools<span> / Years </span>
        </h2>
        <div className={aboutStyles.tools}>

          <ul>

            <li> JavaScript / +4 </li>
            <li>CSS / +4 </li>
            <li>HTML / +4 </li>
            <li>SASS / +4 </li>
            <li>React / +4 </li>
          </ul>
          <ul>

            <li> React Native / +2 </li>
            <li>Vue.js / +3 </li>
            <li>Webpack / +4 </li>
            <li>Node.js / +4 </li>
            <li>Angular / ~3 </li>
          </ul>
          <ul>

            <li> Ionic / ~2 </li>
            <li>PHP / +4 </li>
            <li>MongoDB / +4 </li>
            <li>Ruby on Rails / +4 </li>
            <li>WordPress / +4 </li>
          </ul>
          <ul>
          
          <li>Woocommerce / +4 </li>
            <li> Magento / +2 </li>
            <li>Adobe Illustrator/Adobe XD </li>
            <li>Restful APIS/AWS</li> <li> Scrum/Kanban </li>
          </ul>
        </div>
        <h2>Experience</h2>
        <div className="columns experience">

          <ul>

            <li>

              <b className="-purple"> Senior Frontend Developer </b>
              <br /> @ TeamQ <br /> 2020 - Now
            </li>
            <li>
              <b className="-purple">Senior Frontend Developer</b> <br /> @
              ISA GmbH <br /> 2020 - Now
            </li>
            <li>
              <b className="-purple">Senior Software Engineer </b>
              <br /> @ Webcreek <br /> 2019 - 2020
            </li>
            <li>
              <b className="-purple">Head of Projects &amp; Senior Full Stack Developer</b> <br /> @
              TFactura <br /> 2018 - 2019
            </li>
            <li>
              <b className="-purple">Frontend Developer</b> <br /> @ EdiLoja
              <br /> 2017 - 2018
            </li>
            <li>
              <b className="-purple">Freelancer</b> <br /> Senior Frontend Developer <br /> 2017 - Now
            </li>
          </ul>
        </div>
        <h2>Languages</h2>
        <div className="columns languages">

          <ul>

            <li>

              <span className="-comment">Fluent</span>
              <br />
              <i className="-purple">es - ES </i> Español,
              <br /> <i className="-purple"> en - US </i> English
            </li>
            <li>
              <span className="-comment">Basic </span><br />
              <i className="-purple">fr - FR </i> French
            </li>
          </ul>
        </div>
        <h2> Also busy with </h2>
        <div className="columns busy">

          <ul>

            <li> Best Daddy </li> <li> Excercice </li>
            <li> Video Games </li> <li> Self - Learning </li>
          </ul>
        </div>
      </div>
    </Layout>
  )
}

export default About
