import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";

import styles from "./index.module.css";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">
          Ligo is an open sharing economy platform.
        </h1>
        <p className="hero__subtitle">
          Our mission is to increase competition among builders in the sharing
          economy by creating an open platform that allows anyone to create
          diverse sharing solutions.
        </p>
        <div className={styles.buttons}>
          <Link className="button button--secondary button--lg" to="/docs/">
            View Docs
          </Link>
          <Link
            className="button button--secondary button--lg"
            to="https://gitcoin.co/grants/7667/ligo-an-open-sharing-economy-platform"
          >
            <img width="19px" height="19px" src="/img/gc.svg" /> Support Us On
            Gitcoin
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
