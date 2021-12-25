import styled from 'styled-components';
import { colorStyle } from '../../utils/style/ColorStyle';


export function Button({ type, text, fullWidth = false, center = false, onClick }) {
  return (
      <StyledButton
          type={ type }
          fullWidth={ fullWidth }
          center={ center }
          onClick={ onClick }
      >
        { text }
      </StyledButton>
  );
}

const StyledButton = styled.button`
  display: block;
  margin: 0;
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 0.25rem;
  color: white;
  font-size: 1.2rem;
  font-weight: 700;
  background: ${ colorStyle.primary.main };
  cursor: pointer;
  transition: all 300ms;
  ${ (props) =>
    props.fullWidth ? `
      width: 100%;`
        : `` }
  ${ (props) =>
    props.center
        ? `
        margin: 0 auto;`
        : `` }
  &:hover {
    background: ${ colorStyle.primary.primary300 };
  }
`;