import React from "react"
import Layout from "../components/layout"
import Metadata from "../components/metadata"
import indexStyles from "./index.module.scss"

const Index = () => {
  return (
    <Layout>
      <Metadata title="Home" description="This is my home page" />
      <h2 className={indexStyles.title}>Hello I'm Juan. A Front End Developer based in Ecuador. Father of a Beautifull 👸🏼 and 🪂 Fanatic.</h2>
      <h3 className={indexStyles.description}>I specialise in creating interactive experiences and functional interfaces using Javascript, React, Vue, SASS and Design Systems.</h3>
      <h2 className={indexStyles.titleClients}>Last Clients</h2>
      <h3 className={indexStyles.description}>TeamQ, ISA GmbH, Laderach, WebCreek, Nabors, The Woodlands Financial Group, Lloyd's Register</h3>
    </Layout>
  )
}

export default Index
