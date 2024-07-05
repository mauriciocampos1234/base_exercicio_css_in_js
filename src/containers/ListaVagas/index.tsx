import styled from 'styled-components'

const ListaVagasWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px 0;
`

const ListaVagas = ({ vagas }) => (
  <ListaVagasWrapper>
    {vagas.map((vaga, index) => (
      <Vaga key={index} title={vaga.title} description={vaga.description} />
    ))}
  </ListaVagasWrapper>
)

export default ListaVagas
