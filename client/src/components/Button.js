import React from 'react'
import styled from 'styled-components'

const ButtonContainer = styled.button`
  font-family: 'Source Sans Pro', 'Roboto', sans-serif;
  border: 0;
  outline: 0;
  cursor: pointer;
  padding: ${props => props.big ? '15px 45px' : '15px 25px'};
  font-size: ${props => props.big ? '26px' : '15px'};
  border-radius: 50px;
  background: ${props => props.theme.colors.primary};
  color: ${props => props.theme.text.light};
  min-width: 100px;
  transition: all 0.2s ease-in-out;
  font-weight: 600;

  &:disabled {
    cursor: not-allowed;
    background: rgba(0,0,0,0.1);
  }

  &:hover:not(:disabled) {
    background: ${props => props.theme.colors.primaryDark};
    transform: translateY(-5px);
  }
`

ButtonContainer.displayName = 'ButtonContainer'

const Button = ({ children, big, handleClick, disabled }) => {
  return (
    <ButtonContainer big={big} disabled={disabled} onClick={handleClick} data-test='ButtonContainer'>
      {children}
    </ButtonContainer>
  )
}

export default Button