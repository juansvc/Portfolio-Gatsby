import React from "react"
import Layout from "../components/layout"
import Metadata from "../components/metadata"
import indexStyles from "./index.module.scss"
import {FaInstagram, FaGithub, FaLinkedin} from "react-icons/fa"



const Contact = () => {
  return (
    <Layout>
      <Metadata title="Contact" description="Get in touch with us" />
      <h1 className={indexStyles.title}>You can find me on<br/> <FaInstagram /> via <a href="https://www.instagram.com/juansvivanco/" target="_blank">@juansvivanco</a>
      <br/> <FaGithub /> via <a href="https://github.com/juansvc" target="_blank">@juansvc</a>
      <br/> <FaLinkedin /> via <a href="https://www.linkedin.com/in/juansvivanco/" target="_blank">@juansvivanco</a></h1>
    </Layout>
  )
}

export default Contact
