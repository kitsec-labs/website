import Head from "@docusaurus/Head";
import Applications from "@site/src/components/Applications";
import Hero from "@site/src/components/Hero";
import Testimonials from "@site/src/components/Testimonials";
import Layout from "@theme/Layout";
import React from "react";

export default function Home(): JSX.Element {
  return (
    <Layout description=" Ethical hacking, made easy.">
      <Head>
        <title>Kitsec - Intuitive CLI for Ethical Hacking</title>
      </Head>
      <Hero />
      <Applications />
      <Testimonials />
    </Layout>
  );
}
