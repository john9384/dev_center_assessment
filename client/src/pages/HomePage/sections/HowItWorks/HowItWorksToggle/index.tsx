import styled from "styled-components"
import type { instructions } from "../instructionList"

interface HowItWorksToggleProps {
  selectedContent: keyof typeof instructions
  setSelectedContent: (content: keyof typeof instructions) => void
}

export const HowItWorksToggle = ({
  selectedContent,
  setSelectedContent,
}: HowItWorksToggleProps) => {
  return (
    <Container>
      <ToggleButton
        isActive={selectedContent === "RETIREE"}
        onClick={() => setSelectedContent("RETIREE")}
      >
        Retiree
      </ToggleButton>
      <ToggleButton
        isActive={selectedContent === "PFA"}
        onClick={() => setSelectedContent("PFA")}
      >
        Toggle
      </ToggleButton>
      <ToggleButton
        isActive={selectedContent === "MDA"}
        onClick={() => setSelectedContent("MDA")}
      >
        Toggle
      </ToggleButton>
    </Container>
  )
}

const Container = styled.div``
const ToggleButton = styled.button<{ isActive: boolean }>``
