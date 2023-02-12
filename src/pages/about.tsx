import Layout from "@/components/layouts/Layout";

import { Fragment, useState } from "react";
import AnimatedTextSolve from "../components/AnimatedText/AnimatedTextSolve"
// import AboutPopup from "./popup/AboutPopup";
import Image from "next/image";
import Link from "next/link";

const aboutData = {
  firstName: "Herm",
  lastName: "Tac",
  bithday: "Established 2020",
  address: "UT Dallas",
  phn: "+1 (844) HERMTAC",
  email: "hey@hermtac.com",
  serviceLists: [
    "Scout",
    "Advise",
    "Design",
    "Engineer",
    "Make",
    "Integrate",
  ],
  contractLists: [
    "NIH CIO-CS | Government Wide (pending)",
    "SBA 8a Small Business",
    "VA AVAIL (Accelerate VA Innovation & Learning)",
    "VA Office of Connected Care",
  ],
  skills: {
    programming: [
      { name: "Telecom", value: "95" },
      { name: "Ideation", value: "80" },
      { name: "Prototyping", value: "90" },
    ],
    language: [
      { name: "Telecom", value: "95" },
      { name: "Prototyping", value: "80" },
      { name: "Ideation", value: "100" },
      { name: "Engineering", value:"90"},
      { name: "Design", value:"85"},
      { name: "Science", value:"75"},
    ],
  },
  education: [
    { year: "2022", unv: "Suicide Reduction", degree: "Mission Daybreak Grand Challange Finalist" },
    { year: "2021", unv: "Digital Divide", degree: "Design & Produce Telehealth Equipment" },
    { year: "2020", unv: "COVID-19", degree: "3 x National Wins VA Challenge.gov " },
  ],
  working: [
    {
      year: "2018 - running",
      company: "Envato Elements",
      deg: "Exclusive Author",
    },
    { year: "2015 - 2018", company: "Avo Corporation", deg: "Content Manager" },
    { year: "2012 - 2015", company: "FC Barcelona", deg: "Football Player" },
  ],
  partnersLogos: [
    "/img/partners/VA.png",
    "/img/partners/UTD.png",
    "/img/partners/IronBow.png",
  ],
};

const About = () => {
  const [popup, setPopup] = useState(false);
  return (
    <Fragment>
        <Layout>
      {/* <AboutPopup
        open={popup}
        close={() => setPopup(false)}
        aboutData={aboutData}
      /> */}
      <div className="edrea_tm_section animated" id="about">
        <div className="section_inner">
          <div className="edrea_tm_about">
            <div className="left">
              <div className="image">
                <Image src="/img/thumbs/1-1.jpg" alt="" fill/>
                <div className="main" data-img-url="/img/logo/LogoTrans.png" />
              </div>
            </div>
            <div className="right">
              <div className="short">
                <h3 className="name">
                  <span className="hermtac-font">
                    <span className="hermtac-orange">Hermes</span>
                    <span className="hermtac-blue"> Tacticle</span>
                  </span>
                </h3>
                <h3 className="job">
                  <AnimatedTextSolve />
                </h3>
              </div>
              <div className="text">
                <p>
                HermTac is an Ideation, Design, Engineering, Prototype and Manufacturing company for impact.
                </p>
              </div>
              <div className="edrea_tm_button">
                <a href="#" onClick={() => setPopup(true)}>
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      </Layout>
    </Fragment>
  );
};
export default About;