import styled from 'styled-components';

const BasicButton = styled.button`
  background-color: white; 
  color: #2F3E46;
  padding: 12px 24px;
  height: 54px;
  border: none;
  border-radius: 14px;
  font-size: 21px;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.2s ease, transform 0.1s ease, box-shadow 0.2s ease;
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08), 0 0 0 rgba(47, 62, 70, 0.5);
  margin-top: 16px;

  &:hover {
    background-color: white; 
    transform: translateY(-1px);
    box-shadow: 0 4px 6px rgba(50, 50, 93, 0.15), 0 2px 4px rgba(0, 0, 0, 0.1), 0 0 8px rgba(47, 62, 70, 0.52);
  }

  &:active {
    transform: translateY(1px);
  }

  &:disabled {
    background-color: #A9A9A9;
    cursor: not-allowed;
  }
`;

export default BasicButton;
