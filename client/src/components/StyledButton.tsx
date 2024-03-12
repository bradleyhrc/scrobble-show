import styled from 'styled-components';

const StyledButton = styled.button`
  background-color: #52796F; 
  color: #f9f9f9; 
  padding: 12px 24px;
  height: 54px;
  border: none;
  border-radius: 14px;
  font-size: 21px;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.2s ease, transform 0.1s ease, box-shadow 0.2s ease;
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08), 0 0 0 rgba(82,121,111, 0.5);
  outline: none;

  &:hover {
    background-color: #52796F; 
    transform: translateY(-1px);
    box-shadow: 0 4px 6px rgba(50, 50, 93, 0.15), 0 2px 4px rgba(0, 0, 0, 0.1), 0 0 8px rgba(82,121,111, 0.72);
  }

  &:active {
    transform: translateY(1px);
  }

  &:disabled {
    background-color: #A9A9A9;
    cursor: not-allowed;
  }
`;

export default StyledButton;
