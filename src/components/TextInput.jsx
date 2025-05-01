import styled from 'styled-components';
import PropTypes from 'prop-types';
import CloudIcon from './icons/CloudIcon';

const StyledInputWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  gap: 4px;
  width: ${props => props.fullWidth ? '100%' : '196px'};
`;

const StyledInput = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 4px;
  padding-left: 6px;
  height: 28px;
  border-radius: 10px;
  border: 2.5px solid ${props => props.baseColor};
  width: 100%;
  background: 
    linear-gradient(180deg, 
      rgba(0, 0, 0, 0.25) 12.5%, 
      rgba(51, 60, 60, 0.2) 40.5%, 
      rgba(102, 120, 121, 0.25) 63%, 
      rgba(242, 251, 251, 0.3) 100%
    ),
    ${props => props.baseColor};
  background-blend-mode: plus-darker;
  box-shadow: 0px 3px 9px 0px rgba(0, 0, 0, 0.25);
  color: rgba(0, 0, 0, 0.55);
  font-family: 'Instrument Serif', serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.3;
  text-shadow: 0px 1.5px 3px rgba(255, 255, 255, 0.45);

  input {
    background: none;
    border: none;
    outline: none;
    width: 100%;
    color: inherit;
    font-family: inherit;
    font-size: inherit;
    font-weight: inherit;
    line-height: inherit;
    text-shadow: inherit;

    &::placeholder {
      color: rgba(0, 0, 0, 0.35);
    }
  }

  &:focus-within, &:hover {
    background: 
      linear-gradient(180deg,
        rgba(0, 0, 0, 0.2) 0%,
        rgba(0, 0, 0, 0.05) 34%,
        rgba(0, 0, 0, 0.05) 66%,
        rgba(0, 0, 0, 0.08) 100%
      ),
      ${props => props.baseColor};
    background-blend-mode: plus-darker;
    border: 2.5px solid ${props => props.baseColor};
    transform: translateY(-1px);
    span {
      color: ${props => {
        // Convert hex to RGB
        const hex = props.baseColor.replace('#', '');
        const r = parseInt(hex.substring(0, 2), 16);
        const g = parseInt(hex.substring(2, 4), 16);
        const b = parseInt(hex.substring(4, 6), 16);
        // Return a darker version with 55% opacity
        return `rgba(${Math.round(r * 0.7)}, ${Math.round(g * 0.7)}, ${Math.round(b * 0.7)}, 0.55)`;
      }};
    }
    &::before, &::after {
      background: 
        linear-gradient(180deg,
          rgba(255, 255, 255, 0.8) 0%,
          rgba(255, 255, 255, 0) 100%
        ) border-box;
    }
  }

  &::before {
    content: '';
    position: absolute;
    top: -2.5px;
    left: -2.5px;
    right: -2.5px;
    bottom: -2.5px;
 
    background: 
      linear-gradient(180deg,
        rgba(255, 255, 255, 1) 0%,
        rgba(255, 255, 255, 0) 100%
      ) border-box;
    -webkit-mask:
      linear-gradient(#fff 0 0) padding-box, 
      linear-gradient(#fff 0 0);
    -webkit-mask-composite: destination-out;
    mask-composite: exclude;
    pointer-events: none;
  }

  &::after {
    content: '';
    position: absolute;
    top: -2.5px;
    left: -2.5px;
    right: -2.5px;
    bottom: -2.5px;
    border-radius: 10px;
    border: 2.5px solid transparent;
    background: 
      linear-gradient(180deg,
        rgba(255, 255, 255, 1) 0%,
        rgba(255, 255, 255, 0) 100%
      ) border-box;
    -webkit-mask:
      linear-gradient(#fff 0 0) padding-box, 
      linear-gradient(#fff 0 0);
    -webkit-mask-composite: destination-out;
    mask-composite: exclude;
    pointer-events: none;
  }
`;

const TextInput = ({ 
  icon,
  showIcon = true,
  baseColor = '#CFA7A7',
  placeholder = 'Type here...',
  fullWidth = false,
  value,
  onChange,
  type = 'text',
  ...props 
}) => {
  return (
    <StyledInputWrapper fullWidth={fullWidth}>
      <StyledInput baseColor={baseColor}>
        {showIcon && <CloudIcon icon={icon} />}
        <input 
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          {...props}
        />
      </StyledInput>
    </StyledInputWrapper>
  );
};

TextInput.propTypes = {
  icon: PropTypes.string,
  showIcon: PropTypes.bool,
  baseColor: PropTypes.string,
  placeholder: PropTypes.string,
  fullWidth: PropTypes.bool,
  value: PropTypes.string,
  onChange: PropTypes.func,
  type: PropTypes.string,
};

TextInput.defaultProps = {
  icon: 'pin',
  showIcon: true,
  baseColor: '#CFA7A7',
  placeholder: 'Type here...',
  fullWidth: false,
  value: undefined,
  onChange: () => {},
  type: 'text',
};

export default TextInput; 