import React from "react"
import Layout from "../components/layout"
import Metadata from "../components/metadata"
import indexStyles from "./index.module.scss"

const Index = () => {
  return (
    <Layout>
      <Metadata title="Home" description="This is my home page" />
      <h2 className={indexStyles.title}>Hello I'm Juan. A Senior Front End Developer based in Ecuador. Father of a Beautiful 👸🏼 and 🪂 Fanatic.</h2>
      <h3 className={indexStyles.description}>I specialise in creating interactive experiences and functional interfaces using Typescript/Javascript, ReactJS, UI Libraries/Frameworks.</h3>
      <h2 className={indexStyles.titleClients}>Last Clients</h2>
      <h3 className={indexStyles.description}>
        <a href="https://www.crehana.com" target="_blank">Crehana, </a>
        <a href="https://www.alation.com" target="_blank">Alation, </a>
        <a href="https://www.bairesdev.com" target="_blank">BairesDev, </a>
        <a href="https://www.isa-hamburg.com" target="_blank">ISA GmbH, </a>
        <a href="https://www.webcreek.com" target="_blank">WebCreek, </a>
        <a href="https://www.nabors.com" target="_blank">Nabors Industries, </a>
        <a href="https://twfg.com" target="_blank">The Woodlands Financial Group, </a>
        <a href="https://www.lr.org" target="_blank">Lloyd's Register.</a>
      </h3>
    </Layout>
  )
}

export default Index
