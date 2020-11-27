import React from "react"
import { Helmet } from "react-helmet";

import Layout from '../components/layout';
import Nav from '../components/navigation';
import Banner from '../components/banner';
import MidBook from "../components/front-book"

const IndexPage = () => (
  <>
    <Layout>
      <Helmet title="Home | Richard Halliburton"/>
      <Nav />
      <Banner /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
      <MidBook />
    </Layout>
  </>
)

export default IndexPage
