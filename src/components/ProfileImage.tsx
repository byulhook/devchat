import styled from '@emotion/styled';

const ProfileImage = () => {
  return (
    <>
      <Image src="../public/1.jpeg" alt="profile" />
    </>
  );
};

export default ProfileImage;

const Image = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
`;
