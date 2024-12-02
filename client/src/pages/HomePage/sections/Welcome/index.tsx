import styled from "styled-components"
import WelcomeImage from "assets/welcome_img.png"

export const Welcome = () => {
  return (
    <Container>
      <Left>
        <Title>One Platform,</Title>
        <Title>Two Solutions</Title>

        <SubTitle>Simplifying Benefits for Retirees and Employers</SubTitle>
        <Note>
          Whether you're a retiree claiming your benefits or an employer
          submitting employee data for verification, we've got you covered with
          a secure and seamless experience.
        </Note>
        <CTARow>
          <Button>Claim Your Benefits</Button>
          <Button>Submit Employee Data</Button>
        </CTARow>
      </Left>
      <Right>
        <ImgDiv>
          <img src={WelcomeImage} alt="" />
        </ImgDiv>
      </Right>
    </Container>
  )
}

const Container = styled.div`
  max-width: 120rem;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: calc(100dvh - 60px);
`
const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`
const Right = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`
const Title = styled.h1`
  font-size: 4rem;
  font-weight: 700;
  margin-bottom: 1rem;
`
const SubTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
`
const Note = styled.p`
  font-size: 1.5rem;
  margin-bottom: 1rem;
`
const CTARow = styled.div`
  display: flex;
  gap: 1rem;
`
const Button = styled.button`
  padding: 1rem 2rem;
  font-size: 1.5rem;
  font-weight: 700;
  background-color: #0070f3;
  color: #fff;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  &:hover {
    background-color: #0062d3;
  }
`
const ImgDiv = styled.div`
  max-width: 50rem;
  img {
    width: 100%;
  }
`
