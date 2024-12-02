import styled from "styled-components"
import { Button } from "../../../components/Button"

const Header = () => {
  return (
    <Topbar>
      <Container>
        <Left>
          <Logo>Logo</Logo>
          <NavList>
            <NavItem>About</NavItem>
            <NavItem>How it works</NavItem>
          </NavList>
        </Left>
        <Right>
          <Button>Register</Button>
          <Button>Login</Button>
        </Right>
      </Container>
    </Topbar>
  )
}

const Topbar = styled.div`
  height: 6rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;
`

const Container = styled.div`
  max-width: 144rem;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
`
const Left = styled.div`
  display: flex;
`
const Right = styled.div`
  display: flex;
`
const Logo = styled.div``
const NavList = styled.ul``
const NavItem = styled.li``

export default Header
