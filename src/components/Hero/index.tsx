import styled from 'styled-components'

const HeroWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 400px;
  background: url('<img height="180em" src="https://github-readme-stats.vercel.app/api?username=USUARIO&show_icons=true&theme=dracula&include_all_commits=true&count_private=true"/>')
    no-repeat center center/cover;
  color: white;
  text-align: center;
`

const HeroTitle = styled.h1`
  font-size: 2.5em;
  margin-bottom: 10px;
`

const HeroSubtitle = styled.p`
  font-size: 1.2em;
`

const Hero = () => (
  <HeroWrapper>
    <HeroTitle>Bem-vindo ao Meu Site</HeroTitle>
    <HeroSubtitle>Aqui você encontra as melhores oportunidades</HeroSubtitle>
  </HeroWrapper>
)

export default Hero
