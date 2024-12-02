import styled from "styled-components"
import { FeatureCard } from "./FeatureCard"
import { featuresList } from "./featuresList"

export const BusinessFeatures = () => {
  return (
    <SectionBackground>
      <Container>
        <Title>
          <span>Retiree data processing</span>
          <GreenText>made easy!</GreenText>
        </Title>

        <FeaturesGrid>
          {featuresList.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              note={feature.note}
            />
          ))}
        </FeaturesGrid>
      </Container>
    </SectionBackground>
  )
}

const SectionBackground = styled.section``

const Container = styled.div`
  max-width: 120rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`

const Title = styled.h1`
  font-size: 4rem;
  font-weight: 700;
  margin-bottom: 1rem;
`
const GreenText = styled.span`
  color: #00d1b2;
`

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: 4rem;
`
