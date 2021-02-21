import React from 'react';
// import { useStaticQuery, graphql } from "gatsby"
import { GlobalStyle } from '../style'
import Navigation from "../components/Navbar"
import SEO from "../components/seo"

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
    // Component: Hero,
    // props: {
    //   name: "Samuele",
    //   title: "Full-Stack Developer",
    //   paragraph: "I build Bespoke webapps using React and Nodejs for Individuals and Businesses",
    //   ctaHash: "#experience"
    // }
  },
  {
    name:"Projects",
    path:"#projects",
    // Component: Projects,
  },
  {
    name:"Experience",
    path:"#experience",
    // Component: Experience,
    // props:{
    //   experience,
    // },
  },
  {
    name:"About",
    path:"#about",
    // Component: About,
    // props: {
    //   summary: "",
    //   skills:["javascript", "Typescript", "etc", "etc"],
    // }
  },
  {
    name:"Contact",
    path:"#contact",
    // Component: Contact,
  }
]

const additionalSections = [
  {
    name:"Blog",
    path:"/blog",
  },
]

const Mobile = ({}) => {


  return (
    <>
      <GlobalStyle/>
      <SEO title="Zanca.Dev - Samuel's Blog and Portfolio" />
      <Navigation
        scrollableSections={scrollableSections}
        additionalSections={additionalSections}
      />
    </>
  )
}

export default Mobile













