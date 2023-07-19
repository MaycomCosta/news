import styled from 'styled-components'

export const ButtonContainer = styled.div`
  width: 90vw;
  max-width: 1170px;
  display: flex;
  margin: 0 auto;
  margin-bottom: 1.5rem;
  justify-content: center;
  align-items: center;

  p {
    margin-bottom: 0;
    font-size: 1.2rem;
    font-weight: bold;
    color: #ffffff;
  }
  
  button {
    margin: 1rem;
    padding: 0.25rem 0.5rem;
    text-transform: capitalize;
    font-weight: bold;
    border-color: transparent;
    background: hsl(205, 78%, 60%);
    border-radius:  0.25rem;
    color: #fff;
    letter-spacing: 0.1rem;
    cursor: pointer;
  }

  button:disabled {
  cursor: not-allowed;
}
`
