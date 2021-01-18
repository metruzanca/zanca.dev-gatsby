import React, { useState, Fragment, useEffect } from "react"
import { useStaticQuery, graphql } from "gatsby"

import SEO from "../components/seo"
import SpaNav from "../components/Navbar"

import Hero from "../components/Hero"
import Projects from "../components/Projects"
import About from "../components/About"
import Contact from "../components/Contact"
import Experience from "../components/WorkExperience"
import Footer from "../components/Footer"

import { jump, isDevelopment } from '../utils'

const experience = [
  {
    title:'Frontend Developer',
    company:'DecHit',
    start:'11/2/20',
    // end:'end1',
    // summary:'summary1',
    bullets:[
      "Training 3 previously PHP developers in use of React, React-Router, Redux and Redux-Saga.",
      "Currently transitioning react mobile app from cordova to react native.",
      "Introduced  refactors  to  bring  the  codebase  up  to  modern  javascript(ES9)  and  react  standards  increasingboth readability and some cases performance.",
      " Introducing greater unit testing.",
    ],
  },
  {
    title:'Full-Stack Developer',
    company:'Mia-Platform',
    start:'07/8/20',
    end:'10/16/20',
    // summary:'summary2',
    bullets:[
      "Worked on a cross-functional team, BURTON, to develop and deploy API, web dashboards and native mobileapps for a B2B client Foorban Srl.",
      "Developed a microservice in Kotlin using the Ktor framework, Jackson and Retrofit2 following the BFF andSaga patterns.",
      "Developed two React dashboards using data from the previously mentioned kotlin API and Mia’s customCMS.",
      "Developed a PDF Microservice that allows the use of HTML as a familiar DSL for creating Shipping labels,receipts and custom size invoices.",
      "Prototyped a React app for live previewing of the PDFs using the Monaco-Editor.",
    ],
  },
  {
    title:'Software Engineer',
    company:'TXT e-Solutions',
    start:'09/15/19',
    end:'07/8/20',
    // summary:'summary3',
    bullets:[
      "Acted as a point of reference/mentor for developers learning:  Nodejs, React.js, Redux.js & Typescript.",
      "Lead the development of a React/Typescript web control panel for operating Flight Simulators via remotelyvia tablet for Leonardo SpA.",
      "Maintained c# two Xamarin Mobile apps used by ITT Inc in Automotive industry for collecting diagnosticbreak data transfered over wifi and low power bluetooth.",
      "Developed a c# app for collecting and processing flight data in collaboration with IATA Turbulence awarecampaign to reduce fuel costs and flight *bumpiness*.",
      "Developed a c# WPF Simulator for training the proper use of the ADRIAN system.",
    ],
  }
]

const scrollableSections = [
  {
    name:"Home",
    path:"#home",
    Component: Hero,
    props: {
      name: "Samuele",
      title: "Full-Stack Developer",
      paragraph: "I build Bespoke webapps using React and Nodejs for Individuals and Businesses",
      ctaHash: "#experience"
    }
  },
  // {
  //   name:"Projects",
  //   path:"#projects",
  //   Component: Projects,
  // },
  {
    name:"Experience",
    path:"#experience",
    Component: Experience,
    props:{
      experience,
    },
  },
  // {
  //   name:"About",
  //   path:"#about",
  //   Component: About,
  //   props: {
  //     summary: "",
  //     skills:["javascript", "Typescript", "etc", "etc"],
  //   }
  // },
  // {
  //   name:"Contact",
  //   path:"#contact",
  //   Component: Contact,
  // }
]

const additionalSections = [
  {
    name:"Blog",
    path:"/blog",
  },
]



const LandingPage = ({ location }) => {
  const data = useStaticQuery(graphql`
    query SpaQuery {
      site {
        siteMetadata {
          title
        }
      }
      allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
        nodes {
          excerpt
          fields {
            slug
            readingTime {
              text    # ‘1 min read'
              # minutes # '1'
              # time    # '60000'
              # words   # 200
            }
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  `)

  const [highlight, setHighlight] = useState(0)
  const [isObserving, setIsObserving] = useState(false)

  function scrollToSection(key, path){
    setHighlight(key)
    setIsObserving(false)
    jump(path, () => setIsObserving(true))
  }

  function handleInView(key, path){
    setHighlight(key)
    // TODO find a way to do this with gatsby's router
    window.history.pushState({}, window.title, path);
  }

  // TODO Change how this is passed to Hero
  scrollableSections[0].props.scroll = () => scrollToSection(1, "#experience")

  // I want this to run only once and after the very first render of this page.
  /* eslint-disable react-hooks/exhaustive-deps */
  useEffect(() => {
    if(location.hash){
      const key = scrollableSections.findIndex( route => route.path === location.hash)
      scrollToSection(key, location.hash)
    }
  }, [])
  /* eslint-enable */

  return (
    <Fragment>
      <SEO title="Zanca.Dev - Samuel's Blog and Portfolio" />
      <SpaNav
        scrollableSections={scrollableSections}
        additionalSections={additionalSections}
        setHighlight={setHighlight}
        highlight={highlight}
        scrollToSection={scrollToSection}
      />
      {scrollableSections
        .map(({Component, path, props}, key) => {
          const section = <Component
            key={key}
            handleInView={()=> handleInView(key, path)}
            scrollId={path.substr(1)}
            isObserving={isObserving}
            {...props}
          />
          if(isDevelopment && section.type.name !== ""){
            console.warn(`Path: ${path} is not Observed`)
          }
          return section
        })
      }
      <Footer scroll={() => scrollToSection(0, "#home")} posts={data.allMarkdownRemark.nodes}/>
    </Fragment>
  )
}

export default LandingPage
