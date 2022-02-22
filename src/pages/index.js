import React from "react"
import Layout from "../components/layout"
import Metadata from "../components/metadata"
import indexStyles from "./index.module.scss"

const Index = () => {
  return (
    <Layout>
      <Metadata title="Home" description="This is my home page" />
      <h2 className={indexStyles.title}>Hi I'm Juan a Senior Front End Developer based in Ecuador.<br/>Father of a Beautiful <span role="img" aria-label="emoji">👸🏼</span>. Bitcoin and <span role="img" aria-label="emoji">🪂</span> Fanatic.</h2>
      <h3 className={indexStyles.description}>I specialise in creating interactive experiences and functional interfaces using Typescript / Javascript, React, UI Libraries / Frameworks.</h3>
      <h3 className={indexStyles.titleClients}>Last Clients</h3>
      <h3 className={indexStyles.description}>
        <a href="https://crehana.com" target="_blank" rel="noreferrer">Crehana</a>,{' '}
        <a href="https://alation.com" target="_blank" rel="noreferrer">Alation</a>,{' '}
        <a href="https://bairesdev.com" target="_blank" rel="noreferrer">BairesDev</a>,{' '}
        <a href="https://isa-hamburg.com" target="_blank" rel="noreferrer">ISA GmbH</a>,{' '}
        <a href="https://webcreek.com" target="_blank" rel="noreferrer">WebCreek</a>,{' '}
        <a href="https://nabors.com" target="_blank" rel="noreferrer">Nabors Industries</a>,{' '}
        <a href="https://twfg.com" target="_blank" rel="noreferrer">The Woodlands Financial Group</a>,{' '}
        <a href="https://lr.org" target="_blank" rel="noreferrer">Lloyd's Register</a>.
      </h3>
    </Layout>
  )
}

export default Index
