import React from "react"
import Layout from "../components/layout"
import Metadata from "../components/metadata"

const About = () => {
  return (
    <Layout>
      <Metadata title="About" description="Get to know me" />
      <h1>About Page</h1>
      <p>I'm Juan, a frontend developer, father and skidiving fanatic.</p>
    </Layout>
  )
}

export default About
