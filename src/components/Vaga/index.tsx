import styled from 'styled-components'

const VagaWrapper = styled.div`
  padding: 20px;
  margin: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`

const VagaTitle = styled.h3`
  margin: 0;
  font-size: 1.5em;
  color: #333;
`

const VagaDescription = styled.p`
  margin: 10px 0;
  color: #666;
`

const Vaga = ({ title, description }) => (
  <VagaWrapper>
    <VagaTitle>{title}</VagaTitle>
    <VagaDescription>{description}</VagaDescription>
  </VagaWrapper>
)

export default Vaga
