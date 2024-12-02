import { useState } from "react"
import { instructions } from "./instructionList"
import styled from "styled-components"
import { HowItWorksToggle } from "./HowItWorksToggle"
import { InstructionItemCard } from "./InstructionItemCard"

export const HowItWorks = () => {
  const [selectedContent, setSelectedContent] =
    useState<keyof typeof instructions>("RETIREE")

  return (
    <Section>
      <ImgDiv>
        <img src="" alt="" />
      </ImgDiv>
      <Content>
        <Title>
          How it workss
          <span>made easy!</span>
        </Title>
        <HowItWorksToggle
          selectedContent={selectedContent}
          setSelectedContent={setSelectedContent}
        />
        <Instructions>
          {instructions[selectedContent].list.map((item, index) => (
            <InstructionItemCard
              key={index}
              num={index + 1}
              title={item.title}
              description={item.description}
            />
          ))}
        </Instructions>
      </Content>
      <ImgDiv>
        <img src="" alt="" />
      </ImgDiv>
    </Section>
  )
}

const Title = styled.h1`
  font-size: 4rem;
  font-weight: 700;
  margin-bottom: 1rem;
  span {
    color: #00d1b2;
  }
`

const Content = styled.div`
  max-width: 120rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`

const Section = styled.section`
  display: flex;
  justify-content: center;
`

const Instructions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-top: 4rem;
`

const ImgDiv = styled.div``
