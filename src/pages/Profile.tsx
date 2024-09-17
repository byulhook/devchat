import { css } from '@emotion/react';

import { signOutWithGithub } from '@/api/firebaseAuth';
import defaultProfileImage from '@/assets/default-profile.jpeg';
import ProfileImage from '@/components/ProfileImage';
import useUserAuthentication from '@/hooks/useUserAuthentication';

const Profile = () => {
  const { user } = useUserAuthentication();
  return (
    <div>
      <button
        onClick={() => signOutWithGithub()}
        css={css`
          color: white;
          background-color: black;
          font-size: 50px;
          padding: 10px;
          border-radius: 5px;
          cursor: pointer;
        `}
      >
        Logout
      </button>
      <h1>Profile</h1>
      <p>{user?.email}</p>
      <p>{user?.displayName}</p>
      <ProfileImage src={user?.photoURL || defaultProfileImage} />
    </div>
  );
};

export default Profile;
