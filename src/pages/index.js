import React from "react"
import { Helmet } from "react-helmet";

import Layout from '../components/layout';
import Nav from '../components/navigation';
import Banner from '../components/banner';
import MidBook from "../components/front-book"
import Author from "../components/author"

const IndexPage = () => (
  <>
    <Layout>
      <Helmet title="Home | R. Michael Richard"/>
      <Nav />
      <Banner /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
      <MidBook />
      <Author />
    </Layout>
  </>
)

export default IndexPage
