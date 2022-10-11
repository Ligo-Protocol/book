import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";

import styles from "./index.module.css";

function HomepageHeader() {
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">
          Ligo is an open sharing economy platform.
        </h1>
        <br />
        <p className="hero__subtitle">
          Our mission is to increase competition among builders in the sharing
          economy by creating an open platform that allows anyone to create
          diverse sharing solutions.
        </p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="https://docs.google.com/forms/d/e/1FAIpQLSe82qaf-NKFq6xkYEbHGnFqS8npNGuSzO3xbT_fejklEkFeAA/viewform?usp=sf_link"
          >
            Join the Waitlist
          </Link>
          <Link className="button button--secondary button--lg" to="/docs/">
            View Docs
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout description={siteConfig.tagline}>
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
