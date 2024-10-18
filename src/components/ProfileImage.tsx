import { css, SerializedStyles } from '@emotion/react';

import defaultProfileImage from '@/assets/default-profile.jpeg';
import useUserAuthentication from '@/hooks/useUserAuthentication';

interface ProfileImageProps {
  src?: string;
  alt?: string;
  customStyle?: SerializedStyles;
}

const ProfileImage = ({ src, alt, customStyle }: ProfileImageProps) => {
  const { user } = useUserAuthentication();
  return (
    <>
      <img
        src={user?.photoURL || src || defaultProfileImage}
        alt={alt}
        css={[imageStyle, customStyle]}
      />
    </>
  );
};

export default ProfileImage;

const imageStyle = css`
  width: 36px;
  height: 36px;
  border-radius: 50%;
`;
