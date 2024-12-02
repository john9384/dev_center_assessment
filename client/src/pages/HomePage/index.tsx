import React from "react"
import { Welcome } from "./sections/Welcome"
import { BusinessFeatures } from "./sections/Features"
import { HowItWorks } from "./sections/HowItWorks"

const HomePage = () => {
  return (
    <React.Fragment>
      <Welcome />
      <BusinessFeatures />
      <HowItWorks />
    </React.Fragment>
  )
}

export default HomePage
