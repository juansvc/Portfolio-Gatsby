import React from "react"
import Layout from "../components/layout"
import Metadata from "../components/metadata"
import aboutStyles from "./about.module.scss"

const About = () => {
  return (
    <Layout>
      <Metadata title="About" description="Get to know me" />
      <div className={aboutStyles.aboutGrid}>
        <h2> 6 + Years of Experience </h2>
        <h2> Main Skills </h2>
        <div className={aboutStyles.columns}>
          <ul>
            <li>
              Frontend Development, <br /> UX / UI design
            </li>
            <li>
              Master's Degree, <br /> Web Management and Engineering
            </li>
            <li>
              Responsive Design, <br /> Scrum Master
            </li>
            <li>
              Creativity, <br /> Think Different
            </li>
          </ul>
        </div>
        <h2>
          Tools<span> / Years </span>
        </h2>
        <div className={aboutStyles.tools}>

          <ul>
            <li>ReactJS / +5 </li>
            <li>JavaScript / +5 </li>
            <li>TypeScript / +5 </li>
            <li>Css / +5 </li>
            <li>Html / +5 </li>
          </ul>
          <ul>
            <li>Sass / +5 </li>
            <li>Less / ~5 </li>
            <li>Material UI / +5 </li>
            <li>Tailwind CSS / +4 </li>
            <li>React Native / +4 </li>
          </ul>
          <ul>
            <li>Storybook / +4 </li>
            <li>Jest / ~4 </li>
            <li>React Testing Library / +4 </li>
            <li>GraphQL / +3 </li>
            <li>Webpack / +5 </li>
          </ul>
          <ul>
            <li>Adobe XD / Figma </li>
            <li>Restful APIs / AWS</li> 
            <li>Scrum / Kanban</li>
          </ul>
        </div>
        <h2>Last Experience</h2>
        <div className="columns experience">

          <ul>
            <li>
              <b className="-purple"> Senior React Developer </b>
              <br /> @ Crehana <br /> 2021 - 2021
            </li>
            <li>
              <b className="-purple"> Senior React Developer </b>
              <br /> @ Alation <br /> 2021 - 2021
            </li>
            <li>
              <b className="-purple"> Senior Frontend Developer </b>
              <br /> @ ISA GmbH <br /> 2020 - 2021
            </li>
            <li>
              <b className="-purple">Senior Software Engineer </b>
              <br /> @ Webcreek <br /> 2019 - 2020
            </li>
            <li>
              <b className="-purple">Head of Projects &amp; Lead Front End Engineer</b> <br /> @
              Toners IT Solutions <br /> 2018 - 2019
            </li>
            <li>
              <b className="-purple">Freelancer</b> <br /> @
              Lexxus <br /> 2015 - 2018
            </li>
          </ul>
        </div>
        <h2>Languages</h2>
        <div className="columns languages">

          <ul>

            <li>

              <span className="-comment">Fluent C1</span>
              <br />
              <i className="-purple"> en - US </i> English
            </li>

            <li>
              <span className="-comment">Native C2</span><br />
              <i className="-purple">es - ES </i> Español
            </li>
            <li>
              <span className="-comment">Basic A2</span><br />
              <i className="-purple">fr - FR </i> French
            </li>
          </ul>
        </div>
        <h2> Also busy with </h2>
        <div className="columns busy">

          <ul>

            <li> Cryptocurrencies </li> <li> Excercice </li>
            <li> Travel </li> <li> Self - Learning </li>
          </ul>
        </div>
      </div>
    </Layout>
  )
}

export default About
