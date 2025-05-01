import styled from 'styled-components';
import PropTypes from 'prop-types';
import CloudIcon from './icons/CloudIcon';

const StyledButton = styled.button`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  padding: 6px;
  height: 30px;
  border-radius: 10px;
  border: none;
  background: 
    linear-gradient(180deg, 
      rgba(0, 0, 0, 0.3) 15.5%, 
      rgba(51, 60, 60, 0.3) 40.5%, 
      rgba(102, 120, 121, 0.3) 63%, 
      rgba(242, 251, 251, 0.3) 100%
    ),
    ${props => props.baseColor};
  background-blend-mode: plus-darker;
  box-shadow: 0px 3px 9px 0px rgba(0, 0, 0, 0.25);
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &::before {
    content: '';
    position: absolute;
    top: -2.5px;
    left: -2.5px;
    right: -2.5px;
    bottom: -2.5px;
    border-radius: 13px;
    border: 2.5px solid transparent;
    background: 
      linear-gradient(180deg,
        rgba(255, 255, 255, 1) 0%,
        rgba(255, 255, 255, 0) 100%
      ) border-box,
      ${props => props.baseColor};
    -webkit-mask:
      linear-gradient(#fff 0 0) padding-box, 
      linear-gradient(#fff 0 0);
    -webkit-mask-composite: destination-out;
    mask-composite: exclude;
  }

  &::after {
    content: '';
    position: absolute;
    top: -2.5px;
    left: -2.5px;
    right: -2.5px;
    bottom: -2.5px;
    border-radius: 13px;
    border: 2.5px solid transparent;
    background: 
      linear-gradient(180deg,
        rgba(0, 0, 0, 0) 0%,
        rgba(0, 0, 0, 0.35) 50%,
        rgba(0, 0, 0, 0) 100%
      ) border-box,
      ${props => props.baseColor};
    -webkit-mask:
      linear-gradient(#fff 0 0) padding-box, 
      linear-gradient(#fff 0 0);
    -webkit-mask-composite: destination-out;
    mask-composite: exclude;
  }

  &:hover {
    background: 
      linear-gradient(180deg,
        rgba(0, 0, 0, 0.25) 0%,
        rgba(0, 0, 0, 0.12) 44%,
        rgba(0, 0, 0, 0.12) 56%,
        rgba(0, 0, 0, 0.25) 100%
      ),
      ${props => props.baseColor};
    background-blend-mode: plus-darker;
    transform: translateY(-1px);

    &::before {
      background: 
        linear-gradient(180deg,
          rgba(255, 255, 255, 1) 0%,
          rgba(255, 255, 255, 0) 100%
        ) border-box,
        ${props => props.baseColor};
    }

    &::after {
      background: 
        linear-gradient(180deg,
          rgba(255, 255, 255, 1) 0%,
          rgba(255, 255, 255, 0) 100%
        ) border-box,
        ${props => props.baseColor};
    }
  }
`;

const ButtonText = styled.span`
  color: rgba(0, 0, 0, 0.55);
  font-family: 'Instrument Serif', serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.3;
  text-shadow: 0px 1.5px 3px rgba(255, 255, 255, 0.45);
`;



const Button = ({ children, icon = 'pin', showIcon = true, baseColor = '#CBEFF1', onClick, ...props }) => {
  return (
    <StyledButton onClick={onClick} baseColor={baseColor} {...props}>
      {showIcon && <CloudIcon icon={icon} />}
      <ButtonText>{children}</ButtonText>
    </StyledButton>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  showIcon: PropTypes.bool,
  baseColor: PropTypes.string,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  showIcon: true,
  baseColor: '#CBEFF1',
  onClick: () => {},
};

export default Button; 