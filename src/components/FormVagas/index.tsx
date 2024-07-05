// Importar styled-components
import styled from 'styled-components'

// Criar componentes estilizados
const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 5px;
`

const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 4px;
`

const Button = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`

const Form = () => (
  <FormWrapper>
    <Input type="text" placeholder="Nome" />
    <Input type="email" placeholder="Email" />
    <Button type="submit">Enviar</Button>
  </FormWrapper>
)

export default Form
