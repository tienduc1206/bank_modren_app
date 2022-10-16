import React from "react";
import {
  Billing,
  Business,
  Button,
  CardDeal,
  Client,
  CTA,
  Footer,
  GetStarted,
  Hero,
  Navbar,
  Stats,
  Testimonials,
} from "./components";
import styles from "./style";

const App = () => {
  return (
    <div className="bg-primary w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter} flex-col`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>

        <div className={`bg-primary ${styles.flexStart} max-w-[1170px]`}>
          <Hero />
        </div>

        <div className={`bg-primary ${styles.flexStart}`}>
          <div className={`${styles.boxWidth}`}>
            <Stats />
            <Billing />
            <Business />
            <CardDeal />
            <Testimonials />
            <Client />
            <CTA />
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
