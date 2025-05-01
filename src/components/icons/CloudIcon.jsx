import styled from 'styled-components';
import PropTypes from 'prop-types';

const IconWrapper = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'SF Compact', system-ui;
  font-weight: 350;
  font-size: ${props => props.size}px;
  line-height: 1.19;
  color: ${props => props.color};
  text-shadow: 0px 1.5px 3px rgba(255, 255, 255, 0.45);
`;

const iconObject = {pin: '􀎦',  sun: '􀆫', cloud: '􀇂', moon: '􀆹', map: '􀙊'}

const CloudIcon = ({ size = 14, icon = 'pin', color = 'rgb(0, 0, 0, 0.6)', className }) => {
  return (
    <IconWrapper size={size} color={color} className={className}>
      {iconObject[icon]}
    </IconWrapper>
  );
};

CloudIcon.propTypes = {
  size: PropTypes.number,
  color: PropTypes.string,
  className: PropTypes.string,
};

CloudIcon.defaultProps = {
  size: 14,
  color: '#FFFFFF',
  className: undefined,
};

export default CloudIcon; 