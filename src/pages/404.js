import React from "react"
import Layout from "../components/layout"
import Metadata from "../components/metadata"
import { Link } from "gatsby"

const NotFound = () => {
  return (
    <Layout>
      <Metadata title="404" description="Error page" />
      <h1>Want to give me feedback?</h1>
      <p>
        <Link to="/">Go home</Link>
      </p>
    </Layout>
  )
}

export default NotFound
