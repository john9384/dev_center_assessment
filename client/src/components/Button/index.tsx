import styled from "styled-components"

export const Button = (props: any) => {
  const { children } = props
  return <BtnComponent>{children}</BtnComponent>
}

const BtnComponent = styled.button``
