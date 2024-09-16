import styled from '@emotion/styled';

const Badge = () => {
  return <BadgeContainer>5</BadgeContainer>;
};

export default Badge;

const BadgeContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 16px;
  height: 16px;
  background-color: #4271ff;
  border-radius: 50%;
  color: #fff;
  font-size: 10px;
  font-weight: 700;
`;
