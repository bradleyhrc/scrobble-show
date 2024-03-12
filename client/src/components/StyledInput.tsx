import styled from 'styled-components';

const StyledInput = styled.input`
  height: 18px;
  background-color: white;
  color: #444;
  padding: 12px 16px;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
  margin-bottom: 0px;
  outline: 2px;

  &:focus {
    outline: none;
    box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08), 0 0 10px rgba(82,121,111, 0.8);
  }
`;

export default StyledInput;
