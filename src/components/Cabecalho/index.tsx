import styled from 'styled-components'

const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: #f8f9fa;
  border-bottom: 1px solid #eaeaea;
`

const Logo = styled.div`
  font-size: 1.5em;
  font-weight: bold;
`

const Nav = styled.nav`
  ul {
    display: flex;
    list-style: none;

    li {
      margin-left: 20px;

      a {
        text-decoration: none;
        color: #333;

        &:hover {
          color: #007bff;
        }
      }
    }
  }
`

const Header = () => (
  <HeaderWrapper>
    <Logo>Meu Site</Logo>
    <Nav>
      <ul>
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">Sobre</a>
        </li>
        <li>
          <a href="#contact">Contato</a>
        </li>
      </ul>
    </Nav>
  </HeaderWrapper>
)

export default Header
