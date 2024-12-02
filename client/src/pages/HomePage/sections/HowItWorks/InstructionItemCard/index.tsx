import styled from "styled-components"

interface InstructionItemCardProps {
  num: number
  title: string
  description: string
}
export const InstructionItemCard = ({
  num,
  title,
  description,
}: InstructionItemCardProps) => {
  return (
    <Card>
      <NumberSpan>{num}</NumberSpan>
      <ContentBox>
        <Title>{title}</Title>
        <Description>{description}</Description>
      </ContentBox>
    </Card>
  )
}

const Card = styled.div``
const NumberSpan = styled.span``
const ContentBox = styled.div``
const Title = styled.div``
const Description = styled.div``
