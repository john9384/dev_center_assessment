import styled from "styled-components"
interface FeatureCardProps {
  icon: string
  title: string
  note: string
}

export const FeatureCard = ({ icon, title, note }: FeatureCardProps) => {
  return (
    <Card>
      <Icon>{icon}</Icon>
      <Title>{title}</Title>
      <Note>{note}</Note>
    </Card>
  )
}

const Card = styled.div``
const Icon = styled.div``
const Title = styled.div``
const Note = styled.div``
