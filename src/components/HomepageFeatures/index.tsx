import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

const FeatureList = [
  {
    title: "Open Discovery",
    Svg: require("@site/static/img/discovery.svg").default,
    description: (
      <>
        One of the largest barriers new entrants to the sharing economy face is
        needing to solve the two-sided market problem. A builder should be able
        to reach everyone in either side of the market without needing to invest
        large amounts of capital to change people's behaviors and habits.
      </>
    ),
  },
  {
    title: "Open Tooling and Infrastructure",
    Svg: require("@site/static/img/tools.svg").default,
    description: (
      <>
        Many sharing economy platforms need to invest heavily in infrastructure
        and technology to have a competitive product. A builder should have
        access to basic infrastructure needed to power their solutions.
      </>
    ),
  },
  {
    title: "Open Payments",
    Svg: require("@site/static/img/payments.svg").default,
    description: (
      <>
        Having a specific payment or pricing model inhibits innovation. Builders
        should be able to use various payment methods and compete with different
        pricing models.
      </>
    ),
  },
  {
    title: "Open Trust Mechanisms",
    Svg: require("@site/static/img/trust.svg").default,
    description: (
      <>
        The 5-star review rating system is the common trust mechanism used in
        platforms today and does not come without flaws. Builders should be able
        to experiment with different trust mechanisms and innovate beyond the
        primitive 5-star system.
      </>
    ),
  },
  {
    title: "Open Ownership",
    Svg: require("@site/static/img/ownership.svg").default,
    description: (
      <>
        Most platforms today are shareholder and VC-backed startups that grow as
        fast as possible and later extract profits from other stakeholders.
        Builders should be able to experiment with different ownership models
        without compromising any competitive advantage.
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.slice(0, 3).map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
        <div className="row">
          <div className={clsx("col col--2")}></div>
          {FeatureList.slice(3).map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
